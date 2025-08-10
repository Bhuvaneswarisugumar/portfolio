// Typing effect
const roles = ["Software Developer", "Web Designer", "Problem Solver"];
let roleIndex = 0, charIndex = 0;
function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    document.getElementById("typing").textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typing").textContent = "";
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typeRole();
    }, 1500);
  }
}
typeRole();

// Image modal
function showModal(imgSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImg.src = imgSrc; // imgSrc is now full correct path like images/cert1.png
}


function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Invite modal
function openInviteForm() {
  document.getElementById("inviteModal").style.display = "block";
}
function closeInviteForm() {
  document.getElementById("inviteModal").style.display = "none";
}

// Job invite form submit
document.getElementById("jobInviteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const fromEmail = document.getElementById("from_email").value;
  const company = document.getElementById("company").value;
  const message = document.getElementById("message").value;

  fetch("https://formspree.io/f/xyzplpeq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from: fromEmail, company: company, message: message })
  })
  .then(res => {
    if (res.ok) {
      alert("✅ Job invite sent successfully!");
      closeInviteForm();
      document.getElementById("jobInviteForm").reset();
    } else {
      alert("❌ Failed to send invite. Try again.");
    }
  })
  .catch(() => alert("❌ Network error. Please try again."));
});
