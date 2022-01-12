const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeListItemMarkup = img => {
  const { url, alt } = img;
  return `<li class="gallery-list-item"><img src="${url}" alt="${alt}" class="gallery-list-image"></li>`;
}

// console.log(makeListItem(images[0]));
const gall = document.querySelector('.gallery');
const makeListItemRows = images
  .map(makeListItemMarkup)
  .join('');

gall.insertAdjacentHTML("afterbegin", makeListItemRows);

// {
//   const gall = document.querySelector('.gallery');
//   // console.log(gall);
//   const gelaryArr = [];

//   images.forEach(element => {
//     const elem = document.createElement('li');
//     elem.classList.add('gallery-list-item');
//     const imag = document.createElement('img');
//     imag.setAttribute('src', element.url);

//     // imag.alt = element.alt;
//     imag.setAttribute('alt', element.alt);
//     imag.classList.add('gallery-list-image');
//     elem.appendChild(imag);

//     gelaryArr.push(elem);
//   });

//   gall.append(...gelaryArr);
// }
// gall.insertAdjacentHTML("afterbegin", gelaryArr);

