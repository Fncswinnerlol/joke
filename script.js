document.getElementById("showPunchline").addEventListener("click", function() {
  // Change HTML
  document.getElementById("punchline").classList.remove("hidden");

  // Change CSS dynamically
  document.body.style.backgroundColor = "#ffe4b5";

  // Change image
  document.getElementById("jokeImage").src = "dad-came-back-with-the-milk-v0-ly1cx209fu9a1.png.webp";

  // Add animation using JavaScript
  const punchline = document.getElementById("punchline");
  punchline.style.transform = "scale(1.5)";
  punchline.style.color = "red";

  // Add a timeout to reset after animation
  setTimeout(() => {
    punchline.style.transform = "scale(1)";
    punchline.style.color = "#2e8b57";
  }, 1500);
});
cr