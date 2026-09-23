// AyurSutra Homepage JavaScript

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "×" : "☰";
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Active navigation item while scrolling
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navMenu a:not(.nav-cta)");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Therapy modal
const modal = document.getElementById("therapyModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalAction = document.getElementById("modalAction");

const therapyDetails = {
    Vamana: "Vamana is a traditional Panchakarma therapy involving therapeutic emesis and is performed under the supervision of a qualified Ayurvedic practitioner.",

    Virechana: "Virechana is a traditional Panchakarma therapy involving therapeutic purgation and is planned according to the individual patient's condition.",

    Basti: "Basti is a traditional Panchakarma therapy involving the administration of medicated preparations and is planned under professional supervision.",

    Nasya: "Nasya involves the administration of selected medicines through the nasal route and is traditionally associated with care of the head and upper body.",

    Raktamokshana: "Raktamokshana is a traditional Panchakarma procedure involving bloodletting and requires appropriate assessment and trained professional supervision."
};

document.querySelectorAll(".explore-btn").forEach(button => {
  button.addEventListener("click", () => {
    const therapy = button.dataset.therapy;

    modalTitle.textContent = therapy;
    modalText.textContent = therapyDetails[therapy] || "Therapy details will be available here.";
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

modalAction.addEventListener("click", () => {
  closeModal();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
