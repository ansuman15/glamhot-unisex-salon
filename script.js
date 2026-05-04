// ═══ NAV SCROLL ═══
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ═══ HAMBURGER ═══
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ═══ HERO CAROUSEL ═══
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideInterval;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function startCarousel() {
  slideInterval = setInterval(nextSlide, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(parseInt(dot.dataset.slide));
    startCarousel();
  });
});

startCarousel();

// ═══ TYPEWRITER (slower, more elegant) ═══
const target = document.querySelector('.typewriter-target');
if (target) {
  const phrases = ["Becomes a Statement.", "Feels Like Luxury.", "Tells Your Story."];
  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function typeWrite() {
    const phrase = phrases[phraseIdx];
    if (!isDeleting) {
      target.textContent = phrase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === phrase.length) { isDeleting = true; setTimeout(typeWrite, 3500); return; }
    } else {
      target.textContent = phrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    }
    setTimeout(typeWrite, isDeleting ? 25 : 50);
  }

  window.addEventListener('load', () => setTimeout(typeWrite, 1500));
}

// ═══ SCROLL ANIMATIONS (gentle fade-up) ═══
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 0.08, 0.4)}s`;
  fadeObserver.observe(el);
});

// ═══ EXISTING FORM SUBMISSION ═══
const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.6';
    setTimeout(() => {
      form.style.display = 'none';
      document.querySelector('.form-success').style.display = 'block';
      const name = encodeURIComponent(form.querySelector('[name=name]').value);
      const service = encodeURIComponent(form.querySelector('[name=service]').value);
      const msg = encodeURIComponent(`Hi! I'd like to book at Glamhot Salon.\nName: ${decodeURIComponent(name)}\nService: ${decodeURIComponent(service)}`);
      window.open(`https://wa.me/919348696298?text=${msg}`, '_blank');
    }, 800);
  });
}

// ═══ GOOGLE ADS DETECTION ═══
const isAds = new URLSearchParams(window.location.search).get('ads') === 'true'
  || document.referrer.includes('google');
if (isAds) {
  const navLinks = document.getElementById('navLinks');
  const stickyCta = document.getElementById('stickyCta');
  if (navLinks) navLinks.style.display = 'none';
  if (stickyCta) stickyCta.style.display = 'flex';
}

// ═══ SMOOTH SCROLL ═══
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ═══════════════════════════════════════════
// BOOKING POPUP MODAL
// ═══════════════════════════════════════════

function openBookingPopup(packageName, price) {
  const modal = document.getElementById('bookingModal');
  const pkgDisplay = document.getElementById('selectedPkgDisplay');
  const serviceSelect = document.getElementById('bm-service');

  if (packageName) {
    pkgDisplay.textContent = packageName + (price ? ' — \u20B9' + price : '');
    pkgDisplay.style.display = 'block';
    // Try to select matching option
    for (let opt of serviceSelect.options) {
      if (opt.text.includes('Package') && opt.text.includes(price)) {
        opt.selected = true;
        break;
      }
    }
  } else {
    pkgDisplay.style.display = 'none';
  }

  // Set min date to today
  const dateInput = document.getElementById('bm-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('active'));
  document.body.style.overflow = 'hidden';

  // Close mobile nav if open
  hamburger.classList.remove('active');
  mobileNav.classList.remove('open');
}

function closeBookingPopup() {
  const modal = document.getElementById('bookingModal');
  modal.classList.remove('active');
  setTimeout(() => { modal.style.display = 'none'; }, 300);
  document.body.style.overflow = '';
}

// Close on overlay click
document.getElementById('bookingModal').addEventListener('click', function(e) {
  if (e.target === this) closeBookingPopup();
});

// Close on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeBookingPopup();
    const chatWindow = document.getElementById('waChatWindow');
    if (chatWindow.classList.contains('active')) toggleChatbot();
  }
});

// Popup form submission → WhatsApp redirect
document.getElementById('popupBookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('bm-name').value.trim();
  const phone = document.getElementById('bm-phone').value.trim();
  const service = document.getElementById('bm-service').value;
  const date = document.getElementById('bm-date').value;
  const time = document.getElementById('bm-time').value;

  const message = `Hi! I'd like to book an appointment at Glamhot Salon.\n\n` +
    `👤 Name: ${name}\n` +
    `📞 Phone: ${phone}\n` +
    `💇 Service: ${service}\n` +
    `📅 Date: ${date}\n` +
    `🕐 Time: ${time}\n\n` +
    `Please confirm my booking. Thank you!`;

  const waUrl = `https://wa.me/919348696298?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  closeBookingPopup();
  this.reset();
});


// ═══════════════════════════════════════════
// WHATSAPP CHATBOT WIDGET
// ═══════════════════════════════════════════

let chatbotOpen = false;

function toggleChatbot() {
  const chatWindow = document.getElementById('waChatWindow');
  const badge = document.getElementById('waFabBadge');
  chatbotOpen = !chatbotOpen;
  if (chatbotOpen) {
    chatWindow.classList.add('active');
    badge.style.display = 'none';
  } else {
    chatWindow.classList.remove('active');
  }
}

// Auto-pop after 2 seconds
setTimeout(() => {
  const chatWindow = document.getElementById('waChatWindow');
  if (!chatbotOpen) {
    chatbotOpen = true;
    chatWindow.classList.add('active');
    document.getElementById('waFabBadge').style.display = 'none';
  }
}, 2000);

function chatbotReply(topic) {
  const body = document.getElementById('waChatBody');
  const quickBtns = document.getElementById('waQuickBtns');

  // Add user message
  const userLabels = {
    services: 'What services do you offer?',
    timing: 'What are your timings?',
    offers: 'Any offers right now?',
    contact: 'How can I contact you?',
    book: 'I want to book an appointment'
  };

  const userMsg = document.createElement('div');
  userMsg.className = 'wa-msg wa-msg-user';
  userMsg.textContent = userLabels[topic];
  body.appendChild(userMsg);

  // Bot response after short delay
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'wa-msg wa-msg-bot';

    const responses = {
      services: `<p><strong>Our Service Packages:</strong></p>
        <p>1️⃣ Hairwash + Haircut + Hair Spa + Blow-Dry — <strong>₹999</strong></p>
        <p>2️⃣ D-Tan + Cleanup + Hair Spa + Head Massage + more — <strong>₹1999</strong></p>
        <p>3️⃣ Hairwash + Deep Conditioning + Trimming + Pedicure — <strong>₹1499</strong></p>
        <p>4️⃣ Facial + Waxing + Pedicure + Oil Massage + more — <strong>₹1999</strong></p>
        <p>5️⃣ D-Tan + Facial + Waxing + Hair Spa — <strong>₹2499</strong></p>
        <p>Plus Hair Styling, Colour, Bridal & more! 💇‍♀️</p>`,
      timing: `<p>📍 <strong>Location:</strong> Plot No 98, ITER College Rd, near Food Square, Jagmohan Nagar, Bhubaneswar, Odisha 751030</p>
        <p>🕐 <strong>Timing:</strong> Open 7 Days, 9AM – 9PM</p>
        <p>📞 <strong>Phone:</strong> +91 93486 96298</p>`,
      offers: `<p>🎉 <strong>Get Flat 20% OFF</strong> on your first visit!</p>
        <p>We have 5 amazing combo packages starting from just <strong>₹999</strong>!</p>
        <p>Book now to grab your offer! 💫</p>`,
      contact: `<p>📞 Call us: <strong>+91 93486 96298</strong></p>
        <p>💬 WhatsApp: Same number!</p>
        <p>📍 Visit us at ITER College Rd, Bhubaneswar</p>
        <p>Open 7 Days · 9AM–9PM</p>`,
      book: `<p>Great choice! 🎉 Let me redirect you to WhatsApp to book your appointment directly.</p>
        <p>You can also click the button below! 👇</p>`
    };

    botMsg.innerHTML = responses[topic];
    body.appendChild(botMsg);
    body.scrollTop = body.scrollHeight;

    // If book topic, add WhatsApp link button
    if (topic === 'book') {
      setTimeout(() => {
        const linkMsg = document.createElement('div');
        linkMsg.className = 'wa-msg wa-msg-bot';
        linkMsg.innerHTML = `<a href="https://wa.me/919348696298?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20Glamhot%20Salon.%20Please%20help%20me%20schedule." target="_blank" style="display:inline-block;background:#25d366;color:#fff;padding:8px 18px;border-radius:20px;font-size:.82rem;font-weight:500;text-decoration:none;">Chat on WhatsApp →</a>`;
        body.appendChild(linkMsg);
        body.scrollTop = body.scrollHeight;
      }, 500);
    }

    // Show quick buttons again after response
    quickBtns.style.display = 'flex';
  }, 600);

  body.scrollTop = body.scrollHeight;
}
