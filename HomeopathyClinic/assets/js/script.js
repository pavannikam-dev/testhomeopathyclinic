function initNavbar() {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");

    menu.classList.toggle("hidden");

    // ONLY ADD X TOGGLE
    btn.innerHTML = isOpen ? "☰" : "✕";
  });
}

document.addEventListener("DOMContentLoaded", initNavbar);


// Initialize AOS
AOS.init();

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ************************************************************
// Doctor Tabs
document.querySelectorAll('.doctor-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.doctor-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.doctor-content').forEach(c => c.classList.add('hidden'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.doctor).classList.remove('hidden');
  });
});

// Doctor Modal
function openDoctorModal(doc) {
  const data = {
    suresh: `
      <h2 class="text-2xl font-bold">Dr. ABC</h2>
      <p>10+ years experience in chronic diseases.</p>
    `,
    poonam: `
      <h2 class="text-2xl font-bold">Dr. XYZ</h2>
      <p>Specialist in women & child health.</p>
    `
  };

  document.getElementById('modalContent').innerHTML = data[doc];
  document.getElementById('doctorModal').classList.remove('hidden');
}

function closeDoctorModal() {
  document.getElementById('doctorModal').classList.add('hidden');
}

