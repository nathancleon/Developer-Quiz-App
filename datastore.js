const STORE = [
  //store object for every question and set of answers
  {
    question: 'What does semantic HTML markup do?',
    answers: [
      'introduces meaning to the web page rather than just presentation',
      'changes the structure of the webpage', 
      'has specific properties beyond that of regular HTML tags',
      'styles the page without using css'
      ],
    correctAnswer: 'introduces meaning to the web page rather than just presentation',
  },
  {
    question: 'What is ARIA?',
    answers: [
      'a type of screen reader', 
      'a specific set of HTML tags with unique properties', 
      'a set of attributes you can add to HTML elements', 
      'an HTML standard for accessibility'
      ],
    correctAnswer: 'an HTML standard for accessibility',
  },
  {
    question: 'What is a “role” in HTML?',
    answers: [
      'an HTML attribute that improves SEO',
      'a type of HTML attribute that changes the semantic meaning of an element to screen readers',
      'a semantic tag in HTML that serves a specific purpose',
      'a declaration made at the top of the HTML file regarding the type of webpage being viewed'
      ],
    correctAnswer: 'a type of HTML attribute that changes the semantic meaning of an element to screen readers',
  },
  {
    question: 'What is the difference between margin and padding?',
    answers: [
      'margin sets the height and width of an element, whereas padding sets the space around elements',
      'margin applies to the container of an element and padding applies to the interior',
      'margin applies to the space outside of an element and padding applies to the space within an element',
      'margin sets the height of an element, whereas padding sets the width of an element'
      ],
    correctAnswer: 'margin applies to the space outside of an element and padding applies to the space within an element',
  },
  {
    question: 'What is the difference between block and inline elements?',
    answers: [
      'a inline element takes the full width available, a block level element takes only the amount of width necessary',
      'a block level element takes the full width available, an inline only takes the amount of width necessary',
      'block level elements are content formatted using a css grid, inline elements are default HTML',
      'both are two similar types of elements, the output is the same'
      ],
    correctAnswer: 'a block level element takes the full width available, an inline only takes the amount of width necessary',
  },
  {
    question: 'What does the “float” property do in CSS?',
    answers: [
      'declares an item’s position outside of an element',
      'declares an item’s position inside an element',
      'declares an element’s position on the page',
      'places an element above all other content'
      ],
    correctAnswer: 'declares an item’s position inside an element',
  },
  {
    question: 'What is a JavaScript object?',
    answers: [
      'a variable containing a set of name and value pairs',
      'an array of values',
      'a type of function',
      'a type of loop that iterates over a set of values'
      ],
    correctAnswer: 'a variable containing a set of name and value pairs',
  },
  {
    question: 'What is the difference between global and local scopes?',
    answers: [
      'a variable declared inside a function is in the global scope and a variable declared outside of a function is in the local scope',
      'your main javascript file is considered to be the global scope, whereas the other smaller javascript modules are part of the local scope',
      'variables declared using “let” are in the global scope, whereas variables declared using “const” are in the local scope',
      'a variable declared outside of a function is in the global scope, whereas a variable declared inside a function is local'
      ],
    correctAnswer: 'a variable declared outside of a function is in the global scope, whereas a variable declared inside a function is local',
  },
  {
    question: 'What does DOM stand for?',
    answers: [
      'Document Object Manipulation',
      'Data Object Manipulation',
      'Document Object Model',
      'Data Object Model' 
      ],
    correctAnswer: 'Document Object Model',
  },
  {
    question: 'What is an event listener?',
    answers: [
      'a type of HTML attribute',
      'a function that waits for an event to occur before triggering an action',
      'a type of CSS attribute',
      'a type of parameter in a function'
      ],
    correctAnswer: 'a function that waits for an event to occur before triggering an action',
  }
];

export {STORE};