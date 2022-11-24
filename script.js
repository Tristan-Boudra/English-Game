(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${currentQuestion.answers[letter]}
                </label>`
            );
          }
          output.push(
            `<div class="container-quizz-question">
                <div class="container-quizz-question2">
                    <div class="question">${currentQuestion.question}</div>
                    <div class="answers">${answers.join('')}</div>
                </div>
            </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = '#5A8A6B';
        }
        else{
          answerContainers[questionNumber].style.color = '#E66A74';
        }
      });
  
      if(numCorrect < 5){
      resultsContainer.innerHTML = 
      `<div class="container-result">
        ${numCorrect} / ${myQuestions.length} 🥲
      </div>`;
      } else if (numCorrect < 7){
        resultsContainer.innerHTML = 
        `<div class="container-result">
          ${numCorrect} / ${myQuestions.length} 😃
        </div>`;
      }
      else{
        resultsContainer.innerHTML = 
        `<div class="container-result">
          ${numCorrect} / ${myQuestions.length} 😄
        </div>`;
      }
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "2. Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
        question: "3. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "4. Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "5. Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
        question: "6. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      }
    ];
  
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();