(function () {
  var calculator = window.NrarfcnCalculator;
  var MAX_FREQUENCY_MHZ = 100000;
  var allBands = [];

  if (!calculator) {
    return;
  }

  function createElement(tagName, className, text) {
    var element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (typeof text !== "undefined" && text !== null) {
      element.textContent = text;
    }

    return element;
  }

  function getTableCell(table, row, column) {
    return row[table.columns.indexOf(column)];
  }

  function formatResult(value) {
    var rounded = Math.round(value * 1000000) / 1000000;
    return String(rounded);
  }

  function hasFrequencyRange(low, high) {
    return typeof low === "number" && typeof high === "number";
  }

  function getFrequencyRange(low, high) {
    if (!hasFrequencyRange(low, high)) {
      return null;
    }

    return {
      low: low,
      high: high
    };
  }

  function rangesAreSame(firstRange, secondRange) {
    return firstRange &&
      secondRange &&
      firstRange.low === secondRange.low &&
      firstRange.high === secondRange.high;
  }

  function getRangeText(range) {
    if (!range) {
      return "N/A";
    }

    return formatResult(range.low) + "-" + formatResult(range.high) + " MHz";
  }

  function getBandNumber(bandName) {
    return Number(String(bandName).replace("n", ""));
  }

  function getBandCandidate(table, row) {
    var ulLow = getTableCell(table, row, "f_ul_low");
    var ulHigh = getTableCell(table, row, "f_ul_high");
    var dlLow = getTableCell(table, row, "f_dl_low");
    var dlHigh = getTableCell(table, row, "f_dl_high");

    return {
      band: getTableCell(table, row, "band"),
      duplexMode: getTableCell(table, row, "duplex_mode"),
      frequencyRange: table.id === "bands_fr2" ? "FR2" : "FR1",
      uplink: getFrequencyRange(ulLow, ulHigh),
      downlink: getFrequencyRange(dlLow, dlHigh)
    };
  }

  function getAllBands() {
    var tables = [calculator.tableBandsFr1, calculator.tableBandsFr2];
    var bands = [];

    tables.forEach(function (table) {
      table.rows.forEach(function (row) {
        bands.push(getBandCandidate(table, row));
      });
    });

    bands.sort(function (first, second) {
      return getBandNumber(first.band) - getBandNumber(second.band);
    });

    return bands;
  }

  function rangeOverlaps(firstRange, secondRange) {
    return firstRange && secondRange && firstRange.low <= secondRange.high && secondRange.low <= firstRange.high;
  }

  function bandOverlapsRange(band, queryRange) {
    return rangeOverlaps(band.uplink, queryRange) || rangeOverlaps(band.downlink, queryRange);
  }

  function getClippedRange(range, clipRange) {
    if (!range) {
      return null;
    }

    if (!clipRange) {
      return range;
    }

    if (!rangeOverlaps(range, clipRange)) {
      return null;
    }

    return {
      low: Math.max(range.low, clipRange.low),
      high: Math.min(range.high, clipRange.high)
    };
  }

  function getBandBounds(bands, queryRange) {
    var lows = [];
    var highs = [];

    if (queryRange) {
      lows.push(queryRange.low);
      highs.push(queryRange.high);
    }

    bands.forEach(function (band) {
      [band.uplink, band.downlink].forEach(function (range) {
        if (range) {
          lows.push(range.low);
          highs.push(range.high);
        }
      });
    });

    if (lows.length === 0) {
      return {
        min: 0,
        max: 1
      };
    }

    return {
      min: Math.min.apply(Math, lows),
      max: Math.max.apply(Math, highs)
    };
  }

  function getRangePercent(value, bounds) {
    var span = bounds.max - bounds.min;

    if (span <= 0) {
      return 0;
    }

    return Math.max(0, Math.min(100, ((value - bounds.min) / span) * 100));
  }

  function createChip(text) {
    var slug = String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

    return createElement("span", "band-result-chip band-result-chip-" + slug, text);
  }

  function createMessageRow(label, title, body, chipText) {
    var row = createElement("div", "band-result-row band-result-row-empty");
    var main = createElement("div", "band-result-main");

    main.append(
      createElement("span", "band-result-label", label),
      createElement("strong", "", title),
      createElement("p", "", body)
    );

    row.append(main, createChip(chipText));

    return row;
  }

  function createBandSegment(kind, range, bounds, label) {
    var segment = createElement("span", "band-range-segment band-range-segment-" + kind);
    var segmentLabel = createElement("span", "band-range-segment-label", label);
    var left = getRangePercent(range.low, bounds);
    var right = getRangePercent(range.high, bounds);
    var naturalWidth = right - left;
    var minDisplayWidth = 2.2;
    var width = Math.max(naturalWidth, minDisplayWidth);
    var center = (left + right) / 2;

    if (naturalWidth < minDisplayWidth) {
      segment.className += " band-range-segment-compact";
      left = center - width / 2;
    }

    if (left < 0) {
      left = 0;
    } else if (left + width > 100) {
      left = 100 - width;
    }

    segment.style.left = left + "%";
    segment.style.width = width + "%";
    segment.title = label + " " + getRangeText(range);
    segment.appendChild(segmentLabel);

    return segment;
  }

  function createBandSegments(band, bounds, clipRange) {
    var fragment = document.createDocumentFragment();
    var uplink = getClippedRange(band.uplink, clipRange);
    var downlink = getClippedRange(band.downlink, clipRange);

    if (band.duplexMode === "TDD" && uplink && downlink && rangesAreSame(uplink, downlink)) {
      fragment.appendChild(createBandSegment("tdd", uplink, bounds, "UL/DL"));
      return fragment;
    }

    if (uplink) {
      fragment.appendChild(createBandSegment("ul", uplink, bounds, "UL"));
    }

    if (downlink) {
      fragment.appendChild(createBandSegment("dl", downlink, bounds, "DL"));
    }

    return fragment;
  }

  function getBandDetailText(band) {
    var uplinkText = getRangeText(band.uplink);
    var downlinkText = getRangeText(band.downlink);

    if (band.uplink && band.downlink && uplinkText === downlinkText) {
      return "UL/DL " + uplinkText;
    }

    return "UL " + uplinkText + " | DL " + downlinkText;
  }

  function getRangeSummarySpec(kind, label, range, bounds) {
    var text = label + " " + formatResult(range.low) + "-" + formatResult(range.high);
    var left = getRangePercent(range.low, bounds);
    var right = getRangePercent(range.high, bounds);
    var center = (left + right) / 2;
    var edgePadding = 3;
    var estimatedWidth = Math.max(13, Math.min(30, text.length * 1.15));
    var labelLeft = center - estimatedWidth / 2;
    var labelRight = center + estimatedWidth / 2;
    var anchor = center;
    var transform = "translateX(-50%)";

    if (labelLeft < edgePadding) {
      anchor = edgePadding;
      transform = "translateX(0)";
      labelLeft = edgePadding;
      labelRight = edgePadding + estimatedWidth;
    }

    if (labelRight > 100 - edgePadding) {
      anchor = 100 - edgePadding;
      transform = "translateX(-100%)";
      labelRight = 100 - edgePadding;
      labelLeft = 100 - edgePadding - estimatedWidth;
    }

    return {
      kind: kind,
      label: label,
      range: range,
      text: text,
      anchor: Math.max(0, Math.min(100, anchor)),
      transform: transform,
      labelLeft: Math.max(0, labelLeft),
      labelRight: Math.min(100, labelRight)
    };
  }

  function getRangeSummaryLanes(specs) {
    var laneEnds = [];

    return specs.map(function (spec) {
      var lane = 0;

      while (typeof laneEnds[lane] !== "undefined" && spec.labelLeft < laneEnds[lane] + 1.5) {
        lane += 1;
      }

      laneEnds[lane] = spec.labelRight;

      return lane;
    });
  }

  function createRangeSummaryItem(spec, lane) {
    var item = createElement(
      "span",
      "band-range-summary-item band-range-summary-" + spec.kind,
      spec.text
    );

    item.style.left = spec.anchor + "%";
    item.style.top = lane * 22 + "px";
    item.style.transform = spec.transform;
    item.title = spec.label + " " + getRangeText(spec.range);

    return item;
  }

  function createBandRangeSummary(band, bounds, clipRange) {
    var summary = createElement("div", "band-range-summary");
    var specs = [];
    var lanes;
    var laneCount;
    var uplink = getClippedRange(band.uplink, clipRange);
    var downlink = getClippedRange(band.downlink, clipRange);

    if (band.duplexMode === "TDD" && uplink && downlink && rangesAreSame(uplink, downlink)) {
      specs.push(getRangeSummarySpec("tdd", "UL/DL", uplink, bounds));
    } else {
      if (uplink) {
        specs.push(getRangeSummarySpec("ul", "UL", uplink, bounds));
      }

      if (downlink) {
        specs.push(getRangeSummarySpec("dl", "DL", downlink, bounds));
      }
    }

    if (specs.length === 0) {
      return summary;
    }

    specs.sort(function (first, second) {
      return first.labelLeft - second.labelLeft;
    });

    lanes = getRangeSummaryLanes(specs);
    laneCount = Math.max.apply(Math, lanes) + 1;
    summary.style.height = laneCount * 22 + "px";

    specs.forEach(function (spec, index) {
      summary.appendChild(createRangeSummaryItem(spec, lanes[index]));
    });

    return summary;
  }

  function createBandVisualAxis(bounds) {
    var axis = createElement("div", "band-range-axis");

    axis.append(
      createElement("span", "", formatResult(bounds.min) + " MHz"),
      createElement("span", "", formatResult(bounds.max) + " MHz")
    );

    return axis;
  }

  function createBandLegend() {
    var legend = createElement("div", "band-range-legend");

    legend.append(
      createElement("span", "band-range-legend-item band-range-legend-ul", "UL"),
      createElement("span", "band-range-legend-item band-range-legend-dl", "DL"),
      createElement("span", "band-range-legend-item band-range-legend-tdd", "TDD")
    );

    return legend;
  }

  function createBandVisualRow(band, bounds, clipRange) {
    var row = createElement("div", "band-visual-row");
    var bandHeader = createElement("div", "band-visual-header");
    var bandName = createElement("strong", "band-visual-name", band.band);
    var chartGroup = createElement("div", "band-visual-chart");
    var chart = createElement("div", "band-range-track");
    var chips = createElement("div", "band-result-chips");

    chart.appendChild(createBandSegments(band, bounds, clipRange));
    chart.setAttribute("aria-label", band.band + ": " + getBandDetailText(band));

    chartGroup.append(chart, createBandRangeSummary(band, bounds, clipRange));
    bandHeader.append(bandName);
    chips.append(createChip(band.duplexMode), createChip(band.frequencyRange));
    row.append(bandHeader, chartGroup, chips);

    return row;
  }

  function createRangeVisual(bands, queryRange, bounds) {
    var visual = createElement("div", "band-range-visual");

    visual.appendChild(createBandVisualAxis(bounds));

    bands.forEach(function (band) {
      visual.appendChild(createBandVisualRow(band, bounds, queryRange));
    });

    visual.appendChild(createBandLegend());

    return visual;
  }

  function createOverlaySegment(band, kind, range, bounds, laneIndex) {
    var segment = createBandSegment(kind, range, bounds, band.band + " " + (kind === "tdd" ? "UL/DL" : kind.toUpperCase()));

    segment.className += " band-overlay-segment";
    segment.style.top = 4 + laneIndex * 20 + "px";
    segment.style.bottom = "auto";
    segment.style.height = "16px";

    return segment;
  }

  function appendOverlaySegments(track, band, bounds, laneIndex) {
    if (band.duplexMode === "TDD" && rangesAreSame(band.uplink, band.downlink)) {
      track.appendChild(createOverlaySegment(band, "tdd", band.uplink, bounds, laneIndex));
      return;
    }

    if (band.uplink) {
      track.appendChild(createOverlaySegment(band, "ul", band.uplink, bounds, laneIndex));
    }

    if (band.downlink) {
      track.appendChild(createOverlaySegment(band, "dl", band.downlink, bounds, laneIndex));
    }
  }

  function createOverlayVisual(bands, bounds) {
    var visual = createElement("div", "band-range-visual band-overlay-visual");
    var row = createElement("div", "band-visual-row band-overlay-row");
    var bandHeader = createElement("div", "band-visual-header");
    var bandName = createElement("strong", "band-visual-name", bands.length + " bands");
    var chartGroup = createElement("div", "band-visual-chart");
    var track = createElement("div", "band-range-track band-overlay-track");
    var chips = createElement("div", "band-result-chips");

    track.style.height = Math.max(34, bands.length * 20 + 8) + "px";

    bands.forEach(function (band, index) {
      appendOverlaySegments(track, band, bounds, index);
    });

    track.setAttribute("aria-label", "Selected bands: " + bands.map(function (band) {
      return band.band;
    }).join(", "));

    bandHeader.append(bandName);
    chartGroup.appendChild(track);
    chips.append(createChip("Same axis"), createChip("3GPP Rel 19"));
    row.append(bandHeader, chartGroup, chips);
    visual.append(createBandVisualAxis(bounds), row, createBandLegend());

    return visual;
  }

  function renderRows(output, rows) {
    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }

    rows.forEach(function (row) {
      output.appendChild(row);
    });
  }

  function validateRange(lowRaw, highRaw) {
    var low = Number(lowRaw);
    var high = Number(highRaw);

    if (lowRaw.trim() === "" || highRaw.trim() === "") {
      return {
        status: "idle"
      };
    }

    if (!Number.isFinite(low) || !Number.isFinite(high)) {
      throw new Error("Use numeric frequency values.");
    }

    if (low < 0 || high < 0 || low > MAX_FREQUENCY_MHZ || high > MAX_FREQUENCY_MHZ) {
      throw new Error("Frequencies must be between 0 and 100,000 MHz.");
    }

    if (low >= high) {
      throw new Error("Right frequency must be greater than left frequency.");
    }

    return {
      status: "ready",
      range: {
        low: low,
        high: high
      }
    };
  }

  function limitFrequencyInputDigits(input) {
    var value = input.value;
    var match = value.match(/^(\d{0,6})(.*)$/);

    if (match && match[2] !== "") {
      input.value = match[1];
    }
  }

  function setActiveMode(mode, elements) {
    var isRangeMode = mode === "range";

    elements.rangeTab.classList.toggle("is-active", isRangeMode);
    elements.viewerTab.classList.toggle("is-active", !isRangeMode);
    elements.rangeTab.setAttribute("aria-selected", String(isRangeMode));
    elements.viewerTab.setAttribute("aria-selected", String(!isRangeMode));
    elements.rangePanel.hidden = !isRangeMode;
    elements.viewerPanel.hidden = isRangeMode;
    elements.state.textContent = isRangeMode ? "Range mode" : "Band viewer";
  }

  function populateBandPicker(picker, bands) {
    bands.forEach(function (band) {
      var label = createElement("label", "band-picker-option");
      var checkbox = createElement("input");
      var name = createElement("span", "band-picker-name", band.band);
      var meta = createElement("span", "band-picker-meta", band.duplexMode + " | " + band.frequencyRange);

      checkbox.type = "checkbox";
      checkbox.value = band.band;
      label.dataset.band = band.band.toLowerCase();
      label.dataset.meta = (band.duplexMode + " " + band.frequencyRange).toLowerCase();
      label.append(checkbox, name, meta);
      picker.appendChild(label);
    });
  }

  function getSelectedBands(picker) {
    var selectedNames = Array.prototype.slice.call(picker.querySelectorAll("input:checked")).map(function (input) {
      return input.value;
    });

    return allBands.filter(function (band) {
      return selectedNames.indexOf(band.band) !== -1;
    });
  }

  function initBandVisualizer() {
    var state = document.getElementById("band-visualizer-state");
    var copy = document.getElementById("band-visualizer-copy");
    var output = document.getElementById("band-visualizer-output");
    var rangeTab = document.getElementById("range-mode-tab");
    var viewerTab = document.getElementById("viewer-mode-tab");
    var rangePanel = document.getElementById("range-mode-panel");
    var viewerPanel = document.getElementById("viewer-mode-panel");
    var lowInput = document.getElementById("range-low-input");
    var highInput = document.getElementById("range-high-input");
    var clearRangeButton = document.getElementById("clear-band-range");
    var picker = document.getElementById("band-picker");
    var searchInput = document.getElementById("band-search-input");
    var clearSelectionButton = document.getElementById("clear-band-selection");
    var elements = {
      state: state,
      rangeTab: rangeTab,
      viewerTab: viewerTab,
      rangePanel: rangePanel,
      viewerPanel: viewerPanel
    };

    if (!state || !copy || !output || !rangeTab || !viewerTab || !rangePanel || !viewerPanel || !lowInput || !highInput || !picker) {
      return;
    }

    allBands = getAllBands();
    populateBandPicker(picker, allBands);

    function renderRangeIdle() {
      copy.textContent = "Enter a frequency range to see the NR operating bands that overlap it.";
      renderRows(output, [
        createMessageRow(
          "Ready",
          "No range entered yet",
          "The matching bands will appear here after a valid input.",
          "3GPP Rel 19"
        )
      ]);
    }

    function renderRangeError(message) {
      copy.textContent = "Band lookup needs a valid left and right frequency.";
      renderRows(output, [
        createMessageRow("Paused", message, "Fix the range values to update the plot.", "No lookup")
      ]);
    }

    function renderRange() {
      var validation;
      var matches;
      var bounds;

      try {
        validation = validateRange(lowInput.value, highInput.value);
      } catch (error) {
        renderRangeError(error.message);
        return;
      }

      if (validation.status === "idle") {
        renderRangeIdle();
        return;
      }

      matches = allBands.filter(function (band) {
        return bandOverlapsRange(band, validation.range);
      });

      if (matches.length === 0) {
        copy.textContent = "No defined 3GPP NR operating band overlaps " + getRangeText(validation.range) + ".";
        renderRows(output, [
          createMessageRow(
            "No band match",
            "No overlapping NR band",
            "Try a different range inside the FR1 or FR2 operating-band spans.",
            "Outside bands"
          )
        ]);
        return;
      }

      bounds = {
        min: validation.range.low,
        max: validation.range.high
      };
      copy.textContent = "Bands overlapping " + getRangeText(validation.range) + ": " + matches.map(function (band) {
        return band.band;
      }).join(", ") + ".";
      renderRows(output, [
        createRangeVisual(matches, validation.range, bounds)
      ]);
    }

    function renderViewerIdle() {
      copy.textContent = "Select one or more bands to plot them together on a single frequency axis.";
      renderRows(output, [
        createMessageRow(
          "Ready",
          "No bands selected yet",
          "Choose bands from the list to build the combined view.",
          "Band viewer"
        )
      ]);
    }

    function renderViewer() {
      var selectedBands = getSelectedBands(picker);
      var bounds;

      if (selectedBands.length === 0) {
        renderViewerIdle();
        return;
      }

      bounds = getBandBounds(selectedBands);
      copy.textContent = "Selected bands on one axis: " + selectedBands.map(function (band) {
        return band.band;
      }).join(", ") + ".";
      renderRows(output, [
        createOverlayVisual(selectedBands, bounds)
      ]);
    }

    function updateMode(mode) {
      setActiveMode(mode, elements);

      if (mode === "range") {
        renderRange();
      } else {
        renderViewer();
      }
    }

    lowInput.addEventListener("input", function () {
      limitFrequencyInputDigits(lowInput);
      renderRange();
    });

    highInput.addEventListener("input", function () {
      limitFrequencyInputDigits(highInput);
      renderRange();
    });

    clearRangeButton.addEventListener("click", function () {
      lowInput.value = "";
      highInput.value = "";
      renderRangeIdle();
      lowInput.focus();
    });

    rangeTab.addEventListener("click", function () {
      updateMode("range");
    });

    viewerTab.addEventListener("click", function () {
      updateMode("viewer");
    });

    picker.addEventListener("change", renderViewer);

    searchInput.addEventListener("input", function () {
      var query = searchInput.value.trim().toLowerCase();
      var options = picker.querySelectorAll(".band-picker-option");

      options.forEach(function (option) {
        option.hidden = query !== "" && option.dataset.band.indexOf(query) === -1 && option.dataset.meta.indexOf(query) === -1;
      });
    });

    clearSelectionButton.addEventListener("click", function () {
      picker.querySelectorAll("input:checked").forEach(function (input) {
        input.checked = false;
      });
      renderViewerIdle();
      searchInput.focus();
    });

    renderRangeIdle();
  }

  initBandVisualizer();
}());
