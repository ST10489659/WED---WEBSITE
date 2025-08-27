// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animated Counters for Impact Tracker
const counters = document.querySelectorAll(".stat h2");
const speed = 200; // smaller = faster

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute("data-target");
    const current = +counter.innerText.replace(/\D/g,''); // remove non-numeric
    const increment = Math.ceil(value / speed);

    if (current < value) {
      counter.innerText = current + increment;
      setTimeout(animate, 30);
    } else {
      counter.innerText = value.toLocaleString();
    }
  };
  animate();
});

// Button Hover Effect (Pulse Animation)
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.08)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});