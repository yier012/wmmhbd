const quizData = [
    { q: "1. 王位與主權的降服——你目前固定參與教會聚會的頻率是？", a: ["每週主日", "偶爾（每月 1–2 次）", "只有特別節期", "目前未固定參與"] , key: "王"},
    { q: "2. 孟子說「思誠為人之道」，回首信仰路——你參與教會聚會大約多久了？", a: ["未滿 1 年", "1–3 年", "3–5 年", "5 年以上"] , key: "孟"},
    { q: "3. 心繫神家裡的團聚——你目前主要參與的是哪一種類型的聚會？（可複選）", a: ["主日禮拜", "小組／團契", "禱告會", "服事訓練／課程"], multi: true , key: "心"},
    { q: "4. 地上的生活若有依靠——對你而言，教會在生活中扮演的角色是？", a: ["靈性支持", "情緒與壓力出口", "人際與團契", "生活方向與價值"] , key: "地"},
    { q: "5. 獄中保羅仍歌頌，你平時如何親近神——平時你比較常用哪些方式維持靈修生活？（可複選）", a: ["禱告", "讀經", "靈修書籍", "敬拜音樂", "目前較少固定靈修"], multi: true , key: "獄"},
    { q: "6. 門徒的生命需要修剪——你覺得目前自己在信仰上的狀態比較接近哪一個？", a: ["穩定成長中", "有起伏但仍持續", "正在調整與探索", "最近比較疲乏"] , key: "門"},
    { q: "7. 祝福的氣息是否流淌——你對目前教會的整體氛圍感到：", a: ["非常滿意", "滿意", "普通", "有些需要調整"] , key: "祝"},
    { q: "8. 迪化人心的是真理——在教會中，哪一個部分最能幫助你？（可複選）", a: ["講道內容", "敬拜", "小組分享", "牧者／同工關懷", "教會活動"], multi: true , key: "迪"},
    { q: "9. 23 篇詩篇提到神是牧者——你覺得教會在關懷會友方面做得如何？", a: ["非常用心", "還不錯", "普通", "可以再加強"] , key: "23"},
    { q: "10. 歲月流逝中尋求智慧——主日信息你比較喜歡哪種類型？", a: ["生活應用型", "聖經教導型", "見證分享型", "輕鬆幽默型"] , key: "歲"},
    { q: "11. 申明心志、各盡其職——你在教會中比較常扮演的角色是？", a: ["安靜聆聽型", "積極分享型", "默默服事型", "還在適應中"] , key: "申"},
    { q: "12. 日日更新的團契生活——若教會舉辦特別活動，你較有興趣的是？", a: ["戶外活動", "課程／講座", "敬拜／音樂", "團契聚餐"] , key: "日"},
    { q: "13. 快樂與平安的源頭——目前在信仰生活中感到最喜樂的是？", a: ["讀經有領受", "與肢體團契", "看到生命的改變", "以上皆是"] , key: "快"},
    { q: "14. 樂意參與事工的動機——對於目前的服事安排，您的想法是？", a: ["滿有熱心", "還在尋求中", "目前先穩定聚會", "願意多方嘗試"] , key: "樂"},
    { q: "15. 和睦共處的肢體關係——在小組或團契中，您最看重的是什麼？", a: ["真理的教導", "彼此的關懷", "生活的分享", "一同的禱告"] , key: "和"},
    { q: "16. 林木茂盛需有活水——您希望教會能在哪些方面提供更多屬靈裝備？", a: ["神學系統", "職場宣教", "家庭生活", "個人佈道"] , key: "林"},
    { q: "17. 修剪枝子使結果子更多——目前是否有特定的生命課題正經歷神的調整？", a: ["人際關係", "工作職場", "性格脾氣", "穩定靈修"] , key: "修"},
    { q: "18. 成就神的美意——對於教會未來的發展願景，您感到？", a: ["滿懷期待", "願意一同參與", "持續代禱中", "有信心"] , key: "成"},
    { q: "19. 正道上的堅持——在生活中實踐信仰時，您遇到最大的挑戰為何？", a: ["時間不足", "職場壓力", "信仰與價值衝突", "軟弱疲累"] , key: "正"},
    { q: "20. 果子是看生命表現——您如何看待自己在社區或職場中的福音見證？", a: ["持續努力中", "渴望更有勇氣", "求主加添力量", "願意為主發光"] , key: "果"},
    { q: "21. 你是神所愛的兒女——本週有什麼特定事項需要教會為您代禱？", a: ["家庭平安", "工作順利", "靈命復興", "身體健康"] , key: "你"},
    { q: "22. 黑夜終會過去——在低潮時，哪一段話最能帶給你力量？", a: ["神的恩典夠我用", "神必帶領前路", "主是我避難所", "靠主常喜樂"] , key: "黑"},
    { q: "23. 洞察屬靈的契機——最後，對於新的一年，您對自己的信仰有何期待？", a: ["更加愛主", "生命成長", "傳揚福音", "完成神旨意"] , key: "洞"}
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
    btnArea.innerHTML = ''; 

    q.a.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = text;
        
        btn.onclick = () => {
            if (q.multi) {
                // 複選邏輯：切換選中狀態
                btn.classList.toggle('selected');
            } else {
                // 單選邏輯：直接下一題
                nextQuestion();
            }
        };
        btnArea.appendChild(btn);
    });

    // 如果是複選題，額外加一個「下一題」按鈕
    if (q.multi) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'start-btn'; // 使用你帥氣的開始按鈕樣式
        nextBtn.style.width = '100%';
        nextBtn.innerText = '確定';
        nextBtn.onclick = () => nextQuestion();
        btnArea.appendChild(nextBtn);
    }
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
    const title = document.getElementById('start-screen');
    title.style.display = 'block';
    title.innerHTML = "<h1 id='loading-text'>計算結果中...</h1>";
    
    // 2秒後開始提取字首
    setTimeout(() => {
        title.innerHTML = `
            <p style="color:#666;">系統偵測到特殊的屬靈訊息...</p>
            <div id="extraction-area" style="margin-top:20px;"></div>
        `;
        startExtraction();
    }, 2000);
}

function startExtraction() {
    const titleArea = document.getElementById('start-screen');
    
    // 在掃描框上方加入一個「隱藏訊息提取中」的標題
    titleArea.innerHTML = `
        <div style="margin-bottom: 10px;">
            <span id="status-tag" style="background: #c44d4d; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; letter-spacing: 1px;">隱藏訊息提取中...</span>
        </div>
        <div id="scan-window" style="height: 100px; display: flex; align-items: center; justify-content: center; border: 2px solid #c44d4d; border-radius: 12px; padding: 15px; background: #fff; margin-bottom: 25px; position: relative; box-shadow: 0 0 15px rgba(255, 77, 77, 0.1);">
            <p id="scanning-q" style="font-size: 1.1rem; color: #444; margin: 0; line-height: 1.4;"></p>
        </div>
        <div id="extraction-area" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;"></div>
    `;

    const scanningQ = document.getElementById('scanning-q');
    const extractionArea = document.getElementById('extraction-area');
    const statusTag = document.getElementById('status-tag');
    
    let i = 0;
    const interval = setInterval(() => {
        if (i < quizData.length) {
            const fullText = quizData[i].q;
            const keyChar = quizData[i].key || fullText.match(/\. ([\u4e00-\u9fa5]|\w)/)?.[1] || fullText[0];

            // 亮點邏輯
            const highlightedText = fullText.replace(keyChar, `<span style="color: #c44d4d; font-size: 1.3rem; font-weight: bold;">${keyChar}</span>`);
            scanningQ.innerHTML = highlightedText;
            
            const span = document.createElement('span');
            span.innerText = keyChar;
            span.className = 'initial-char';
            span.style.color = '#ff4d4d'; 
            span.style.borderColor = '#ff4d4d';
            
            extractionArea.appendChild(span);
            i++;
        } else {
            clearInterval(interval);
            
            // 掃描完後的狀態變更
            statusTag.innerText = "✨ 提取完成 ✨";
            statusTag.style.background = "#28a745";
            scanningQ.innerHTML = "<span style='color: #7ec44d; font-weight: bold;'>系統已成功解碼隱藏訊息</span>";
            
            // 這裡設定「停留久一點」：改為 4500 毫秒 (2.5秒)，讓朋友慢慢看那串紅字
            setTimeout(finalSurprise, 3000);
        }
    }, 800); 
}

function finalSurprise() {
    const container = document.querySelector('.container');
    document.body.style.background = 'linear-gradient(135deg, #feb47b 0%, #ff7e5f 100%)';
    
    // 這裡是原本驚喜區域的內容
    container.innerHTML = `
        <div id="surprise-area">
            <h2 style="color: #ff4d4d;">🎉 調查結束！秀不秀！</h2>
            <p>你爸爸我覺得你是...</p>
            <h1 class="hb-text">全世界最棒的朋友</h1>
            <p>祝迪新的一年一切順利，朝著自己的目標前進，去到迪想去的地方，你是最秀的我們愛你，但是...你沒屌！</p>
            <h1 class="hb-text">王孟孟生日快樂！！🎂</h1>
            <img src="wmm.jpg" alt="生日照片" style="width: 100%; border-radius: 15px;">
        </div>
    `;
    
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
}