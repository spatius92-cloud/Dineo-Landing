/**
 * ============================================================
 *  MAIN.JS — Interactions & Logic
 *  Dineo Landing Page
 * ============================================================
 */

/* ─── WHATSAPP LINK LOGIC ───────────────────────────────────
   The buttons send messages TO Screw (+267 77924840) via WhatsApp.
   Each response option sends a different pre-filled message.
   ─────────────────────────────────────────────────────────── */
(function setupWhatsApp() {
  const MY_NUMBER = "26777924840"; // Screw's number (recipient)
  const btn = document.getElementById("whatsappBtn");
  const note = document.getElementById("ctaNote");
  const acceptBtn = document.getElementById("acceptBtn");
  const forgiveBtn = document.getElementById("forgiveBtn");
  const talkBtn = document.getElementById("talkBtn");

  if (!btn || !note) return;

  // Build the wa.me URL for the main button
  const prefilledMsg = encodeURIComponent(
    "Screw, I read your letter… 🌹"
  );
  const waUrl = `https://wa.me/${MY_NUMBER}?text=${prefilledMsg}`;

  btn.href = waUrl;
  btn.setAttribute("aria-label", "Message Screw on WhatsApp");

  // Add a gentle personalized note
  note.textContent = "This will open WhatsApp — please message from your number, Dineo 🌹";

  // Setup response buttons
  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      const message = acceptBtn.getAttribute("data-message");
      const url = `https://wa.me/${MY_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  if (forgiveBtn) {
    forgiveBtn.addEventListener("click", () => {
      const message = forgiveBtn.getAttribute("data-message");
      const url = `https://wa.me/${MY_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  if (talkBtn) {
    talkBtn.addEventListener("click", () => {
      const message = talkBtn.getAttribute("data-message");
      const url = `https://wa.me/${MY_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
})();


/* ─── FLOATING PETALS ──────────────────────────────────────── */
(function createPetals() {
  const container = document.getElementById("petals");
  const symbols = ["🌸", "🌹", "✿", "❀", "🌺", "·", "·"];
  const count = window.innerWidth < 600 ? 10 : 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.classList.add("petal");
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const leftPct  = Math.random() * 100;
    const duration = 8 + Math.random() * 14;
    const delay    = Math.random() * 12;
    const size     = 0.7 + Math.random() * 0.9;

    el.style.cssText = `
      left: ${leftPct}%;
      font-size: ${size}rem;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(el);
  }
})();


/* ─── SLIDESHOW ─────────────────────────────────────────────── */
(function initSlideshow() {
  // SLIDESHOW_IMAGES is defined in images.js
  const images = (typeof SLIDESHOW_IMAGES !== "undefined") ? SLIDESHOW_IMAGES : [];
  const duration = (typeof SLIDE_DURATION !== "undefined") ? SLIDE_DURATION : 4000;
  const transition = (typeof SLIDE_TRANSITION !== "undefined") ? SLIDE_TRANSITION : 1200;

  const container = document.getElementById("slideshow");
  const dotsEl = document.getElementById("slideDots");

  if (!images || images.length === 0) {
    // No images configured — placeholder is already in HTML
    return;
  }

  // Clear placeholder
  container.innerHTML = "";
  dotsEl.innerHTML    = "";

  let currentIndex = 0;
  const slides = [];
  const dots   = [];

  // Build slide elements
  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Photo of Dineo ${i + 1}`;
    img.classList.add("slide");
    img.style.transitionDuration = `${transition}ms`;
    if (i === 0) img.classList.add("active");
    container.appendChild(img);
    slides.push(img);

    // Dot
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(dot);
    dots.push(dot);
  });

  function goTo(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  // Auto-advance
  if (slides.length > 1) {
    setInterval(() => goTo(currentIndex + 1), duration);
  }
})();


/* ─── SCROLL REVEAL ─────────────────────────────────────────── */
(function initScrollReveal() {
  const targets = document.querySelectorAll(".section-inner");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  targets.forEach(el => observer.observe(el));
})();
