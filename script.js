// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Animated Counters for Impact Tracker & Stats =====
function animateCounters(selector) {
  const counters = document.querySelectorAll(selector);
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    if (!target) return;
    let current = 0;
    const increment = Math.ceil(target / 100);

    function update() {
      current += increment;
      if (current < target) {
        counter.innerText = current.toLocaleString();
        setTimeout(update, 30);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }
    update();
  });
}

// Only start counters when section is visible
let countersStarted = false;
function startCountersIfVisible() {
  const section = document.getElementById("impact-stats");
  if (section && !countersStarted) {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight) {
      animateCounters(".stat h2, .counter");
      countersStarted = true;
    }
  }
}
window.addEventListener("scroll", startCountersIfVisible);
startCountersIfVisible(); // run on load

// ===== Button Hover Effect (Pulse Animation) =====
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.08)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// ===== About Us Page: Flip team member cards =====
document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// ===== About Us Page: Reveal timeline items on scroll =====
const timelineItems = document.querySelectorAll(".timeline-item");
function revealOnScroll() {
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load

// ===== Services Page: Accordion functionality =====
document.querySelectorAll(".service-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    if (content) content.classList.toggle("active");
    const arrow = header.querySelector(".arrow");
    if (arrow) arrow.classList.toggle("rotate");
  });
});

// ===== Services Page: Search/filter services =====
const searchInput = document.getElementById("service-search");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".service-card").forEach(service => {
      const text = service.textContent.toLowerCase();
      service.style.display = text.includes(query) ? "block" : "none";
    });
  });
}

// ===== Optional: Scroll to top button =====
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Enquiry Page: Form validation =====
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    let isValid = true;
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    if (name === "") {
      document.getElementById("nameError").innerText = "Please enter your name.";
      isValid = false;
      <span class="error" id="nameError"></span>
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (email === "") {
      document.getElementById("emailError").innerText = "Please enter your email.";
      isValid = false;
    } else if (!email.match(emailPattern)) {
      document.getElementById("emailError").innerText = "Please enter a valid email.";
      isValid = false;
      <span class="error" id="emailError"></span>
    }
    if (subject === "") {
      document.getElementById("subjectError").innerText = "Please enter a subject.";
      isValid = false;
      <span class="error" id="subjectError"></span>
    }
    if (message === "") {
      document.getElementById("messageError").innerText = "Please enter a message.";
      isValid = false;
      <span class="error" id="messageError"></span>
    }
    if (isValid) {
      alert("✅ Thank you for your enquiry! We will get back to you soon.");
      enquiryForm.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// ===== Contact Us Page: Form validation =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    let isValid = true;
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    if (name === "") {
      document.getElementById("nameError").innerText = "Please enter your name.";
      isValid = false;
      <span class="error" id="nameError"></span>
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (email === "") {
      document.getElementById("emailError").innerText = "Please enter your email.";
      isValid = false;
    } else if (!email.match(emailPattern)) {
      document.getElementById("emailError").innerText = "Please enter a valid email.";
      isValid = false;
      <span class="error" id="emailError"></span>
    }
    if (subject === "") {
      document.getElementById("subjectError").innerText = "Please enter a subject.";
      isValid = false;
      <span class="error" id="subjectError"></span>
    }
    if (message === "") {
      document.getElementById("messageError").innerText = "Please enter your message.";
      isValid = false;
      <span class="error" id="messageError"></span>
    }
    if (isValid) {
      alert("📩 Thank you for contacting us! We will respond shortly.");
      contactForm.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}