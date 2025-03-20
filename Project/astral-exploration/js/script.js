const questions = {
    flags: [
      { question: "🇫🇷 Which country is this flag from?", options: ["France", "Italy", "Netherlands"], answer: "France" },
      { question: "🇯🇵 Which country is this flag from?", options: ["Japan", "South Korea", "China"], answer: "Japan" }
    ],
    languages: [
      { question: "Which language is spoken in Brazil?", options: ["Spanish", "Portuguese", "French"], answer: "Portuguese" }
    ]
  };
  
  let currentIndex = 0;
  let currentQuestions = [];
  
  window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
  
    if (type && questions[type]) {
      currentQuestions = questions[type];
      showQuestion();
    }
  };
  
  function showQuestion() {
    if (currentIndex >= currentQuestions.length) {
      document.getElementById('question-title').innerText = "🎉 You've completed this round!";
      document.getElementById('options').innerHTML = "";
      return;
    }
  
    const q = currentQuestions[currentIndex];
    document.getElementById('question-title').innerText = q.question;
  
    const optionsHTML = q.options.map(option => 
      `<button class="btn option-btn" onclick="checkAnswer('${option}')">${option}</button>`
    ).join("<br><br>");
    
    document.getElementById('options').innerHTML = optionsHTML;
  }
  
  function checkAnswer(selected) {
    const correct = currentQuestions[currentIndex].answer;
    if (selected === correct) {
      alert("✅ Correct!");
    } else {
      alert("❌ Wrong! Correct answer: " + correct);
    }
  }
  
  function nextQuestion() {
    currentIndex++;
    showQuestion();
  }
  