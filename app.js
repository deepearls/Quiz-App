// Objective: 
// Create a basic quiz game where users can answer multiple-choice questions.
// Requirement:
// 1. Create an HTML file with the necessary structure: a question area, answer options
// 2. Use JavaScript to handle the following functionality:
// > Define an array of objects, each object representing a quiz question with its text, options, and correct answer.
// > Display  the corresponding answer options.
// > Check if the selected answer matches the correct answer for the current question and display a message indicating whether the answer was correct or not.
// > Keep track of the user's score and update it after each question.
// > When all questions have been answered, display the user's total score.

let quizData = [
    {
        question: 'What should be the very first thing in an HTML document?',
        Options: ["Heading", "Title", "Doc-type", "Body" ],
        answer: "Doc-type"
    },

    {
        question: 'Which choice is not part of CSS box model?',
        Options: ["margin", "border", "padding", "paragraph"],
        answer: "paragraph"
    },

    {
        question: 'A collection of data containing both properties and methods is called...',
        Options: ["Tag", "Object", "Element", "Class" ],
        answer: "Class"
    },

    {
        question: 'Where do link a Javascript file in your HTML?',
        Options: ["Title", "Head", "Body", "link" ],
        answer: "Body"
    },

    {
        question: 'console.log(info) is used to....',
        Options: ["print-information-to-the-console", "display-image", "print-an-id-to-the-console", "print-a-class" ],
        answer: "print-information-to-the-console"
    },

];



let dataView = document.querySelector('.data-view');


function quizInfo() { 
    let point  = 20;
    let correctSc = 20;
    let Wrong =  0;
    let result = 0;


    let quizArray = quizData.map((quiz, index) => {
         return     `<div class="d-flex container shadow-sm gap-4">
         <p class="col-1 fs-4 pt-5 text-primary-emphasis">${index +1}</p>
       <div class="bg-success-subtle col-6 my-3 text-align-center rounded-pill questions">
         <p class=" pt-5 text-primary-emphasis question">${quiz.question}</p>
         <select name="" id="" class="py-2  rounded-circle border border-5 options">
         <option value="" select-disabled>select option</option>
          ${ quiz.Options.map((Option) =>{
                return  `<option value=${Option}>${Option}</option>`;
            })} 
         </select>
       </div>
     <div class="bg-primary-subtle col-4 rounded-5 my-5 ps-4 pt-3 text-start scores-record">
     <p class="selected">Selected Option:</p>
     <p class="correct">Correct Option:</p>
     <p class="status">Status:</p>
     </div>
   
       </div> `;
    })



    
dataView.innerHTML = quizArray;


let selectElement = document.querySelectorAll('select')

selectElement.forEach((select, index) => {
   select.addEventListener("change", (event) => {
    let selectValue = event.target.value;
   let choice = document.querySelectorAll(".selected")[index];
   choice.innerHTML =`Selected Option: ${selectValue}`;

 let correct =  document.querySelectorAll(".correct")[index];
   correct.innerHTML = `Correct Option: ${quizData[index].answer} `;


   if(quizData[index].answer === selectValue) {
    document.querySelectorAll(".status")[index].innerHTML = `Status: Correct`;
    result += correctSc;
    document.querySelector(".result").innerHTML = `${result}/100`; 
   } else { 
    document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;
    result += Wrong;
    document.querySelector(".result").innerHTML = `${result}/100`; 
   }

   });
});


}





           




quizInfo()