let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(name, price) {
cart.push({ name, price });
saveCart();
renderCart();
}


function saveCart() {
localStorage.setItem('cart', JSON.stringify(cart));
}


function renderCart() {
const cartItems = document.getElementById('cartItems');
const totalEl = document.getElementById('total');
if (!cartItems || !totalEl) return;


cartItems.innerHTML = '';
let total = 0;


cart.forEach(item => {
cartItems.innerHTML += `<p>${item.name} - P${item.price}</p>`;
total += item.price;
});


totalEl.innerText = total;
}


function checkout() {
if (!cart.length) return alert('Your cart is empty');
alert('Order placed successfully. Phantom thanks you.');
cart = [];
saveCart();
renderCart();
}


renderCart();

<script>
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);
</script>

