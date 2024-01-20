let fullName = 'Benjamin Wills';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/profileimage.jpg';

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

const favFoods = ['Pizza', 'Chocolate', 'Sushi', 'Chicken Wings'];
const newFavoriteFood = 'Ice Cream';

favFoods.push(newFavoriteFood);

foodElement.textContent = favFoods.join(', ');

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
