const data = [
  {
    projectTitle: 'Tonic',
    imageURL: './images/work1.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://azeezumoru.github.io/Abdul-portfolio/',
    sourceCode: 'https://github.com/azeezumoru/Abdul-portfolio',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './images/work2.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://azeezumoru.github.io/Abdul-portfolio/',
    sourceCode: 'https://github.com/azeezumoru/Abdul-portfolio',
  },
  {
    projectTitle: 'Tonic',
    imageURL: './images/work3.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://azeezumoru.github.io/Abdul-portfolio/',
    sourceCode: 'https://github.com/azeezumoru/Abdul-portfolio',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './images/work4.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://azeezumoru.github.io/Abdul-portfolio/',
    sourceCode: 'https://github.com/azeezumoru/Abdul-portfolio',
  },
];
document.querySelectorAll('.btn').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  const popupCard = `
  <div class="project1" id="project1">
        <div class="popupTop">
            <div class="projectPopupTitle">
              <div class="titlePopup">
              
                <h3 class="comp-title">${data[id].projectTitle}</h3>
                <img
                id="popupClose${id}"
                class="popupClose"
                src="./images/close-btn.png"
                alt="closeBtn"
                />
              </div>
              <div class="canopy">
                <h6>CANOPY</h6>
                <ul class="canopy-lists">
                <li>Back End Dev</li>
                <li>2015</li>
                </ul>
              </div>
            </div>
            <img class="projectImage" src=${data[id].imageURL} alt="projectImage">
          <div class="popupDown">
          <div class="project-desc popupDesc">${data[id].description}</div>
            <div class="popupBtns">
              <ul class="categories">
                <li class="tag">${data[id].technologies[0]}</li>
                <li class="tag">${data[id].technologies[1]}</li>
                <li class="tag">${data[id].technologies[2]}</li>
                <li class="tag">${data[id].technologies[3]}</li>
              </ul>
              <hr>
              <div class="actionBtnPopup">
                <a class="btnn btnPopup" href=${data[id].seeLive} target='blank'>
                See Live <img class="seeAll" src='./images/Ikon.svg' alt="seeLive"></a>
                <a class="btnn btnPopup" href=${data[id].sourceCode} target='blank'>
                See Source <img class="seeAll" src='./images/Vecto.svg' alt="githubCode"></a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>`;
  occurence.addEventListener('click', () => {
    const body = document.getElementById('body');
    const section = document.createElement('section');
    section.innerHTML = popupCard;
    section.classList.add('hide');
    body.appendChild(section);
    section.classList.add('projectPopup');
    if (section.classList.contains('hide')) {
      section.classList.remove('hide');
    }
    const hidePopup = document.getElementById(`popupClose${id}`);
    hidePopup.addEventListener('click', () => {
      body.removeChild(section);
    });
  });
});
