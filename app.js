//클래스 panel들을 모두 선택해 상수 panels에 담기
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses(); //active 클래스 제거
    panel.classList.add("active");
  });
});

//모든 패널에 active 클래스를 제거

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
