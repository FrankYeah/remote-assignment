const welcomeMessage = document.getElementById('welcomeMessage');
const myButton = document.getElementById('myButton');
const contentDiv = document.getElementById('contentDiv');

const toggleList = document.getElementById('toggleList');
const listId = document.getElementById('listId');
const closeId = document.getElementById('closeId');

toggleList.addEventListener('click', ()=>{
    listId.style.display ='block';
})

closeId.addEventListener('click', ()=>{
    listId.style.display ='none';
})


welcomeMessage.addEventListener('click', () => {
    welcomeMessage.innerHTML = 'Have a Good Time!';
});

myButton.addEventListener('click', () => {
    contentDiv.style.display ='block';
    contentDiv.style.maxWidth = "1200px";
    
});
