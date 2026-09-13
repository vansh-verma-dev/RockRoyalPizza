// ===== GLOBAL STATE =====
let cart = [];
let currentProduct = null;

// ===== PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function () {
  initializeApp();
});

function initializeApp() {
  renderAllProducts();
  addScrollListener();
  setupMobileMenu();
}

// ===== RENDER PRODUCTS FROM DATA.JS =====
function renderAllProducts() {
  const categoryMap = {
    'classic-pizza': productsData.classicPizza,
    'veg-treat-pizza': productsData.vegTreatPizza,
    'veg-special-pizza': productsData.vegSpecialPizza,
    'single-double-pizza': productsData.singleDoublePizza,
    'burger': productsData.burger,
    'momos': productsData.momos,
    'pasta': productsData.pasta,
    'chinese': productsData.chinese,
    'shakes': productsData.shakes
  };

  // Render each category
  Object.entries(categoryMap).forEach(([categoryId, products]) => {
    const container = document.getElementById(categoryId);
    if (container) {
      container.innerHTML = products.map(product => createProductCard(product)).join('');
    }
  });
}

// ===== CREATE PRODUCT CARD HTML =====
function createProductCard(product) {
  const hasSizes = product.sizes && Object.keys(product.sizes).length > 0;
  const hasRating = product.rating;

  let sizeHtml = '';
  if (hasSizes) {
    sizeHtml = `
      <div class="size-selector">
        ${Object.keys(product.sizes).map((size, index) => `
          <div class="size-option">
            <input type="radio" id="size-${product.id}-${size}" name="size-${product.id}" 
              ${index === 0 ? 'checked' : ''} 
              onchange="updateProductPrice('${product.id}', '${size}')">
            <label for="size-${product.id}-${size}">${size.charAt(0).toUpperCase() + size.slice(1)}</label>
          </div>
        `).join('')}
      </div>
    `;
  }

  let ratingHtml = '';
  if (hasRating) {
    const stars = '⭐'.repeat(5);
    ratingHtml = `
      <div class="product-rating">
        <div class="stars">${stars}</div>
        <span class="rating-value">${product.rating}</span>
      </div>
    `;
  }

  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        ${ratingHtml}
        ${sizeHtml}
        <div class="product-price">
          <span class="price-current" data-price-current-${product.id}>₹${product.price.toFixed(2)}</span>
          <span class="price-original" data-price-original-${product.id}>₹${product.originalPrice.toFixed(2)}</span>
        </div>
        <button class="btn btn-add" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// ===== UPDATE PRODUCT PRICE ON SIZE CHANGE =====
function updateProductPrice(productId, size) {
  // Find product in all categories
  let product = null;
  for (const category of Object.values(productsData)) {
    product = category.find(p => p.id === productId);
    if (product) break;
  }

  if (product && product.sizes) {
    const newPrice = product.sizes[size];
    const newOriginalPrice = product.originalSizes[size];
    
    document.querySelector(`[data-price-current-${productId}]`).textContent = `₹${newPrice.toFixed(2)}`;
    document.querySelector(`[data-price-original-${productId}]`).textContent = `₹${newOriginalPrice.toFixed(2)}`;
    
    // Update product price for cart
    currentProduct = { ...product, price: newPrice, originalPrice: newOriginalPrice };
  }
}

// ===== ADD TO CART =====
function addToCart(productId, productName, price, image) {
  const finalPrice = currentProduct?.price || price;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: finalPrice,
      image: image,
      qty: 1
    });
  }

  updateCartUI();
  showToast();
  currentProduct = null; // Reset
}

// ===== UPDATE CART UI =====
function updateCartUI() {
  const container = document.getElementById('cart-items-container');
  const totalAmount = document.getElementById('cart-total-amount');
  const badgeDesk = document.getElementById('cart-count-badge');
  const badgeMob = document.getElementById('cart-count-badge-mob');

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    totalAmount.textContent = '₹0.00';
    badgeDesk.textContent = '0';
    badgeMob.textContent = '0';
    return;
  }

  let total = 0;
  let totalQty = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    totalQty += item.qty;

    const cartItemHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${itemTotal.toFixed(2)}</div>
          <div class="cart-item-qty">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-delete" onclick="deleteItem(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    container.innerHTML += cartItemHTML;
  });

  totalAmount.textContent = `₹${total.toFixed(2)}`;
  badgeDesk.textContent = totalQty;
  badgeMob.textContent = totalQty;
}

// ===== CHANGE QUANTITY =====
window.changeQty = function (index, change) {
  cart[index].qty += change;
  if (cart[index].qty < 1) {
    cart.splice(index, 1);
  }
  updateCartUI();
};

// ===== DELETE ITEM =====
window.deleteItem = function (index) {
  cart.splice(index, 1);
  updateCartUI();
};

// ===== OPEN CART =====
function openCart() {
  document.getElementById('cart-sidebar').classList.add('active');
  document.getElementById('cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== CLOSE CART =====
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('active');
  document.getElementById('cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== SHOW TOAST NOTIFICATION =====
function showToast() {
  const toast = document.getElementById('cart-toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// ===== SEND TO WHATSAPP =====
window.sendToWhatsApp = function() {
  if (cart.length === 0) {
    alert('Your cart is empty! Please add items to order.');
    return;
  }

  const phoneNumber = '919354776091'; // WhatsApp number with 91 prefix
  
  let message = '🍕 *Royal Cafe & Pizza Order* 🍕\n';
  message += '━━━━━━━━━━━━━━━━━━━━━\n';

  let totalAmount = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    totalAmount += itemTotal;
    message += `${index + 1}. *${item.name}* (x${item.qty})\n   ₹${itemTotal.toFixed(2)}\n\n`;
  });

  message += '━━━━━━━━━━━━━━━━━━━━━\n';
  message += `💰 *Total: ₹${totalAmount.toFixed(2)}*\n\n`;
  message += '📍 Please share your delivery address:\n';
  message += '⏰ We deliver within 30 minutes!\n';
  message += '📞 Thank you for ordering! 😊';

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};

// ===== SCROLL EVENT - HEADER STYLING =====
function addScrollListener() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===== MOBILE MENU SETUP =====
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Show bottom nav on mobile
  if (window.innerWidth <= 768) {
    document.querySelector('.bottom-nav').classList.add('show');
    document.body.style.paddingBottom = '70px';
  }
}

// ===== HANDLE WINDOW RESIZE =====
window.addEventListener('resize', function () {
  const bottomNav = document.querySelector('.bottom-nav');
  if (window.innerWidth <= 768) {
    bottomNav.classList.add('show');
  } else {
    bottomNav.classList.remove('show');
  }
});



// ===== MAKE FUNCTIONS GLOBAL =====
window.addToCart = addToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.updateProductPrice = updateProductPrice;

console.log('🍕 Royal Cafe & Pizza - Initialized Successfully!');