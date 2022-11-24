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
        question: "1. Who is the most ecological search engine between theses answers ? ",
        answers: {
          a: "Google Chrome",
          b: "Ecosia",
          c: "Firefox",
          d: "Opéra"
        },
        correctAnswer: "b"
      },
      {
        question: "2. Wich social network is ecologically comitted ?",
        answers: {
          a: "Newmanity",
          b: "Greenbook",
          c: "Tgreen",
          d: "Ecommunauté"
        },
        correctAnswer: "a"
      },
      {
        question: "3. Who is the first ecological server ?",
        answers: {
          a: "OxygenServ",
          b: "PlanteServ",
          c: "GreenServ",
          d: "EcoServ"
        },
        correctAnswer: "a"
      },
      {
        question: "4. What is the triggering event for the start of green it ?",
        answers: {
          a: "The GIEC receive the nobel peace prize",
          b: "the financial crises of 2008",
          c: "WWF wins the nobel prize for the environment"
        },
        correctAnswer: "a"
      },
      {
        question: "5. What is the origin of qwant ?",
        answers: {
          a: "American",
          b: "German",
          c: "Swiss",
          d: "French"
        },
        correctAnswer: "d"
      },
      {
        question: "6. What is the carbon footprint of an email with large attachments?",
        answers: {
          a: "25",
          b: "50",
          c: "75",
          d: "100"
        },
        correctAnswer: "b"
      },
      {
        question: "7. Do the wifi consumes more than the network ?",
        answers: {
          a: "Yes",
          b: "No"
        },
        correctAnswer: "b"
      },
      {
        question: "8. Is downloading a film instead of streaming it is a good eco gesture ?",
        answers: {
          a: "Yes",
          b: "No"
        },
        correctAnswer: "a"
      },
      {
        question: "9. When do you have to change your phone ?",
        answers: {
          a: "2 year",
          b: "3 years",
          c: "4 years",
          d: "When doesn't work"
        },
        correctAnswer: "d"
      },
      {
        question: "10. How would you rate our serious game ?",
        answers: {
          a: "1-3",
          b: "3-5",
          c: "5-7",
          d: "7-10"
        },
        correctAnswer: "d"
      },
    ];
  
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();