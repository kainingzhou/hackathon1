// create an array and add some questions and answes
// note: arrays are zero based. That means array [0] is the first one
var currentquestion = 0;
var questions = [{
  "question": "Which script means wine?",
  "response": "This means wine",
  "answerimage": 'riimage002'
}, {
  "question": "Which script means water?",
  "response": "This means water",
  "answerimage": 'riimage001'
}, {
  "question": "Which script means people?",
  "response": "This means people",
  "answerimage": 'riimage003'
}];

(function() {
  // your page initialization code here
  fnReset(); //call reset on document ready

  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnNext();
  });

  document.getElementById("riimage001").addEventListener('click', function(event) {
    fnCheck("riimage001", this);
  });
  document.getElementById("riimage002").addEventListener('click', function(event) {
    fnCheck("riimage002", this);
  });

  document.getElementById("riimage003").addEventListener('click', function(event) {
    fnCheck("riimage003", this);
  });
  document.getElementById("rireset").addEventListener('click', function(event) {
    fnReset();
  });

})();

function fnReset() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('rinextquestion').classList.add('rihide');
  document.getElementById('rireset').classList.add('rihide');
  document.getElementById('riquestionbox').classList.remove('rihide');
  currentquestion = 0;
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnNext() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  if (currentquestion < questions.length - 1) {
    currentquestion = currentquestion + 1;
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('rireset').classList.add('rihide');
  } else {
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('riquestionbox').classList.add('rihide');
    document.getElementById('rireset').classList.remove('rihide');
  }
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnCheck(answerimage, obj) {
  document.getElementById('riquestionresponse').classList.remove('ricorrect');
  document.getElementById('riquestionresponse').classList.remove('riincorrect');
  if (questions[currentquestion].answerimage === answerimage) {
    // show correct
    document.getElementById('riquestionresponse').classList.add('ricorrect');
    document.getElementById('riquestionresponse').innerHTML = "Bingo! You got it correct! " + questions[currentquestion].response;
    document.getElementById('rinextquestion').classList.remove('rihide');
  } else {
    // show incorrect
    document.getElementById('riquestionresponse').classList.add('riincorrect');
    document.getElementById('riquestionresponse').innerHTML = "Oops, incorrect. You chose: '" + obj.name + "''. Please try again.";
  }
  document.getElementById('riquestionresponse').classList.remove('rihide');
}
