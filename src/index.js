let addToy = false;









document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//Event Listeners
document.querySelector('.add-toy-form').addEventListener('submit', handleSubmit);

//Event handlers
function handleSubmit(e) {
  console.log(e)
  e.preventDefault()

  let toyObj = {
    name:e.target.name.value,
    image:e.target.image.value,
    likes: 0
  }
  renderOneToy(toyObj)
  console.log(renderOneToy(toyObj))
  addNewToy(toyObj)
}

//DOM RENDER FUNCTION
function renderOneToy(toy){
  //Build Toy
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <div class="">
    <h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar" />
    <p>${toy.likes}</p>
    <button class="like_btn" id="${toy.id}">Like ❤️</button>
  </div>
  `
  // likeFunction
  card.querySelector('.like_btn').addEventListener('click', () => {
    //gets the likes on page, incremenet 1 
    let a = parseInt(card.querySelector('p').innerText) + 1
    //reassign new number onto DOM
     card.querySelector('p').textContent=a 
     updateLikes(toy, a)
      })
//Add toy card to DOM
document.querySelector('#toy-collection').appendChild(card)
};



function getAllToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => toys.forEach(toy => renderOneToy(toy)))
}

function addNewToy(toyObj){
  fetch('http://localhost:3000/toys',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(toyObj)
  })
  .then(res => res.json())
  .then(toy => console.log(toy))

}




function updateLikes(toyObj, a){
  fetch(`http://localhost:3000/toys/${toyObj.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      likes: a})
  } )
  .then(res => res.json())
  .then(toy => console.log(toy))
}





function initialize() {
  getAllToys()
  //.forEach(toys => renderOneToy(toys))
};
initialize()

























//takes in a single toys' information and renders a card to a page
//fetch get  FOR Each 
//post
//function addCharacterToDOm*character) <-optional'
    //character.name character.image character 

//function addCharacterToDOM();

// Add tou info to the card
//get the div with id toy-collection
//fetch get all toys from location
  //get response data
  //loop through data
    //for each data make card dom structure = addCharacterToDOM()
    //increase a toy's likes using a button
    //NOTE: button tag addeventlistener click 
      //on click make patch to increment likes by 1
      //use response or current DOM to update the DOM

//Add a new Toy
//get form node
//on form submit
    //get data
    //make post request <- POPULATE dom DIRECTLY
      //use response to populate DOM = addCharacterToDOM()