// Navbar

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

//
//
//
//
// Accourdion

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));

//
//
//
// sliders
$('.sliderStoner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1536,
      settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
  customPaging: function (slider, i) {
    return `<hr />`;
  },
});

// sliders
$('.videoSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
  customPaging: function (slider, i) {
    return `<hr />`;
  },
});

// sliders
$('.verifyProdSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
  customPaging: function (slider, i) {
    return `<hr />`;
  },
});

// const products = [
//   {
//     img: 'assets/images/rainbowbeltz.png',
//     category: 'Stoner Stix Disposable + Joins',
//     title1: 'Rainbow',
//     title2: 'Beltz',
//     description:
//       'A flavorful mix of fruity sweetness with a smooth disposable experience.',
//     newPrice: '15.25',
//     oldPrice: '20.25',
//     color: '#89C540',
//     tags: ['Stoner Sticks', 'Stoner Sticks Disposable', 'Rainbow Beltz Vape'],
//   },
//   {
//     img: 'assets/images/sativapop.png',
//     category: 'Push Popz Disposable + Candy',
//     title1: 'Push',
//     title2: 'Popz',
//     description:
//       'Candy-inspired vibes with a punch of sweetness and smooth vapor flavor.',
//     newPrice: '17.50',
//     oldPrice: '22.00',
//     color: '#FF7BAC',
//     tags: ['Candy', 'Disposable', 'Push Popz'],
//   },
//   {
//     img: 'assets/images/satorange.png',
//     category: 'Fanta Disposable',
//     title1: 'Orange',
//     title2: 'Fanta',
//     description: 'A citrusy blast that tastes like your favorite orange soda.',
//     newPrice: '14.50',
//     oldPrice: '19.00',
//     color: '#FFA500',
//     tags: ['Fanta', 'Citrus', 'Disposable'],
//   },
//   {
//     img: 'assets/images/pinkakai.png',
//     category: 'Pink Akai Edition',
//     title1: 'Pink',
//     title2: 'Akai',
//     description: 'Refreshing and tangy notes with a luxurious pink twist.',
//     newPrice: '16.75',
//     oldPrice: '21.25',
//     color: '#FF69B4',
//     tags: ['Akai', 'Limited Edition', 'Pink Flavor'],
//   },
//   {
//     img: 'assets/images/cactus.png',
//     category: 'Cactus Cooler Disposable',
//     title1: 'Cactus',
//     title2: 'Cooler',
//     description: 'Unique tropical taste with cooling cactus freshness.',
//     newPrice: '18.25',
//     oldPrice: '24.25',
//     color: '#40E0D0',
//     tags: ['Cactus', 'Tropical', 'Cooler Disposable'],
//   },
//   {
//     img: 'assets/images/gusher.png',
//     category: 'Gusher Disposable',
//     title1: 'Gusher',
//     title2: 'Vape',
//     description:
//       'Juicy, bold flavor inspired by your favorite fruity candy gushers.',
//     newPrice: '19.99',
//     oldPrice: '25.00',
//     color: '#DA70D6',
//     tags: ['Gusher', 'Fruit', 'Disposable'],
//   },
// ];

// $(document).ready(function () {
//   // Slick initialize
//   $('.productSliding').on('init', function () {
//     updateProductUI(0);
//   });

//   $('.productSliding').on('afterChange', function (event, slick, currentSlide) {
//     updateProductUI(currentSlide);
//   });

//   $('.productSliding').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     responsive: [
//       { breakpoint: 1536, settings: { slidesToShow: 4 } },
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//     customPaging: function () {
//       return `<hr />`;
//     },
//   });

//   // Function: Update top product section
//   function updateProductUI(index) {
//     const p = products[index];
//     if (!p) return;

//     // Update image
//     $('#mainImg').attr('src', p.img);

//     // Update text content
//     $('#prodCategory').css('color', p.theme.primary);
//     $('#prodCategoryName').text(p.category);
//     $('#prodTitle1').text(p.title1).css('color', p.theme.primary);
//     $('#prodTitle2').text(p.title2);
//     $('#prodDesc').text(p.description);
//     $('#newPrice').text(p.newPrice).css('color', p.theme.primary);
//     $('#oldPrice').text(p.oldPrice);

//     // Update button color theme
//     $('#addToCart').css({
//       backgroundColor: p.theme.button,
//       borderColor: p.theme.button,
//       color: p.theme.text,
//     });

//     // Update tags
//     let tagsHTML = '';
//     p.tags.forEach((tag, i) => {
//       tagsHTML += `<span class="text-sm">${tag}${
//         i < p.tags.length - 1 ? ',' : ''
//       }</span>`;
//     });
//     $('#tagsContainer').html(tagsHTML);
//   }

//   // Cart increment
//   let count = 1;
//   $('#addToCart').on('click', function () {
//     count++;
//     $('#cartCount').text(count);
//   });
// });

const products = [
  {
    img: 'assets/images/rainbowbeltz.png',
    category: 'Stoner Stix Disposable + Joins',
    title1: 'Rainbow',
    title2: 'Beltz',
    description:
      'A flavorful mix of fruity sweetness with a smooth disposable experience.',
    newPrice: '15.25',
    oldPrice: '20.25',
    tags: ['Stoner Sticks', 'Stoner Sticks Disposable', 'Rainbow Beltz Vape'],
    theme: {
      primary: '#89C540',
      button: '#89C540',
      text: '#ffffff',
    },
  },
  {
    img: 'assets/images/sativapop.png',
    category: 'Push Popz Disposable + Candy',
    title1: 'Push',
    title2: 'Popz',
    description:
      'Candy-inspired vibes with a punch of sweetness and smooth vapor flavor.',
    newPrice: '17.50',
    oldPrice: '22.00',
    tags: ['Candy', 'Disposable', 'Push Popz'],
    theme: {
      primary: '#3DAEC8',
      button: '#3DAEC8',
      text: '#fff',
    },
  },
  {
    img: 'assets/images/satorange.png',
    category: 'Fanta Disposable',
    title1: 'Orange',
    title2: 'Fanta',
    description: 'A citrusy blast that tastes like your favorite orange soda.',
    newPrice: '14.50',
    oldPrice: '19.00',
    tags: ['Fanta', 'Citrus', 'Disposable'],
    theme: {
      primary: '#FFA500',
      button: '#FFA500',
      text: '#fff',
    },
  },
  {
    img: 'assets/images/satpink.png',
    category: 'Pink Akai Edition',
    title1: 'Pink',
    title2: 'Akai',
    description: 'Refreshing and tangy notes with a luxurious pink twist.',
    newPrice: '16.75',
    oldPrice: '21.25',
    tags: ['Akai', 'Limited Edition', 'Pink Flavor'],
    theme: {
      primary: '#FF69B4',
      button: '#FF69B4',
      text: '#fff',
    },
  },
  {
    img: 'assets/images/indcactus.png',
    category: 'Cactus Cooler Disposable',
    title1: 'Cactus',
    title2: 'Cooler',
    description: 'Unique tropical taste with cooling cactus freshness.',
    newPrice: '18.25',
    oldPrice: '24.25',
    tags: ['Cactus', 'Tropical', 'Cooler Disposable'],
    theme: {
      primary: '#114D3B',
      button: '#114D3B',
      text: '#fff',
    },
  },
  {
    img: 'assets/images/satgush.png',
    category: 'Gusher Disposable',
    title1: 'Gusher',
    title2: 'Vape',
    description:
      'Juicy, bold flavor inspired by your favorite fruity candy gushers.',
    newPrice: '19.99',
    oldPrice: '25.00',
    tags: ['Gusher', 'Fruit', 'Disposable'],
    theme: {
      primary: '#2654A5',
      button: '#2654A5',
      text: '#fff',
    },
  },
  {
    img: 'assets/images/indgumbo.png',
    category: 'Indica Gumbo Gas',
    title1: 'Gumbo',
    title2: 'Gas',
    description:
      'Juicy, bold flavor inspired by your favorite fruity candy gushers.',
    newPrice: '19.99',
    oldPrice: '25.00',
    tags: ['Gusher', 'Fruit', 'Disposable'],
    theme: {
      primary: '#523719',
      button: '#523719',
      text: '#fff',
    },
  },
];

$(document).ready(function () {
  // Slick initialize
  $('.productSliding').on('init', function () {
    updateProductUI(0);
  });

  $('.productSliding').on('afterChange', function (event, slick, currentSlide) {
    updateProductUI(currentSlide);
  });

  $('.productSliding').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    customPaging: function () {
      return `<hr />`;
    },
  });

  // Function: Update top product section
  function updateProductUI(index) {
    const p = products[index];
    if (!p) return;

    // Update image
    $('#mainImg').attr('src', p.img);

    // Update text content
    $('#prodCategory').css('color', p.theme.primary);
    $('#prodCategoryName').text(p.category);
    $('#prodTitle1').text(p.title1).css('color', p.theme.primary);
    $('#prodTitle2').text(p.title2);
    $('#prodDesc').text(p.description);
    $('#newPrice').text(p.newPrice).css('color', p.theme.primary);
    $('#oldPrice').text(p.oldPrice);

    // Update button color theme
    $('#addToCart').css({
      backgroundColor: p.theme.button,
      borderColor: p.theme.button,
      color: p.theme.text,
    });

    // Update tags
    let tagsHTML = '';
    p.tags.forEach((tag, i) => {
      tagsHTML += `<span class="text-sm">${tag}${
        i < p.tags.length - 1 ? ',' : ''
      }</span>`;
    });
    $('#tagsContainer').html(tagsHTML);
  }

  // Cart increment
  let count = 1;
  $('#addToCart').on('click', function () {
    count++;
    $('#cartCount').text(count);
  });
});
