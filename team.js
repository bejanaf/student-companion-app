// const teamBuddys = ['Bejan', 'Farah', 'Felix', 'Gabriele', 'Osterhase'];

fetch("https://muc-2020-w1-student-api.vercel.app/api/teams")
  .then((result) => result.json())
  .then((data) => drawTeams(data));

function drawTeams(teamBuddys) {
  teamBuddys.forEach((zwei, index) => {
    createBuddy(zwei, index);
  });
}

//createAllBuddys(teamBuddys);
function createBuddy(team,index) {
  const mainTeams = document.querySelector('.main__teams');
  if (mainTeams) {
    const buddyBox = document.createElement('section');
    buddyBox.classList.add('teamcard');
    mainTeams.appendChild(buddyBox);

    const headLine = document.createElement('h2');
    headLine.innerText = 'Team ' + String(index +1);
    buddyBox.appendChild(headLine);

    team.forEach((member, index) => {
      const buddyBoxItem = document.createElement('div');
      buddyBoxItem.classList.add('teamcard__items');
      buddyBoxItem.innerText = member;
      buddyBox.appendChild(buddyBoxItem);
    });
  }
}


/*
function drawTeams(teamBuddys) {
  teamBuddys.forEach((teamBuddy) => {
    createBuddy(teamBuddy);
  });
}

createAllBuddys(teamBuddys);


*/