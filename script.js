

gsap.registerPlugin(ScrollTrigger);

// ----------------------- main Section Header & Title animations --------------------------


const header = document.querySelectorAll('.header__container .header__nav')
const title = document.querySelectorAll('.main__title .title__row')
const downBtn = document.querySelector('.taste__the__wild__down__btn')

const headerAnim = gsap.from(header, {
  opacity: 0,
  y: -100,
  ease: 'back'
})

const titleAnim = gsap.from(title, {
  y: 50,
  opacity: 0,
  stagger: .3,
  delay: .4
})

const appearAnimation = gsap.fromTo(downBtn, {
  opacity: 0,
  y: 10,
  delay: 3
}, {
  opacity: 1,
  y: 0,
  duration: 1,
  onComplete: function () {
    gsap.to(downBtn, {
      y: '+=5',
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  },
});


// --------------------- Wildly Loved Section Animations -------------------- 

const badgeCircle = document.querySelector('.badge__circle');
const wildlyLovedTitle = document.querySelector('.wildly__loved__title');
const wildlyLovedText = document.querySelector('.wildly__loved__text')
const secondBadgeCircle = document.querySelectorAll('.the__concept__store__badge__circle')

// badge circles animation on sections: Wildly Loved, The Concept Store, The Five Treasures

const badgeCircleAnim = gsap.to(badgeCircle, {
  duration: 20, rotate: 360, ease: 'linear', repeat: -1
})
const secondBadgeCircleAnim = gsap.to(secondBadgeCircle, {
  duration: 20, rotate: 360, ease: 'linear', repeat: -1
})

// text animation 

const wildlyLovedTitleAnim = gsap.to(wildlyLovedTitle, {
  delay: .2, opacity: 1, ease: 'linear', paused: true
})

const wildlyLovedTextAnim = gsap.to(wildlyLovedText, {
  delay: .5, y: 40, opacity: 1, ease: 'back', paused: true
})

ScrollTrigger.create({
  trigger: ".wildly__loved__title",
  start: 'top 100%',
  end: 'bottom 100%',
  markers: true,
  onEnter: () => {
    wildlyLovedTitleAnim.play();
    wildlyLovedTextAnim.play();
  },
  onLeaveBack: () => {
    wildlyLovedTitleAnim.reverse();
    wildlyLovedTextAnim.reverse();
  },
});


// --------------------- Runnimg row Animation ------------------------


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

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector('.wildly__loved__slider__row');
  cardsItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add('product__cart');

    const backgroundDiv = createElement('div', { class: 'product__card__backgroung', style: `background-color: ${item.backgroundColor}` }, [
      createElement('img', { src: item.jarImg, class: 'wildly__loved__product__img' }),
      createElement('img', { src: item.backgroundHoverImg, class: 'card__hover__img__bg' })
    ]);
    itemDiv.append(backgroundDiv);

    const infoBlockDiv = createElement('div', { class: 'product__card__info__block' }, [
      createElement('h3', { class: 'product__card__title' }, item.cardTitle),
      createElement('p', { class: 'product__cost' }, item.productCost),
      createElement('button', { class: 'product__card__button', style: `background-color: ${item.btnColor}` }, 'Buy Now!'),
    ]);
    itemDiv.append(infoBlockDiv);
    cardsContainer.append(itemDiv);
  });
  const STAGGER = 0.1
  const DURATION = 1
  const OFFSET = 0
  const BOXES = gsap.utils.toArray('.product__cart')

  const LOOP = gsap.timeline({
    paused: true,
    repeat: -1,
    ease: 'none',
  })

  const SHIFTS = [...BOXES, ...BOXES, ...BOXES]

  SHIFTS.forEach((BOX, index) => {
    const BOX_TL = gsap
      .timeline()
      .set(BOX, {
        xPercent: 250,
        opacity: 1,
        scale: 1,
      })

      .fromTo(
        BOX,
        {
          xPercent: 350,
        },
        {
          xPercent: -1000,
          duration: 1,
          immediateRender: false,
          ease: "power1.in",
        },
        0
      )

    LOOP.add(BOX_TL, index * STAGGER)
  })

  const CYCLE_DURATION = STAGGER * BOXES.length
  const START_TIME = CYCLE_DURATION + (DURATION * 0.5) + OFFSET
  const END_TIME = START_TIME + CYCLE_DURATION

  const pauseAnim = gsap.fromTo(LOOP, {
    totalTime: START_TIME,
  },
    {
      paused: false,
      totalTime: END_TIME,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })

  BOXES.forEach(BOX => {
    BOX.addEventListener('mouseenter', () => {
      pauseAnim.pause();
    });

    BOX.addEventListener('mouseleave', () => {
      pauseAnim.play();
    });
  });
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


// ----------------------------- Our Wild Way section cards anim --------------------------------


const imgsSliderCardBlock = document.querySelectorAll('.slider__card__block img');

function cardsAppearance(imgsArray) {
  imgsArray.forEach((img, index) => {
    gsap.to(img, {
      x: -200,
      opacity: 1,
      duration: .6,
      delay: index * .5
    });
  })
}


let clickFlag = false;
function cardsAnim(imgsArray) {

  const animArr = []
  imgsArray.forEach((img, index) => {
    const imgAnim = gsap.to(img, { x: 400, stagger: 1, opacity: 0, paused: true });
    const cardsRotateAnim = gsap.to(img, { rotate: 0, duration: 0.3, paused: true });
    animArr.push(imgAnim)
    animArr.push(cardsRotateAnim)

    img.addEventListener('click', () => {
      imgAnim.play();
      if (index === imgsArray.length - 1) {
        animArr.forEach(item => {
          item.reverse();
        })
      }
      clickFlag = true;
    });

    img.addEventListener('mouseenter', () => {
      if (clickFlag === true) {
        gsap.to(img, { rotate: 0, duration: 0.3 });
        cardsRotateAnim.play();
      }
      clickFlag = false
    });
  });
}
cardsAnim(imgsSliderCardBlock);



// info block animation 

const ourWildWayTitle = document.querySelector('.our__wild__way__title');
const ourWildWayText = document.querySelector('.our__wild__way__text');
const ourWildWayButton = document.querySelector('.our__wild__way__btn');

const ourWildWayTitleAnim = gsap.from(ourWildWayTitle, {
  y: 100,
  opacity: 0,
  ease: 'back',
  paused: true,
})

const ourWildWayTextAnim = gsap.from(ourWildWayText, {
  y: 100,
  opacity: 0,
  ease: 'back',
  paused: true,
  delay: .2,
}, ".1")

const ourWildWayButtonAnim = gsap.from(ourWildWayButton, {
  y: 100,
  opacity: 0,
  ease: 'back',
  duration: 1,
  paused: true
})

ScrollTrigger.create({
  trigger: ".our__wild__way",
  start: 'top 20%',
  end: 'bottom 80%',
  markers: true,
  onEnter: () => {
    ourWildWayTitleAnim.play();
    ourWildWayTextAnim.play();
    ourWildWayButtonAnim.play();
    cardsAppearance(imgsSliderCardBlock);
  },
  onLeaveBack: () => {
    ourWildWayTitleAnim.reverse();
    ourWildWayTextAnim.reverse();
    ourWildWayButtonAnim.reverse();

  },
});


// --------------------    the Concept Store section animation  ----------------------------------


const imgsSliderCardBlock2 = document.querySelectorAll('.slider__card__block2 img');

cardsAppearance(imgsSliderCardBlock2)
cardsAnim(imgsSliderCardBlock2);

// info block animation

const theConceptStoreTitle = document.querySelector('.the__concept__store__title');
const theConceptStoreText = document.querySelector('.the__concept__store__text');
const theConceptStoreButton = document.querySelector('.the__concept__store__btn');

const theConceptStoreTitleAnim = gsap.from(theConceptStoreTitle, {
  y: 100,
  opacity: 0,
  ease: 'back',
  paused: true,
})

const theConceptStoreTextAnim = gsap.from(theConceptStoreText, {
  y: 100,
  opacity: 0,
  ease: 'back',
  paused: true,
  delay: .2,
}, ".1")

const theConceptStoreButtonAnim = gsap.from(theConceptStoreButton, {
  y: 100,
  opacity: 0,
  ease: 'back',
  duration: 1,
  paused: true
})

ScrollTrigger.create({
  trigger: ".the__concept__store",
  start: 'top 100%',
  end: 'bottom 80%',
  markers: true,
  onEnter: () => {
    theConceptStoreTitleAnim.play();
    theConceptStoreTextAnim.play();
    theConceptStoreButtonAnim.play();
    cardsAppearance(imgsSliderCardBlock2);
  },
  onLeaveBack: () => {
    theConceptStoreTitleAnim.reverse();
    theConceptStoreTextAnim.reverse();
    theConceptStoreButton.reverse();

  },
});


const imgsSliderCardBlock3 = document.querySelectorAll('.slider__card__block3 img')
cardsAppearance(imgsSliderCardBlock3)
cardsAnim(imgsSliderCardBlock3);

