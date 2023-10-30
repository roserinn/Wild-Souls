

const badgeCircle = document.querySelector('.badge__circle');
const wildlyLovedTitle = document.querySelector('.wildly__loved__title');
const wildlyLovedText = document.querySelector('.wildly__loved__text')
const secondBadgeCircle = document.querySelector('.the__concept__store__badge__circle')


const badgeCircleAnim = gsap.to(badgeCircle, {
  duration: 20, rotate: 360, ease: 'linear', repeat: -1
})
const secondBadgeCircleAnim = gsap.to(secondBadgeCircle, {
  duration: 20, rotate: 360, ease: 'linear', repeat: -1
})

const tl = gsap.timeline({ delay: .3 });

const wildlyLovedTitleAnim = tl.to(wildlyLovedTitle, {
  delay: .3, opacity: 1, ease: 'linear'
})

const wildlyLovedTextAnim = tl.to(wildlyLovedText, {
  y: 40, opacity: 1, ease: 'back',
})


// ----------------------------------------------


const cardsItems = [

  {
    backgroundHoverImg: './img/jars__img/PeanutButter.webp',
    backgroundColor: '#72A080',
    jarImg: './img/jars__img/The__Wild__Peanut__Butter.png',
    cardTitle: 'Peanut Butter',
    productCost: '€ 4,90',
    btnColor: '#72A080'
  },
  {
    backgroundHoverImg: './img/jars__img/Taxini_Cacao.webp',
    backgroundColor: '#A95D50',
    jarImg: './img/jars__img/Tahini__with__Cocoa.png',
    cardTitle: 'Tahini with Cocoa & Honey',
    productCost: '€ 5,90',
    btnColor: '#A95D50'
  },
  {
    backgroundHoverImg: './img/jars__img/Taxini.webp',
    backgroundColor: '#FECF6B',
    jarImg: './img/jars__img/The__Wild__Tahini.png',
    cardTitle: 'The Wild Tahini',
    productCost: '€ 4,90',
    btnColor: '#FECF6B'
  },
  {
    backgroundHoverImg: './img/jars__img/Taxini_Chia.webp',
    backgroundColor: '#AD69A9',
    jarImg: './img/jars__img/taxini__chia.png',
    cardTitle: 'Tahini with Chia Seeds',
    productCost: '€ 5,90',
    btnColor: '#AD69A9'
  },
  {
    backgroundHoverImg: './img/jars__img/Taxini_Fiber.webp',
    backgroundColor: '#A7D07E',
    jarImg: './img/jars__img/hight__fibe__tahini.png',
    cardTitle: 'High Fiber Tahini',
    productCost: '€ 4,90',
    btnColor: '#A7D07E'
  },
  {
    backgroundHoverImg: './img/jars__img/Taxini_Protein.webp',
    backgroundColor: '#FA4F5B',
    jarImg: './img/jars__img/Tahini__with__Extra__Protein.png',
    cardTitle: 'High Protein Tahini',
    productCost: '€ 6,40',
    btnColor: '#FA4F5B'
  },
  {
    backgroundHoverImg: './img/jars__img/AlmondButter.webp',
    backgroundColor: '#F6B7D3',
    jarImg: './img/jars__img/almond__butter.png',
    cardTitle: 'Almond Butter',
    productCost: '€ 7,20',
    btnColor: '#F6B7D3'
  },
  {
    backgroundHoverImg: './img/jars__img/HazelnutButter.webp',
    backgroundColor: '#ACAFD4',
    jarImg: './img/jars__img/The__Wild__Hazelnut__Butter.png',
    cardTitle: 'Hazelnut Butter',
    productCost: '€ 6,90',
    btnColor: '#ACAFD4'
  },
];

// console.log(cardsItems.length)

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector('.wildly__loved__slider__row');
  cardsItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add('product__cart');

    const backgroundDiv = createElement('div', { class: 'product__card__backgroung', 'background-color': item.backgroundColor }, [
      createElement('img', { src: item.jarImg, class: 'wildly__loved__product__img' }),
      createElement('img', { src: item.backgroundHoverImg, class: 'card__hover__img__bg' })
    ]);
    itemDiv.append(backgroundDiv);

    // backgroundDiv.classList.add('product__card__backgroung');
    // backgroundDiv.style.backgroundColor = item.btnColor;
    // backgroundDiv.innerHTML += `<img src=${item.jarImg} alt="" class="wildly__loved__product__img">`
    // backgroundDiv.innerHTML += `<img src=${item.backgroundHoverImg} alt="" class="card__hover__img__bg">`
    // itemDiv.append(backgroundDiv)

    // const infoBlockDiv = document.createElement("div")
    // infoBlockDiv.classList.add('product__card__info__block')

    // infoBlockDiv.innerHTML += ` <h3 class="product__card__title"> ${item.cardTitle} </h3>`
    // infoBlockDiv.innerHTML += ` <p class="product__cost"> ${item.productCost} </p>`
    // infoBlockDiv.innerHTML += ` <button class="product__card__button"  style="background-color:${item.btnColor}">Buy Now!</button>`

    const infoBlockDiv = createElement('div', { class: 'product__card__info__block' }, [
      createElement('h3', { class: 'product__card__title' }, item.cardTitle),
      createElement('p', { class: 'product__cost' }, item.productCost),
      createElement('button', { class: 'product__card__button', 'background-color': item.btnColor }, 'Buy Now!'),
    ]);

    itemDiv.append(infoBlockDiv);
    cardsContainer.append(itemDiv);
  })
});

function createElement(tag, attrs = {}, children = []) {
  const elem = document.createElement(tag);

  for (let attr in attrs) {
    const value = attrs[attr];
    elem.setAttribute(attr, value);
  }

  if (!Array.isArray(children)) {
    children = [children];
  }

  children.forEach(child => elem.append(child));
  return elem;
}


