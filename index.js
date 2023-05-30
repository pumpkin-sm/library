const searchInput = document.querySelector('#search');
const books = document.querySelectorAll('.book');

searchInput.addEventListener('keyup', (event)=>{
    const word = event.target.value.toLowerCase();

    books.forEach(item =>{
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display ="block") : (item.style.display ="none");
    } )
    
})


