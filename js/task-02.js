const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrList = document.getElementById("ingredients");
// console.log(ingrList);
const ingrArray = [];

ingredients.forEach(element => {
  const el = document.createElement('li');
  el.textContent = element;
  el.classList.add('item');
  ingrArray.push(el);
});

ingrList.append(...ingrArray);

// for (let i = 0; i < ingredients.length; i++) {
//   let liElement = document.createElement('li');
//   liElement.textContent = ingredients[i];
//   liElement.classList.add('item')
//   // console.log(ingredients[i]);
//   ingredientsList.append(liElement);
// }
// ingList.innerHTML 
