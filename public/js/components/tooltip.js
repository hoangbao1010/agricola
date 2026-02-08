const initTooltip = () => {
  const tooltipElements = document.querySelectorAll("[data-tooltip]");
  if (tooltipElements.length === 0) return;

  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const tooltipText = this.getAttribute("data-tooltip");
      const position = this.getAttribute("data-position") || "top"; // Lấy hướng
      if (!tooltipText) return;

      const tooltip = document.createElement("div");
      // Thêm class tooltip-[position] để dễ style CSS
      tooltip.className = `tooltip-item tooltip-${position} fixed z-[9999] px-2 py-1 text-xs text-white bg-black rounded shadow-lg transition-opacity duration-200 opacity-0 pointer-events-none`;

      // Thêm attribute data-position vào element được render
      tooltip.setAttribute("data-position", position);

      tooltip.innerText = tooltipText;
      document.body.appendChild(tooltip);

      requestAnimationFrame(() => {
        const rect = this.getBoundingClientRect();
        const tRect = tooltip.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        let top, left;
        const offset = 8; // Khoảng cách

        switch (position) {
          case "top":
            top = rect.top + scrollTop - tRect.height - offset;
            left = rect.left + scrollLeft + (rect.width - tRect.width) / 2;
            break;
          case "bottom":
            top = rect.bottom + scrollTop + offset;
            left = rect.left + scrollLeft + (rect.width - tRect.width) / 2;
            break;
          case "left":
            top = rect.top + scrollTop + (rect.height - tRect.height) / 2;
            left = rect.left + scrollLeft - tRect.width - offset;
            break;
          case "right":
            top = rect.top + scrollTop + (rect.height - tRect.height) / 2;
            left = rect.right + scrollLeft + offset;
            break;
        }

        // Chống tràn màn hình
        if (left < 5) left = 5;
        if (left + tRect.width > window.innerWidth - 5) left = window.innerWidth - tRect.width - 5;
        if (top < 5) top = 5;

        Object.assign(tooltip.style, {
          left: `${left}px`,
          top: `${top}px`,
          opacity: "1",
        });
      });
    });

    element.addEventListener("mouseleave", () => {
      document.querySelectorAll(".tooltip-item").forEach((t) => t.remove());
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTooltip);
} else {
  initTooltip();
}
