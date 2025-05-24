document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".caret");

  toggles.forEach(caret => {
    caret.addEventListener("click", () => {
      const nested = caret.parentElement.querySelector(".nested");
      if (!nested) return;

      nested.classList.toggle("active");
      caret.classList.toggle("caret-down");
    });

    // Auto open and close after 2 seconds on page load
    const nested = caret.parentElement.querySelector(".nested");
    if (nested) {
      setTimeout(() => nested.classList.add("active"), 300);
      setTimeout(() => nested.classList.remove("active"), 2300);
    }
  });
});
