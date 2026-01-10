const quizData = [
    { q: "1. 測驗開始：你通常如何開啟新的一天？", a: ["充滿活力", "想賴床", "先喝咖啡"] },
    { q: "2. 這裡填入你的第二題題目...", a: ["選項A", "選項B", "選項C"] },
    { q: "3. 這裡填入你的第三題題目...", a: ["選項A", "選項B", "選項C"] },
    // ... 你可以複製上面的結構，一路補到 20 題 ...
    { q: "20. 最後一題：你覺得送你這個測驗的人帥/美嗎？", a: ["帥爆", "美翻", "非常有誠意"] }
];

let currentStep = 0;

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = quizData[currentStep];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('progress-text').innerText = `問題 ${currentStep + 1} / ${quizData.length}`;
    document.getElementById('progress-fill').style.width = `${((currentStep + 1) / quizData.length) * 100}%`;

    const btnArea = document.getElementById('answer-btns');
    btnArea.innerHTML = ''; // 清空舊按鈕

    q.a.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = text;
        btn.onclick = () => nextQuestion();
        btnArea.appendChild(btn);
    });
}

function nextQuestion() {
    currentStep++;
    if (currentStep < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-content').style.display = 'none';
    const title = document.getElementById('start-screen'); // 借用這個區域顯示載入中
    title.style.display = 'block';
    title.innerHTML = "<h1>計算結果中...</h1>";
    
    setTimeout(() => {
        title.style.display = 'none';
        document.getElementById('surprise-area').style.display = 'block';
        document.body.style.background = 'linear-gradient(135deg, #feb47b 0%, #ff7e5f 100%)'; // 換成溫馨漸層
        
        // 噴發彩帶！
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 2000);
}