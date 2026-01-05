function rate(value) {
  const stars = document.querySelectorAll(".rating span");

  stars.forEach((star, index) => {
    star.classList.toggle("active", index < value);
  });

  document.getElementById("result").textContent = "Rating: " + value;
}
