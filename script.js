function alertMessage() {
    const messages = ["환영합니다!😊", "오늘도 좋은 하루!", "갓생! 🚀"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
