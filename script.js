// Project Management System

const projectsData = [
  {
    title: "WanderLust (Full-Stack like Airbnb)",
    description: "Full-stack wanderlust platform built for clean, maintainable code. Features user auth, property management, and rating system. Responsive design ensures seamless experience across all devices.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "EJS", "RESTAPI"],
    githubLink: "https://github.com/najishakhtar2378/WanderLustApps.git",
    liveLink: "https://wanderlustapps.onrender.com/listings",
    icon: "fas fa-home",
    status: "completed",
    category: "fullstack",
    features: [
      "User authentication and authorization",
      "CRUD operations for property listings",
      "Interactive review and ratings system",
      "Secure payment and booking structure representation"
    ],
    challenges: "Handling complex MongoDB queries for listing categories and implementing robust error handling for session-based user authentication using Passport.js."
  },
  {
    title: "ERP Management System (Quantivo ERP)",
    description: "Developed a full-featured ERP Management System using the MERN stack to efficiently manage a company's core business operations. Implemented secure authentication and role-based access control.",
    technologies: ["JavaScript", "React js", "Node.js", "MongoDB", "Express", "RESTAPI", "jwt"],
    githubLink: "https://github.com/najishakhtar2378/Enterprise_Resource_Planning_BusinessFrontend.git",
    liveLink: "https://enterprise-resource-planning-busine.vercel.app/login",
    icon: "fas fa-industry",
    status: "completed",
    category: "fullstack",
    features: [
      "Role-Based Access Control (Admin, Manager, Employee)",
      "Dynamic dashboards for inventory, sales, and employee status tracking",
      "JWT authentication with token refresh mechanism",
      "Comprehensive data exporting tools"
    ],
    challenges: "Designing clean API routers and securing endpoints based on user permissions while maintaining low response latency for complex data aggregation queries."
  },
  {
  title: "Game Go - Multiplayer Archery Game",
  description: "Developed a real-time multiplayer archery game using the MERN stack and Socket.IO. Implemented live player matchmaking, real-time gameplay synchronization, leaderboards, achievements, tournaments, and an in-game rewards system.",
  technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express", "Socket.IO", "REST API", "JWT"],
  githubLink: "https://github.com/najishakhtar2378/GamegoFrontend.git",
  liveLink: "https://gamego-frontend.vercel.app/",
  icon: "fas fa-gamepad",
  status: "completed",
  category: "fullstack",
  features: [
    "Real-time multiplayer gameplay using Socket.IO",
    "Player authentication and profile management with JWT",
    "Global leaderboard and ranking system",
    "Achievements, daily quests, and rewards system",
    "Tournament mode with AI and multiplayer competitions",
    "In-game shop for themes, trails, and visual customizations"
  ],
  challenges: "Implementing real-time game state synchronization between players using Socket.IO while maintaining smooth gameplay, low latency, and consistent scoring across different client devices."
},
  {
    title: "Video Conferencing App (Zoom Clone)",
    description: "A real-time app with a React frontend and Node.js + Express backend. Built a full-stack real-time video conferencing web app using WebRTC, React, and Socket.io.",
    technologies: ["React.js", "Node.js", "Express.js", "API", "socket.io", "webRTC", "mongoDB"],
    githubLink: "https://github.com/najishakhtar2378/zoomFrontend.git",
    liveLink: "https://zoom-frontend-inky.vercel.app/",
    icon: "fas fa-video",
    status: "completed",
    category: "fullstack",
    features: [
      "P2P live video & audio streaming using WebRTC",
      "Real-time text chat in meeting rooms using Socket.io",
      "Dynamic room creation with invitation links",
      "Participant list and meeting controls (mute, disable video, screen share)"
    ],
    challenges: "Synchronizing media stream tracks and handling connection handshakes between multiple peers under different network conditions (NAT traversal via STUN/TURN servers)."
  },
  {
    title: "Zerodha_Clone-website",
    description: "A Zerodha clone is a trading platform similar to Zerodha, offering equity/derivative trading, mutual funds, and real-time market data dashboard built with secure APIs and an easy UI.",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDb", "Full Stack", "Portfolio-Management", "react_dashboard"],
    githubLink: "https://github.com/najishakhtar2378/zerodha_dashboard.git",
    liveLink: "https://zerodha-frontend-gfnc.vercel.app",
    icon: "fas fa-chart-line",
    status: "completed",
    category: "fullstack",
    features: [
      "Interactive stock charts using Chart.js",
      "Simulated portfolio tracker with live P&L computation",
      "Add/modify watchlist and virtual order placement",
      "Modern dashboard styled with corporate-ready Bootstrap"
    ],
    challenges: "Updating portfolio calculations in real-time based on fluctuating simulated prices and keeping stock card changes smooth and lag-free."
  },
  {
    title: "Construction Website",
    description: "Web-based Construction Management System that simplifies the planning, tracking, and execution of construction projects. Provides sections like Services, Projects, Blog, and Contact.",
    technologies: ["CSS", "REACT", "BootStrap", "JavaScript"],
    githubLink: "https://github.com/najishakhtar2378/ConstructionWebsite.git",
    liveLink: "https://construction-website-1yb4.vercel.app/",
    icon: "fa-solid fa-hard-hat",
    status: "completed",
    category: "frontend",
    features: [
      "Beautiful structural service grids",
      "Dynamic construction project portfolios",
      "Interactive project updates blog cards",
      "Fully responsive corporate landing page design"
    ],
    challenges: "Designing custom fluid typography and spacing scales that look outstanding on both wide 4K screens and small handheld smartphones."
  },
  {
    title: "Post App (A social Media platform)",
    description: "A simple Post Management App built with React that allows users to create, edit, and delete posts in real time. It demonstrates state management, component reusability, and clean UI design.",
    technologies: ["REACT", "BootStrap", "JavaScript"],
    githubLink: "https://github.com/najishakhtar2378/PostApp.git",
    liveLink: "https://post-app-virid.vercel.app/#",
    icon: "fas fa-pen-nib",
    status: "completed",
    category: "frontend",
    features: [
      "Real-time local state CRUD actions",
      "Post feed search functionality",
      "Dynamic UI components with modern feedback states"
    ],
    challenges: "Structuring reusable, clean React state hooks to ensure simple data flow between parent and child elements without prop-drilling."
  },
  {
    title: "weather app",
    description: "A simple weather application that fetches real-time weather data based on user input using a public API.",
    technologies: ["React", "CSS", "API"],
    githubLink: "https://github.com/najishakhtar2378/weatherApp.git",
    liveLink: "https://weather-app-ten-self-95.vercel.app",
    icon: "fas fa-cloud-sun",
    status: "completed",
    category: "frontend",
    features: [
      "Real-time temperature, wind, and humidity stats",
      "Weather conditions based dynamic background changes",
      "Local timezone details rendering"
    ],
    challenges: "Integrating third-party APIs asynchronously, managing loading spinners, and designing fallback screens for invalid city search inputs."
  },
  {
    title: "Dictionary App",
    description: "A web-based dictionary application that provides definitions, synonyms, and translations for words using a public API.",
    technologies: ["React", "CSS", "API"],
    githubLink: "https://github.com/najishakhtar2378/DictionaryApp.git",
    liveLink: "https://dictionary-app-steel-five.vercel.app/",
    icon: "fas fa-book",
    status: "completed",
    category: "utility",
    features: [
      "Instant word lookup with multiple meanings",
      "Synonym / Antonym list grids",
      "Native text-to-speech audio player integrations"
    ],
    challenges: "Parsing heavily nested dictionary API payloads and handling speech synthesis browser differences."
  },
  {
    title: "To Do App",
    description: "A React-based To-Do app that allows users to add, complete, and delete tasks dynamically. Built with functional components and state management using React Hooks.",
    technologies: ["REACT", "Bootstrap"],
    githubLink: "https://github.com/najishakhtar2378/ToDoApp.git",
    liveLink: "https://to-do-app-kappa-sand.vercel.app/",
    icon: "fas fa-list-check",
    status: "completed",
    category: "utility",
    features: [
      "Add, edit, toggle, and delete task cards",
      "Task completion status visual indicators",
      "Persisted storage configurations"
    ],
    challenges: "Creating interactive check transitions and managing arrays within component state variables efficiently."
  },
  {
    title: "Tic-Tac Game",
    description: "Tic Tac Toe Game – A classic two-player strategy game built on a 3x3 grid where players alternate turns placing X or O. Features include win detection, draw handling, and game resets.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/najishakhtar2378/Tic-Tac.git",
    liveLink: "https://tic-tac-ih6v.vercel.app/",
    icon: "fas fa-gamepad",
    status: "completed",
    category: "utility",
    features: [
      "Dynamic turn indicators",
      "Game status tracker with win-line detection",
      "One-click game board resets"
    ],
    challenges: "Writing a clean matrix checking algorithm in JavaScript to check rows, columns, and diagonals for winner lines in under 8 lines of code."
  }
];

function renderProjects(projects = projectsData) {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div class="no-projects" style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
        <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-1);"></i>
        <p style="font-size: 1.1rem;">No projects found matching your search criteria.</p>
      </div>
    `;
    return;
  }

  let html = "";
  projects.forEach((project) => {
    // Find the original index of the project in projectsData so the details modal shows correct info
    const originalIndex = projectsData.findIndex(p => p.title === project.title);

    const techTags = project.technologies
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join("");

    const liveLinkHtml = project.liveLink
      ? `<a href="${project.liveLink}" target="_blank" class="project-link">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>`
      : "";

    html += `
      <div class="project-card animate-on-scroll" data-tilt>
        <div class="tilt-glare"></div>
        <div class="project-header">
          <h3 class="project-title">
            <i class="${project.icon}"></i> ${project.title}
          </h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${techTags}
          </div>
          <div class="project-status ${project.status === "completed" ? "status-completed" : "status-progress"
      }">
            ${project.status === "completed" ? "✅ Completed" : "🚧 In Progress"}
          </div>
        </div>
        <div class="project-links">
          <button onclick="openProjectModal(${originalIndex})" class="project-link btn-details-modal" style="cursor: pointer; background: transparent; text-align: left; width: auto; font-family: inherit; font-size: inherit;">
            <i class="fas fa-info-circle"></i> Details
          </button>
          <a href="${project.githubLink}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> GitHub
          </a>
          ${liveLinkHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Re-initialize tilt effect on newly rendered cards
  initializeTiltEffect();
}


function initializeProjectsFiltering() {
  const searchInput = document.getElementById("projectSearch");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!searchInput || filterBtns.length === 0) return;

  let activeFilter = "all";
  let activeSearch = "";

  function filterProjects() {
    const filtered = projectsData.filter((project) => {
      const matchesCategory = activeFilter === "all" || project.category === activeFilter;
      const matchesSearch =
        project.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
        project.description.toLowerCase().includes(activeSearch.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(activeSearch.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });

    renderProjects(filtered);

    // Reinitialize scroll animations for new elements
    setTimeout(() => {
      initializeScrollAnimations();
    }, 50);
  }

  // Bind search input events
  searchInput.addEventListener("input", (e) => {
    activeSearch = e.target.value;
    filterProjects();
  });

  // Bind filter button click events
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      filterProjects();
    });
  });
} // Global variables
let particles = [];
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Projects data - Easy to modify and add new projects
// Just add new project objects to this array to display them on your website

// Loading animation
// Create loading screen immediately so it displays while images/dependencies load
const loading = document.createElement("div");
loading.className = "loading";
loading.innerHTML = '<div class="loader"></div>';
document.body.appendChild(loading);

// Hide loading screen after page loads
window.addEventListener("load", function () {
  setTimeout(() => {
    loading.classList.add("hidden");
    setTimeout(() => loading.remove(), 500);
  }, 1000);
});

// Particle system
function initializeParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }

  // Create new particles periodically
  setInterval(() => {
    if (particles.length < particleCount) {
      createParticle(particlesContainer);
    }
  }, 2000);
}

function createParticle(container) {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Random position and properties
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 6 + "s";
  particle.style.animationDuration = Math.random() * 3 + 3 + "s";

  container.appendChild(particle);
  particles.push(particle);

  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
      particles.splice(particles.indexOf(particle), 1);
    }
  }, 8000);
}

// Navigation functionality
function initializeNavigation() {
  // Scroll effect for navbar
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking on links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Active navigation highlighting
  window.addEventListener("scroll", updateActiveNavigation);
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  const animatedElements = document.querySelectorAll(
    ".stat-card, .skill-category, .project-card, .about-text,.contact-info, .contact-form"
  );

  animatedElements.forEach((element, index) => {
    element.classList.add("animate-on-scroll");
    element.style.animationDelay = index * 0.1 + "s";
    observer.observe(element);
  });

  // Observe timeline items for the Journey timeline
  const timelineObserverOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  };

  const timelineObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, timelineObserverOptions);

  document.querySelectorAll(".timeline-item").forEach((item) => {
    timelineObserver.observe(item);
  });
}
// Typing effect for hero section
function initializeTypingEffect() {
  const titles = [
    "Backend Enthusiast",
    "DSA ",
    "Problem Solver",
    "Full Stack Developer",
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const subtitleElement = document.querySelector(".hero .subtitle");

  if (!subtitleElement) return;

  function typeWriter() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      subtitleElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      subtitleElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 500; // Pause before next title
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typing effect after a delay
  setTimeout(typeWriter, 2000);
}

// Counter animation for stats
function initializeCounterAnimation() {
  const counters = document.querySelectorAll(".stat-number");

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.textContent);
  const increment = target / 50;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent =
        target + (element.textContent.includes("+") ? "+" : "");
      clearInterval(timer);
    } else {
      element.textContent =
        Math.ceil(current) + (element.textContent.includes("+") ? "+" : "");
    }
  }, 40);
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  // Initialize EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init({
      publicKey: "4rW9aeRkvhuW-QdQA",
    });
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Basic validation
    if (!name || !email || !subject || !message) {
      showNotification("Please fill in all fields", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    // Form submission UI updates
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    // Send using EmailJS
    if (typeof emailjs !== "undefined") {
      emailjs
        .send("service_dd06nse", "template_790bs57", {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        })
        .then(function () {
          showNotification("Message sent successfully! ✅", "success");
          contactForm.reset();
          // Clear validation classes
          contactForm.querySelectorAll("input, textarea").forEach((input) => {
            input.classList.remove("success", "error");
          });
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
        })
        .catch(function (error) {
          console.error("EmailJS Error:", error);
          showNotification(error.text || "Failed to send message ❌", "error");
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
        });
    } else {
      showNotification("Email service not available. Try again later.", "error");
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });

  // Real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        validateField(this);
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();

  field.classList.remove("error", "success");

  if (!value) {
    field.classList.add("error");
    return false;
  }

  if (field.type === "email" && !isValidEmail(value)) {
    field.classList.add("error");
    return false;
  }

  field.classList.add("success");
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type) {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
    }"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success"
      ? "rgba(0, 212, 255, 0.9)"
      : "rgba(255, 0, 110, 0.9)"
    };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid ${type === "success"
      ? "rgba(0, 212, 255, 0.3)"
      : "rgba(255, 0, 110, 0.3)"
    };
    `;

  document.body.appendChild(notification);

  // Close functionality
  const closeButton = notification.querySelector(".notification-close");
  closeButton.addEventListener("click", () => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Add notification animations to CSS dynamically
const notificationStyles = document.createElement("style");
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ff006e;
        background: rgba(255, 0, 110, 0.1);
    }
    
    .form-group input.success,
    .form-group textarea.success {
        border-color: #00d4ff;
        background: rgba(0, 212, 255, 0.1);
    }
`;
document.head.appendChild(notificationStyles);

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Performance optimizations
window.addEventListener(
  "scroll",
  throttle(function () {
    // Update active navigation and other scroll-based effects
    updateActiveNavigation();
  }, 100)
);

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.keyCode);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.toString() === konamiSequence.toString()) {
    activateEasterEgg();
    konamiCode = [];
  }
});

function activateEasterEgg() {
  // Add rainbow effect to the page
  document.body.style.animation = "rainbow 2s infinite";

  // Add rainbow animation
  const rainbowStyles = document.createElement("style");
  rainbowStyles.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
  document.head.appendChild(rainbowStyles);

  showNotification(
    '🎉 Easter egg activated! "I solve DSA problems for fun... and sometimes dream in JavaScript." 😄',
    "success"
  );

  // Remove effect after 5 seconds
  setTimeout(() => {
    document.body.style.animation = "";
    rainbowStyles.remove();
  }, 5000);
}

// Back to Top Button Functionality
function initializeBackToTop() {
  let backToTopBtn = document.querySelector('.back-to-top');

  // Create button if it doesn't exist
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.classList.add('back-to-top');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
  }

  // Show/hide button on scroll
  window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, 100));

  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize back to top when DOM is ready
document.addEventListener('DOMContentLoaded', initializeBackToTop);

// Console message for developers
console.log(`
███╗   ██╗ █████╗        ██╗    ██╗███████╗██╗  ██╗
████╗  ██║██╔══██╗       ██║    ██║██╔════╝██║  ██║
██╔██╗ ██║███████║       ██║    ██║███████╗███████║
██║╚██╗██║██╔══██║       ██║    ██║╚════██║██╔══██║
██║ ╚████║██║  ██║  ███████╗    ██║███████║██║  ██║
╚═╝  ╚═══╝╚═╝  ╚═╝  ╚══════╝    ╚═╝╚══════╝╚═╝  ╚═╝

  
    
    Hello, fellow developer! 👋
    Thanks for checking out my portfolio.
    
    "I solve DSA problems for fun... and sometimes dream in JavaScript." 😄
    
    Try the Konami code: ↑↑↓↓←→←→BA
    
    Let's connect: najishchamparni2003@gmail.com
`);

// ==================== LEETCODE LIVE LOADING ====================
function loadLeetCodeStats() {
  const totalEl = document.getElementById("lcTotal");
  const easyEl = document.getElementById("lcEasy");
  const mediumEl = document.getElementById("lcMedium");
  const hardEl = document.getElementById("lcHard");

  const easyBar = document.getElementById("lcEasyBar");
  const mediumBar = document.getElementById("lcMediumBar");
  const hardBar = document.getElementById("lcHardBar");

  if (!totalEl) return;

  // Fallback defaults
  const fallback = {
    totalSolved: 585,
    easySolved: 344,
    totalEasy: 954,
    mediumSolved: 228,
    totalMedium: 2084,
    hardSolved: 13,
    totalHard: 953,
    ranking: 142831,
    acceptanceRate: 55.4,
    contributionPoint: 1413
  };

  function updateUI(data) {
    // 1. Update Main Card Stats
    totalEl.textContent = data.totalSolved + "+";
    easyEl.textContent = data.easySolved;
    mediumEl.textContent = data.mediumSolved;
    hardEl.textContent = data.hardSolved;

    const sum = data.easySolved + data.mediumSolved + data.hardSolved || 1;
    const easyPct = Math.round((data.easySolved / sum) * 100);
    const mediumPct = Math.round((data.mediumSolved / sum) * 100);
    const hardPct = Math.round((data.hardSolved / sum) * 100);

    easyBar.style.width = easyPct + "%";
    mediumBar.style.width = mediumPct + "%";
    hardBar.style.width = hardPct + "%";

    // 2. Update Modal Dashboard Details
    const modalTotal = document.getElementById("modalLcTotal");
    const modalRanking = document.getElementById("modalLcRanking");
    const modalAcceptance = document.getElementById("modalLcAcceptance");
    const modalContributions = document.getElementById("modalLcContributions");

    const modalEasyVal = document.getElementById("modalLcEasy");
    const modalEasyTotal = document.getElementById("modalLcTotalEasy");
    const modalEasyBarFill = document.getElementById("modalLcEasyBar");

    const modalMediumVal = document.getElementById("modalLcMedium");
    const modalMediumTotal = document.getElementById("modalLcTotalMedium");
    const modalMediumBarFill = document.getElementById("modalLcMediumBar");

    const modalHardVal = document.getElementById("modalLcHard");
    const modalHardTotal = document.getElementById("modalLcTotalHard");
    const modalHardBarFill = document.getElementById("modalLcHardBar");

    if (modalTotal) modalTotal.textContent = data.totalSolved;
    if (modalRanking) modalRanking.textContent = data.ranking ? "#" + data.ranking.toLocaleString() : "N/A";
    if (modalAcceptance) modalAcceptance.textContent = data.acceptanceRate ? data.acceptanceRate + "%" : "55.4%";
    if (modalContributions) modalContributions.textContent = data.contributionPoint ? data.contributionPoint.toLocaleString() : "1,250";

    // Difficulty breakdown updates
    const tEasy = data.totalEasy || 820;
    const tMedium = data.totalMedium || 1680;
    const tHard = data.totalHard || 815;

    if (modalEasyVal) modalEasyVal.textContent = data.easySolved;
    if (modalEasyTotal) modalEasyTotal.textContent = tEasy;
    if (modalEasyBarFill) modalEasyBarFill.style.width = Math.min((data.easySolved / tEasy) * 100, 100) + "%";

    if (modalMediumVal) modalMediumVal.textContent = data.mediumSolved;
    if (modalMediumTotal) modalMediumTotal.textContent = tMedium;
    if (modalMediumBarFill) modalMediumBarFill.style.width = Math.min((data.mediumSolved / tMedium) * 100, 100) + "%";

    if (modalHardVal) modalHardVal.textContent = data.hardSolved;
    if (modalHardTotal) modalHardTotal.textContent = tHard;
    if (modalHardBarFill) modalHardBarFill.style.width = Math.min((data.hardSolved / tHard) * 100, 100) + "%";

    // 3. SVG Rings Calculations & Offsets
    // Easy (Radius: 45, Circ: 282.74)
    const ringEasy = document.getElementById("chartEasyRing");
    if (ringEasy) {
      const circEasy = 282.74;
      const pctEasy = Math.min(data.easySolved / tEasy, 1);
      ringEasy.style.strokeDashoffset = circEasy - (circEasy * pctEasy);
    }

    // Medium (Radius: 33, Circ: 207.35)
    const ringMedium = document.getElementById("chartMediumRing");
    if (ringMedium) {
      const circMedium = 207.35;
      const pctMedium = Math.min(data.mediumSolved / tMedium, 1);
      ringMedium.style.strokeDashoffset = circMedium - (circMedium * pctMedium);
    }

    // Hard (Radius: 21, Circ: 131.95)
    const ringHard = document.getElementById("chartHardRing");
    if (ringHard) {
      const circHard = 131.95;
      const pctHard = Math.min(data.hardSolved / tHard, 1);
      ringHard.style.strokeDashoffset = circHard - (circHard * pctHard);
    }
  }

  fetch("https://leetcode-stats-api.herokuapp.com/najishakhtarCoder123")
    .then(response => {
      if (!response.ok) throw new Error("Network status error");
      return response.json();
    })
    .then(data => {
      if (data && data.status === "success") {
        updateUI(data);
      } else {
        throw new Error("API responded with error");
      }
    })
    .catch(err => {
      console.warn("Could not load live LeetCode stats, using fallback:", err);
      updateUI(fallback);
    });
}

// ==================== GITHUB STATS LOADING ====================
function initializeGitHubStats() {
  const repoGrid = document.getElementById("githubReposGrid");
  const overviewCards = document.querySelectorAll(".github-overview-card");

  if (!repoGrid) return;

  const username = "najishakhtar2378";

  // 1. Fetch user profile stats
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) throw new Error("User API error");
      return response.json();
    })
    .then(profile => {
      // Update Overview stats dynamically
      overviewCards.forEach(card => {
        const titleEl = card.querySelector("h3");
        if (!titleEl) return;
        const title = titleEl.textContent;
        const numberEl = card.querySelector(".stat-number");

        if (title.includes("Repositories") && numberEl) {
          numberEl.textContent = profile.public_repos;
        } else if (title.includes("Followers") && numberEl) {
          numberEl.textContent = profile.followers;
        }
      });
    })
    .catch(err => console.warn("Could not load dynamic GitHub profile info:", err));

  // 2. Fetch user repositories
  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`)
    .then(response => {
      if (!response.ok) throw new Error("Repos API error");
      return response.json();
    })
    .then(repos => {
      // Sort repos by stars + forks to find the most popular/relevant ones
      const sortedRepos = repos
        .filter(repo => !repo.fork) // ignore forked repos
        .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
        .slice(0, 4); // get top 4

      // Calculate total stars across top repos
      const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

      // Update stars number in overview cards
      overviewCards.forEach(card => {
        const titleEl = card.querySelector("h3");
        if (!titleEl) return;
        const title = titleEl.textContent;
        const numberEl = card.querySelector(".stat-number");
        if (title.includes("Stars") && numberEl) {
          numberEl.textContent = totalStars;
        }
      });

      // Render featured repositories
      renderGitHubRepos(sortedRepos);
    })
    .catch(err => {
      console.warn("Could not load dynamic GitHub repos, using fallback:", err);
      renderGitHubReposFallback();
    });

  function renderGitHubRepos(repos) {
    if (repos.length === 0) {
      repoGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 1.5rem;">
          No public repositories found.
        </div>
      `;
      return;
    }

    let html = "";
    repos.forEach(repo => {
      const desc = repo.description || "No description provided.";
      const lang = repo.language || "JavaScript";

      html += `
        <div class="github-repo-card animate-on-scroll" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.3s ease;">
          <div class="repo-card-top">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
              <i class="fab fa-github" style="font-size: 1.2rem; color: var(--accent-1);"></i>
              <h4 style="margin: 0; font-size: 1.05rem;">
                <a href="${repo.html_url}" target="_blank" style="color: var(--text-primary); text-decoration: none; transition: color 0.2s ease;">${repo.name}</a>
              </h4>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.2rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.6rem;">${desc}</p>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 0.8rem;">
            <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--text-secondary);">
              <span class="lang-dot" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: ${getLangColor(lang)};"></span>
              ${lang}
            </span>
            <div style="display: flex; gap: 0.8rem; color: var(--text-secondary);">
              <span style="display: flex; align-items: center; gap: 0.3rem;"><i class="fas fa-star" style="color: #ffcc00;"></i> ${repo.stargazers_count}</span>
              <span style="display: flex; align-items: center; gap: 0.3rem;"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    repoGrid.innerHTML = html;

    // Apply scroll animations
    setTimeout(() => {
      initializeScrollAnimations();
    }, 50);
  }

  function renderGitHubReposFallback() {
    const manualRepos = [
      {
        name: "WanderLustApps",
        html_url: "https://github.com/najishakhtar2378/WanderLustApps",
        description: "Full-stack wanderlust platform built with EJS, Express, Node.js, and MongoDB.",
        language: "JavaScript",
        stargazers_count: 5,
        forks_count: 2
      },
      {
        name: "erpmanagemntSystemFrontend",
        html_url: "https://github.com/najishakhtar2378/erpmanagemntSystemFrontend",
        description: "ERP System frontend built with React, Axios, and Bootstrap.",
        language: "React",
        stargazers_count: 4,
        forks_count: 1
      },
      {
        name: "zoomFrontend",
        html_url: "https://github.com/najishakhtar2378/zoomFrontend",
        description: "Zoom clone built using WebRTC, Socket.io, React and Express.",
        language: "JavaScript",
        stargazers_count: 3,
        forks_count: 0
      },
      {
        name: "zerodha_dashboard",
        html_url: "https://github.com/najishakhtar2378/zerodha_dashboard",
        description: "A clone of Zerodha's trading dashboard, utilizing Chart.js and React.",
        language: "React",
        stargazers_count: 2,
        forks_count: 0
      }
    ];
    renderGitHubRepos(manualRepos);
  }

  function getLangColor(lang) {
    const colors = {
      "JavaScript": "#f1e05a",
      "HTML": "#e34c26",
      "CSS": "#563d7c",
      "TypeScript": "#3178c6",
      "Python": "#3572A5",
      "Java": "#b07219",
      "C++": "#f34b7d",
      "React": "#61dafb",
      "Vue": "#41b883"
    };
    return colors[lang] || "#888888";
  }
}

// ==================== GLASSMORPHISM CUSTOM MODAL ====================
function openCustomModal(contentHtml) {
  const modal = document.getElementById("customModal");
  const modalContent = document.getElementById("modalContent");

  if (!modal || !modalContent) return;

  modalContent.innerHTML = contentHtml;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

// Global scope close function (triggered by onclick in HTML)
window.closeCustomModal = function () {
  const modal = document.getElementById("customModal");
  if (!modal) return;

  // Clear running sandbox intervals or camera streams on close
  if (window.sandboxInterval) {
    clearInterval(window.sandboxInterval);
    window.sandboxInterval = null;
  }
  if (window.localMediaStream) {
    window.localMediaStream.getTracks().forEach(track => track.stop());
    window.localMediaStream = null;
  }

  modal.classList.remove("show");
  document.body.style.overflow = "";

  setTimeout(() => {
    const modalContent = document.getElementById("modalContent");
    if (modalContent) modalContent.innerHTML = "";
  }, 300);
};

// Escape key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closeCustomModal();
  }
});

// Render Project Details Modal Content
// Render Project Details Modal Content
window.openProjectModal = function (index) {
  const project = projectsData[index];
  if (!project) return;

  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  const featureItems = project.features
    ? project.features.map(f => `<li>${f}</li>`).join("")
    : "<li>Full stack engineering implementation</li>";

  const challengesText = project.challenges || "Optimizing layout performance and resolving multi-browser UI glitches.";

  const liveLinkHtml = project.liveLink
    ? `<a href="${project.liveLink}" target="_blank" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem; border-radius: 30px;">
        <i class="fas fa-external-link-alt"></i> Live Demo
       </a>`
    : "";

  const contentHtml = `
    <!-- Modal Navigation Tabs -->
    <div class="modal-tabs">
      <button class="modal-tab active" onclick="switchProjectModalTab('details', ${index})">
        <i class="fas fa-info-circle"></i> Details
      </button>
      <button class="modal-tab" onclick="switchProjectModalTab('sandbox', ${index})">
        <i class="fas fa-laptop-code"></i> Live Sandbox
      </button>
    </div>

    <!-- Details View -->
    <div id="modalDetailsView" class="modal-tab-content active">
      <h3 class="modal-project-title">
        <i class="${project.icon}"></i> ${project.title}
      </h3>
      <div style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-top: 1rem;">
        <p>${project.description}</p>
      </div>
      
      <div class="modal-section">
        <h4>Key Features</h4>
        <ul class="modal-feature-list" style="margin-top: 0.5rem; padding-left: 0;">
          ${featureItems}
        </ul>
      </div>
      
      <div class="modal-section">
        <h4>Technical Challenges & Solutions</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-top: 0.5rem;">${challengesText}</p>
      </div>
      
      <div class="modal-section">
        <h4>Technologies Used</h4>
        <div class="modal-tech-grid" style="margin-top: 0.8rem;">
          ${techTags}
        </div>
      </div>
      
      <div class="modal-links" style="display: flex; gap: 1rem; margin-top: 2rem;">
        <a href="${project.githubLink}" target="_blank" class="btn btn-secondary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem; border-radius: 30px;">
          <i class="fab fa-github"></i> View Code
        </a>
        ${liveLinkHtml}
      </div>
    </div>

    <!-- Sandbox View -->
    <div id="modalSandboxView" class="modal-tab-content">
      <!-- Generated Dynamically by JS -->
    </div>
  `;

  openCustomModal(contentHtml);
};

// Switch Project Modal Tab
window.switchProjectModalTab = function (tabName, index) {
  const tabs = document.querySelectorAll(".modal-tab");
  const detailsView = document.getElementById("modalDetailsView");
  const sandboxView = document.getElementById("modalSandboxView");

  if (!tabs.length || !detailsView || !sandboxView) return;

  tabs.forEach(t => t.classList.remove("active"));

  // Clear any running interval or stream
  if (window.sandboxInterval) {
    clearInterval(window.sandboxInterval);
    window.sandboxInterval = null;
  }
  if (window.localMediaStream) {
    window.localMediaStream.getTracks().forEach(track => track.stop());
    window.localMediaStream = null;
  }

  if (tabName === 'details') {
    tabs[0].classList.add("active");
    detailsView.classList.add("active");
    sandboxView.classList.remove("active");
  } else if (tabName === 'sandbox') {
    tabs[1].classList.add("active");
    detailsView.classList.remove("active");
    sandboxView.classList.add("active");
    renderProjectSandbox(index);
  }
};

function renderProjectSandbox(index) {
  const sandboxView = document.getElementById("modalSandboxView");
  if (!sandboxView) return;

  const project = projectsData[index];
  if (!project) return;

  sandboxView.innerHTML = `<div class="sandbox-container" id="sandboxContainer"></div>`;
  const container = document.getElementById("sandboxContainer");

  // Determine sandbox by index or title
  if (index === 0) {
    renderWanderLustSandbox(container);
  } else if (index === 1) {
    renderERPSandbox(container);
  } else if (index === 2) {
    renderZoomSandbox(container);
  } else if (index === 3) {
    renderZerodhaSandbox(container);
  } else {
    renderGenericSandbox(container, project);
  }
}

function renderWanderLustSandbox(container) {
  container.innerHTML = `
    <h3><i class="fas fa-home" style="color: var(--accent-1);"></i> WanderLust Listing Playground</h3>
    <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem;">
      Simulate adding properties to the WanderLust database. Add your property details and watch it render in real-time in the Mock Listings Grid.
    </p>
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 1.2rem; align-items: start;">
      <!-- Form Panel -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.2rem;">
        <h4 style="font-size: 0.9rem; margin-bottom: 0.8rem; color: var(--text-primary);">Add New Listing</h4>
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          <div>
            <label style="display: block; font-size: 0.75rem; font-weight: 600; margin-bottom: 3px;">Title</label>
            <input type="text" id="wlTitle" placeholder="e.g. Cozy Beach House" value="Luxury Glass Villa" style="width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem;" />
          </div>
          <div>
            <label style="display: block; font-size: 0.75rem; font-weight: 600; margin-bottom: 3px;">Location</label>
            <input type="text" id="wlLocation" placeholder="e.g. California, USA" value="Malibu, California" style="width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem;" />
          </div>
          <div>
            <label style="display: block; font-size: 0.75rem; font-weight: 600; margin-bottom: 3px;">Price per Night (₹)</label>
            <input type="number" id="wlPrice" placeholder="e.g. 15000" value="25000" style="width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem;" />
          </div>
          <div>
            <label style="display: block; font-size: 0.75rem; font-weight: 600; margin-bottom: 3px;">Select Mock Image</label>
            <select id="wlImage" style="width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.8rem; cursor: pointer;">
              <option value="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80">Luxury Beach Villa</option>
              <option value="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80">Modern Hotel Suite</option>
              <option value="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=300&q=80">Forest Treehouse</option>
            </select>
          </div>
          <button id="wlSubmitBtn" class="btn btn-primary" style="width: 100%; font-size: 0.8rem; border-radius: 8px; justify-content: center; padding: 0.5rem;">
            <i class="fas fa-plus"></i> Publish Mock Listing
          </button>
        </div>
      </div>
      
      <!-- Mock Grid Output -->
      <div>
        <h4 style="font-size: 0.9rem; margin-bottom: 0.8rem; color: var(--text-primary);">Mock Listings Live Grid</h4>
        <div id="wlGrid" style="display: flex; flex-direction: column; gap: 0.8rem; max-height: 280px; overflow-y: auto; padding-right: 4px;">
          <!-- Default listing items -->
        </div>
      </div>
    </div>
  `;

  const defaultListings = [
    {
      title: "Cozy Wood Cabin",
      location: "Shimla, India",
      price: "8,500",
      image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Seaside Penthouse",
      location: "Goa, India",
      price: "18,000",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80"
    }
  ];

  function renderListings(arr) {
    const grid = document.getElementById("wlGrid");
    if (!grid) return;
    grid.innerHTML = arr.map(item => `
      <div style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 10px; overflow: hidden; display: flex; gap: 0.8rem;">
        <img src="${item.image}" style="width: 90px; height: 75px; object-fit: cover; flex-shrink:0;" />
        <div style="padding: 0.5rem; flex: 1; min-width: 0;">
          <h5 style="font-size: 0.82rem; margin: 0; color: var(--text-primary); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${item.title}</h5>
          <p style="font-size: 0.72rem; color: var(--text-secondary); margin: 2px 0 6px 0;"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-1);">₹${item.price} <span style="font-weight:500; font-size:0.68rem; color:var(--text-secondary);">/ night</span></div>
        </div>
      </div>
    `).join("");
  }

  renderListings(defaultListings);

  document.getElementById("wlSubmitBtn").addEventListener("click", () => {
    const titleVal = document.getElementById("wlTitle").value.trim();
    const locationVal = document.getElementById("wlLocation").value.trim();
    const priceVal = document.getElementById("wlPrice").value.trim();
    const imageVal = document.getElementById("wlImage").value;

    if (!titleVal || !locationVal || !priceVal) {
      alert("Please fill all fields!");
      return;
    }

    const priceFormatted = Number(priceVal).toLocaleString('en-IN');
    defaultListings.unshift({
      title: titleVal,
      location: locationVal,
      price: priceFormatted,
      image: imageVal
    });

    renderListings(defaultListings);

    document.getElementById("wlTitle").value = "";
    document.getElementById("wlLocation").value = "";
    document.getElementById("wlPrice").value = "";
  });
}

function renderERPSandbox(container) {
  container.innerHTML = `
    <h3><i class="fas fa-industry" style="color: var(--accent-1);"></i> Quantivo ERP Management Panel</h3>
    <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem;">
      Toggle Role permissions and perform live actions. The sidebar and accessible screens dynamically adapt to the selected security profile.
    </p>
    
    <div class="erp-role-selector">
      <button class="erp-role-btn active" id="btnRoleAdmin" onclick="switchERPRole('Admin')">Admin</button>
      <button class="erp-role-btn" id="btnRoleSales" onclick="switchERPRole('Sales')">Sales Team</button>
      <button class="erp-role-btn" id="btnRoleManager" onclick="switchERPRole('Manager')">Manager</button>
    </div>

    <div class="erp-sandbox-layout">
      <!-- ERP Sidebar -->
      <div class="erp-sidebar">
        <h4>Modules</h4>
        <button class="erp-sidebar-btn enabled active" id="erpModDashboard" onclick="switchERPScreen('Dashboard')">
          <i class="fas fa-chart-line"></i> Dashboard
        </button>
        <button class="erp-sidebar-btn enabled" id="erpModInventory" onclick="switchERPScreen('Inventory')">
          <i class="fas fa-boxes"></i> Inventory
        </button>
        <button class="erp-sidebar-btn" id="erpModSales" onclick="switchERPScreen('Sales')">
          <i class="fas fa-cash-register"></i> Sales Orders
        </button>
        <button class="erp-sidebar-btn" id="erpModProcurement" onclick="switchERPScreen('Procurement')">
          <i class="fas fa-shopping-cart"></i> Procurement (POs)
        </button>
      </div>

      <!-- ERP Screen Panel -->
      <div class="erp-main-panel" id="erpMainPanel">
        <!-- Rendered dynamically -->
      </div>
    </div>

    <!-- ERP Audit Terminal -->
    <div style="background: #090d16; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 1rem; font-family: monospace; font-size: 0.75rem; color: #10b981; max-height: 80px; overflow-y: auto;">
      <div id="erpAuditConsole"><strong>System Console:</strong> Welcome. Authentication Success. Role set to Admin.</div>
    </div>
  `;

  let currentRole = "Admin";
  let currentScreen = "Dashboard";
  let poCounter = 1;
  let orderCounter = 1;

  const erpData = {
    poList: [
      { id: "PO-1001", item: "Steel Rods", qty: 250, status: "Pending" }
    ],
    salesOrders: [
      { id: "SO-5001", customer: "BuildTech Corp", amount: "₹4,50,000", status: "Processed" }
    ]
  };

  window.switchERPRole = function (role) {
    currentRole = role;

    document.querySelectorAll(".erp-role-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`btnRole${role}`).classList.add("active");

    const btnInventory = document.getElementById("erpModInventory");
    const btnSales = document.getElementById("erpModSales");
    const btnProcurement = document.getElementById("erpModProcurement");

    btnInventory.className = "erp-sidebar-btn";
    btnSales.className = "erp-sidebar-btn";
    btnProcurement.className = "erp-sidebar-btn";

    if (role === "Admin") {
      btnInventory.classList.add("enabled");
      btnSales.classList.add("enabled");
      btnProcurement.classList.add("enabled");
    } else if (role === "Sales") {
      btnSales.classList.add("enabled");
    } else if (role === "Manager") {
      btnInventory.classList.add("enabled");
      btnProcurement.classList.add("enabled");
    }

    addAuditLog(`Role switched to ${role}. Module permissions reloaded.`);
    switchERPScreen("Dashboard");
  };

  window.switchERPScreen = function (screen) {
    if (screen === "Inventory" && currentRole === "Sales") return;
    if (screen === "Sales" && currentRole === "Manager") return;
    if (screen === "Procurement" && currentRole === "Sales") return;

    currentScreen = screen;

    document.querySelectorAll(".erp-sidebar-btn").forEach(btn => btn.classList.remove("active"));
    if (screen === "Dashboard") document.getElementById("erpModDashboard").classList.add("active");
    if (screen === "Inventory") document.getElementById("erpModInventory").classList.add("active");
    if (screen === "Sales") document.getElementById("erpModSales").classList.add("active");
    if (screen === "Procurement") document.getElementById("erpModProcurement").classList.add("active");

    renderScreenContent();
  };

  function addAuditLog(text) {
    const consoleEl = document.getElementById("erpAuditConsole");
    if (consoleEl) {
      consoleEl.innerHTML += `<br><strong>[LOG ${new Date().toLocaleTimeString()}]:</strong> ${text}`;
      consoleEl.parentElement.scrollTop = consoleEl.parentElement.scrollHeight;
    }
  }

  function renderScreenContent() {
    const panel = document.getElementById("erpMainPanel");
    if (!panel) return;

    if (currentScreen === "Dashboard") {
      panel.innerHTML = `
        <h4 style="margin:0; font-size: 1rem;">System Overview Dashboard</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-top: 0.5rem;">
          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-color); padding: 0.8rem; border-radius: 8px; text-align: center;">
            <div style="font-size: 0.72rem; color: var(--text-secondary);">Active Role</div>
            <div style="font-size: 1rem; font-weight:700; color: var(--accent-1); margin-top: 4px;">${currentRole}</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-color); padding: 0.8rem; border-radius: 8px; text-align: center;">
            <div style="font-size: 0.72rem; color: var(--text-secondary);">Sales Orders</div>
            <div style="font-size: 1rem; font-weight:700; color: var(--accent-2); margin-top: 4px;">${erpData.salesOrders.length}</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-color); padding: 0.8rem; border-radius: 8px; text-align: center;">
            <div style="font-size: 0.72rem; color: var(--text-secondary);">Open POs</div>
            <div style="font-size: 1rem; font-weight:700; color: #10b981; margin-top: 4px;">${erpData.poList.length}</div>
          </div>
        </div>
        <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin-top: 0.5rem;">
          Quantivo ERP aggregates multi-departmental logs. Change your user role above to access other departments in the left sidebar menu.
        </p>
      `;
    } else if (currentScreen === "Inventory") {
      panel.innerHTML = `
        <h4 style="margin:0; font-size: 1rem;">Warehouse Inventory Status</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; border-bottom:1px dashed var(--border-color); padding-bottom:4px;">
            <span>Steel Rods (Tons)</span><strong>480 T</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; border-bottom:1px dashed var(--border-color); padding-bottom:4px;">
            <span>Cement Bags</span><strong>12,450 Bags</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; border-bottom:1px dashed var(--border-color); padding-bottom:4px;">
            <span>Concrete Mixers</span><strong>14 Units</strong>
          </div>
        </div>
        ${currentRole === "Admin" ? `
          <button onclick="addInventoryItem()" class="btn btn-primary" style="font-size:0.75rem; border-radius:6px; padding:0.4rem 0.8rem; margin-top: 0.5rem;">
            <i class="fas fa-plus"></i> Replenish Mock Cement Stock (+500 Bags)
          </button>
        ` : `<div style="font-size: 0.72rem; color: var(--text-secondary); font-style:italic;">Manager has Read-Only permissions for inventory.</div>`}
      `;
      window.addInventoryItem = function () {
        addAuditLog("Admin triggered Inventory Replenishment: +500 cement bags.");
        alert("Inventory updated!");
      };
    } else if (currentScreen === "Sales") {
      const ordersHtml = erpData.salesOrders.map(o => `
        <div style="display:flex; justify-content:space-between; font-size: 0.78rem; padding: 0.4rem 0; border-bottom: 1px solid var(--border-color);">
          <span><strong>${o.id}</strong> - ${o.customer}</span>
          <span style="color:var(--accent-1);">${o.amount}</span>
        </div>
      `).join("");

      panel.innerHTML = `
        <h4 style="margin:0; font-size: 1rem;">Customer Sales Orders</h4>
        <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem; max-height: 120px; overflow-y:auto;">
          ${ordersHtml}
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:0.8rem;">
          <button onclick="createMockSalesOrder()" class="btn btn-primary" style="font-size:0.75rem; border-radius:6px; padding:0.4rem 0.8rem;">
            <i class="fas fa-cart-plus"></i> Create Mock Customer Order
          </button>
        </div>
      `;
      window.createMockSalesOrder = function () {
        const id = "SO-" + (5000 + ++orderCounter);
        const amount = "₹" + (Math.floor(Math.random() * 5) + 1) + ",50,000";
        erpData.salesOrders.push({ id, customer: "Local Builder Ltd", amount, status: "Processed" });
        addAuditLog(`Sales Order ${id} created for ${amount}.`);
        renderScreenContent();
      };
    } else if (currentScreen === "Procurement") {
      const poHtml = erpData.poList.map(po => `
        <div style="display:flex; justify-content:space-between; font-size: 0.78rem; padding: 0.4rem 0; border-bottom: 1px solid var(--border-color);">
          <span><strong>${po.id}</strong> - ${po.item} (${po.qty} units)</span>
          <span style="color:#f59e0b; font-weight:700;">${po.status}</span>
        </div>
      `).join("");

      panel.innerHTML = `
        <h4 style="margin:0; font-size: 1rem;">Purchase Orders to Vendors</h4>
        <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem; max-height: 120px; overflow-y:auto;">
          ${poHtml}
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:0.8rem;">
          <button onclick="raiseMockPO()" class="btn btn-primary" style="font-size:0.75rem; border-radius:6px; padding:0.4rem 0.8rem; background: linear-gradient(135deg, #f59e0b, #d97706);">
            <i class="fas fa-file-invoice-dollar"></i> Raise PO
          </button>
          ${currentRole === "Manager" || currentRole === "Admin" ? `
            <button onclick="approveAllPOs()" class="btn btn-secondary" style="font-size:0.75rem; border-radius:6px; padding:0.4rem 0.8rem;">
              Approve Open POs
            </button>
          ` : ""}
        </div>
      `;
      window.raiseMockPO = function () {
        const id = "PO-" + (1000 + ++poCounter);
        erpData.poList.push({ id, item: "Cement Mixer Gaskets", qty: 100, status: "Pending Approval" });
        addAuditLog(`Purchase Order ${id} raised.`);
        renderScreenContent();
      };
      window.approveAllPOs = function () {
        erpData.poList.forEach(po => po.status = "Approved & Sent");
        addAuditLog(`All pending Purchase Orders approved by ${currentRole}.`);
        renderScreenContent();
      };
    }
  }

  renderScreenContent();
}

function renderZerodhaSandbox(container) {
  container.innerHTML = `
    <h3><i class="fas fa-chart-line" style="color: var(--accent-1);"></i> Kite Trade Simulator</h3>
    <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.8rem;">
      Simulated stock portfolio sandbox. Stock prices fluctuate in real-time. Buy and sell stocks to watch your virtual P&L respond.
    </p>

    <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 1rem; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
      <span style="font-size: 0.82rem; font-weight:600; color: var(--text-secondary);">Virtual Balance:</span>
      <strong id="virtualCash" style="font-size: 1rem; color: #10b981;">₹1,00,000.00</strong>
    </div>

    <div class="stock-grid">
      <!-- Market Card -->
      <div class="stock-market-card">
        <h4 style="margin:0 0 0.5rem 0; font-size: 0.88rem; border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">Live Market Watchlist</h4>
        <div style="display:flex; flex-direction:column; gap:0.2rem;">
          <div class="stock-row">
            <span class="stock-ticker-name">TATA MOTOR<small>NSE</small></span>
            <span class="stock-price" id="priceTATA">₹520.40</span>
            <span class="stock-change up" id="changeTATA">+0.4%</span>
            <div class="stock-actions-box">
              <button onclick="tradeStock('TATA', 'buy')" class="stock-btn buy">Buy</button>
              <button onclick="tradeStock('TATA', 'sell')" class="stock-btn sell">Sell</button>
            </div>
          </div>
          <div class="stock-row">
            <span class="stock-ticker-name">RELIANCE<small>NSE</small></span>
            <span class="stock-price" id="priceRELIANCE">₹2,450.00</span>
            <span class="stock-change down" id="changeRELIANCE">-0.2%</span>
            <div class="stock-actions-box">
              <button onclick="tradeStock('RELIANCE', 'buy')" class="stock-btn buy">Buy</button>
              <button onclick="tradeStock('RELIANCE', 'sell')" class="stock-btn sell">Sell</button>
            </div>
          </div>
          <div class="stock-row">
            <span class="stock-ticker-name">INFOSYS<small>NSE</small></span>
            <span class="stock-price" id="priceINFOSYS">₹1,480.00</span>
            <span class="stock-change up" id="changeINFOSYS">+0.8%</span>
            <div class="stock-actions-box">
              <button onclick="tradeStock('INFOSYS', 'buy')" class="stock-btn buy">Buy</button>
              <button onclick="tradeStock('INFOSYS', 'sell')" class="stock-btn sell">Sell</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Portfolio Card -->
      <div class="stock-portfolio-card">
        <h4 style="margin:0 0 0.5rem 0; font-size: 0.88rem; border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">My Positions</h4>
        <div id="stockHoldings" style="max-height: 180px; overflow-y:auto; display:flex; flex-direction:column; gap:0.4rem;">
          <div style="font-size:0.75rem; color:var(--text-secondary); text-align:center; padding: 1rem 0;">No active holdings. Place a buy order.</div>
        </div>
      </div>
    </div>
  `;

  let balance = 100000;
  const prices = {
    TATA: 520.40,
    RELIANCE: 2450.00,
    INFOSYS: 1480.00
  };
  const holdings = {};

  window.sandboxInterval = setInterval(() => {
    Object.keys(prices).forEach(ticker => {
      const changePercent = (Math.random() - 0.5) * 0.006;
      prices[ticker] = parseFloat((prices[ticker] * (1 + changePercent)).toFixed(2));

      const priceEl = document.getElementById(`price${ticker}`);
      const changeEl = document.getElementById(`change${ticker}`);
      if (priceEl && changeEl) {
        priceEl.textContent = `₹${prices[ticker].toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
        const up = changePercent >= 0;
        changeEl.className = `stock-change ${up ? 'up' : 'down'}`;
        changeEl.textContent = `${up ? '+' : ''}${(changePercent * 100).toFixed(2)}%`;
      }
    });

    updateHoldingsTable();
  }, 1500);

  window.tradeStock = function (ticker, direction) {
    const price = prices[ticker];
    if (direction === 'buy') {
      if (balance < price) {
        alert("Insufficient simulated virtual cash!");
        return;
      }
      balance -= price;
      if (!holdings[ticker]) {
        holdings[ticker] = { qty: 1, totalCost: price };
      } else {
        holdings[ticker].qty += 1;
        holdings[ticker].totalCost += price;
      }
    } else if (direction === 'sell') {
      if (!holdings[ticker] || holdings[ticker].qty <= 0) {
        alert("You do not own any shares of " + ticker + "!");
        return;
      }
      balance += price;
      holdings[ticker].qty -= 1;
      holdings[ticker].totalCost -= (holdings[ticker].totalCost / (holdings[ticker].qty + 1));
      if (holdings[ticker].qty === 0) {
        delete holdings[ticker];
      }
    }

    document.getElementById("virtualCash").textContent = `₹${balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    updateHoldingsTable();
  };

  function updateHoldingsTable() {
    const container = document.getElementById("stockHoldings");
    if (!container) return;

    const keys = Object.keys(holdings);
    if (keys.length === 0) {
      container.innerHTML = `<div style="font-size:0.75rem; color:var(--text-secondary); text-align:center; padding: 1rem 0;">No active holdings. Place a buy order.</div>`;
      return;
    }

    let html = "";
    keys.forEach(ticker => {
      const hold = holdings[ticker];
      const currentPrice = prices[ticker];
      const avgCost = hold.totalCost / hold.qty;
      const profitLoss = (currentPrice - avgCost) * hold.qty;
      const plPct = ((currentPrice - avgCost) / avgCost) * 100;
      const up = profitLoss >= 0;

      html += `
        <div style="background: rgba(255,255,255,0.01); border:1px solid var(--border-color); border-radius: 8px; padding:0.5rem; display:flex; justify-content:space-between; align-items:center; font-size:0.78rem;">
          <div style="display:flex; flex-direction:column;">
            <span style="font-weight:700;">${ticker}</span>
            <span style="color:var(--text-secondary); font-size:0.7rem;">Qty: ${hold.qty} | Avg: ₹${avgCost.toFixed(1)}</span>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:600;">₹${(currentPrice * hold.qty).toLocaleString('en-IN', { maximumFractionDigits: 1 })}</div>
            <div style="color:${up ? '#10b981' : '#ef4444'}; font-size:0.7rem; font-weight:700;">
              ${up ? '+' : ''}${profitLoss.toFixed(1)} (${up ? '+' : ''}${plPct.toFixed(1)}%)
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }
}

function renderZoomSandbox(container) {
  container.innerHTML = `
    <h3><i class="fas fa-video" style="color: var(--accent-1);"></i> Real-Time Video Conference Simulator</h3>
    <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem;">
      Simulate P2P WebRTC connection. Click "Start Webcam" to stream your video channel, or type in the room chat.
    </p>

    <div class="zoom-video-grid">
      <!-- You -->
      <div class="zoom-video-box">
        <video id="zoomUserVideo" autoplay playsinline style="display:none; width: 100%; height: 100%; object-fit: cover;"></video>
        <div class="zoom-video-avatar" id="zoomUserAvatar">
          <i class="fas fa-user-circle"></i>
        </div>
        <span class="zoom-participant-label">You</span>
      </div>
      <!-- Alice -->
      <div class="zoom-video-box">
        <div class="zoom-video-avatar" style="background:#ef4444;"><i class="fas fa-user-astronaut"></i></div>
        <span class="zoom-participant-label">Alice (Peer)</span>
      </div>
      <!-- Bob -->
      <div class="zoom-video-box">
        <div class="zoom-video-avatar" style="background:#10b981;"><i class="fas fa-user-secret"></i></div>
        <span class="zoom-participant-label">Bob (Peer)</span>
      </div>
      <!-- Charlie -->
      <div class="zoom-video-box">
        <div class="zoom-video-avatar" style="background:#f59e0b;"><i class="fas fa-user-ninja"></i></div>
        <span class="zoom-participant-label">Charlie (Peer)</span>
      </div>
    </div>

    <!-- Controls & Chat -->
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; align-items: start;">
      <div class="zoom-controls">
        <button id="zoomWebcamBtn" class="btn btn-primary" style="font-size:0.8rem; padding:0.5rem 1rem; border-radius:8px;">
          <i class="fas fa-video"></i> Start Webcam
        </button>
        <button id="zoomLeaveBtn" class="btn btn-secondary" style="font-size:0.8rem; padding:0.5rem 1rem; border-radius:8px; display:none; background:#ef4444; border-color:#ef4444; color:white;">
          <i class="fas fa-phone-slash"></i> Stop Call
        </button>
      </div>

      <div style="background: rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:10px; padding:0.8rem;">
        <h5 style="margin:0 0 0.4rem 0; font-size:0.8rem; border-bottom:1px solid var(--border-color); padding-bottom:3px;">Room Meeting Chat</h5>
        <div id="zoomChatLog" style="height:80px; overflow-y:auto; font-size:0.75rem; margin-bottom:0.5rem; display:flex; flex-direction:column; gap:0.3rem; padding-right:4px;">
          <div style="color:var(--text-secondary);"><i>Alice joined the chat.</i></div>
          <div style="color:var(--text-secondary);"><i>Bob joined the chat.</i></div>
        </div>
        <div style="display:flex; gap:0.4rem;">
          <input type="text" id="zoomChatInput" placeholder="Say hello to peers..." style="flex:1; padding:0.4rem; border-radius:6px; border:1px solid var(--border-color); background:var(--bg-secondary); color:var(--text-primary); font-size:0.75rem; outline:none;" />
          <button id="zoomChatSend" class="btn btn-primary" style="font-size:0.75rem; border-radius:6px; padding:0.4rem 0.8rem;">Send</button>
        </div>
      </div>
    </div>
  `;

  const webcamBtn = document.getElementById("zoomWebcamBtn");
  const leaveBtn = document.getElementById("zoomLeaveBtn");
  const videoEl = document.getElementById("zoomUserVideo");
  const avatarEl = document.getElementById("zoomUserAvatar");
  const chatLog = document.getElementById("zoomChatLog");
  const chatInput = document.getElementById("zoomChatInput");
  const chatSend = document.getElementById("zoomChatSend");

  if (webcamBtn) {
    webcamBtn.addEventListener("click", () => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
          window.localMediaStream = stream;
          if (videoEl) {
            videoEl.srcObject = stream;
            videoEl.style.display = "block";
          }
          if (avatarEl) avatarEl.style.display = "none";
          webcamBtn.style.display = "none";
          if (leaveBtn) leaveBtn.style.display = "block";

          appendChatMsg("System", "Webcam access allowed. Local Peer RTC initiated.");
        })
        .catch(err => {
          console.warn("Webcam access rejected, using simulator fallback avatar.", err);
          if (avatarEl) {
            avatarEl.style.background = "#3b82f6";
            avatarEl.innerHTML = `<i class="fas fa-video-slash" style="animation: pulse 1s infinite;"></i>`;
          }
          webcamBtn.style.display = "none";
          if (leaveBtn) leaveBtn.style.display = "block";
          appendChatMsg("System", "Webcam access denied. Falling back to Simulated Audio-only Channel.");
        });
    });
  }

  if (leaveBtn) {
    leaveBtn.addEventListener("click", () => {
      if (window.localMediaStream) {
        window.localMediaStream.getTracks().forEach(track => track.stop());
        window.localMediaStream = null;
      }
      if (videoEl) {
        videoEl.srcObject = null;
        videoEl.style.display = "none";
      }
      if (avatarEl) {
        avatarEl.style.display = "flex";
        avatarEl.innerHTML = `<i class="fas fa-user-circle"></i>`;
      }
      leaveBtn.style.display = "none";
      if (webcamBtn) webcamBtn.style.display = "block";
      appendChatMsg("System", "Call disconnected. Local media channels closed.");
    });
  }

  function appendChatMsg(user, msg) {
    if (!chatLog) return;
    const item = document.createElement("div");
    item.innerHTML = `<strong style="color:var(--accent-1);">${user}:</strong> ${msg}`;
    chatLog.appendChild(item);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  const sendMessage = () => {
    const text = chatInput.value.trim();
    if (!text) return;
    appendChatMsg("You", text);
    chatInput.value = "";

    setTimeout(() => {
      const mockAnswers = [
        "Hey! Welcome to the meeting.",
        "Your video feed looks super clean, WebRTC is fast!",
        "Let me check the repository specifications.",
        "Agreed. We can proceed with this layout."
      ];
      const randomAns = mockAnswers[Math.floor(Math.random() * mockAnswers.length)];
      const names = ["Alice", "Bob", "Charlie"];
      const randomName = names[Math.floor(Math.random() * names.length)];
      appendChatMsg(randomName, randomAns);
    }, 1200);
  };

  if (chatSend) {
    chatSend.addEventListener("click", sendMessage);
  }
  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }
}

function renderGenericSandbox(container, project) {
  container.innerHTML = `
    <h3><i class="${project.icon}" style="color: var(--accent-1);"></i> Interactive Code Executor</h3>
    <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem;">
      Simulated Sandbox playground to execute script bindings for <strong>${project.title}</strong>.
    </p>

    <div class="terminal-sandbox">
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yellow"></span>
          <span class="terminal-dot green"></span>
        </div>
        <span style="font-size: 0.72rem; color: var(--text-secondary); font-weight:700;">Sandbox Shell v1.2</span>
      </div>
      <div class="terminal-body" id="sandboxShellBody">najish@portfolio:~$ Loading sandbox environment for ${project.title}...
najish@portfolio:~$ Type "run" or click Execute below to start compiler.</div>
    </div>

    <div style="display:flex; gap:0.5rem; justify-content:flex-end;">
      <button id="genericSandboxBtn" class="btn btn-primary" style="font-size:0.8rem; border-radius:8px; padding:0.5rem 1.2rem;">
        <i class="fas fa-play"></i> Execute Mock Sandbox
      </button>
    </div>
  `;

  const btn = document.getElementById("genericSandboxBtn");
  const shell = document.getElementById("sandboxShellBody");

  if (btn && shell) {
    btn.addEventListener("click", () => {
      shell.textContent = `najish@portfolio:~$ executing ${project.title} dependencies...
[COMPILING] loading config metadata...
[SUCCESS] local sandbox container compiled!
[OUTPUT] Mocking project environment:
         Name: ${project.title}
         Status: ONLINE (completed)
         GitHub Repo: ${project.githubLink}
         Active Technologies: ${project.technologies.join(", ")}
najish@portfolio:~$ _`;
    });
  }
}




// ==================== THEME ACCENTS & BACKGROUND PALETTES ====================
const accentColorPalette = {
  blue: {
    dark: { accent1: '#3b82f6', accent2: '#0ea5e9' },
    light: { accent1: '#2563eb', accent2: '#0284c7' }
  },
  green: {
    dark: { accent1: '#10b981', accent2: '#059669' },
    light: { accent1: '#059669', accent2: '#047857' }
  },
  purple: {
    dark: { accent1: '#8b5cf6', accent2: '#d946ef' },
    light: { accent1: '#6d28d9', accent2: '#a21caf' }
  },
  rose: {
    dark: { accent1: '#f43f5e', accent2: '#ec4899' },
    light: { accent1: '#e11d48', accent2: '#db2777' }
  },
  amber: {
    dark: { accent1: '#f59e0b', accent2: '#ef4444' },
    light: { accent1: '#d97706', accent2: '#dc2626' }
  }
};

const darkBgThemes = {
  midnight: {
    primary: 'linear-gradient(135deg, #0b0f19 0%, #111827 50%, #1f2937 100%)',
    secondary: 'rgba(17, 24, 39, 0.85)',
    cardBg: 'rgba(31, 41, 55, 0.5)',
    borderColor: 'rgba(156, 163, 175, 0.12)'
  },
  obsidian: {
    primary: 'linear-gradient(135deg, #000000 0%, #050505 50%, #121212 100%)',
    secondary: 'rgba(10, 10, 10, 0.85)',
    cardBg: 'rgba(20, 20, 20, 0.6)',
    borderColor: 'rgba(255, 255, 255, 0.08)'
  },
  cyberpunk: {
    primary: 'linear-gradient(135deg, #080314 0%, #0f0525 50%, #1d0f3d 100%)',
    secondary: 'rgba(15, 5, 37, 0.85)',
    cardBg: 'rgba(30, 15, 61, 0.5)',
    borderColor: 'rgba(139, 92, 246, 0.15)'
  }
};

function applyAccentColor(accentName) {
  const isLight = document.documentElement.classList.contains('light-mode');
  const themeMode = isLight ? 'light' : 'dark';
  const colors = accentColorPalette[accentName] ? accentColorPalette[accentName][themeMode] : accentColorPalette.blue[themeMode];

  document.documentElement.style.setProperty('--accent-1', colors.accent1);
  document.documentElement.style.setProperty('--accent-2', colors.accent2);

  // Save preference
  localStorage.setItem('accentColor', accentName);

  // Highlight active dot in customizer UI
  document.querySelectorAll('.accent-dot').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-accent') === accentName) {
      btn.classList.add('active');
    }
  });
}

function applyDarkBg(bgName) {
  const isLight = document.documentElement.classList.contains('light-mode');

  // Save preference
  localStorage.setItem('darkBgTheme', bgName);

  if (!isLight) {
    const selectedBg = darkBgThemes[bgName] || darkBgThemes.midnight;
    document.documentElement.style.setProperty('--bg-primary', selectedBg.primary);
    document.documentElement.style.setProperty('--bg-secondary', selectedBg.secondary);
    document.documentElement.style.setProperty('--card-bg', selectedBg.cardBg);
    document.documentElement.style.setProperty('--border-color', selectedBg.borderColor);
  }

  // Highlight active button in customizer UI
  document.querySelectorAll('.bg-option').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-bg') === bgName) {
      btn.classList.add('active');
    }
  });
}

// ==================== THEME TOGGLE ====================
function initializeThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Check if user has a saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'dark';

  // Apply saved theme
  if (savedTheme === 'light') {
    htmlElement.classList.add('light-mode');
    htmlElement.style.removeProperty('--bg-primary');
    htmlElement.style.removeProperty('--bg-secondary');
    htmlElement.style.removeProperty('--card-bg');
    htmlElement.style.removeProperty('--border-color');
  } else {
    htmlElement.classList.remove('light-mode');
    const savedDarkBg = localStorage.getItem('darkBgTheme') || 'midnight';
    applyDarkBg(savedDarkBg);
  }

  const savedAccent = localStorage.getItem('accentColor') || 'blue';
  applyAccentColor(savedAccent);

  // Add click event listener to toggle button
  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('light-mode');
    const isLight = htmlElement.classList.contains('light-mode');

    // Save theme preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    if (isLight) {
      // Clear inline dark backgrounds properties so light mode CSS variables take effect
      htmlElement.style.removeProperty('--bg-primary');
      htmlElement.style.removeProperty('--bg-secondary');
      htmlElement.style.removeProperty('--card-bg');
      htmlElement.style.removeProperty('--border-color');
    } else {
      // Reapply chosen dark background theme
      const savedDarkBg = localStorage.getItem('darkBgTheme') || 'midnight';
      applyDarkBg(savedDarkBg);
    }

    // Reapply chosen accent color for the new mode
    const savedAccent = localStorage.getItem('accentColor') || 'blue';
    applyAccentColor(savedAccent);
  });
}

// ==================== THEME CUSTOMIZER WIDGET ====================
function initializeThemeCustomizer() {
  const customizerToggle = document.getElementById('customizerToggle');
  const themeCustomizer = document.getElementById('themeCustomizer');

  if (!customizerToggle || !themeCustomizer) return;

  // Toggle panel open/close
  customizerToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    themeCustomizer.classList.toggle('active');
  });

  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!themeCustomizer.contains(e.target)) {
      themeCustomizer.classList.remove('active');
    }
  });

  // Accent color buttons click
  document.querySelectorAll('.accent-dot').forEach(btn => {
    btn.addEventListener('click', () => {
      const accent = btn.getAttribute('data-accent');
      applyAccentColor(accent);
    });
  });

  // Background option buttons click
  document.querySelectorAll('.bg-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const bg = btn.getAttribute('data-bg');
      applyDarkBg(bg);
    });
  });
}

// ==================== 3D TILT EFFECT ====================
function initializeTiltEffect() {
  const MAX_TILT = 12;
  const GLARE_OPACITY = 0.2;

  document.querySelectorAll('[data-tilt]').forEach(card => {
    if (card._tiltInitialized) return;
    card._tiltInitialized = true;

    const glare = card.querySelector('.tilt-glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const rotateY = dx * MAX_TILT;
      const rotateX = -dy * MAX_TILT;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
      card.style.transition = 'transform 0.08s ease';

      if (glare) {
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        glare.style.background = `radial-gradient(ellipse at ${glareX}% ${glareY}%, rgba(255,255,255,${GLARE_OPACITY}) 0%, transparent 65%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      if (glare) {
        glare.style.background = 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 60%)';
      }
    });
  });
}

// Centralized initialization function
function initializeAll() {
  initializeParticles();
  initializeNavigation();
  initializeScrollAnimations();
  initializeContactForm();
  initializeTypingEffect();
  initializeCounterAnimation();
  renderProjects();
  initializeProjectsFiltering();
  loadLeetCodeStats();
  initializeGitHubStats();
  initializeThemeToggle();
  initializeThemeCustomizer();
  initializeTiltEffect();
  initializeDevConsole();
  initializeBlogModal();
  initializeGuestbook();
  initializeDsaVisualizer();
  console.log("Portfolio loaded successfully! 🚀");
}

// Initialize everything safely regardless of script load timing
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAll);
} else {
  initializeAll();
}

// ==================== BLOG MODAL ====================
const blogData = [
  {
    id: 0,
    tag: 'DSA',
    tagClass: '',
    date: 'June 2025',
    readTime: '5 min read',
    title: 'Mastering Two-Pointer Technique in Array Problems',
    content: `
      <div class="blog-article-section">
        <p>The Two-Pointer technique is one of the most elegant and efficient patterns in competitive programming and DSA interviews. It allows us to reduce nested loops into a single pass — turning O(n²) solutions into O(n).</p>

        <h4>🧠 What is the Two-Pointer Technique?</h4>
        <p>The idea is simple: place two pointers at different positions in the array and move them toward each other (or in the same direction) based on certain conditions. This avoids redundant comparisons that a brute-force approach would make.</p>

        <h4>📌 Classic Example: Two Sum (Sorted Array)</h4>
        <p>Given a sorted array, find two numbers that add up to a target sum.</p>
        <pre class="blog-code-block"><span class="kw">function</span> <span class="fn">twoSum</span>(arr, target) {
  <span class="kw">let</span> left = 0, right = arr.length - 1;
  <span class="kw">while</span> (left &lt; right) {
    <span class="kw">const</span> sum = arr[left] + arr[right];
    <span class="kw">if</span> (sum === target) <span class="kw">return</span> [left, right];
    <span class="kw">else if</span> (sum &lt; target) left++;
    <span class="kw">else</span> right--;
  }
  <span class="kw">return</span> [];
}</pre>

        <h4>📌 Example: Remove Duplicates In-Place</h4>
        <pre class="blog-code-block"><span class="kw">function</span> <span class="fn">removeDuplicates</span>(nums) {
  <span class="kw">let</span> slow = 0;
  <span class="kw">for</span> (<span class="kw">let</span> fast = 1; fast &lt; nums.length; fast++) {
    <span class="kw">if</span> (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  <span class="kw">return</span> slow + 1;
}</pre>

        <h4>✅ When to Use Two-Pointer</h4>
        <ul>
          <li>Array is sorted (or can be sorted)</li>
          <li>You need pairs, triplets, or subarrays meeting a condition</li>
          <li>Palindrome checks on strings</li>
          <li>Sliding window variations</li>
        </ul>

        <h4>🔑 Key Takeaway</h4>
        <p>Two-pointer reduces time complexity dramatically. Master this pattern and you'll breeze through problems like Container with Most Water, 3Sum, Trapping Rain Water, and many more. It's one of the top 5 patterns asked in FAANG interviews.</p>
      </div>
    `
  },
  {
    id: 1,
    tag: 'React',
    tagClass: 'react',
    date: 'May 2025',
    readTime: '7 min read',
    title: 'React useEffect — Common Mistakes Every Beginner Makes',
    content: `
      <div class="blog-article-section">
        <p>React's <code>useEffect</code> hook is powerful, but it's also the source of some of the most baffling bugs in React apps. Let's break down the top mistakes and how to fix them.</p>

        <h4>❌ Mistake 1: Missing Dependency Array</h4>
        <p>Without a dependency array, useEffect runs after every render. This causes infinite loops when you update state inside the effect.</p>
        <pre class="blog-code-block"><span class="cm">// ❌ BAD — runs on every render</span>
<span class="fn">useEffect</span>(() =&gt; {
  <span class="fn">setCount</span>(count + 1); <span class="cm">// triggers re-render → infinite loop!</span>
});

<span class="cm">// ✅ GOOD — runs only once on mount</span>
<span class="fn">useEffect</span>(() =&gt; {
  <span class="fn">fetchData</span>();
}, []);</pre>

        <h4>❌ Mistake 2: Stale Closures</h4>
        <p>When you capture state inside useEffect, it captures the value at the time the effect was created — not the latest value.</p>
        <pre class="blog-code-block"><span class="cm">// ❌ count is always 0 inside the interval</span>
<span class="fn">useEffect</span>(() =&gt; {
  <span class="kw">const</span> id = <span class="fn">setInterval</span>(() =&gt; {
    console.<span class="fn">log</span>(count); <span class="cm">// stale!</span>
  }, 1000);
  <span class="kw">return</span> () =&gt; <span class="fn">clearInterval</span>(id);
}, []);

<span class="cm">// ✅ Use functional update or useRef</span>
<span class="fn">useEffect</span>(() =&gt; {
  <span class="kw">const</span> id = <span class="fn">setInterval</span>(() =&gt; {
    <span class="fn">setCount</span>(prev =&gt; prev + 1);
  }, 1000);
  <span class="kw">return</span> () =&gt; <span class="fn">clearInterval</span>(id);
}, []);</pre>

        <h4>❌ Mistake 3: Not Cleaning Up</h4>
        <p>Effects like subscriptions, event listeners, and timers must be cleaned up to prevent memory leaks.</p>
        <pre class="blog-code-block"><span class="fn">useEffect</span>(() =&gt; {
  <span class="kw">const</span> <span class="fn">handleResize</span> = () =&gt; console.<span class="fn">log</span>(window.innerWidth);
  window.<span class="fn">addEventListener</span>(<span class="str">'resize'</span>, handleResize);
  <span class="cm">// ✅ Always return cleanup</span>
  <span class="kw">return</span> () =&gt; window.<span class="fn">removeEventListener</span>(<span class="str">'resize'</span>, handleResize);
}, []);</pre>

        <h4>🔑 Golden Rules</h4>
        <ul>
          <li>Always add a dependency array unless you want it to run every render</li>
          <li>Add every reactive value used inside the effect to deps</li>
          <li>Always return a cleanup function for subscriptions and timers</li>
          <li>Use the <code>eslint-plugin-react-hooks</code> — it will catch most of these automatically</li>
        </ul>
      </div>
    `
  },
  {
    id: 2,
    tag: 'Node.js',
    tagClass: 'node',
    date: 'April 2025',
    readTime: '6 min read',
    title: 'Building REST APIs with Express.js — Best Practices',
    content: `
      <div class="blog-article-section">
        <p>Express.js is the most popular Node.js web framework — lightweight, fast, and unopinionated. But that freedom can lead to messy codebases if you don't follow best practices from day one.</p>

        <h4>📁 Project Structure That Scales</h4>
        <pre class="blog-code-block">src/
  controllers/    ← request handlers
  routes/         ← route definitions
  models/         ← Mongoose/DB schemas
  middleware/     ← auth, validation, error handling
  services/       ← business logic
  utils/          ← helper functions
  config/         ← env vars, db connection
  app.js          ← Express app setup
  server.js       ← server entry point</pre>

        <h4>🔒 Centralized Error Handling</h4>
        <p>Never handle errors in individual route handlers. Use a global error middleware instead.</p>
        <pre class="blog-code-block"><span class="cm">// middleware/errorHandler.js</span>
<span class="kw">const</span> <span class="fn">errorHandler</span> = (err, req, res, next) =&gt; {
  <span class="kw">const</span> status = err.status || <span class="nu">500</span>;
  res.<span class="fn">status</span>(status).<span class="fn">json</span>({
    success: <span class="kw">false</span>,
    message: err.message || <span class="str">'Internal Server Error'</span>
  });
};
module.exports = errorHandler;</pre>

        <h4>🔑 Validation with express-validator</h4>
        <pre class="blog-code-block"><span class="kw">const</span> { body, validationResult } = <span class="fn">require</span>(<span class="str">'express-validator'</span>);

router.<span class="fn">post</span>(<span class="str">'/register'</span>,
  <span class="fn">body</span>(<span class="str">'email'</span>).<span class="fn">isEmail</span>(),
  <span class="fn">body</span>(<span class="str">'password'</span>).<span class="fn">isLength</span>({ min: <span class="nu">6</span> }),
  (req, res) =&gt; {
    <span class="kw">const</span> errors = <span class="fn">validationResult</span>(req);
    <span class="kw">if</span> (!errors.<span class="fn">isEmpty</span>()) {
      <span class="kw">return</span> res.<span class="fn">status</span>(<span class="nu">400</span>).<span class="fn">json</span>({ errors: errors.<span class="fn">array</span>() });
    }
    <span class="cm">// proceed with registration</span>
  }
);</pre>

        <h4>✅ Key Best Practices</h4>
        <ul>
          <li>Use <code>dotenv</code> — never hardcode secrets in source code</li>
          <li>Always use <code>async/await</code> with try-catch or error-passing middleware</li>
          <li>Rate-limit public endpoints with <code>express-rate-limit</code></li>
          <li>Use <code>helmet</code> to set secure HTTP headers automatically</li>
          <li>Log requests with <code>morgan</code> in development</li>
        </ul>
      </div>
    `
  },
  {
    id: 3,
    tag: 'MongoDB',
    tagClass: 'db',
    date: 'March 2025',
    readTime: '4 min read',
    title: "MongoDB Aggregation Pipeline — Power You're Not Using",
    content: `
      <div class="blog-article-section">
        <p>Most developers use MongoDB as a simple document store — but the Aggregation Pipeline is where MongoDB truly shines. It lets you transform, filter, group, and compute data entirely server-side, without pulling thousands of records into JavaScript.</p>

        <h4>🔧 What is the Aggregation Pipeline?</h4>
        <p>It's a multi-stage data processing pipeline where each stage transforms the documents as they pass through. Think of it as a conveyor belt of operations.</p>

        <h4>📌 Common Stages</h4>
        <ul>
          <li><code>$match</code> — filter documents (like SQL WHERE)</li>
          <li><code>$group</code> — group by field and compute aggregates</li>
          <li><code>$sort</code> — sort documents</li>
          <li><code>$project</code> — reshape output fields</li>
          <li><code>$lookup</code> — join with another collection (like SQL JOIN)</li>
          <li><code>$limit / $skip</code> — pagination</li>
        </ul>

        <h4>💡 Real Example: Total Sales Per Product</h4>
        <pre class="blog-code-block">db.orders.<span class="fn">aggregate</span>([
  { $<span class="fn">match</span>: { status: <span class="str">"completed"</span> } },
  {
    $<span class="fn">group</span>: {
      _id: <span class="str">"$productId"</span>,
      totalSales: { $<span class="fn">sum</span>: <span class="str">"$amount"</span> },
      count: { $<span class="fn">sum</span>: <span class="nu">1</span> }
    }
  },
  { $<span class="fn">sort</span>: { totalSales: <span class="nu">-1</span> } },
  { $<span class="fn">limit</span>: <span class="nu">10</span> }
])</pre>

        <h4>🔑 When to Use Aggregation</h4>
        <ul>
          <li>Reporting dashboards (totals, averages, counts)</li>
          <li>Joining related collections ($lookup)</li>
          <li>Building search results with scoring</li>
          <li>Data transformation before sending to the client</li>
        </ul>
        <p>The aggregation pipeline is one of MongoDB's most powerful features. Learning it well will make you write dramatically less JavaScript to manipulate data.</p>
      </div>
    `
  },
  {
    id: 4,
    tag: 'Java',
    tagClass: 'java',
    date: 'February 2025',
    readTime: '8 min read',
    title: 'OOPs in Java — From Textbook to Real World Applications',
    content: `
      <div class="blog-article-section">
        <p>Object-Oriented Programming is taught through animals, vehicles, and shapes. But in real projects, OOPs is how you architect entire systems. Here's how the four pillars apply to actual code.</p>

        <h4>1️⃣ Encapsulation — Hide the Data</h4>
        <p>Encapsulation bundles data and methods together and restricts direct access. In a real app, your User class should never expose its password hash directly.</p>
        <pre class="blog-code-block"><span class="kw">public class</span> <span class="fn">User</span> {
  <span class="kw">private</span> String passwordHash;

  <span class="kw">public boolean</span> <span class="fn">verifyPassword</span>(String input) {
    <span class="kw">return</span> <span class="fn">BCrypt</span>.<span class="fn">checkpw</span>(input, passwordHash);
  }
}</pre>

        <h4>2️⃣ Inheritance — Reuse and Extend</h4>
        <p>Instead of duplicating code, base classes define shared behavior. Subclasses extend with specifics.</p>
        <pre class="blog-code-block"><span class="kw">public abstract class</span> <span class="fn">BaseRepository</span>&lt;T&gt; {
  <span class="kw">public abstract void</span> <span class="fn">save</span>(T entity);
  <span class="kw">public abstract</span> T <span class="fn">findById</span>(<span class="kw">long</span> id);
}

<span class="kw">public class</span> <span class="fn">UserRepository</span> <span class="kw">extends</span> <span class="fn">BaseRepository</span>&lt;User&gt; {
  <span class="kw">public void</span> <span class="fn">save</span>(User user) { <span class="cm">/* DB logic */</span> }
  <span class="kw">public</span> User <span class="fn">findById</span>(<span class="kw">long</span> id) { <span class="cm">/* DB logic */</span> }
}</pre>

        <h4>3️⃣ Polymorphism — One Interface, Many Forms</h4>
        <p>Polymorphism lets you write code against an interface and swap implementations. This is the heart of the Strategy and Factory patterns.</p>
        <pre class="blog-code-block"><span class="kw">interface</span> <span class="fn">PaymentGateway</span> {
  <span class="kw">void</span> <span class="fn">process</span>(<span class="kw">double</span> amount);
}

<span class="kw">class</span> <span class="fn">StripeGateway</span> <span class="kw">implements</span> <span class="fn">PaymentGateway</span> {
  <span class="kw">public void</span> <span class="fn">process</span>(<span class="kw">double</span> amount) { <span class="cm">/* Stripe API */</span> }
}

<span class="kw">class</span> <span class="fn">RazorpayGateway</span> <span class="kw">implements</span> <span class="fn">PaymentGateway</span> {
  <span class="kw">public void</span> <span class="fn">process</span>(<span class="kw">double</span> amount) { <span class="cm">/* Razorpay API */</span> }
}</pre>

        <h4>4️⃣ Abstraction — Simplify Complexity</h4>
        <p>Abstraction hides implementation details and exposes only what is necessary. A Service class should not know how the database works — that's the Repository's job.</p>

        <h4>🔑 Real World Takeaway</h4>
        <ul>
          <li>Encapsulation → prevents illegal state in your domain objects</li>
          <li>Inheritance → DRY principle in repository/service layers</li>
          <li>Polymorphism → plug-and-play components (payment, notification, auth)</li>
          <li>Abstraction → clean service layer that's easy to unit test</li>
        </ul>
      </div>
    `
  },
  {
    id: 5,
    tag: 'Career',
    tagClass: 'career',
    date: 'January 2025',
    readTime: '10 min read',
    title: 'My Internship Journey — What I Learned in 3 Months at a Startup',
    content: `
      <div class="blog-article-section">
        <p>Three months ago I joined a startup as a MERN Stack Developer Intern, nervous and unsure. Today I ship production code, review PRs, and mentor other interns. Here's the honest story of what changed.</p>

        <h4>🗓️ Week 1: Setup Hell</h4>
        <p>The first week was all about setting up the development environment. Docker containers, environment variables, local SSL certificates, seed scripts — things that no college assignment ever prepares you for. I broke the local DB twice and had to ask for help. That was humbling.</p>

        <h4>🔨 Week 2–4: First Real Features</h4>
        <p>My first task was implementing a notification system. I underestimated it — turns out sending emails with templates, handling retry logic, and making it work across environments is non-trivial. I learned:</p>
        <ul>
          <li>How to write code that other people can read and maintain</li>
          <li>The importance of meaningful commit messages</li>
          <li>How to break large features into small, reviewable PRs</li>
          <li>That reading existing code carefully beats guessing</li>
        </ul>

        <h4>📊 Month 2: Code Reviews Changed Me</h4>
        <p>Getting your code reviewed is brutal and beautiful at the same time. My senior would comment: "Why is this logic in the controller? Move it to the service." or "This will break if the array is empty." I started reviewing my own code before submitting — asking myself: "Would I approve this?"</p>

        <h4>🚀 Month 3: Owning a Module</h4>
        <p>By month 3, I owned the analytics dashboard module end-to-end — from MongoDB aggregations to React charts. I wrote the technical spec, estimated timelines, and presented it to the team. That responsibility felt completely different from assignments.</p>

        <h4>🔑 5 Things I Wish I Knew Before Day 1</h4>
        <ul>
          <li>Read the codebase before writing a single line</li>
          <li>Ask questions early — waiting costs everyone time</li>
          <li>Document everything you figure out for the next person</li>
          <li>Soft skills (communication, planning) matter as much as code</li>
          <li>Make friends with Git — learn rebase, cherry-pick, and stash properly</li>
        </ul>

        <p>An internship at a startup is the fastest way to grow as a developer. It's chaotic, fast-paced, and sometimes stressful — but if you stay curious and ask questions, three months can feel like a full year of learning.</p>
      </div>
    `
  }
];

function initializeBlogModal() {
  const modal = document.getElementById('blogModal');
  const modalBody = document.getElementById('blogModalBody');
  const modalTag = document.getElementById('blogModalTag');
  const closeBtn = document.getElementById('blogModalClose');
  const backBtn = document.getElementById('blogModalBack');

  if (!modal) return;

  function openModal(id) {
    const blog = blogData[id];
    if (!blog) return;

    // Inject tag
    modalTag.innerHTML = `<span class="blog-tag ${blog.tagClass}">${blog.tag}</span>`;

    // Inject full article
    modalBody.innerHTML = `
      <h2 class="blog-article-title">${blog.title}</h2>
      <div class="blog-article-meta">
        <span><i class="far fa-calendar-alt"></i> ${blog.date}</span>
        <span><i class="far fa-clock"></i> ${blog.readTime}</span>
        <span><i class="fas fa-user-circle"></i> Najish Akhtar</span>
      </div>
      ${blog.content}
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalBody.scrollTop = 0;
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Delegate click on all Read More buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-blog-id]');
    if (btn) {
      e.preventDefault();
      openModal(parseInt(btn.dataset.blogId, 10));
    }
  });

  closeBtn?.addEventListener('click', closeModal);
  backBtn?.addEventListener('click', closeModal);

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

// ==================== DEVELOPER CLI CONSOLE ====================
function initializeDevConsole() {
  const devConsole = document.getElementById('devConsole');
  const consoleInput = document.getElementById('consoleInput');
  const consoleOutput = document.getElementById('consoleOutput');
  const toggleBtn = document.getElementById('consoleToggle');
  const closeBtn = document.getElementById('consoleClose');
  const minimizeBtn = document.getElementById('consoleMinimize');
  const maximizeBtn = document.getElementById('consoleMaximize');

  if (!devConsole || !consoleInput) return;

  let cmdHistory = [];
  let historyIdx = -1;

  // ---- Command registry ----
  const COMMANDS = {
    help: () => [
      { text: '╔══════════════════════════════════╗', cls: 'info' },
      { text: '║      Available Commands          ║', cls: 'info' },
      { text: '╚══════════════════════════════════╝', cls: 'info' },
      { text: '  about      → Who am I?', cls: '' },
      { text: '  skills     → My tech stack', cls: '' },
      { text: '  projects   \u2192 Featured projects', cls: '' },
      { text: '  contact    \u2192 How to reach me', cls: '' },
      { text: '  socials    \u2192 My social links', cls: '' },
      { text: '  experience \u2192 Work experience', cls: '' },
      { text: '  education  \u2192 Academic background', cls: '' },
      { text: '  date       \u2192 Current date & time', cls: '' },
      { text: '  whoami     \u2192 Secret \ud83e\udd2b', cls: '' },
      { text: '  sudo hire  \u2192 Press Enter and see...', cls: '' },
      { text: '', cls: '' },
      { text: '  \u2500\u2500 Unix commands \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', cls: 'muted' },
      { text: '  ls          \u2192 List portfolio sections', cls: '' },
      { text: '  pwd         \u2192 Current working path', cls: '' },
      { text: '  tree        \u2192 Section structure tree', cls: '' },
      { text: '  cd <dir>    \u2192 Hint navigation', cls: '' },
      { text: '  echo <txt>  \u2192 Print text', cls: '' },
      { text: '  open <sec>  \u2192 Navigate to section', cls: '' },
      { text: '  uname [-a]  \u2192 System info', cls: '' },
      { text: '  cat readme.md | cat resume.pdf', cls: '' },
      { text: '  man najish  \u2192 Read the manual', cls: '' },
      { text: '  clear       \u2192 Clear the terminal', cls: '' },
    ],

    about: () => [
      { text: '👨‍💻 Najish Akhtar', cls: 'success' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  Role    : Full Stack Developer', cls: '' },
      { text: '  Focus   : Backend · DSA · MERN', cls: '' },
      { text: '  Location: India 🇮🇳', cls: '' },
      { text: '  Status  : Open to Opportunities ✅', cls: 'success' },
    ],

    skills: () => [
      { text: '⚡ Tech Stack', cls: 'warn' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  Frontend  : React · HTML · CSS · JavaScript', cls: '' },
      { text: '  Backend   : Node.js · Express.js · Java', cls: '' },
      { text: '  Database  : MongoDB · MySQL · PostgreSQL', cls: '' },
      { text: '  Tools     : Git · GitHub · VS Code · Linux', cls: '' },
      { text: '  DSA       : 500+ problems solved 🧠', cls: 'success' },
    ],

    projects: () => [
      { text: '🚀 Featured Projects', cls: 'info' },
      { text: '─────────────────────────────────', cls: 'muted' },
      ...projectsData.slice(0, 5).map((p, i) => ({
        text: `  ${i + 1}. ${p.title} — ${p.technologies.slice(0, 3).join(', ')}`,
        cls: ''
      })),
      { text: '  → Scroll to Projects section for details', cls: 'muted' },
    ],

    contact: () => [
      { text: '📬 Get in Touch', cls: 'success' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  Email    : najishchamparni2003@gmail.com', cls: '' },
      { text: '  LinkedIn : linkedin.com/in/najish-akhtar-698b30263', cls: '' },
      { text: '  GitHub   : github.com/najishakhtar2378', cls: '' },
      { text: '  Response : Within 24 hours ⏱', cls: 'warn' },
    ],

    socials: () => [
      { text: '🌐 Socials', cls: 'info' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  🐙 GitHub   : github.com/najishakhtar2378', cls: '' },
      { text: '  💼 LinkedIn : linkedin.com/in/najish-akhtar-698b30263', cls: '' },
      { text: '  📷 Instagram: @najish_akhtar', cls: '' },
      { text: '  💬 WhatsApp : Available on request', cls: '' },
    ],

    experience: () => [
      { text: '💼 Work Experience', cls: 'warn' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  Software Developer Intern @ Tecxed', cls: 'success' },
      { text: '  Jan 2026 – Present (Onsite)', cls: '' },
      { text: '', cls: '' },
      { text: '  MERN Stack Developer Intern @ Skybrisk', cls: 'success' },
      { text: '  Jan 2026 – Mar 2026 (Remote)', cls: '' },
    ],

    education: () => [
      { text: '🎓 Education', cls: 'info' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  B.Tech CSE — GKU Haridwar (CGPA: 8.5)', cls: 'success' },
      { text: '  Oct 2022 – Nov 2026', cls: '' },
      { text: '', cls: '' },
      { text: '  12th [PCM] — SN College, Motihari (80.6%)', cls: 'success' },
      { text: '  Higher Secondary · 2020–2021', cls: '' },
      { text: '', cls: '' },
      { text: '  10th — Zila School, Motihari (78.6%)', cls: 'success' },
      { text: '  Secondary · 2018–2019', cls: '' },
    ],

    date: () => [
      { text: `  📅 ${new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'medium' })}`, cls: 'info' }
    ],

    whoami: () => [
      { text: '  najish — a developer who solves DSA problems for fun', cls: 'success' },
      { text: '  and sometimes dreams in JavaScript 😄', cls: 'muted' },
    ],

    'sudo hire': () => [
      { text: '🔑 Escalating privileges...', cls: 'warn' },
      { text: '✅ Access granted! Great choice.', cls: 'success' },
      { text: '  → Redirect to Contact section recommended.', cls: 'info' },
      { text: '  → Email: najishchamparni2003@gmail.com', cls: '' },
    ],

    // ---- Unix-style commands ----
    ls: () => [
      { text: '📁 portfolio/', cls: 'info' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  about/         skills/          projects/', cls: 'success' },
      { text: '  experience/    education/       contact/', cls: 'success' },
      { text: '  github-stats/  hobbies/         achievements/', cls: 'success' },
      { text: '', cls: '' },
      { text: '  README.md      resume.pdf       portfolio.html', cls: 'warn' },
    ],

    pwd: () => [
      { text: '  /home/najish/portfolio', cls: 'info' },
    ],

    'cat readme.md': () => [
      { text: '# Najish Akhtar — Portfolio', cls: 'info' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: '  Full Stack Developer | DSA Enthusiast', cls: 'success' },
      { text: '  Built with: HTML, CSS, JavaScript', cls: '' },
      { text: '  Run `help` to explore interactively.', cls: 'muted' },
    ],

    'cat resume.pdf': () => [
      { text: '  📄 Binary file — cannot display.', cls: 'warn' },
      { text: '  💡 Tip: Scroll to hero section and Download CV instead.', cls: 'muted' },
    ],

    tree: () => [
      { text: '📂 portfolio/', cls: 'info' },
      { text: '├── 🏠 home/', cls: '' },
      { text: '├── 👤 about/', cls: '' },
      { text: '├── 🗺️  journey/', cls: '' },
      { text: '│   ├── education/', cls: 'muted' },
      { text: '│   └── experience/', cls: 'muted' },
      { text: '├── ⚡ skills/', cls: '' },
      { text: '├── 🚀 projects/', cls: '' },
      { text: '├── 🏆 achievements/', cls: '' },
      { text: '├── 📊 github-stats/', cls: '' },
      { text: '└── 📬 contact/', cls: '' },
    ],

    uname: () => [
      { text: '  NajishOS v1.0 — portfolio-kernel (JavaScript)', cls: 'info' },
    ],

    'uname -a': () => [
      { text: '  NajishOS 1.0.0 portfolio #1 SMP JavaScript MERN-arch', cls: 'info' },
    ],

    open: () => [
      { text: '  Usage: open <section>', cls: 'warn' },
      { text: '  e.g.   open projects  |  open contact', cls: 'muted' },
    ],

    'open projects': () => { document.querySelector('a[href="#projects"]')?.click(); return [{ text: '  \u2705 Navigating to Projects...', cls: 'success' }]; },
    'open contact': () => { document.querySelector('a[href="#contact"]')?.click(); return [{ text: '  \u2705 Navigating to Contact...', cls: 'success' }]; },
    'open about': () => { document.querySelector('a[href="#about"]')?.click(); return [{ text: '  \u2705 Navigating to About...', cls: 'success' }]; },
    'open skills': () => { document.querySelector('a[href="#skills"]')?.click(); return [{ text: '  \u2705 Navigating to Skills...', cls: 'success' }]; },
    'open journey': () => { document.querySelector('a[href="#journey"]')?.click(); return [{ text: '  \u2705 Navigating to Journey...', cls: 'success' }]; },
    'open blogs': () => { document.querySelector('a[href="#blogs"]')?.click(); return [{ text: '  \u2705 Navigating to Blogs...', cls: 'success' }]; },

    blogs: () => [
      { text: '\ud83d\udcdd Blog & Articles', cls: 'info' },
      { text: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500', cls: 'muted' },
      { text: '  1. [DSA]    Mastering Two-Pointer Technique', cls: '' },
      { text: '  2. [React]  useEffect \u2014 Common Beginner Mistakes', cls: '' },
      { text: '  3. [Node]   Building REST APIs with Express.js', cls: '' },
      { text: '  4. [MongoDB] Aggregation Pipeline Deep Dive', cls: '' },
      { text: '  5. [Java]   OOPs \u2014 Textbook to Real World', cls: '' },
      { text: '  6. [Career] My Internship Journey \u2014 3 Months Recap', cls: 'success' },
      { text: '', cls: '' },
      { text: '  \u2192 Run: open blogs  to navigate there', cls: 'muted' },
    ],

    echo: (args) => [
      { text: `  ${args || '(empty)'}`, cls: 'success' },
    ],

    'man najish': () => [
      { text: 'NAJISH(1)              Portfolio Manual             NAJISH(1)', cls: 'info' },
      { text: '─────────────────────────────────', cls: 'muted' },
      { text: 'NAME', cls: 'warn' },
      { text: '       najish - Full Stack Developer', cls: '' },
      { text: 'SYNOPSIS', cls: 'warn' },
      { text: '       najish [--hire] [--contact] [--collab]', cls: '' },
      { text: 'DESCRIPTION', cls: 'warn' },
      { text: '       Builds web apps, solves DSA problems for fun.', cls: '' },
      { text: '       Dreams occasionally in JavaScript.', cls: 'muted' },
      { text: 'SEE ALSO', cls: 'warn' },
      { text: '       contact(1), projects(1), github(1)', cls: '' },
    ],

    cd: (args) => [
      { text: `  Changing directory to ${args ? '/home/najish/' + args : '/home/najish/portfolio'}...`, cls: 'info' },
      { text: '  (You can also use the navbar above!)', cls: 'muted' },
    ],

    clear: () => 'CLEAR',
  };

  // ---- Output helpers ----
  function printLine(text, cls = '') {
    const line = document.createElement('div');
    line.className = 'console-line';
    const span = document.createElement('span');
    span.className = `console-text ${cls}`;
    span.textContent = text;
    line.appendChild(span);
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }

  function printEcho(cmd) {
    const line = document.createElement('div');
    line.className = 'console-line user';
    line.innerHTML = `<span class="console-prompt">najish</span><span class="console-text muted"> ${cmd}</span>`;
    consoleOutput.appendChild(line);
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Save to history
    cmdHistory.unshift(cmd);
    historyIdx = -1;

    // Clear previous output before showing new command result
    consoleOutput.innerHTML = '';

    printEcho(raw.trim());

    if (cmd === 'clear') {
      consoleOutput.innerHTML = '';
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      // Support commands with args (e.g. echo, cd, open <section>)
      const lines = handler(raw.trim().slice(cmd.length).trim());
      if (lines === 'CLEAR') { consoleOutput.innerHTML = ''; return; }
      lines.forEach(l => printLine(l.text, l.cls));
    } else {
      // Fuzzy-suggest close matches
      const allCmds = Object.keys(COMMANDS);
      const suggestions = allCmds.filter(c =>
        c.split('').filter(ch => cmd.includes(ch)).length >= Math.floor(c.length * 0.5)
      ).slice(0, 3);
      printLine(`  bash: ${cmd}: command not found`, 'error');
      if (suggestions.length) {
        printLine(`  💡 Did you mean: ${suggestions.join(' | ')}?`, 'warn');
      }
    }
    printLine(''); // spacer
  }

  // ---- Input event ----
  consoleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      runCommand(consoleInput.value);
      consoleInput.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx < cmdHistory.length - 1) {
        historyIdx++;
        consoleInput.value = cmdHistory[historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        consoleInput.value = cmdHistory[historyIdx];
      } else {
        historyIdx = -1;
        consoleInput.value = '';
      }
    }
  });

  // ---- Window controls ----
  toggleBtn.addEventListener('click', () => {
    const isMin = devConsole.classList.contains('minimized');
    devConsole.classList.toggle('minimized', !isMin);
    devConsole.classList.remove('maximized');
    toggleBtn.querySelector('i').className = isMin ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
    if (isMin) setTimeout(() => consoleInput.focus(), 350);
  });

  minimizeBtn.addEventListener('click', () => {
    devConsole.classList.add('minimized');
    devConsole.classList.remove('maximized');
    toggleBtn.querySelector('i').className = 'fas fa-chevron-up';
  });

  maximizeBtn.addEventListener('click', () => {
    devConsole.classList.toggle('maximized');
    devConsole.classList.remove('minimized');
    toggleBtn.querySelector('i').className = 'fas fa-chevron-down';
    setTimeout(() => consoleInput.focus(), 350);
  });

  closeBtn.addEventListener('click', () => {
    devConsole.style.display = 'none';
  });

  // Click anywhere on header (except buttons) to toggle
  document.getElementById('consoleHeader').addEventListener('click', (e) => {
    if (e.target.closest('.dev-console-dots') || e.target.closest('.console-toggle-btn')) return;
    toggleBtn.click();
  });
}

// ==================== INTERNSHIP MODAL INTERACTIONS ====================
(function () {
  const modals = document.querySelectorAll('.internship-modal-overlay');
  if (!modals.length) return;

  modals.forEach(function (modal) {
    // Close on overlay click (outside modal content)
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Close any active modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modals.forEach(function (modal) {
        if (modal.classList.contains('active')) {
          modal.classList.remove('active');
        }
      });
    }
  });

  // Prevent body scroll when any modal is open
  modals.forEach(function (modal) {
    const observer = new MutationObserver(function () {
      const anyActive = document.querySelector('.internship-modal-overlay.active');
      document.body.style.overflow = anyActive ? 'hidden' : '';
    });
    observer.observe(modal, { attributes: true });
  });
})();

// ==================== INTERACTIVE GUESTBOOK ====================
function initializeGuestbook() {
  const form = document.getElementById("guestbookForm");
  const feed = document.getElementById("guestbookFeed");
  const countEl = document.getElementById("messagesCount");
  const avatarLabels = document.querySelectorAll(".avatar-option");

  if (!form || !feed) return;

  // 1. Avatar selector style toggle
  avatarLabels.forEach(label => {
    label.addEventListener("click", () => {
      avatarLabels.forEach(l => l.classList.remove("active"));
      label.classList.add("active");
    });
  });

  // 2. Predefined mock messages
  const defaultMessages = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Recruiter",
      avatar: "user-astronaut",
      message: "Absolutely love the interactive CLI terminal! Shows incredible full-stack competence and creative flair. Impressed by your DSA problem counts!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString() // 3 days ago
    },
    {
      id: 2,
      name: "Rohit Sharma",
      role: "Developer",
      avatar: "laptop-code",
      message: "The transition animations and the color gradients look top tier! The Clean WBS implementation detailed in your Tecxed internship shows solid domain knowledge.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() // 5 hours ago
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Project Manager",
      avatar: "coffee",
      message: "Very clean portfolio. Navigating through your work experience modal feels extremely smooth. Great job structuring the ERP workflows!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 mins ago
    }
  ];

  // 3. Load from localStorage or use defaults
  let messages = [];
  try {
    const saved = localStorage.getItem("najish_guestbook");
    if (saved) {
      messages = JSON.parse(saved);
    } else {
      messages = defaultMessages;
      localStorage.setItem("najish_guestbook", JSON.stringify(messages));
    }
  } catch (e) {
    messages = defaultMessages;
  }

  // 4. Time formatter helper
  function formatTime(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  // Expose delete message function globally
  window.deleteGuestbookMessage = function (id) {
    if (confirm("Are you sure you want to delete this message?")) {
      messages = messages.filter(m => m.id !== id);
      try {
        localStorage.setItem("najish_guestbook", JSON.stringify(messages));
      } catch (err) {
        console.error("Failed to save to localStorage:", err);
      }
      renderFeed();
    }
  };

  // Clear all button listener
  const clearAllBtn = document.getElementById("gbClearAllBtn");
  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete all messages? This cannot be undone.")) {
        messages = [];
        try {
          localStorage.setItem("najish_guestbook", JSON.stringify(messages));
        } catch (err) {
          console.error("Failed to save to localStorage:", err);
        }
        renderFeed();
      }
    });
  }

  // 5. Render feed
  function renderFeed() {
    feed.innerHTML = "";

    // Sort: newest first
    const sorted = [...messages].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (countEl) {
      countEl.textContent = `${sorted.length} message${sorted.length !== 1 ? 's' : ''}`;
    }

    sorted.forEach(msg => {
      const card = document.createElement("div");
      card.className = "feed-message-card";

      const badgeClass = msg.role.toLowerCase().replace(/\s+/g, '-');

      card.innerHTML = `
        <div class="feed-avatar">
          <i class="fas fa-${msg.avatar}"></i>
        </div>
        <div class="feed-message-content">
          <div class="feed-user-meta">
            <div class="feed-user-title">
              <span class="feed-username">${escapeHtml(msg.name)}</span>
              <span class="feed-badge ${badgeClass}">${msg.role}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="feed-timestamp">${formatTime(msg.timestamp)}</span>
              <button class="gb-card-delete-btn" onclick="deleteGuestbookMessage(${msg.id})" title="Delete message" style="background: transparent; border: none; color: var(--text-secondary); cursor: pointer; font-size: 0.78rem; opacity: 0.5; transition: all 0.3s ease; outline: none; padding: 2px;">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <p class="feed-text">${escapeHtml(msg.message)}</p>
        </div>
      `;
      feed.appendChild(card);
    });
  }

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 6. Handle Form Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("gbName");
    const roleInput = document.getElementById("gbRole");
    const messageInput = document.getElementById("gbMessage");
    const checkedAvatar = document.querySelector('input[name="gbAvatar"]:checked');

    if (!nameInput.value.trim() || !messageInput.value.trim()) return;

    const newMsg = {
      id: Date.now(),
      name: nameInput.value.trim(),
      role: roleInput.value,
      avatar: checkedAvatar ? checkedAvatar.value : "laptop-code",
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };

    messages.push(newMsg);

    try {
      localStorage.setItem("najish_guestbook", JSON.stringify(messages));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }

    renderFeed();

    // Reset Form
    nameInput.value = "";
    messageInput.value = "";
    roleInput.value = "Visitor";

    // Reset avatar selectors
    avatarLabels.forEach(l => l.classList.remove("active"));
    avatarLabels[0].classList.add("active");
    const radioFirst = document.querySelector('input[name="gbAvatar"]');
    if (radioFirst) radioFirst.checked = true;
  });

  // Initial render
  renderFeed();
}

// ==================== MINI DSA VISUALIZER / SANDBOX ====================
let currentDsaTab = 'sorting';
let isDsaRunning = false;
let dsaCancelToken = false; // to cancel running sorting/searching/bfs loops

window.switchDsaTab = function(tabName) {
  if (isDsaRunning) {
    dsaCancelToken = true;
    isDsaRunning = false;
  }

  currentDsaTab = tabName;

  document.querySelectorAll(".dsa-tab-btn").forEach(btn => btn.classList.remove("active"));
  if (tabName === 'sorting') document.getElementById("dsaTabSorting").classList.add("active");
  if (tabName === 'search') document.getElementById("dsaTabSearch").classList.add("active");
  if (tabName === 'bfs') document.getElementById("dsaTabBfs").classList.add("active");

  renderDsaControlsAndScreen();
};

function renderDsaControlsAndScreen() {
  const controls = document.getElementById("dsaControls");
  const screen = document.getElementById("dsaSandboxScreen");
  const consoleEl = document.getElementById("dsaStatusConsole");

  if (!controls || !screen || !consoleEl) return;

  dsaCancelToken = false;

  if (currentDsaTab === 'sorting') {
    controls.innerHTML = `
      <button onclick="dsaGenerateSortingArray()" class="btn btn-secondary" style="font-size:0.78rem; padding:0.45rem 1rem; border-radius:8px;">Generate Random Array</button>
      <select id="dsaSortingSpeed" style="cursor:pointer; margin-left:0.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary); padding: 0.45rem 0.8rem; border-radius: 8px; font-size: 0.85rem;">
        <option value="500">Slow (500ms)</option>
        <option value="200" selected>Medium (200ms)</option>
        <option value="50">Fast (50ms)</option>
      </select>
      <button onclick="dsaStartBubbleSort()" class="btn btn-primary" style="font-size:0.78rem; padding:0.45rem 1rem; border-radius:8px; margin-left:0.5rem;">Start Bubble Sort</button>
    `;
    screen.innerHTML = `<div id="sortingBarsContainer" style="display:flex; align-items:flex-end; height:100%; width:100%; justify-content:center;"></div>`;
    consoleEl.innerHTML = `<strong>Console:</strong> Ready. Click "Start Bubble Sort" to visualize array swapping (Time: O(N²), Space: O(1)).`;
    dsaGenerateSortingArray();

  } else if (currentDsaTab === 'search') {
    controls.innerHTML = `
      <button onclick="dsaGenerateSearchArray()" class="btn btn-secondary" style="font-size:0.78rem; padding:0.45rem 1rem; border-radius:8px;">New Sorted Array</button>
      <label style="font-size:0.78rem; color:var(--text-secondary); margin-left:0.5rem;">Target Value:</label>
      <select id="dsaSearchTarget" style="cursor:pointer; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary); padding: 0.45rem 0.8rem; border-radius: 8px; font-size: 0.85rem;"></select>
      <select id="dsaSearchSpeed" style="cursor:pointer; margin-left:0.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary); padding: 0.45rem 0.8rem; border-radius: 8px; font-size: 0.85rem;">
        <option value="1000">Slow (1s)</option>
        <option value="500" selected>Medium (500ms)</option>
        <option value="150">Fast (150ms)</option>
      </select>
      <button onclick="dsaStartBinarySearch()" class="btn btn-primary" style="font-size:0.78rem; padding:0.45rem 1rem; border-radius:8px; margin-left:0.5rem;">Start Binary Search</button>
    `;
    screen.innerHTML = `<div id="searchCellsContainer" class="search-array"></div>`;
    consoleEl.innerHTML = `<strong>Console:</strong> Ready. Choose a target value to visualize Binary Search (Time: O(log N)).`;
    dsaGenerateSearchArray();

  } else if (currentDsaTab === 'bfs') {
    controls.innerHTML = `
      <button onclick="dsaResetBfsGrid()" class="btn btn-secondary" style="font-size:0.78rem; padding:0.45rem 1rem; border-radius:8px;">Reset Grid</button>
      <span style="font-size:0.75rem; color:var(--text-secondary); margin-left:0.5rem;">Click cells to toggle walls (🚧). Start (S) at [0,0], End (E) at [7,7].</span>
      <select id="dsaBfsSpeed" style="cursor:pointer; margin-left:0.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary); padding: 0.45rem 0.8rem; border-radius: 8px; font-size: 0.85rem;">
        <option value="300">Slow (300ms)</option>
        <option value="100" selected>Medium (100ms)</option>
        <option value="30">Fast (30ms)</option>
      </select>
      <button onclick="dsaStartBfs()" class="btn btn-primary" style="font-size:0.78rem; padding:0.45rem 1rem; border-radius:8px; margin-left:0.5rem;">Visualize BFS</button>
    `;
    screen.innerHTML = `<div id="bfsGridContainer" class="bfs-grid"></div>`;
    consoleEl.innerHTML = `<strong>Console:</strong> Ready. Click cells to add walls (O(V+E)). Click "Visualize BFS" to find the shortest path.`;
    dsaResetBfsGrid();
  }
}

const dsaSleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ==================== SORTING VISUALIZER ====================
let sortingArray = [];

window.dsaGenerateSortingArray = function() {
  const container = document.getElementById("sortingBarsContainer");
  if (!container) return;

  sortingArray = [];
  for (let i = 0; i < 12; i++) {
    sortingArray.push(Math.floor(Math.random() * 70) + 15);
  }

  container.innerHTML = sortingArray.map((val, idx) => `
    <div class="sorting-bar" id="bar-${idx}" style="height: ${val * 2.5}px;">
      ${val}
    </div>
  `).join("");
};

window.dsaStartBubbleSort = async function() {
  if (isDsaRunning) return;
  isDsaRunning = true;
  dsaCancelToken = false;

  const container = document.getElementById("sortingBarsContainer");
  const consoleEl = document.getElementById("dsaStatusConsole");
  const speed = parseInt(document.getElementById("dsaSortingSpeed").value) || 200;

  if (!container) return;

  const len = sortingArray.length;
  let arr = [...sortingArray];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (dsaCancelToken) {
        isDsaRunning = false;
        return;
      }

      const barJ = document.getElementById(`bar-${j}`);
      const barJ1 = document.getElementById(`bar-${j+1}`);
      if (barJ && barJ1) {
        barJ.style.backgroundColor = "var(--accent-2)";
        barJ1.style.backgroundColor = "var(--accent-2)";
      }

      consoleEl.innerHTML = `<strong>Console:</strong> Comparing indexes ${j} (${arr[j]}) and ${j+1} (${arr[j+1]}).`;
      await dsaSleep(speed);

      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;

        if (barJ && barJ1) {
          barJ.style.height = `${arr[j] * 2.5}px`;
          barJ.innerHTML = arr[j];
          barJ1.style.height = `${arr[j+1] * 2.5}px`;
          barJ1.innerHTML = arr[j+1];
          barJ.style.backgroundColor = "#ef4444";
          barJ1.style.backgroundColor = "#ef4444";
        }
        consoleEl.innerHTML = `<strong>Console:</strong> Swap! ${arr[j+1]} is larger than ${arr[j]}. Swapping elements.`;
        await dsaSleep(speed);
      }

      if (barJ && barJ1) {
        barJ.style.backgroundColor = "var(--accent-1)";
        barJ1.style.backgroundColor = "var(--accent-1)";
      }
    }

    const sortedBar = document.getElementById(`bar-${len - i - 1}`);
    if (sortedBar) {
      sortedBar.style.backgroundColor = "#10b981";
    }
  }

  consoleEl.innerHTML = `<strong>Console:</strong> Sorting completed! Array is now sorted. Time Complexity: O(N²), Space: O(1).`;
  isDsaRunning = false;
};

// ==================== BINARY SEARCH VISUALIZER ====================
let searchArray = [];

window.dsaGenerateSearchArray = function() {
  const container = document.getElementById("searchCellsContainer");
  const targetSelect = document.getElementById("dsaSearchTarget");
  if (!container || !targetSelect) return;

  searchArray = [];
  let curr = Math.floor(Math.random() * 10) + 5;
  for (let i = 0; i < 11; i++) {
    searchArray.push(curr);
    curr += Math.floor(Math.random() * 12) + 4;
  }

  container.innerHTML = searchArray.map((val, idx) => `
    <div class="search-cell" id="scell-${idx}">
      <small>${idx}</small>
      ${val}
    </div>
  `).join("");

  targetSelect.innerHTML = searchArray.map(val => `<option value="${val}">${val}</option>`).join("");
  targetSelect.innerHTML += `<option value="120">120 (Not in Array)</option>`;
};

window.dsaStartBinarySearch = async function() {
  if (isDsaRunning) return;
  isDsaRunning = true;
  dsaCancelToken = false;

  const target = parseInt(document.getElementById("dsaSearchTarget").value);
  const speed = parseInt(document.getElementById("dsaSearchSpeed").value) || 500;
  const consoleEl = document.getElementById("dsaStatusConsole");

  for (let i = 0; i < searchArray.length; i++) {
    const el = document.getElementById(`scell-${i}`);
    if (el) {
      el.className = "search-cell";
    }
  }

  let low = 0;
  let high = searchArray.length - 1;
  let foundIdx = -1;

  while (low <= high) {
    if (dsaCancelToken) {
      isDsaRunning = false;
      return;
    }

    let mid = Math.floor((low + high) / 2);
    
    for (let i = 0; i < searchArray.length; i++) {
      const el = document.getElementById(`scell-${i}`);
      if (!el) continue;
      
      el.classList.remove("active-mid", "active-low", "active-high");
      
      if (i < low || i > high) {
        el.classList.add("discarded");
      } else {
        el.classList.remove("discarded");
      }
    }

    const lowEl = document.getElementById(`scell-${low}`);
    const highEl = document.getElementById(`scell-${high}`);
    const midEl = document.getElementById(`scell-${mid}`);

    if (lowEl) lowEl.classList.add("active-low");
    if (highEl) highEl.classList.add("active-high");
    if (midEl) midEl.classList.add("active-mid");

    consoleEl.innerHTML = `<strong>Console:</strong> Search Space: [${low} ... ${high}]. Computing mid index: (${low}+${high})/2 = <strong>${mid}</strong> (value: ${searchArray[mid]}).`;
    await dsaSleep(speed);

    if (searchArray[mid] === target) {
      foundIdx = mid;
      break;
    } else if (searchArray[mid] < target) {
      consoleEl.innerHTML = `<strong>Console:</strong> Target ${target} is greater than mid value ${searchArray[mid]}. Discarding left half (indexes ${low} to ${mid}).`;
      low = mid + 1;
    } else {
      consoleEl.innerHTML = `<strong>Console:</strong> Target ${target} is less than mid value ${searchArray[mid]}. Discarding right half (indexes ${mid} to ${high}).`;
      high = mid - 1;
    }
    await dsaSleep(speed);
  }

  if (foundIdx !== -1) {
    for (let i = 0; i < searchArray.length; i++) {
      const el = document.getElementById(`scell-${i}`);
      if (el) {
        el.classList.remove("active-mid", "active-low", "active-high");
        if (i !== foundIdx) el.classList.add("discarded");
      }
    }
    const foundEl = document.getElementById(`scell-${foundIdx}`);
    if (foundEl) foundEl.classList.add("found");
    consoleEl.innerHTML = `<strong>Console:</strong> SUCCESS! Target ${target} found at index <strong>${foundIdx}</strong>. Total Steps: O(log N).`;
  } else {
    for (let i = 0; i < searchArray.length; i++) {
      const el = document.getElementById(`scell-${i}`);
      if (el) el.classList.add("discarded");
    }
    consoleEl.innerHTML = `<strong>Console:</strong> NOT FOUND! Target ${target} does not exist in the array.`;
  }

  isDsaRunning = false;
};

// ==================== BFS PATHFINDING VISUALIZER ====================
let bfsGridSize = 8;
let bfsStartNode = [0, 0];
let bfsEndNode = [7, 7];
let bfsWalls = {};

window.dsaResetBfsGrid = function() {
  const container = document.getElementById("bfsGridContainer");
  if (!container) return;

  bfsWalls = {};
  
  let html = "";
  for (let r = 0; r < bfsGridSize; r++) {
    for (let c = 0; c < bfsGridSize; c++) {
      let extraClass = "";
      if (r === bfsStartNode[0] && c === bfsStartNode[1]) extraClass = "start";
      else if (r === bfsEndNode[0] && c === bfsEndNode[1]) extraClass = "end";

      html += `<div class="bfs-cell ${extraClass}" id="cell-${r}-${c}" onclick="toggleBfsWall(${r}, ${c})"></div>`;
    }
  }
  container.innerHTML = html;
  
  container.style.gridTemplateColumns = `repeat(${bfsGridSize}, 1fr)`;
  container.style.width = "300px";
  container.style.aspectRatio = "1";
};

window.toggleBfsWall = function(r, c) {
  if (isDsaRunning) return;
  if ((r === bfsStartNode[0] && c === bfsStartNode[1]) || (r === bfsEndNode[0] && c === bfsEndNode[1])) return;

  const key = `${r}-${c}`;
  const cell = document.getElementById(`cell-${r}-${c}`);
  if (!cell) return;

  if (bfsWalls[key]) {
    delete bfsWalls[key];
    cell.classList.remove("wall");
  } else {
    bfsWalls[key] = true;
    cell.classList.add("wall");
  }
};

window.dsaStartBfs = async function() {
  if (isDsaRunning) return;
  isDsaRunning = true;
  dsaCancelToken = false;

  const speed = parseInt(document.getElementById("dsaBfsSpeed").value) || 100;
  const consoleEl = document.getElementById("dsaStatusConsole");

  for (let r = 0; r < bfsGridSize; r++) {
    for (let c = 0; c < bfsGridSize; c++) {
      const cell = document.getElementById(`cell-${r}-${c}`);
      if (cell) {
        cell.classList.remove("visited", "path");
      }
    }
  }

  const queue = [[bfsStartNode[0], bfsStartNode[1], []]];
  const visited = {};
  visited[`${bfsStartNode[0]}-${bfsStartNode[1]}`] = true;

  let pathFound = null;

  while (queue.length > 0) {
    if (dsaCancelToken) {
      isDsaRunning = false;
      return;
    }

    const [r, c, currentPath] = queue.shift();

    if (r === bfsEndNode[0] && c === bfsEndNode[1]) {
      pathFound = [...currentPath, [r, c]];
      break;
    }

    if (!(r === bfsStartNode[0] && c === bfsStartNode[1])) {
      const cell = document.getElementById(`cell-${r}-${c}`);
      if (cell) cell.classList.add("visited");
    }

    consoleEl.innerHTML = `<strong>Console:</strong> BFS visiting cell [${r}, ${c}]. Queue Size: ${queue.length}.`;
    await dsaSleep(speed);

    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      const nKey = `${nr}-${nc}`;

      if (nr >= 0 && nr < bfsGridSize && nc >= 0 && nc < bfsGridSize) {
        if (!bfsWalls[nKey] && !visited[nKey]) {
          visited[nKey] = true;
          queue.push([nr, nc, [...currentPath, [r, c]]]);
        }
      }
    }
  }

  if (pathFound) {
    consoleEl.innerHTML = `<strong>Console:</strong> Shortest path found! Distance: ${pathFound.length - 1} steps. Drawing path...`;
    
    for (const [pr, pc] of pathFound) {
      if (dsaCancelToken) {
        isDsaRunning = false;
        return;
      }
      if (!((pr === bfsStartNode[0] && pc === bfsStartNode[1]) || (pr === bfsEndNode[0] && pc === bfsEndNode[1]))) {
        const cell = document.getElementById(`cell-${pr}-${pc}`);
        if (cell) cell.classList.add("path");
        await dsaSleep(speed);
      }
    }
    consoleEl.innerHTML = `<strong>Console:</strong> Path visualized successfully. Total complexity: O(V+E).`;
  } else {
    consoleEl.innerHTML = `<strong>Console:</strong> PATH BLOCKED! No valid paths exist from Start to End.`;
  }

  isDsaRunning = false;
};

window.initializeDsaVisualizer = function() {
  switchDsaTab('sorting');
};
