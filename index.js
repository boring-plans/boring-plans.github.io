const works = [
    {
        title: 'Boring Days 📅',
        description: 'A tool to record days',
        link: 'https://boring-plans.github.io/boring-days/#/'
    },
    {
        title: 'N Notes 📖',
        description: 'A blog site. Knowledge has no limit ♾️.',
        link: 'https://boring-plans.github.io/boring-blogs/'
    },
    {
        title: 'Vuetify Admin 🖥️',
        description: 'A template of admin-app.',
        link: 'https://boring-plans.github.io/vuetify-admin/#/'
    },
    {
        title: 'DSS 🎯',
        description: 'DDT sharp shooter.',
        link: 'https://github.com/boring-plans/ddt-sharp-shooter'
    },
    {
        title: 'Vue plain avatar uploader ☁️',
        description: 'A vue based avatar selection component.',
        link: 'https://github.com/boring-plans/vue-plain-avatar-uploader'
    },
    {
        title: 'Vuetify icon picker 🗃️',
        description: 'A component used to pick icon.',
        link: 'https://boring-plans.github.io/vuetify-icon-picker/'
    }
];


window.onload = ()=>{
    // copyright year
    const year = new Date().getFullYear();
    const yearElem = document.querySelector('#copyright-year');
    if(yearElem){
        yearElem.innerText = year
    }

    // work cards
    const cardContainer = document.querySelector('.card-container');
    if(cardContainer){
        cardContainer.append(...works.map(w=>{
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.innerHTML = `<span class="card-line project-title">${w.title}</span><span class="project-description card-line">${w.description}</span>`;
            card.onclick = () => {
                window.open(w.link);
            };
            return card;
        }))
    }
}