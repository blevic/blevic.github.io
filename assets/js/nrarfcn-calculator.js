(function () {
  var MAX_NR_ARFCN = 3279165;

  var table54211 = {
    id: "freq_nrarfcn",
    release3gpp: 19,
    ts: "3GPP TS 38.104 V19.4.0",
    name: "Table 5.4.2.1-1: NR-ARFCN parameters for the global frequency raster",
    columns: ["f_min", "f_max", "df_global", "f_ref_offs", "n_ref_offs", "n_ref_min", "n_ref_max"],
    rows: [
      { fMin: 0, fMax: 3000, deltaFGlobal: 5, fRefOffs: 0, nRefOffs: 0, nRefMin: 0, nRefMax: 599999 },
      { fMin: 3000, fMax: 24250, deltaFGlobal: 15, fRefOffs: 3000, nRefOffs: 600000, nRefMin: 600000, nRefMax: 2016666 },
      { fMin: 24250, fMax: 100000, deltaFGlobal: 60, fRefOffs: 24250.08, nRefOffs: 2016667, nRefMin: 2016667, nRefMax: 3279165 }
    ]
  };

  var tableBandsFr1 = {
    id: "bands_fr1",
    release3gpp: 19,
    ts: "3GPP TS 38.104 V19.4.0",
    name: "Table 5.2-1: NR operating bands in FR1",
    columns: ["band", "f_ul_low", "f_ul_high", "f_dl_low", "f_dl_high", "duplex_mode"],
    rows: [
      ["n1", 1920, 1980, 2110, 2170, "FDD"],
      ["n2", 1850, 1910, 1930, 1990, "FDD"],
      ["n3", 1710, 1785, 1805, 1880, "FDD"],
      ["n5", 824, 849, 869, 894, "FDD"],
      ["n7", 2500, 2570, 2620, 2690, "FDD"],
      ["n8", 880, 915, 925, 960, "FDD"],
      ["n12", 699, 716, 729, 746, "FDD"],
      ["n13", 777, 787, 746, 756, "FDD"],
      ["n14", 788, 798, 758, 768, "FDD"],
      ["n18", 815, 830, 860, 875, "FDD"],
      ["n20", 832, 862, 791, 821, "FDD"],
      ["n24", 1626.5, 1660.5, 1525, 1559, "FDD"],
      ["n25", 1850, 1915, 1930, 1995, "FDD"],
      ["n26", 814, 849, 859, 894, "FDD"],
      ["n28", 703, 748, 758, 803, "FDD"],
      ["n29", "N/A", "N/A", 717, 728, "SDL"],
      ["n30", 2305, 2315, 2350, 2360, "FDD"],
      ["n31", 452.5, 457.5, 462.5, 467.5, "FDD"],
      ["n34", 2010, 2025, 2010, 2025, "TDD"],
      ["n38", 2570, 2620, 2570, 2620, "TDD"],
      ["n39", 1880, 1920, 1880, 1920, "TDD"],
      ["n40", 2300, 2400, 2300, 2400, "TDD"],
      ["n41", 2496, 2690, 2496, 2690, "TDD"],
      ["n46", 5150, 5925, 5150, 5925, "TDD"],
      ["n48", 3550, 3700, 3550, 3700, "TDD"],
      ["n50", 1432, 1517, 1432, 1517, "TDD"],
      ["n51", 1427, 1432, 1427, 1432, "TDD"],
      ["n53", 2483.5, 2495, 2483.5, 2495, "TDD"],
      ["n54", 1670, 1675, 1670, 1675, "TDD"],
      ["n65", 1920, 2010, 2110, 2200, "FDD"],
      ["n66", 1710, 1780, 2110, 2200, "FDD"],
      ["n67", "N/A", "N/A", 738, 758, "SDL"],
      ["n68", 698, 728, 753, 783, "FDD"],
      ["n70", 1695, 1710, 1995, 2020, "FDD"],
      ["n71", 663, 698, 617, 652, "FDD"],
      ["n72", 451, 456, 461, 466, "FDD"],
      ["n74", 1427, 1470, 1475, 1518, "FDD"],
      ["n75", "N/A", "N/A", 1432, 1517, "SDL"],
      ["n76", "N/A", "N/A", 1427, 1432, "SDL"],
      ["n77", 3300, 4200, 3300, 4200, "TDD"],
      ["n78", 3300, 3800, 3300, 3800, "TDD"],
      ["n79", 4400, 5000, 4400, 5000, "TDD"],
      ["n80", 1710, 1785, "N/A", "N/A", "SUL"],
      ["n81", 880, 915, "N/A", "N/A", "SUL"],
      ["n82", 832, 862, "N/A", "N/A", "SUL"],
      ["n83", 703, 748, "N/A", "N/A", "SUL"],
      ["n84", 1920, 1980, "N/A", "N/A", "SUL"],
      ["n85", 698, 716, 728, 746, "FDD"],
      ["n86", 1710, 1780, "N/A", "N/A", "SUL"],
      ["n87", 410, 415, 420, 425, "FDD"],
      ["n88", 412, 417, 422, 427, "FDD"],
      ["n89", 824, 849, "N/A", "N/A", "SUL"],
      ["n90", 2496, 2690, 2496, 2690, "TDD"],
      ["n91", 832, 862, 1427, 1432, "FDD"],
      ["n92", 832, 862, 1432, 1517, "FDD"],
      ["n93", 880, 915, 1427, 1432, "FDD"],
      ["n94", 880, 915, 1432, 1517, "FDD"],
      ["n95", 2010, 2025, "N/A", "N/A", "SUL"],
      ["n96", 5925, 7125, 5925, 7125, "TDD"],
      ["n97", 2300, 2400, "N/A", "N/A", "SUL"],
      ["n98", 1880, 1920, "N/A", "N/A", "SUL"],
      ["n99", 1626.5, 1660.5, "N/A", "N/A", "SUL"],
      ["n100", 874.4, 880, 919.4, 925, "FDD"],
      ["n101", 1900, 1910, 1900, 1910, "TDD"],
      ["n102", 5925, 6425, 5925, 6425, "TDD"],
      ["n104", 6425, 7125, 6425, 7125, "TDD"],
      ["n105", 663, 703, 612, 652, "FDD"],
      ["n106", 896, 901, 935, 940, "FDD"],
      ["n109", 703, 733, 1432, 1517, "FDD"],
      ["n110", 1390, 1395, 1432, 1435, "FDD"]
    ]
  };

  var tableBandsFr2 = {
    id: "bands_fr2",
    release3gpp: 19,
    ts: "3GPP TS 38.104 V19.4.0",
    name: "Table 5.2-2: NR operating bands in FR2",
    columns: ["band", "f_ul_low", "f_ul_high", "f_dl_low", "f_dl_high", "duplex_mode"],
    rows: [
      ["n257", 26500, 29500, 26500, 29500, "TDD"],
      ["n258", 24250, 27500, 24250, 27500, "TDD"],
      ["n259", 39500, 43500, 39500, 43500, "TDD"],
      ["n260", 37000, 40000, 37000, 40000, "TDD"],
      ["n261", 27500, 28350, 27500, 28350, "TDD"],
      ["n262", 47200, 48200, 47200, 48200, "TDD"],
      ["n263", 57000, 71000, 57000, 71000, "TDD"]
    ]
  };

  function getTableCell(table, row, column) {
    return row[table.columns.indexOf(column)];
  }

  function hasFrequencyRange(low, high) {
    return typeof low === "number" && typeof high === "number";
  }

  function frequencyIsInRange(frequency, low, high) {
    return hasFrequencyRange(low, high) && low <= frequency && frequency <= high;
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

  function getBandMatch(table, row, frequency) {
    var ulLow = getTableCell(table, row, "f_ul_low");
    var ulHigh = getTableCell(table, row, "f_ul_high");
    var dlLow = getTableCell(table, row, "f_dl_low");
    var dlHigh = getTableCell(table, row, "f_dl_high");
    var matchesUplink = frequencyIsInRange(frequency, ulLow, ulHigh);
    var matchesDownlink = frequencyIsInRange(frequency, dlLow, dlHigh);

    if (!matchesUplink && !matchesDownlink) {
      return null;
    }

    return {
      band: getTableCell(table, row, "band"),
      duplexMode: getTableCell(table, row, "duplex_mode"),
      frequencyRange: table.id === "bands_fr2" ? "FR2" : "FR1",
      uplink: getFrequencyRange(ulLow, ulHigh),
      downlink: getFrequencyRange(dlLow, dlHigh),
      matchesUplink: matchesUplink,
      matchesDownlink: matchesDownlink
    };
  }

  function getBandMatchesByFrequency(frequencyMHz) {
    var frequency = Number(frequencyMHz);
    var matches = [];
    var tables = [tableBandsFr1, tableBandsFr2];

    if (!Number.isFinite(frequency)) {
      throw new Error("Frequency must be a number.");
    }

    if (frequency < 0 || frequency > 100000) {
      throw new Error("Frequency must be between 0 and 100,000 MHz.");
    }

    tables.forEach(function (table) {
      table.rows.forEach(function (row) {
        var match = getBandMatch(table, row, frequency);

        if (match) {
          matches.push(match);
        }
      });
    });

    return matches;
  }

  function getBandsByFrequency(frequencyMHz) {
    return getBandMatchesByFrequency(frequencyMHz).map(function (match) {
      return match.band;
    });
  }

  function roundHalfToEven(value) {
    var floor = Math.floor(value);
    var fraction = value - floor;
    var epsilon = Number.EPSILON * Math.max(1, Math.abs(value));

    if (Math.abs(fraction - 0.5) < epsilon) {
      return floor % 2 === 0 ? floor : floor + 1;
    }

    return Math.round(value);
  }

  function getNrarfcn(frequencyMHz) {
    var frequency = Number(frequencyMHz);

    if (!Number.isFinite(frequency)) {
      throw new Error("Frequency must be a number.");
    }

    if (frequency < 0 || frequency > 100000) {
      throw new Error("Frequency must be between 0 and 100,000 MHz.");
    }

    for (var i = 0; i < table54211.rows.length; i += 1) {
      var row = table54211.rows[i];

      if (row.fMin <= frequency && frequency <= row.fMax) {
        var nrarfcn = row.nRefOffs + ((frequency - row.fRefOffs) * 1000) / row.deltaFGlobal;
        return Math.min(roundHalfToEven(nrarfcn), MAX_NR_ARFCN);
      }
    }

    throw new Error("Frequency is not valid.");
  }

  function getFrequency(nrarfcn) {
    var nrArfcn = Number(nrarfcn);

    if (!Number.isInteger(nrArfcn)) {
      throw new Error("NR-ARFCN must be an integer.");
    }

    if (nrArfcn < 0 || nrArfcn > MAX_NR_ARFCN) {
      throw new Error("NR-ARFCN must be between 0 and 3,279,165.");
    }

    for (var i = 0; i < table54211.rows.length; i += 1) {
      var row = table54211.rows[i];

      if (row.nRefMin <= nrArfcn && nrArfcn <= row.nRefMax) {
        var fOffsetKHz = Math.trunc(row.fRefOffs * 1000);
        var frequencyKHz = fOffsetKHz + row.deltaFGlobal * (nrArfcn - row.nRefOffs);
        return frequencyKHz / 1000;
      }
    }

    throw new Error("NR-ARFCN is not valid.");
  }

  function formatResult(value) {
    var rounded = Math.round(value * 1000000) / 1000000;
    return String(rounded);
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

  function getRangeText(range) {
    if (!range) {
      return "N/A";
    }

    return formatResult(range.low) + "-" + formatResult(range.high) + " MHz";
  }

  function getBandDetailText(match) {
    var uplinkText = getRangeText(match.uplink);
    var downlinkText = getRangeText(match.downlink);

    if (match.uplink && match.downlink && uplinkText === downlinkText) {
      return "UL/DL " + uplinkText;
    }

    return "UL " + uplinkText + " | DL " + downlinkText;
  }

  function rangesAreSame(firstRange, secondRange) {
    return firstRange &&
      secondRange &&
      firstRange.low === secondRange.low &&
      firstRange.high === secondRange.high;
  }

  function createChip(text) {
    return createElement("span", "band-result-chip band-result-chip-" + String(text).toLowerCase(), text);
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

  function getBandChartBounds(matches, frequency) {
    var lows = [frequency];
    var highs = [frequency];

    matches.forEach(function (match) {
      [match.uplink, match.downlink].forEach(function (range) {
        if (range) {
          lows.push(range.low);
          highs.push(range.high);
        }
      });
    });

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

  function createBandSegment(kind, range, bounds, label) {
    var segment = createElement("span", "band-range-segment band-range-segment-" + kind, label);
    var left = getRangePercent(range.low, bounds);
    var right = getRangePercent(range.high, bounds);
    var width = Math.max(right - left, 0.8);

    if (left + width > 100) {
      left = 100 - width;
    }

    segment.style.left = left + "%";
    segment.style.width = width + "%";
    segment.title = label + " " + getRangeText(range);

    return segment;
  }

  function createTargetMarker(frequency, bounds) {
    var marker = createElement("span", "band-target-marker");
    var markerLabel = createElement("span", "band-target-marker-label", formatResult(frequency));

    marker.style.left = getRangePercent(frequency, bounds) + "%";
    marker.appendChild(markerLabel);

    return marker;
  }

  function createBandSegments(match, bounds) {
    var fragment = document.createDocumentFragment();

    if (match.duplexMode === "TDD" && rangesAreSame(match.uplink, match.downlink)) {
      fragment.appendChild(createBandSegment("tdd", match.uplink, bounds, "UL/DL"));
      return fragment;
    }

    if (match.uplink) {
      fragment.appendChild(createBandSegment("ul", match.uplink, bounds, "UL"));
    }

    if (match.downlink) {
      fragment.appendChild(createBandSegment("dl", match.downlink, bounds, "DL"));
    }

    return fragment;
  }

  function createBandVisualRow(match, bounds, frequency) {
    var row = createElement("div", "band-visual-row");
    var band = createElement("strong", "band-visual-name", match.band);
    var chart = createElement("div", "band-range-track");
    var chips = createElement("div", "band-result-chips");

    chart.append(
      createBandSegments(match, bounds),
      createTargetMarker(frequency, bounds)
    );

    chart.setAttribute("aria-label", match.band + ": " + getBandDetailText(match));

    chips.append(
      createChip(match.duplexMode),
      createChip(match.frequencyRange)
    );

    row.append(band, chart, chips);

    return row;
  }

  function createBandVisualAxis(bounds, frequency) {
    var axis = createElement("div", "band-range-axis");
    var start = createElement("span", "", formatResult(bounds.min) + " MHz");
    var target = createElement("span", "band-range-axis-target", formatResult(frequency) + " MHz");
    var end = createElement("span", "", formatResult(bounds.max) + " MHz");

    target.style.left = getRangePercent(frequency, bounds) + "%";
    axis.append(start, target, end);

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

  function createBandVisual(matches, frequency, bounds) {
    var visual = createElement("div", "band-range-visual");

    visual.append(
      createBandVisualAxis(bounds, frequency)
    );

    matches.forEach(function (match) {
      visual.appendChild(createBandVisualRow(match, bounds, frequency));
    });

    visual.appendChild(createBandLegend());

    return visual;
  }

  function renderBandRows(list, rows) {
    if (!list) {
      return;
    }

    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    rows.forEach(function (row) {
      list.appendChild(row);
    });
  }

  function initCalculator() {
    var defaultExampleFrequency = 1905;
    var nrarfcnInput = document.getElementById("nrarfcn-input");
    var frequencyInput = document.getElementById("frequency-input");
    var status = document.getElementById("calculator-status");
    var clearButton = document.getElementById("clear-calculator");
    var bandResultsState = document.getElementById("band-results-state");
    var bandResultsCopy = document.getElementById("band-results-copy");
    var bandResultList = document.getElementById("band-result-list");
    var panels = document.querySelectorAll(".converter-panel");

    if (!nrarfcnInput || !frequencyInput || !status || !clearButton) {
      return;
    }

    function renderBandIdle() {
      if (!bandResultsState || !bandResultsCopy || !bandResultList) {
        return;
      }

      bandResultsState.textContent = "Waiting for input";
      bandResultsCopy.textContent = "Enter a frequency or NR-ARFCN to see applicable NR operating bands.";
      renderBandRows(bandResultList, [
        createMessageRow(
          "Ready",
          "No value entered yet",
          "The matching bands will appear here after a valid input.",
          "3GPP Rel 19"
        )
      ]);
    }

    function renderBandError() {
      if (!bandResultsState || !bandResultsCopy || !bandResultList) {
        return;
      }

      bandResultsState.textContent = "No lookup";
      bandResultsCopy.textContent = "Band lookup needs a valid frequency or NR-ARFCN.";
      renderBandRows(bandResultList, [
        createMessageRow(
          "Paused",
          "Enter a valid value",
          "The band list will update once the calculator can derive a valid frequency.",
          "No lookup"
        )
      ]);
    }

    function renderBandResults(frequency) {
      var matches;
      var frequencyText = formatResult(frequency);
      var bounds;

      if (!bandResultsState || !bandResultsCopy || !bandResultList) {
        return;
      }

      matches = getBandMatchesByFrequency(frequency);

      if (matches.length === 0) {
        bandResultsState.textContent = "No band match";
        bandResultsCopy.textContent = "No defined 3GPP NR operating band includes " + frequencyText + " MHz.";
        renderBandRows(bandResultList, [
          createMessageRow(
            "No band match",
            "No defined 3GPP NR band",
            "This frequency is inside the NR-ARFCN global raster, but outside the FR1/FR2 operating-band ranges in 3GPP TS 38.104 V19.4.0.",
            "Outside bands"
          )
        ]);
        return;
      }

      bounds = getBandChartBounds(matches, frequency);
      bandResultsState.textContent = matches.length === 1 ? "1 band" : matches.length + " possible bands";
      bandResultsCopy.textContent = "Matches for " + frequencyText + " MHz across " + formatResult(bounds.min) + "-" + formatResult(bounds.max) + " MHz.";
      renderBandRows(bandResultList, [
        createBandVisual(matches, frequency, bounds)
      ]);
    }

    function setActivePanel(source) {
      panels.forEach(function (panel) {
        panel.classList.toggle("is-active", panel.dataset.panel === source);
      });
    }

    function updateFrom(source) {
      var sourceInput = source === "nrarfcn" ? nrarfcnInput : frequencyInput;
      var targetInput = source === "nrarfcn" ? frequencyInput : nrarfcnInput;
      var rawValue = sourceInput.value.trim();

      setActivePanel(source);

      if (rawValue === "") {
        targetInput.value = "";
        status.textContent = "Type in either box to preview the flow.";
        renderBandIdle();
        return;
      }

      var value = Number(rawValue);
      if (!Number.isFinite(value)) {
        targetInput.value = "";
        status.textContent = "Use a numeric value.";
        renderBandError();
        return;
      }

      try {
        if (source === "nrarfcn") {
          var frequency = getFrequency(value);
          targetInput.value = formatResult(frequency);
          status.textContent = "Calculated from 3GPP TS 38.104 Table 5.4.2.1-1.";
          renderBandResults(frequency);
        } else {
          targetInput.value = String(getNrarfcn(value));
          status.textContent = "Calculated from 3GPP TS 38.104 Table 5.4.2.1-1.";
          renderBandResults(value);
        }
      } catch (error) {
        targetInput.value = "";
        status.textContent = error.message;
        renderBandError();
      }
    }

    nrarfcnInput.addEventListener("input", function () {
      updateFrom("nrarfcn");
    });

    frequencyInput.addEventListener("input", function () {
      updateFrom("frequency");
    });

    nrarfcnInput.addEventListener("focus", function () {
      setActivePanel("nrarfcn");
    });

    frequencyInput.addEventListener("focus", function () {
      setActivePanel("frequency");
    });

    clearButton.addEventListener("click", function () {
      nrarfcnInput.value = "";
      frequencyInput.value = "";
      setActivePanel("nrarfcn");
      status.textContent = "Type in either box to preview the flow.";
      renderBandIdle();
      nrarfcnInput.focus();
    });

    status.textContent = "Example shown for 1905 MHz. Type in either box to calculate your value.";
    renderBandResults(defaultExampleFrequency);
  }

  window.NrarfcnCalculator = {
    table54211: table54211,
    tableBandsFr1: tableBandsFr1,
    tableBandsFr2: tableBandsFr2,
    getFrequency: getFrequency,
    getNrarfcn: getNrarfcn,
    getBandMatchesByFrequency: getBandMatchesByFrequency,
    getBandsByFrequency: getBandsByFrequency
  };

  initCalculator();
}());
