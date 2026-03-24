const revealItems = document.querySelectorAll(".hero-copy, .hero-card, .section-heading, .panel, .credit-card, .media-feature, .gallery-card, .contact-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
  observer.observe(item);
});
