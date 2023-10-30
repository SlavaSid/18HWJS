
const url = 'https://jsonplaceholder.typicode.com/users';
const ul = document.querySelector('.list-group');
const cardBlock = document.querySelector('.card');

const addLiCard = (info) => {
    info.forEach(item => {
    ul.innerHTML += `
        <li class="list-group-item list-group-item-action">${item.name}</li>
        `;
    cardBlock.innerHTML +=
        `<div class="card-body">
            <h2 class="card-title">${item.name}</h2>
            <h3 class="card-subtitle mb-2 text-muted">${item.username}</h3>
            <p class="card-text">Street: ${item.address.street}, Suite: ${item.address.suite}, City: ${item.address.city}, Zipcode: ${item.address.zipcode}</p>
            <p class="card-text">${item.company.name}</p>
            <a href="mailto:${item.email}" class="card-link">Написать письмо</a>
        </div>
    `;
})};

const newFunc = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка статус кода')
        }
        const info = await response.json();
        addLiCard(info);

    } catch (error) {
        console.log(error);
    }

    const li = Array.from(document.querySelectorAll('.list-group-item'));
    li[0].classList.add('active');
    const div = Array.from(document.querySelectorAll('.card-body'));
    div[0].classList.add('active');

    ul.addEventListener('click', (event) => {
        if (event.target.matches('.list-group-item')) {
            li.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            const liActiv = li.indexOf(event.target);
            div.forEach(block => block.classList.remove('active'));
            div[liActiv].classList.add('active');
        }
    })
}

newFunc();