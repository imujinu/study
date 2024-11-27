// 모든 버튼에 이벤트 추가
document.querySelectorAll(".menu-button, .submenu-button").forEach((button) => {
  button.addEventListener("click", () => {
    // 버튼 바로 다음 서브메뉴 선택
    const submenu = button.nextElementSibling;

    // 서브메뉴 토글 (펼치기/접기)
    if (submenu.classList.contains("open")&&) {
      submenu.classList.remove("open"); // 접기
    } else {
      submenu.classList.add("open"); // 펼치기
    }
  });
});
