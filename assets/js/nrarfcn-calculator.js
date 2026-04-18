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
      downlink: getFrequencyRange(dlLow, dlHigh),
      matchesUplink: false,
      matchesDownlink: false
    };
  }

  function getBandMatch(table, row, frequency) {
    var candidate = getBandCandidate(table, row);
    var matchesUplink = candidate.uplink && frequencyIsInRange(frequency, candidate.uplink.low, candidate.uplink.high);
    var matchesDownlink = candidate.downlink && frequencyIsInRange(frequency, candidate.downlink.low, candidate.downlink.high);

    if (!matchesUplink && !matchesDownlink) {
      return null;
    }

    candidate.matchesUplink = matchesUplink;
    candidate.matchesDownlink = matchesDownlink;

    return candidate;
  }

  function getRangeDistance(frequency, range) {
    if (!range) {
      return null;
    }

    if (frequency < range.low) {
      return {
        distance: range.low - frequency,
        closestFrequency: range.low
      };
    }

    if (frequency > range.high) {
      return {
        distance: frequency - range.high,
        closestFrequency: range.high
      };
    }

    return {
      distance: 0,
      closestFrequency: frequency
    };
  }

  function getClosestRangeInfo(candidate, frequency) {
    var ranges = [];
    var closest;

    if (candidate.uplink && candidate.downlink && candidate.uplink.low === candidate.downlink.low && candidate.uplink.high === candidate.downlink.high) {
      ranges.push({
        label: "UL/DL",
        info: getRangeDistance(frequency, candidate.uplink)
      });
    } else {
      ranges.push({
        label: "UL",
        info: getRangeDistance(frequency, candidate.uplink)
      });
      ranges.push({
        label: "DL",
        info: getRangeDistance(frequency, candidate.downlink)
      });
    }

    ranges.forEach(function (range) {
      if (!range.info) {
        return;
      }

      if (!closest || range.info.distance < closest.distance) {
        closest = {
          label: range.label,
          distance: range.info.distance,
          closestFrequency: range.info.closestFrequency
        };
      }
    });

    return closest;
  }

  function cloneClosestCandidate(candidate, closestInfo) {
    return {
      band: candidate.band,
      duplexMode: candidate.duplexMode,
      frequencyRange: candidate.frequencyRange,
      uplink: candidate.uplink,
      downlink: candidate.downlink,
      matchesUplink: false,
      matchesDownlink: false,
      closestLabel: closestInfo.label,
      closestDistance: closestInfo.distance,
      closestFrequency: closestInfo.closestFrequency
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

  function getClosestBandMatchesByFrequency(frequencyMHz) {
    var frequency = Number(frequencyMHz);
    var matches = [];
    var minDistance = Infinity;
    var tables = [tableBandsFr1, tableBandsFr2];
    var tolerance = 1e-9;

    if (!Number.isFinite(frequency)) {
      throw new Error("Frequency must be a number.");
    }

    if (frequency < 0 || frequency > 100000) {
      throw new Error("Frequency must be between 0 and 100,000 MHz.");
    }

    tables.forEach(function (table) {
      table.rows.forEach(function (row) {
        var candidate = getBandCandidate(table, row);
        var closestInfo = getClosestRangeInfo(candidate, frequency);

        if (!closestInfo) {
          return;
        }

        if (closestInfo.distance < minDistance - tolerance) {
          minDistance = closestInfo.distance;
          matches = [cloneClosestCandidate(candidate, closestInfo)];
          return;
        }

        if (Math.abs(closestInfo.distance - minDistance) <= tolerance) {
          matches.push(cloneClosestCandidate(candidate, closestInfo));
        }
      });
    });

    return matches;
  }

  function getClosestBandsByFrequency(frequencyMHz) {
    return getClosestBandMatchesByFrequency(frequencyMHz).map(function (match) {
      return match.band;
    });
  }

  function getClosestBandByFrequency(frequencyMHz) {
    return getClosestBandsByFrequency(frequencyMHz)[0] || null;
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

  function getBandFrequencySideLabel(match, frequency) {
    var inUplink = !!(match.uplink && frequencyIsInRange(frequency, match.uplink.low, match.uplink.high));
    var inDownlink = !!(match.downlink && frequencyIsInRange(frequency, match.downlink.low, match.downlink.high));

    if (match.duplexMode === "TDD" && rangesAreSame(match.uplink, match.downlink)) {
      return "UL/DL";
    }

    if (inDownlink && !inUplink) {
      return "DL";
    }

    if (inUplink && !inDownlink) {
      return "UL";
    }

    if (inUplink && inDownlink) {
      return match.duplexMode === "TDD" ? "UL/DL" : "UL/DL";
    }

    if (match.duplexMode === "TDD") {
      return "UL/DL";
    }

    return match.downlink ? "DL" : "UL";
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

  function createBandRangeSummary(match, bounds) {
    var summary = createElement("div", "band-range-summary");
    var specs = [];
    var lanes;
    var laneCount;

    if (match.duplexMode === "TDD" && rangesAreSame(match.uplink, match.downlink)) {
      specs.push(getRangeSummarySpec("tdd", "UL/DL", match.uplink, bounds));
    } else {
      if (match.uplink) {
        specs.push(getRangeSummarySpec("ul", "UL", match.uplink, bounds));
      }

      if (match.downlink) {
        specs.push(getRangeSummarySpec("dl", "DL", match.downlink, bounds));
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
    var bandHeader = createElement("div", "band-visual-header");
    var band = createElement("strong", "band-visual-name", match.band);
    var statusTag;
    var chartGroup = createElement("div", "band-visual-chart");
    var chart = createElement("div", "band-range-track");
    var chips = createElement("div", "band-result-chips");

    chart.append(
      createBandSegments(match, bounds),
      createTargetMarker(frequency, bounds)
    );

    chart.setAttribute("aria-label", match.band + ": " + getBandDetailText(match));
    chartGroup.append(chart, createBandRangeSummary(match, bounds));

    chips.append(
      createChip(match.duplexMode),
      createChip(match.frequencyRange)
    );

    if (typeof match.closestDistance === "number" && match.closestDistance > 0) {
      statusTag = createChip("Closest");
      statusTag.classList.add("band-visual-closest-tag");
      bandHeader.append(band, statusTag);
      row.className += " band-visual-row-closest";
    } else {
      var duplexLabel = getBandFrequencySideLabel(match, frequency);
      statusTag = createChip(duplexLabel);
      statusTag.classList.add("band-visual-duplex-tag");
      statusTag.classList.add("band-visual-duplex-tag-" + duplexLabel.toLowerCase().replace("/", ""));
      bandHeader.append(band, statusTag);
    }

    row.append(bandHeader, chartGroup, chips);

    return row;
  }

  function getClosestBandCopy(matches) {
    var distanceText = formatResult(matches[0].closestDistance) + " MHz away";
    var bands = matches.map(function (match) {
      return match.band;
    });

    if (matches.length === 1) {
      return "Closest band: " + bands[0] + " (" + distanceText + ").";
    }

    return "Closest bands: " + bands.join(", ") + " (" + distanceText + ").";
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

      bandResultsState.classList.remove("is-no-exact");
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

      bandResultsState.classList.remove("is-no-exact");
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
      var closestMatches;
      var frequencyText = formatResult(frequency);
      var bounds;

      if (!bandResultsState || !bandResultsCopy || !bandResultList) {
        return;
      }

      matches = getBandMatchesByFrequency(frequency);

      if (matches.length === 0) {
        closestMatches = getClosestBandMatchesByFrequency(frequency);

        if (closestMatches.length === 0) {
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

        bounds = getBandChartBounds(closestMatches, frequency);
        bandResultsState.classList.add("is-no-exact");
        bandResultsState.textContent = "No exact band";
        bandResultsCopy.textContent = "No 5G NR band at " + frequencyText + " MHz. " + getClosestBandCopy(closestMatches);
        renderBandRows(bandResultList, [
          createBandVisual(closestMatches, frequency, bounds)
        ]);
        return;
      }

      bounds = getBandChartBounds(matches, frequency);
      bandResultsState.classList.remove("is-no-exact");
      bandResultsState.textContent = matches.length === 1 ? "1 band" : matches.length + " possible bands";
      bandResultsCopy.textContent = "Bands at " + frequencyText + " MHz: " + matches.map(function (match) {
        return match.band;
      }).join(", ") + ".";
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
        status.textContent = "Type in either box to get started.";
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
          status.textContent = "Frequency updated.";
          renderBandResults(frequency);
        } else {
          targetInput.value = String(getNrarfcn(value));
          status.textContent = "NR-ARFCN updated.";
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
      bandResultsState.classList.remove("is-no-exact");
      status.textContent = "Type in either box to get started.";
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
    getBandsByFrequency: getBandsByFrequency,
    getClosestBandMatchesByFrequency: getClosestBandMatchesByFrequency,
    getClosestBandsByFrequency: getClosestBandsByFrequency,
    getClosestBandByFrequency: getClosestBandByFrequency
  };

  initCalculator();
}());
