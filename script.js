document.addEventListener("DOMContentLoaded", function () {
  
  const btnTogglePassword = document.getElementById("btnTogglePassword");
  const passwordInput = document.getElementById("password");

  if (btnTogglePassword && passwordInput) {
    btnTogglePassword.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        btnTogglePassword.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        btnTogglePassword.textContent = "Show";
      }
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

      alert("Login successful");

      window.location.href = "home.html";
    });
  }

  const courseModal = document.getElementById("courseModal");
  if (courseModal) {
    courseModal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      
      const courseTitle = button.getAttribute("data-title");
      const courseDesc = button.getAttribute("data-desc");

      const modalTitleEl = document.getElementById("modalCourseTitle");
      const modalDescEl = document.getElementById("modalCourseDesc");

      if (modalTitleEl) modalTitleEl.textContent = courseTitle;
      if (modalDescEl) modalDescEl.textContent = courseDesc;
    });
  }

});