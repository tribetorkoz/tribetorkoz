document.addEventListener("DOMContentLoaded", function() {
  /* --- تحديث شريط التقدم أثناء التمرير --- */
  const progressBar = document.getElementById("scrollIndicator");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / height) * 100;
    progressBar.style.width = scrolled + "%";

    // إظهار أو إخفاء زر العودة للأعلى
    const backToTop = document.getElementById("backToTop");
    if (scrollTop > 300) {
      backToTop.style.display = "block";
      backToTop.style.opacity = "1";
    } else {
      backToTop.style.opacity = "0";
      setTimeout(() => {
        backToTop.style.display = "none";
      }, 300);
    }
  });

  /* --- قائمة التنقل للأجهزة المحمولة --- */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  /* --- نموذج البحث --- */
  const searchButton = document.getElementById("searchButton");
  const searchModal = document.getElementById("searchModal");
  const closeSearch = document.getElementById("closeSearch");

  searchButton.addEventListener("click", () => {
    searchModal.style.display = "flex";
    document.getElementById("searchInput").focus();
  });

  closeSearch.addEventListener("click", () => {
    searchModal.style.display = "none";
  });

  /* --- أزرار (اقرأ المزيد/أقل) في المحتويات القابلة للتوسيع --- */
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("aria-controls");
      const textElement = document.getElementById(targetId);
      if (textElement.classList.contains("truncated")) {
        textElement.classList.remove("truncated");
        button.textContent = "قراءة أقل";
      } else {
        textElement.classList.add("truncated");
        button.textContent = "قراءة المزيد";
      }
    });
  });

  /* --- زر العودة إلى الأعلى --- */
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  /* --- نافذة المميزات الفاخرة (Modal) --- */
  const openModalButton = document.getElementById("openModal");
  const luxuryModal = document.getElementById("luxuryModal");
  const closeModal = document.getElementById("closeModal");

  openModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    luxuryModal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    luxuryModal.style.display = "none";
  });

  /* --- نافذة المشاركة --- */
  const shareModal = document.getElementById("shareModal");
  const closeShareModal = document.getElementById("closeShareModal");
  const shareButtons = document.querySelectorAll(".share-btn");

  shareButtons.forEach(button => {
    button.addEventListener("click", () => {
      const personName = button.getAttribute("data-name");
      shareModal.style.display = "block";
      document.getElementById("shareText").textContent = `شارك المعلومات عن ${personName}`;
    });
  });

  closeShareModal.addEventListener("click", () => {
    shareModal.style.display = "none";
  });

  /* --- إغلاق أي نافذة منبثقة عند النقر خارج محتواها --- */
  window.addEventListener("click", (event) => {
    if (event.target === searchModal) {
      searchModal.style.display = "none";
    }
    if (event.target === luxuryModal) {
      luxuryModal.style.display = "none";
    }
    if (event.target === shareModal) {
      shareModal.style.display = "none";
    }
  });
});
