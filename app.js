const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition() {
  // button click active calss
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      sectBtn[i].className += ' active-btn';
    });
  }

  //   section click active class
  allSections.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if (id) {
      // remove active from other buttons
      //   sectBtn.forEach((section) => {
      //     section.classList.remove('active');
      //   });
      //   e.target.classList.add('active');

      sections.forEach((section) => {
        section.classList.remove('active');
      });
      let element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  //   Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

pageTransition();
