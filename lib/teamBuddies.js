const now = new Date();
const days = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);

const myDate = new Date();
const heute =
  'on ' +
  days[now.getDay()] +
  ' - ' +
  myDate.getDate() +
  '.' +
  (myDate.getMonth() + 1) +
  '.' +
  myDate.getFullYear();

//console.log(heute);

const headerBuddy = document.querySelector('.header__buddy');
// If Anweisung checkt, das nicht auf jeder Seite
// der Header gesucht wird, sondern nur da, wo angewedet
// werden soll
if (headerBuddy) {
  const titleBuddy = document.createElement('h1');
  const datumText = document.createElement('p');
  datumText.innerText = heute;
  //titleBuddy.classList.add('')
  titleBuddy.innerText = 'CODE BUDDIES';
  headerBuddy.appendChild(titleBuddy);
  headerBuddy.appendChild(datumText);
}

// index.html erster Block
const codeBuddys = [
  {
    codeBuddy: 'Felix',
  },
  {
    codeBuddy: 'Farah',
  },
];

const mainContainer = document.querySelector('.main__index');
const section = document.createElement('section');
section.classList.add('buddycard');
mainContainer.appendChild(section);

codeBuddys.forEach((element, index) => {
  const divBox = document.createElement('div');
  divBox.innerText = element.codeBuddy;
  divBox.classList.add('buddycard__items');
  section.appendChild(divBox);
  if (index == 0) {
    const plusSign = document.createElement('img');
    plusSign.classList.add('plus');
    plusSign.src = 'images/Plus.svg';
    plusSign.alt = 'plus symbol';
    section.appendChild(plusSign);
  }
});

// lass="plus" src="images/Plus.svg" alt="plus symbol"

/*
  const divBoxOne = document.createElement('div');
  divBoxOne.classList.add('buddycard__item');
  divBoxOne.innerText = element.codeBuddy; */

// index.html 2er - Block
const teamBuddys = [
  {
    codeBuddy: 'Bejan',
  },
  {
    codeBuddy: 'Farah',
  },
  {
    codeBuddy: 'Felix',
  },
  {
    codeBuddy: 'Gabriele',
  },
  {
    codeBuddy: 'Osterhase',
  },
];

//const mainContainer = document.querySelector('.main__index');
const sectionOne = document.createElement('section');
sectionOne.classList.add('teamcard');
mainContainer.appendChild(sectionOne);

teamBuddys.forEach((element, index) => {
  const divBox = document.createElement('div');
  divBox.innerText = element.codeBuddy;
  divBox.classList.add('teamcard__items');
  sectionOne.appendChild(divBox);
});

// buddy.html erster-Block

const codeBuddysOne = [
  {
    codeBuddy: 'Felix',
  },
  {
    codeBuddy: 'Farah',
  },
];

/* gescheitert aktuell
const mainBuddyContainer = document.querySelector('.main__buddy');
const sectionBuddy = document.createElement('section');
sectionBuddy.classList.add('buddycard');
mainBuddyContainer.appendChild(sectionBuddy);

codeBuddysOne.forEach((element, index) => {
  const divBox = document.createElement('div');
  divBox.innerText = element.codeBuddy;
  divBox.classList.add('buddycard__items');
  sectionBuddy.appendChild(divBox);
  if (index == 0) {
    const plusSign = document.createElement('img');
    plusSign.classList.add('plus');
    plusSign.src = 'images/Plus.svg';
    plusSign.alt = 'plus symbol';
    sectionBuddy.appendChild(plusSign);
  }
});
*/

const codeBuddysAll = [
  (codeBuddysOne = [
    {
      codeBuddy: 'Felix',
    },
    {
      codeBuddy: 'Farah',
    },
  ]),
  (codeBuddysTwo = [
    {
      codeBuddy: 'Gabriele',
    },
    {
      codeBuddy: 'Bejan',
    },
  ]),
  (codeBuddysThree = [
    {
      codeBuddy: 'Felix',
    },
    {
      codeBuddy: 'Gabriele',
    },
  ]),
  (codeBuddysFour = [
    {
      codeBuddy: 'Farah',
    },
    {
      codeBuddy: 'Bejan',
    },
  ]),
  (codeBuddysFive = [
    {
      codeBuddy: 'Gabriele',
    },
    {
      codeBuddy: 'Felix',
    },
  ]),
];

const mainBuddy = document.querySelector('.main__buddy');

codeBuddysAll.forEach((allMyBuddys) => {
  const sections = document.createElement('section');
  sections.classList.add('buddycard');
  mainBuddy.append(sections);

  const buddycard__items = document.createElement('div');
  buddycard__items.classList.add('buddycard__items');
  section.append(buddycard__items);

  const buddycard__item = document.createElement('p');
  buddycard__item.classList.add('buddycard__item');
  buddycard__item.textContent = '';
  buddycard__items.append(buddycard__item);

  const plus = document.createElement('img');
  plus.classList.add('plus');
  plus.src = './images/Plus.svg';
  plus.alt = 'Dies ist ein Plus-Symbol';
  sections.append(plus);

  const buddycard__items1 = document.createElement('div');
  buddycard__items1.classList.add('buddycard__items');
  section.append(buddycard__items1);

  const buddycard__item1 = document.createElement('p');
  buddycard__item1.classList.add('buddycard__item');
  buddycard__item1.textContent = '';
  buddycard__items.append(buddycard__item1);
});

//const mainContainer = document.querySelector('.main__index');
/*
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// export { sum, subtract, multiply, divide, PI as piNumber };
export { sum, subtract };
*/
