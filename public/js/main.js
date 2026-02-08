document.addEventListener("DOMContentLoaded", () => {
  // Tooltip
  if (typeof initTooltip === "function") {
    initTooltip();
  }

  // DateTime Picker
  if (typeof initDateTimePicker === "function") {
    initDateTimePicker();
  }
});
