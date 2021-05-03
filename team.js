const teamBuddys = ['Bejan', 'Farah', 'Felix', 'Gabriele', 'Osterhase'];

/*
const sectionOne = document.createElement('section');
sectionOne.classList.add('teamcard');
mainContainer.appendChild(sectionOne);

teamBuddys.forEach((element, index) => {
  const divBox = document.createElement('div');
  divBox.innerText = element.codeBuddy;
  divBox.classList.add('teamcard__items');
  sectionOne.appendChild(divBox);
});
*/

function createAllBuddys(teamBuddys) {
  teamBuddys.forEach((teamBuddy) => {
    createBuddy(teamBuddy);
  });
}

createAllBuddys(teamBuddys);
function createBuddy(teamBuddy) {
  const mainTeams = document.querySelector('.main__teams');
  if (mainTeams) {
    const buddyBox = document.createElement('section');
    buddyBox.classList.add('teamcard');
    mainTeams.appendChild(buddyBox);

    const headLine = document.createElement('h2');
    headLine.innerText = 'Team 1';
    buddyBox.appendChild(headLine);

    teamBuddys.forEach((member, index) => {
      const buddyBoxItem = document.createElement('div');
      buddyBoxItem.classList.add('teamcard__items');
      buddyBoxItem.innerText = member;
      buddyBox.appendChild(buddyBoxItem);
    });
  }
}
