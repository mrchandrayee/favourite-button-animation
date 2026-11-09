(() => {
  const buttons = [...document.querySelectorAll(".fav")];
  const hint = document.querySelector("#hint");
  const reset = document.querySelector("#reset");

  function animate(button) {
    button.classList.remove("burst");
    // Restart the keyframes on repeated clicks.
    void button.offsetWidth;
    button.classList.add("burst");
    window.setTimeout(() => button.classList.remove("burst"), 650);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const active = button.classList.toggle("active");
      button.setAttribute("aria-pressed", String(active));
      animate(button);
      const label = button.querySelector(".label").textContent;
      hint.textContent = active
        ? `${label} added to your favourites.`
        : `${label} removed from your favourites.`;
    });
  });

  reset.addEventListener("click", () => {
    buttons.forEach(button => {
      button.classList.remove("burst");
      button.classList.toggle("active", button.id === "watchBtn");
      button.setAttribute("aria-pressed", String(button.id === "watchBtn"));
    });
    hint.textContent = "Tap a button to add or remove it from your favourites.";
  });
})();