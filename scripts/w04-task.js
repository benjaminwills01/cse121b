/* LESSON 4 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "Benjamin Wills",
  photo: "images/profileimage.jpg",
  favoriteFoods: [
    'Sushi',
    'Burger',
    'Rice',
    'Pizza',
    'Brownie'
  ],

  hobbies: [
    'Chess',
    'Gaming',
    'Cooking'
  ],

  placesLived: [

  ],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
  {
    place: 'Ruimsig, Honeydew',
    length: '18 years'
  }
);

myProfile.placesLived.push(
  {
    place: 'Northriding, Fourways',
    length: '1 year'
  }
);

myProfile.placesLived.push(
  {
    place: 'Pinehaven, Krugersdorp',
    length: '1 year'
  }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
  let li = document.createElement('li');
  li.textContent = hobbie;
  document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt'); 
  dt.textContent = place.place;
  document.querySelector('#places-lived').appendChild(dt)

  let dd = document.createElement('dd');
  dd.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dd)
})