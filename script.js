const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.classList.toggle('open');
});

document.querySelector('.request-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const successModal = document.getElementById('successModal');
  successModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  event.target.reset();
});

const productData = {
  watches: {
    title: 'Watches',
    description: 'Exquisite timepieces crafted with precision and heritage. Each watch is a masterwork blending traditional artistry with modern functionality. Handcrafted by master craftsmen, these rare pieces are designed to be treasured for generations as symbols of timeless elegance and meticulous craftsmanship.'
  },
  saree: {
    title: 'Saree',
    description: 'The quintessential Banarasi saree represents the pinnacle of weaving excellence. Each drape tells a story of heritage, tradition, and masterful artistry. Woven with the finest materials and adorned with intricate patterns, our sarees are conceived as wearable art and legacy objects meant to transcend fashion and time itself.'
  },
  perfumes: {
    title: 'Perfumes',
    description: 'Fragrances crafted as olfactory journeys, inspired by the essence of Banaras and its cultural narrative. Each perfume is a carefully composed blend of rare essences and time-honored techniques, creating a sensory experience that embodies luxury, rarity, and the soul of our heritage house.'
  }
};

const productModal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.querySelector('.modal-close');
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
  card.addEventListener('click', () => {
    const productType = card.getAttribute('data-product');
    const product = productData[productType];
    
    if (product) {
      modalTitle.textContent = product.title;
      modalDescription.textContent = product.description;
      productModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

modalClose?.addEventListener('click', () => {
  productModal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

productModal?.addEventListener('click', (e) => {
  if (e.target === productModal) {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && productModal.classList.contains('active')) {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Success Modal Handlers
const successModal = document.getElementById('successModal');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');

closeSuccessBtn?.addEventListener('click', () => {
  successModal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

successModal?.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && successModal.classList.contains('active')) {
    successModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

document.querySelectorAll('.reveal').forEach((el) => {
  el.classList.add('is-visible');
});

document.querySelectorAll('.feature-list > div, .grid-2 article, .grid-3 article, .journal-grid article, .process-grid > div').forEach((card) => {
  card.classList.add('content-card');
});