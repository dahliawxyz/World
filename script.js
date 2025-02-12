function alertMessage() {
    const messages = ["환영합니다!😊", "오늘도 좋은 하루!", "갓생! 🚀"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
// 현재 활성화된 페이지 표시
function showPage(pageId) {
    let pages = document.querySelectorAll('.page'); // 모든 페이지 숨기기
    pages.forEach(page => page.style.display = 'none');

    document.getElementById(pageId).style.display = 'block'; // 선택한 페이지 표시
}

// 기본 페이지(홈) 표시
showPage('home');

// 클릭 게임 기능
let score = 0; // 초기 점수
document.getElementById('clickButton').addEventListener('click', function() {
    score++; // 클릭하면 점수 증가
    document.getElementById('score').textContent = score; // 점수 업데이트
});
