document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  //Initial Slide
  const section = sections[0];
  if (isInViewport(section)) section.classList.add("slide-in");

  function slideSections() {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("slide-in");
      }
    });
  }

  document.addEventListener("scroll", slideSections);
});
