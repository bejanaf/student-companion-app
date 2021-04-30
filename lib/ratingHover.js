function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

/*
________

STERNE

die if Funktion kann wieder entfernt werden falls sie nervt

________
*/

const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');
const star5 = document.querySelector('.star5');

star1.addEventListener('click', () => {
  if (star2.classList.contains('hellerStern')) {
    star1.classList.toggle('dunklerStern');
    star1.classList.toggle('hellerStern');
  }
});

star2.addEventListener('click', () => {
  if (star3.classList.contains('hellerStern')) {
    star1.classList.toggle('dunklerStern');
    star1.classList.toggle('hellerStern');
    star2.classList.toggle('dunklerStern');
    star2.classList.toggle('hellerStern');
  }
});

star3.addEventListener('click', () => {
  if (star4.classList.contains('hellerStern')) {
    star1.classList.toggle('dunklerStern');
    star1.classList.toggle('hellerStern');
    star2.classList.toggle('dunklerStern');
    star2.classList.toggle('hellerStern');
    star3.classList.toggle('dunklerStern');
    star3.classList.toggle('hellerStern');
  }
});

star4.addEventListener('click', () => {
  if (star5.classList.contains('hellerStern')) {
    star1.classList.toggle('dunklerStern');
    star1.classList.toggle('hellerStern');
    star2.classList.toggle('dunklerStern');
    star2.classList.toggle('hellerStern');
    star3.classList.toggle('dunklerStern');
    star3.classList.toggle('hellerStern');
    star4.classList.toggle('dunklerStern');
    star4.classList.toggle('hellerStern');
  }
});

star5.addEventListener('click', () => {
  star1.classList.toggle('dunklerStern');
  star1.classList.toggle('hellerStern');
  star2.classList.toggle('dunklerStern');
  star2.classList.toggle('hellerStern');
  star3.classList.toggle('dunklerStern');
  star3.classList.toggle('hellerStern');
  star4.classList.toggle('dunklerStern');
  star4.classList.toggle('hellerStern');
  star5.classList.toggle('dunklerStern');
  star5.classList.toggle('hellerStern');
});

/*
________

KAESTCHEN

________
*/

const comprehensionBox1 = document.querySelector('.comprehension1');
const comprehensionBox2 = document.querySelector('.comprehension2');
const comprehensionBox3 = document.querySelector('.comprehension3');
const comprehensionBox4 = document.querySelector('.comprehension4');
const comprehensionBox5 = document.querySelector('.comprehension5');
const comprehensionBox6 = document.querySelector('.comprehension6');
const comprehensionBox7 = document.querySelector('.comprehension7');
const comprehensionBox8 = document.querySelector('.comprehension8');
const comprehensionBox9 = document.querySelector('.comprehension9');
const comprehensionBox10 = document.querySelector('.comprehension10');

comprehensionBox1.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
});

comprehensionBox2.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
});

comprehensionBox3.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
});

comprehensionBox4.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
  comprehensionBox4.classList.toggle('dunklerKasten');
  comprehensionBox4.classList.toggle('hellerKasten');
});

comprehensionBox5.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
  comprehensionBox4.classList.toggle('dunklerKasten');
  comprehensionBox4.classList.toggle('hellerKasten');
  comprehensionBox5.classList.toggle('dunklerKasten');
  comprehensionBox5.classList.toggle('hellerKasten');
});

comprehensionBox6.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
  comprehensionBox4.classList.toggle('dunklerKasten');
  comprehensionBox4.classList.toggle('hellerKasten');
  comprehensionBox5.classList.toggle('dunklerKasten');
  comprehensionBox5.classList.toggle('hellerKasten');
  comprehensionBox6.classList.toggle('dunklerKasten');
  comprehensionBox6.classList.toggle('hellerKasten');
});

comprehensionBox7.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
  comprehensionBox4.classList.toggle('dunklerKasten');
  comprehensionBox4.classList.toggle('hellerKasten');
  comprehensionBox5.classList.toggle('dunklerKasten');
  comprehensionBox5.classList.toggle('hellerKasten');
  comprehensionBox6.classList.toggle('dunklerKasten');
  comprehensionBox6.classList.toggle('hellerKasten');
  comprehensionBox7.classList.toggle('dunklerKasten');
  comprehensionBox7.classList.toggle('hellerKasten');
});

comprehensionBox8.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
  comprehensionBox4.classList.toggle('dunklerKasten');
  comprehensionBox4.classList.toggle('hellerKasten');
  comprehensionBox5.classList.toggle('dunklerKasten');
  comprehensionBox5.classList.toggle('hellerKasten');
  comprehensionBox6.classList.toggle('dunklerKasten');
  comprehensionBox6.classList.toggle('hellerKasten');
  comprehensionBox7.classList.toggle('dunklerKasten');
  comprehensionBox7.classList.toggle('hellerKasten');
  comprehensionBox8.classList.toggle('dunklerKasten');
  comprehensionBox8.classList.toggle('hellerKasten');
});

comprehensionBox9.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
  comprehensionBox4.classList.toggle('dunklerKasten');
  comprehensionBox4.classList.toggle('hellerKasten');
  comprehensionBox5.classList.toggle('dunklerKasten');
  comprehensionBox5.classList.toggle('hellerKasten');
  comprehensionBox6.classList.toggle('dunklerKasten');
  comprehensionBox6.classList.toggle('hellerKasten');
  comprehensionBox7.classList.toggle('dunklerKasten');
  comprehensionBox7.classList.toggle('hellerKasten');
  comprehensionBox8.classList.toggle('dunklerKasten');
  comprehensionBox8.classList.toggle('hellerKasten');
  comprehensionBox9.classList.toggle('dunklerKasten');
  comprehensionBox9.classList.toggle('hellerKasten');
});

comprehensionBox10.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox2.classList.toggle('dunklerKasten');
  comprehensionBox2.classList.toggle('hellerKasten');
  comprehensionBox3.classList.toggle('dunklerKasten');
  comprehensionBox3.classList.toggle('hellerKasten');
  comprehensionBox4.classList.toggle('dunklerKasten');
  comprehensionBox4.classList.toggle('hellerKasten');
  comprehensionBox5.classList.toggle('dunklerKasten');
  comprehensionBox5.classList.toggle('hellerKasten');
  comprehensionBox6.classList.toggle('dunklerKasten');
  comprehensionBox6.classList.toggle('hellerKasten');
  comprehensionBox7.classList.toggle('dunklerKasten');
  comprehensionBox7.classList.toggle('hellerKasten');
  comprehensionBox8.classList.toggle('dunklerKasten');
  comprehensionBox8.classList.toggle('hellerKasten');
  comprehensionBox9.classList.toggle('dunklerKasten');
  comprehensionBox9.classList.toggle('hellerKasten');
  comprehensionBox10.classList.toggle('dunklerKasten');
  comprehensionBox10.classList.toggle('hellerKasten');
});

/* 
________
AB HIER ALTER CODE
________








/* 1. Versuch -> geht

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

*/

/* bei Klick auf Kasten faerbt er sich in blau um*/
/* faerbt vorhergehende Kaesten auch blau */

/* Versuch mit if/else
clickKasten1.addEventListener('click', () => {
  //einzelnerKasten1.classList.add('dunklerKasten'); 
  if (einzelnerKasten1.classList.contains('dunklerKasten')) {
    einzelnerKasten1.remove('dunklerKasten');
  } else {
    einzelnerKasten1.classList.add('dunklerKasten');
  }  
})
*/

/*

comprehensionBox1.addEventListener('click', () => {

});

comprehensionBox1.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
});

comprehensionBox1.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
});

comprehensionBox1.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
});

comprehensionBox1.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
});

comprehensionBox1.addEventListener('click', () => {
  comprehensionBox1.classList.toggle('dunklerKasten');
  comprehensionBox1.classList.toggle('hellerKasten');
});

*/
/* kann gelöscht werden ->
clickKasten2.addEventListener('click', () => {
  einzelnerKasten1.classList.toggle('dunklerKasten');
  einzelnerKasten1.classList.toggle('comprehension__rectangle');
  einzelnerKasten2.classList.toggle('dunklerKasten');
  einzelnerKasten2.classList.toggle('comprehension__rectangle');
});

clickKasten3.addEventListener('click', () => {
  einzelnerKasten1.classList.toggle('dunklerKasten');
  einzelnerKasten1.classList.toggle('comprehension__rectangle');
  einzelnerKasten2.classList.toggle('dunklerKasten');
  einzelnerKasten2.classList.toggle('comprehension__rectangle');
  einzelnerKasten3.classList.toggle('dunklerKasten');
  einzelnerKasten3.classList.toggle('comprehension__rectangle');
});
*/

/*Versuch 1 mit toggle -> geht

clickKasten1.addEventListener('click', () => {
  einzelnerKasten1.classList.toggle('dunklerKasten');
  einzelnerKasten1.classList.toggle('comprehension__rectangle');
});

clickKasten2.addEventListener('click', () => {
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

*/

/* bei Klick auf Stern faerbt er sich in blau um*/
/* faerbt vorhergehende Sterne auch blau */

/*
clickStern1.addEventListener('click', () => {
  einzelnerStern1.classList.add('dunklerStern');
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

*/

// export { multiply, divide };
