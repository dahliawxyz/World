function alertMessage() {
    const messages = ["환영합니다!😊", "오늘도 좋은 하루!", "갓생! 🚀"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}


let score = 0; // 초기 점수

// 버튼 클릭하면 점수 증가
document.getElementById('clickButton').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = score; // 점수 업데이트
});
