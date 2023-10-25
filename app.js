const url = 'https://jsonplaceholder.typicode.com/users';

const ul = document.querySelector('.list-group');
const nameHaupt = document.querySelector('.name-haupt');
const li = document.querySelector('li')


const addName  = (name)=>

name.forEach((element, index) => {
   
        ul.innerHTML += `<li class="list-group-item" data-item="${index}">${element.name}</li>`;
        
    });


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
    if(event.target.matches('li')){
        const activeSrc = event.target.getAttribute('data-item');
    
        
        
           }});
        



const newFunc = async () => {
    try{
    const response = await fetch(url); 
    if(!response.ok){
throw new Error ('статус-код не 200');
    }
    const info = await response.json();
    
    addName (info);
    const [serg] = info;
    renderCard(serg);

    } catch (error) {
        console.error(error.message);
        }
};

   newFunc();