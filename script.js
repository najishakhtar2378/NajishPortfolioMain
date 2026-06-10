// Project Management System

const projectsData = [
  {
  title: "WanderLust (Full-Stack like Airbnb )",
  description: "Full-stack wanderlust platform built with  for clean, maintainable code. Features user auth, property management, and real-time messaging. Responsive design ensures seamless experience across all devices.",
  technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "EJS", "RESTAPI"],
    githubLink: "https://github.com/najishakhtar2378/WanderLustApps.git",
    liveLink: "https://wanderlustapps.onrender.com/listings",
  icon: "fas fa-home",
    status: "completed",
},
  {
    title: "ERP Manaement System(Quantivo ERP)",
    description: "Developed a full-featured ERP Management System using the MERN stack (MongoDB, Express.js, React, Node.js) to efficiently manage a company’s core business operations. Implemented secure authentication and role-based access control using JWT (JSON Web Token) to ensure protected and scalable user access across the system.",
    technologies: ["JavaScript", "React js", "Node.js", "MongoDB", "Express", "RESTAPI", "jwt"],
    githubLink: "https://github.com/najishakhtar2378/erpmanagemntSystemFrontend.git",
    liveLink: "https://erpmanagemnt-system-frontend-ozqu.vercel.app/login",
    icon: "fas fa-industry",
    status: "completed",
  },
  {
    title: "Video Conferencing App (Zoom Clone)",
    description: "A real-time app with a React frontend and Node.js + Express backend, fetching global headlines via public API. Built a full-stack real-time video conferencing web app using WebRTC, React, and Socket.io.Implemented live video/ audio streaming, screen sharing, meeting chat, participant management, and secure room - based communication.Deployed on Vercel + Render with optimized P2P connections.",
    technologies: ["React.js", "Node.js", "Express.js", "API", "socket", "mongoDB",],
    githubLink: "https://github.com/najishakhtar2378/zoomFrontend.git",
    liveLink: "https://zoom-frontend-inky.vercel.app/",
    icon: "fas fa-user",
    status: "completed",
  },


  {
    title: "Zerodha_Clone-website",
    description:
      "A Zerodha clone is a trading platform similar to Zerodha, offering equity/derivative trading, mutual funds, and real-time market data. It’s built with secure APIs and an easy UI to help businesses launch their own online stock trading app.",
    technologies: ["React.js","Bootstrap","Node.js","Express.js","MongoDb","Full Stack","Portfolio-Management","react_dashboard"],
    githubLink: "https://github.com/najishakhtar2378/zerodha_dashboard.git",
    liveLink:"https://zerodha-frontend-gfnc.vercel.app", 
    icon: "fas fa-brain",
    status: "completed",
  },

  {
    title: "Cunstruction Website",
    description: "The objective of this project is to develop a web-based Construction Management System that simplifies the planning, tracking, and execution of construction projects. Traditional manual methods often cause errors, delays, and poor communication. This system provides a centralized platform with modules such as Home, Services, Projects, Blog, and Contact to ensure smooth navigation and accessibility",
    technologies: [ "CSS","REACT", "BootStrap", "JavaScript"],
    githubLink: "https://github.com/najishakhtar2378/ConstructionWebsite.git",
    liveLink: "https://construction-website-1yb4.vercel.app/",
    icon: "fa-solid fa-hard-hat",
    status: "completed",
  },
  {
    title: "Post App (A social Media platform)",
    description: "A simple Post Management App built with React that allows users to create, edit, and delete posts in real time. It demonstrates state management, component reusability, and clean UI design."
    ,
    technologies: ["REACT", "BootStrap", "JavaScript"],
    githubLink: "https://github.com/najishakhtar2378/PostApp.git",
    liveLink: "https://post-app-virid.vercel.app/#",
    icon: "fas fa-pen-nib",
    status: "completed",
  },
  {
    title: "weather app",
    description:
      "A simple weather application that fetches real-time weather data based on user input using a public API.",
    technologies: ["React", "CSS", "API"],
    githubLink: "https://github.com/najishakhtar2378/weatherApp.git",
    liveLink: "https://weather-app-ten-self-95.vercel.app",
    icon: "fas fa-cloud-sun",
    status: "completed",
  },
  {
    title: "Dictionary App",
    description:
    "A web-based dictionary application that provides definitions, synonyms, and translations for words using a public API.",
    technologies: ["React", "CSS", "API"],
    githubLink: "https://github.com/najishakhtar2378/DictionaryApp.git",
    liveLink: "https://dictionary-app-steel-five.vercel.app/",
    icon: "fas fa-book",
    status: "completed",
  },
  {
    title: "To Do App",
    description:
      "A React-based To-Do app that allows users to add, complete, and delete tasks dynamically. Built with functional components and state management using React Hooks, it demonstrates interactive UI updates and efficient component structure.",
    technologies: ["REACT", "Bootstrap"],
    githubLink: "https://github.com/najishakhtar2378/ToDoApp.git",
    liveLink: "https://to-do-app-kappa-sand.vercel.app/",
    icon: "fas fa-key",
    status: "completed",
  },
  {
    title: "Tic-Tac Game",
    description:
      "Tic Tac Toe Game – A classic two-player strategy game built on a 3x3 grid where players alternate turns placing X or O. The objective is to align three symbols in a row, column, or diagonal. Features include win detection, draw handling, and an interactive user interface for smooth gameplay.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/najishakhtar2378/Tic-Tac.git",
    liveLink: "https://tic-tac-ih6v.vercel.app/",
    icon: "fas fa-gamepad",
    status: "completed",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projectsContainer");
  let html = "";

  projectsData.forEach((project) => {
    html += `
      <div class="project-card">
        <div class="project-header">
          <h3 class="project-title">
            <i class="${project.icon}"></i> ${project.title}
          </h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies
              .map((tech) => `<span class="tech-tag">${tech}</span>`)
              .join("")}
          </div>
          <div class="project-status ${
            project.status === "completed"
              ? "status-completed"
              : "status-progress"
          }">
            ${
              project.status === "completed" ? "✅ Completed" : "🚧 In Progress"
            }
          </div>
        </div>
        <div class="project-links">
          <a href="${project.githubLink}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> GitHub
          </a>
          ${
            project.liveLink
              ? `
          <a href="${project.liveLink}" target="_blank" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>`
              : ""
          }
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
});

function createProjectCard(project, index) {
  const card = document.createElement("div");
  card.className = "project-card animate-on-scroll";
  card.style.animationDelay = index * 0.1 + "s";

  const statusClass =
    project.status === "completed" ? "status-completed" : "status-progress";
  const statusText =
    project.status === "completed" ? "Completed" : "In Progress";

  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  const liveLink = project.liveLink
    ? `<a href="${project.liveLink}" target="_blank" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
        </a>`
    : "";

  card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">
                <i class="${project.icon}"></i>
                ${project.title}
            </h3>
            <span class="project-status ${statusClass}">${statusText}</span>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
        </div>
        <div class="project-links">
            <a href="${project.githubLink}" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            ${liveLink}
        </div>
    `;

  return card;
}

function initializeProjectManagement() {
  const addProjectBtn = document.getElementById("addProjectBtn");
  if (!addProjectBtn) return;

  addProjectBtn.addEventListener("click", showAddProjectModal);
}

function showAddProjectModal() {
  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add New Project</h3>
                <button class="modal-close">&times;</button>
            </div>
            <form id="addProjectForm" class="modal-form">
                <div class="form-row">
                    <div class="form-group">
                        <label>Project Title</label>
                        <input type="text" name="title" required placeholder="e.g., My Awesome App">
                    </div>
                    <div class="form-group">
                        <label>Icon Class</label>
                        <input type="text" name="icon" placeholder="e.g., fas fa-rocket" value="fas fa-code">
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea name="description" required placeholder="Brief description of your project..."></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Technologies (comma separated)</label>
                        <input type="text" name="technologies" required placeholder="React, Node.js, MongoDB">
                    </div>
                    <div class="form-group">
                        <label>Status</label>
                        <select name="status" required>
                            <option value="progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>GitHub Link</label>
                        <input type="url" name="githubLink" required placeholder="https://github.com/username/repo">
                    </div>
                    <div class="form-group">
                        <label>Live Demo Link (optional)</label>
                        <input type="url" name="liveLink" placeholder="https://your-project.com">
                    </div>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary modal-cancel">Cancel</button>
                    <button type="submit" class="btn btn-primary">Add Project</button>
                </div>
            </form>
        </div>
    `;

  document.body.appendChild(modal);

  // Modal event listeners
  const overlay = modal.querySelector(".modal-overlay");
  const closeBtn = modal.querySelector(".modal-close");
  const cancelBtn = modal.querySelector(".modal-cancel");
  const form = modal.querySelector("#addProjectForm");

  function closeModal() {
    modal.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => modal.remove(), 300);
  }

  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const newProject = {
      title: formData.get("title"),
      description: formData.get("description"),
      technologies: formData
        .get("technologies")
        .split(",")
        .map((tech) => tech.trim()),
      githubLink: formData.get("githubLink"),
      liveLink: formData.get("liveLink") || null,
      icon: formData.get("icon") || "fas fa-code",
      status: formData.get("status"),
    };

    // Add to projects data
    projectsData.push(newProject);

    // Re-render projects
    renderProjects();

    // Reinitialize scroll animations for new elements
    setTimeout(() => {
      initializeScrollAnimations();
    }, 100);

    showNotification("Project added successfully!", "success");
    closeModal();
  });

  // Animate modal in
  modal.style.animation = "fadeIn 0.3s ease";
} // Global variables
let particles = [];
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Projects data - Easy to modify and add new projects
// Just add new project objects to this array to display them on your website

// Loading animation
document.addEventListener("DOMContentLoaded", function () {
  // Create loading screen
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

  // Initialize all functionality
  initializeParticles();
  initializeNavigation();
  initializeScrollAnimations();
  initializeContactForm();
  initializeTypingEffect();
  initializeCounterAnimation();
  // renderProjects();
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

    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
      showNotification("Kindly reached with my Email !.", "success");
      contactForm.reset();
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }, 2000);
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
            <i class="fas ${
              type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
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
        background: ${
          type === "success"
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
        border: 1px solid ${
          type === "success"
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

// ==================== GITHUB STATS LOADING ====================
function initializeGitHubStats() {
  const statImages = document.querySelectorAll('.github-stat-image img');
  
  // Add lazy loading and error handling
  statImages.forEach((img) => {
    img.addEventListener('error', () => {
      // Show a fallback message if image fails
      img.style.display = 'none';
      const card = img.closest('.github-stat-card');
      if (card) {
        const errorMsg = document.createElement('p');
        errorMsg.style.textAlign = 'center';
        errorMsg.style.color = 'var(--text-secondary)';
        errorMsg.innerHTML = 'Unable to load GitHub stats at the moment. <a href="https://github.com/najishakhtar2378" target="_blank" style="color:var(--accent-1);">Visit on GitHub</a>';
        img.parentElement.appendChild(errorMsg);
      }
    });
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
  } else {
    htmlElement.classList.remove('light-mode');
  }
  
  // Add click event listener to toggle button
  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('light-mode');
    
    // Save theme preference
    const currentTheme = htmlElement.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  });
}

// Initialize everything when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeGitHubStats();
    initializeThemeToggle();
    console.log("Portfolio loaded successfully! 🚀");
  });
} else {
  initializeGitHubStats();
  initializeThemeToggle();
  console.log("Portfolio loaded successfully! 🚀");
}

