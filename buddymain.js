// const codeBuddysAll = [
//   codeBuddysOne = [
//     {
//       codeBuddy: 'Felix',
//     },
//     {
//       codeBuddy: 'Farah',
//     },
//   ]),
//   (codeBuddysTwo = [
//     {
//       codeBuddy: 'Gabriele',
//     },
//     {
//       codeBuddy: 'Bejan',
//     },
//   ]),
//   (codeBuddysThree = [
//     {
//       codeBuddy: 'Felix',
//     },
//     {
//       codeBuddy: 'Gabriele',
//     },
//   ]),
//   (codeBuddysFour = [
//     {
//       codeBuddy: 'Farah',
//     },
//     {
//       codeBuddy: 'Bejan',
//     },
//   ]),
//   (codeBuddysFive = [
//     {
//       codeBuddy: 'Gabriele',
//     },
//     {
//       codeBuddy: 'Felix',
//     },
//   ]),
// ];

const codeBuddysAll = [
  ['Felix', 'Farah'],
  ['Gabriele', 'Bejan'],
  ['Felix', 'Gabriele'],
  ['Farah', 'Bejan'],
  ['Gabriele', 'Felix'],
];

const mainBuddy = document.querySelector('.main__buddy');

codeBuddysAll.forEach((allMyBuddys) => {
  const sections = document.createElement('section');
  sections.classList.add('buddycard');
  mainBuddy.append(sections);

  const buddycard__items = document.createElement('div');
  buddycard__items.classList.add('buddycard__items');
  sections.append(buddycard__items);

  const buddycard__item = document.createElement('p');
  buddycard__item.classList.add('buddycard__item');
  buddycard__item.textContent = allMyBuddys[0];
  buddycard__items.append(buddycard__item);

  const plus = document.createElement('img');
  plus.classList.add('plus');
  plus.src = './images/Plus.svg';
  plus.alt = 'Dies ist ein Plus-Symbol';
  sections.append(plus);

  const buddycard__items1 = document.createElement('div');
  buddycard__items1.classList.add('buddycard__items');
  sections.append(buddycard__items1);

  const buddycard__item1 = document.createElement('p');
  buddycard__item1.classList.add('buddycard__item');
  buddycard__item1.textContent = allMyBuddys[1];
  buddycard__items1.append(buddycard__item1);
});
