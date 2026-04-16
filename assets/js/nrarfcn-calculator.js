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

  function initCalculator() {
    var nrarfcnInput = document.getElementById("nrarfcn-input");
    var frequencyInput = document.getElementById("frequency-input");
    var status = document.getElementById("calculator-status");
    var clearButton = document.getElementById("clear-calculator");
    var panels = document.querySelectorAll(".converter-panel");

    if (!nrarfcnInput || !frequencyInput || !status || !clearButton) {
      return;
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
        return;
      }

      var value = Number(rawValue);
      if (!Number.isFinite(value)) {
        targetInput.value = "";
        status.textContent = "Use a numeric value.";
        return;
      }

      try {
        if (source === "nrarfcn") {
          targetInput.value = formatResult(getFrequency(value));
          status.textContent = "Calculated from 3GPP TS 38.104 Table 5.4.2.1-1.";
        } else {
          targetInput.value = String(getNrarfcn(value));
          status.textContent = "Calculated from 3GPP TS 38.104 Table 5.4.2.1-1.";
        }
      } catch (error) {
        targetInput.value = "";
        status.textContent = error.message;
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
      nrarfcnInput.focus();
    });
  }

  window.NrarfcnCalculator = {
    table54211: table54211,
    getFrequency: getFrequency,
    getNrarfcn: getNrarfcn
  };

  initCalculator();
}());
