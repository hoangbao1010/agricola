document.addEventListener("DOMContentLoaded", () => {
  const countElements = document.querySelectorAll(".js-count-up");
  // count number
  const startCountUp = (el) => {
    const countTo = parseFloat(el.getAttribute("data-value")) || 0;
    const dataString = el.getAttribute("data-string") || countTo;
    const duration = 5000;
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad = progress * (2 - progress);
      const currentValue = startValue + (countTo - startValue) * easeOutQuad;

      el.innerText = Math.floor(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.innerText = dataString;
      }
    };
    requestAnimationFrame(animate);
  };

  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("is-counted")) {
        entry.target.classList.add("is-counted");
        startCountUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  countElements.forEach((el) => observer.observe(el));
  // count number

  // if (typeof Fancybox !== "undefined" && Fancybox.bind) {
  //   Fancybox.bind(".fancybox", {
  //     Toolbar: {
  //       display: {
  //         left: [],
  //         middle: [],
  //         right: ["slideshow", "share", "zoom", "fullscreen", "close"],
  //       },
  //     },
  //   });
  // }

  const initSkillProgress = () => {
    const skillItems = document.querySelectorAll(".skill-item");
    if (skillItems.length === 0) return;

    const options = {
      threshold: 0.2,
    };

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target;
          const bar = item.querySelector(".progress-line span");
          const valueDisplay = item.querySelector(".skill-value");
          const targetPercent = parseInt(item.querySelector(".progress-line").getAttribute("data-progress"));

          // Chạy hiệu ứng thanh bar
          requestAnimationFrame(() => {
            bar.style.width = targetPercent + "%";
          });

          // Chạy hiệu ứng số nhảy
          animateValue(valueDisplay, 0, targetPercent, 2000);

          // Xong thì ngừng quan sát item này
          skillObserver.unobserve(item);
        }
      });
    }, options);

    // Hàm đếm số mượt mà
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    skillItems.forEach((item) => skillObserver.observe(item));
  };

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSkillProgress);
  } else {
    initSkillProgress();
  }

  // slider
  const partnerNews = document.querySelector(".customer-section");

  if (partnerNews) {
    const swiper = new Swiper(".customer-section .swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".customer-section .sl-next",
        prevEl: ".customer-section .sl-prev",
      },
      pagination: {
        el: ".customer-section .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {},
        767: {},
        1024: {},
        1280: {},
        1599: {},
        1920: {},
      },
    });
  }
  // end slider
});
