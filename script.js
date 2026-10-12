document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Logic cho Trang Login: Bật/Tắt ẩn hiện Password
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

  // 2. Logic cho Trang Login: Bắt sự kiện Submit Form & Chuyển hướng
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Ngăn trình duyệt reload lại trang

      // Hiển thị alert thông báo thành công giống hệt video
      alert("Login successful");

      // Chuyển hướng sang trang home.html
      window.location.href = "home.html";
    });
  }

  // 3. Logic cho Trang Home: Đổ dữ liệu động vào Modal khi bấm 'Learn More'
  const courseModal = document.getElementById("courseModal");
  if (courseModal) {
    courseModal.addEventListener("show.bs.modal", function (event) {
      // Nút bấm vừa được click
      const button = event.relatedTarget;
      
      // Lấy thông tin từ thuộc tính data-title và data-desc của nút
      const courseTitle = button.getAttribute("data-title");
      const courseDesc = button.getAttribute("data-desc");

      // Cập nhật nội dung hiển thị trong Modal
      const modalTitleEl = document.getElementById("modalCourseTitle");
      const modalDescEl = document.getElementById("modalCourseDesc");

      if (modalTitleEl) modalTitleEl.textContent = courseTitle;
      if (modalDescEl) modalDescEl.textContent = courseDesc;
    });
  }

});