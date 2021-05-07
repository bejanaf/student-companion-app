fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
  .then((result) => result.json())
  .then((data) => drawEntries(data));

const mainContainer = document.querySelector('.main__journal');

function drawEntries(journalCards) {
  journalCards.forEach((journalCard, index) => {
    const section = document.createElement('section');
    section.classList.add('journal');
    mainContainer.appendChild(section);

    const h3 = document.createElement('h3');
    h3.innerText = 'Day ' + String(index + 1);
    section.appendChild(h3);

    // Sterne
    const labelSterne = document.createElement('label');
    labelSterne.classList.add('label__motto');
    labelSterne.innerText = 'Rating:';
    section.appendChild(labelSterne);

    const sternListe = document.createElement('ul');
    sternListe.classList.add('journal__rating');
    section.appendChild(sternListe);

    for (let i = 0; i <= 4; i++) {
      const li = document.createElement('li');
      li.classList.add('dunklerStern');
      sternListe.appendChild(li);
      if (i >= journalCard.rating) {
        li.classList.add('hellerStern');
      }
    }

    // Kästchen
    const labelKaestchen = document.createElement('label');
    labelKaestchen.classList.add('label__motto');
    labelKaestchen.innerText = 'Comprehension:';
    section.appendChild(labelKaestchen);

    const kaestchenListe = document.createElement('ul');
    kaestchenListe.classList.add('journal__comprehension');
    section.appendChild(kaestchenListe);

    for (let i = 0; i <= 9; i++) {
      const li = document.createElement('li');
      li.classList.add('dunklerKasten');
      kaestchenListe.appendChild(li);
      if (i >= journalCard.comprehension) {
        li.classList.add('hellerKasten');
      }
    }

    const labelMotto = document.createElement('label');
    labelMotto.classList.add('label__motto');
    labelMotto.innerText = 'Motto:';
    section.appendChild(labelMotto);

    const articleMotto = document.createElement('article');
    articleMotto.classList.add('article__motto');
    articleMotto.innerText = journalCard.motto;
    section.appendChild(articleMotto);

    const labelNotes = document.createElement('label');
    labelNotes.classList.add('label__notes');
    labelNotes.innerText = 'Notes:';
    section.appendChild(labelNotes);

    const articleNotes = document.createElement('article');
    articleNotes.classList.add('article__notes');
    articleNotes.innerText = journalCard.notes;
    section.appendChild(articleNotes);
  });
}
