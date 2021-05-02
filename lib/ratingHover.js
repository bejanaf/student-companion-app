const now = new Date();
/* aktueler Tag - Array
const days = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
); */

const myDate = new Date();
const heute =
  'TODAY' +
  /*days[now.getDay()] + */
  ', ' +
  myDate.getDate() +
  '.' +
  (myDate.getMonth() + 1) +
  '.' +
  myDate.getFullYear();

//console.log(heute);

const ratingMain = document.querySelector('.rating__main');
// If Anweisung checkt, das nicht auf jeder Seite
// der Header gesucht wird, sondern nur da, wo angewedet
// werden soll
if (ratingMain) {
  const datumText = document.createElement('h2');
  datumText.innerText = heute;
  //titleBuddy.classList.add('')
  ratingMain.appendChild(datumText);
}

/* Defi. der Var der Stern und Kasten */
/* clickStern - hell */
/* einzelnerStern wird durch click gefaerbt */

const clickStern1 = document.querySelector('.stars__img1');
const clickStern2 = document.querySelector('.stars__img2');
const clickStern3 = document.querySelector('.stars__img3');
const clickStern4 = document.querySelector('.stars__img4');
const clickStern5 = document.querySelector('.stars__img5');

const einzelnerStern1 = document.querySelector('.rating1');
const einzelnerStern2 = document.querySelector('.rating2');
const einzelnerStern3 = document.querySelector('.rating3');
const einzelnerStern4 = document.querySelector('.rating4');
const einzelnerStern5 = document.querySelector('.rating5');

const clickKasten1 = document.querySelector('.comprehension__rectangle1');
const clickKasten2 = document.querySelector('.comprehension__rectangle2');
const clickKasten3 = document.querySelector('.comprehension__rectangle3');
const clickKasten4 = document.querySelector('.comprehension__rectangle4');
const clickKasten5 = document.querySelector('.comprehension__rectangle5');
const clickKasten6 = document.querySelector('.comprehension__rectangle6');
const clickKasten7 = document.querySelector('.comprehension__rectangle7');
const clickKasten8 = document.querySelector('.comprehension__rectangle8');
const clickKasten9 = document.querySelector('.comprehension__rectangle9');
const clickKasten10 = document.querySelector('.comprehension__rectangle10');

const einzelnerKasten1 = document.querySelector('.comprehension1');
const einzelnerKasten2 = document.querySelector('.comprehension2');
const einzelnerKasten3 = document.querySelector('.comprehension3');
const einzelnerKasten4 = document.querySelector('.comprehension4');
const einzelnerKasten5 = document.querySelector('.comprehension5');
const einzelnerKasten6 = document.querySelector('.comprehension6');
const einzelnerKasten7 = document.querySelector('.comprehension7');
const einzelnerKasten8 = document.querySelector('.comprehension8');
const einzelnerKasten9 = document.querySelector('.comprehension9');
const einzelnerKasten10 = document.querySelector('.comprehension10');

/* bei Klick auf Kasten faerbt er sich in blau um*/
/* faerbt vorhergehende Kaesten auch blau */

/*
clickKasten1.addEventListener('click', () => {
  //einzelnerKasten1.classList.add('dunklerKasten'); 
  if (einzelnerKasten1.classList.contains('dunklerKasten')) {
    einzelnerKasten1.remove('dunklerKasten');
  } else {
    einzelnerKasten1.classList.add('dunklerKasten');
  }  
})
*/

clickKasten1.addEventListener('click', () => {
  einzelnerKasten1.classList.toggle('dunklerKasten');
  einzelnerKasten1.classList.toggle('comprehension__rectangle');
});

/*
if (einzelnerKasten1.classList.contains('dunklerKasten')) {
  einzelnerKasten1.remove('dunklerKasten');
} else {
  einzelnerKasten1.classList.add('dunklerKasten');
}
*/

/*
if (knopf.innerText === 'Hide') {
  knopf.innerText = 'Show';
} else {
  knopf.innerText = 'Hide';
}
*/

clickKasten2.addEventListener('click', () => {
  debugger;
  einzelnerKasten1.classList.toggle('dunklerKasten');
  einzelnerKasten2.classList.toggle('dunklerKasten');
});

clickKasten3.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
});

clickKasten4.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
  einzelnerKasten4.classList.add('dunklerKasten');
});

clickKasten5.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
  einzelnerKasten4.classList.add('dunklerKasten');
  einzelnerKasten5.classList.add('dunklerKasten');
});

clickKasten6.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
  einzelnerKasten4.classList.add('dunklerKasten');
  einzelnerKasten5.classList.add('dunklerKasten');
  einzelnerKasten6.classList.add('dunklerKasten');
});

clickKasten7.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
  einzelnerKasten4.classList.add('dunklerKasten');
  einzelnerKasten5.classList.add('dunklerKasten');
  einzelnerKasten6.classList.add('dunklerKasten');
  einzelnerKasten7.classList.add('dunklerKasten');
});

clickKasten8.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
  einzelnerKasten4.classList.add('dunklerKasten');
  einzelnerKasten5.classList.add('dunklerKasten');
  einzelnerKasten6.classList.add('dunklerKasten');
  einzelnerKasten7.classList.add('dunklerKasten');
  einzelnerKasten8.classList.add('dunklerKasten');
});

clickKasten9.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
  einzelnerKasten4.classList.add('dunklerKasten');
  einzelnerKasten5.classList.add('dunklerKasten');
  einzelnerKasten6.classList.add('dunklerKasten');
  einzelnerKasten7.classList.add('dunklerKasten');
  einzelnerKasten8.classList.add('dunklerKasten');
  einzelnerKasten9.classList.add('dunklerKasten');
});

clickKasten10.addEventListener('click', () => {
  einzelnerKasten1.classList.add('dunklerKasten');
  einzelnerKasten2.classList.add('dunklerKasten');
  einzelnerKasten3.classList.add('dunklerKasten');
  einzelnerKasten4.classList.add('dunklerKasten');
  einzelnerKasten5.classList.add('dunklerKasten');
  einzelnerKasten6.classList.add('dunklerKasten');
  einzelnerKasten7.classList.add('dunklerKasten');
  einzelnerKasten8.classList.add('dunklerKasten');
  einzelnerKasten9.classList.add('dunklerKasten');
  einzelnerKasten10.classList.add('dunklerKasten');
});

/* bei Klick auf Stern faerbt er sich in blau um*/
/* faerbt vorhergehende Sterne auch blau */

clickStern1.addEventListener('click', () => {
  einzelnerStern1.classList.toggle('dunklerStern');
});

clickStern2.addEventListener('click', () => {
  einzelnerStern1.classList.add('dunklerStern');
  einzelnerStern2.classList.add('dunklerStern');
});

clickStern3.addEventListener('click', () => {
  einzelnerStern1.classList.add('dunklerStern');
  einzelnerStern2.classList.add('dunklerStern');
  einzelnerStern3.classList.add('dunklerStern');
});

clickStern4.addEventListener('click', () => {
  einzelnerStern1.classList.add('dunklerStern');
  einzelnerStern2.classList.add('dunklerStern');
  einzelnerStern3.classList.add('dunklerStern');
  einzelnerStern4.classList.add('dunklerStern');
});

clickStern5.addEventListener('click', () => {
  einzelnerStern1.classList.add('dunklerStern');
  einzelnerStern2.classList.add('dunklerStern');
  einzelnerStern3.classList.add('dunklerStern');
  einzelnerStern4.classList.add('dunklerStern');
  einzelnerStern5.classList.add('dunklerStern');
});

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// export { multiply, divide };
