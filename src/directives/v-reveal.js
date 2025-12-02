export default {
  mounted(el) {
    el.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  },
};
