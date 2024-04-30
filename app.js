// creating an array with questions and answers

const accordianData = [
    { question : 'What is Html? ', answer : 'HTML is a markup language for creating the structure of web pages.'},
    { question : 'What is CSS? ', answer : 'CSS is a style sheet language used to control presentation and layout of HTML.'},
    { question : 'What is JS? ', answer : 'JavaScript is a programming language used to add dynamic behavior to web pages.'},
];

const container = document.querySelector('.container');
  
// creating accordian items using a function

function createAccordionItem(question, answer) {
    // creating elements
    const item = document.createElement('div');
    const questionElement = document.createElement('div');
    const answerElement = document.createElement('div');
    const btn = document.createElement("div");

    // adding classNames to above elements
    
    item.classList.add('accordian-item');
    questionElement.classList.add('question');
    questionElement.textContent = question;
    answerElement.classList.add('answer');
    answerElement.textContent = answer;
    btn.classList.add('+btn');
    btn.innerText = "+";

    // append question and answer elements to accordian-item, and item to container

    item.appendChild(questionElement);
    item.appendChild(answerElement);
    container.appendChild(item);
    questionElement.appendChild(btn);

    // addEventListner to show the answer

    btn.addEventListener('click', () => {
        answerElement.classList.toggle('active');
        btn.innerText = btn.innerText == "+"? "-" : "+" ;
    });
}

accordianData.forEach(e => {
    createAccordionItem (e.question, e.answer)
});