const projects = {
  clinic: {
    eyebrow: "AI AGENTS · HEALTHCARE",
    title: "AI Clinic Customer Support & Appointment Management",
    text: "A WhatsApp-based clinic automation system that handles customer support and appointment operations through an AI agent connected to clinic knowledge and database-backed tools.",
    problem: "Patients need answers about services and doctors, then need to book, reschedule, or cancel without creating conflicting appointments.",
    solution: "n8n orchestrates WhatsApp, RAG, PostgreSQL tools and human handoff, with double-booking prevention, conversation context, daily summaries and error alerts."
  },
  restaurant: {
    eyebrow: "AI AGENTS · RESTAURANTS",
    title: "AI Restaurant Customer Support & Order Management",
    text: "A Telegram customer support and ordering workflow covering menu questions, table booking and order lifecycle operations.",
    problem: "Restaurant staff repeatedly answer menu questions and manually coordinate bookings, orders, status updates and kitchen notifications.",
    solution: "An AI agent uses RAG and tool calling through n8n, with validation and human handoff around order and booking operations."
  },
  assessment: {
    eyebrow: "AI EVALUATION",
    title: "Multi-Industry Assessment & Evaluation System",
    text: "An automated assessment platform that asks industry-specific and common questions, evaluates submissions with multiple AI models and delivers a final score.",
    problem: "Manual assessment creates inconsistent scoring, duplicate submissions and repetitive result delivery.",
    solution: "n8n coordinates Tally intake, PostgreSQL storage and duplicate detection, deterministic + LLM scoring, structured outputs and automated email delivery."
  }
};

const modal = document.getElementById("modal");
document.querySelectorAll("[data-project]").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = projects[btn.dataset.project];
    if (!p) return;
    document.getElementById("modalEyebrow").textContent = p.eyebrow;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalText").textContent = p.text;
    document.getElementById("modalProblem").textContent = p.problem;
    document.getElementById("modalSolution").textContent = p.solution;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  });
});
document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
});
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("open");
});
