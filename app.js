const url = 'https://jsonplaceholder.typicode.com/users';

const ul = document.querySelector('.list-group');
const nameHaupt = document.querySelector('.name-haupt');
const li = Array.from(document.querySelectorAll('.list-group-item'));


const addName  = (name) => {
console.log(name);
name.forEach((element, index) => {
    if(index === 0){
        ul.innerHTML = `<li class="list-group-item active" data-item="${index}">${element.name}</li>`;
    } else {ul.innerHTML += `<li class="list-group-item" data-item="${index}">${element.name}</li>`;
}
    })};
console.log('li');
 const renderCard = (serg) => {
     nameHaupt.innerHTML = `
    <div class="name-card">
            <h5 class="name-card">${serg.name}</h5>
            <p class="name-texttop">${serg.username}</p>
            <p class="name-text">Street:${serg.address.street}, Suite:${serg.address.suite}, City:${serg.address.city}, Zipcode:${serg.address.zipcode}</p>
            <p class="name-text">${serg.company.name}</p>
            <a href="#" class="btin">Написать ему</a>
          </div>`};

  
 ul.addEventListener('click', (event) => {
    nameHaupt.textContent = '';
    li.forEach(el => el.classList.remove('active'));    
    const activeSrc = event.target.getAttribute('data-item');
    const activeLi = event.target;
   
    activeLi.classList.add('active');
    
    if(event.target.matches('li')){
         fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error('ошибка статус-кода')
            } return response.json()
            
        })
        .then(data => addCard(data))
        .catch(error => {
            console.error(error)
        }) }
     
        const addCard = (data) =>{
            
            nameHaupt.innerHTML = `
            <div class="name-card">
                    <h5 class="name-card">${data[activeSrc].name}</h5>
                    <p class="name-texttop">${data[activeSrc].username}</p>
                    <p class="name-text">Street:${data[activeSrc].address.street}, Suite:${data[activeSrc].address.suite}, City:${data[activeSrc].address.city}, Zipcode:${data[activeSrc].address.zipcode}</p>
                    <p class="name-text">${data[activeSrc].company.name}</p>
                    <a href="#" class="btin">Написать ему</a>
                  </div>`};
            
                     
    });

const newFunc = async () => {
    try{
    const response = await fetch(url); 
    if(!response.ok){
throw new Error ('статус-код не 200');
    }
    const info = await response.json();
    
    addName (info);
    const serg = info[0];
    renderCard(serg);

    } catch (error) {
        console.error(error.message);
        }
};

   newFunc();