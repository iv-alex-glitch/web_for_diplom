
function quizFunction(e){
    const parent = e.target.closest("#quiz");

    if (!parent.checkValidity()) {
        return;
    }
  
    e.preventDefault();
    const quizItemRight = parent.querySelectorAll(".quiz__box [data-right]");
    let result = 0;

    quizItemRight.forEach(item => {
        item.classList.add("right");
        const inputResult = item.querySelector("input");
        if(inputResult.checked)
            result++;
    })

    const resultElemet = parent.querySelector('.quiz__result');
    resultElemet.innerHTML = `Ваш результат: <strong>${result}/${quizItemRight.length}</strong>`;
}

function galleryFunction(){
    const gallery = document.querySelector(".gallery");

    if(!gallery) return;

    var swiper = new Swiper(".gallery", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
      },
    });
}

function flashcardFunction() {
    const flashcards = [
        [
            {question: "Що таке алгоритм?", answer: "Алгоритм — це чітка, скінченна послідовність дій або команд, спрямована на вирішення певної задачі чи досягнення поставленої мети"},
            {question: "What 2+2?", answer: "4"},
            {question: "What 5+5?", answer: "10"},
        ],
        [
            {question: "1111111", answer: "Алгоритм — це чітка, скінченна послідовність дій або команд, спрямована на вирішення певної задачі чи досягнення поставленої мети"},
            {question: "What 2+2?", answer: "4"},
            {question: "What 5+5?", answer: "10"},
        ],
        [
            {question: "222222", answer: "Алгоритм — це чітка, скінченна послідовність дій або команд, спрямована на вирішення певної задачі чи досягнення поставленої мети"},
            {question: "What 2+24?", answer: "4"},
            {question: "What 5+5?", answer: "10"},
        ],
    ];

    let currentCard = 0;

    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const currentFlashcardId = parseInt(flashcardElement.getAttribute("data-flashcard")) - 1;

    function displayCard(){
        questionElement.textContent = flashcards[currentFlashcardId][currentCard].question;
        answerElement.textContent = flashcards[currentFlashcardId][currentCard].answer;
        flashcardElement.classList.remove('is-flipped');
    }

    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    })

    document.getElementById('next-card').addEventListener('click', () => {
        currentCard=(currentCard + 1) % flashcards.length;
        displayCard();
    })

    displayCard();
}

document.addEventListener("DOMContentLoaded", () => {
    const quiz = document.getElementById('quiz');
    if(quiz) {
        quiz.addEventListener("submit", e => quizFunction(e))
    }

    galleryFunction();

    flashcardFunction();

})
