// 這裡定義你的題目
const quizData = [
    { q: "1. 假如你在荒島，只能帶一個東西，你會帶？", a: ["手機", "打火機", "朋友的照片"] },
    { q: "2. 週末你最喜歡的活動是？", a: ["窩在家", "出去瘋", "不知道幹嘛"] },
    { q: "3. 看到一隻受傷的小貓，你的反應是？", a: ["心碎了", "帶去看醫生", "幫牠找媽媽"] },
    { q: "4. 你覺得自己最像哪種動物？", a: ["懶散的貓", "熱情的狗", "獨行的狼"] },
    { q: "5. 最後一題：你覺得今天是什麼日子？", a: ["普通的週五", "不知道", "重要的人生日"] }
];

let currentStep = 0;

function nextQuestion() {
    currentStep++;
    
    if (currentStep < quizData.length) {
        // 更新題目文字
        document.getElementById('question-text').innerText = quizData[currentStep].q;
        // 更新按鈕文字（假設有三個按鈕）
        const btns = document.querySelectorAll('.quiz-btn');
        quizData[currentStep].a.forEach((text, index) => {
            btns[index].innerText = text;
        });
    } else {
        // 測驗結束，隱藏測驗區，顯示驚喜區
        document.getElementById('quiz-area').style.display = 'none';
        document.getElementById('title').innerText = "分析結果計算中...";
        
        setTimeout(() => {
            document.getElementById('title').style.display = 'none';
            document.getElementById('description').style.display = 'none';
            document.getElementById('surprise-area').style.display = 'block';
            document.body.style.backgroundColor = '#ffeef0'; // 換個背景色
        }, 1500);
    }
}