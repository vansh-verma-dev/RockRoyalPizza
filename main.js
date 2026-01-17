console.log("create by vansh verma");
// Cart data store karne ke liye array
let cart = [];

// 1. SELECT ALL BUTTONS AUTOMATICALLY
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('buybtn')) {
        const card = e.target.closest('.card');
        if (!card) return;

        const name = card.querySelector('h3').innerText;
        const priceText = card.querySelector('.new-price').innerText;
        const price = parseFloat(priceText.replace('₹', ''));
        const img = card.querySelector('img').src;

        addToCart(name, price, img);
    }
});

// 2. ADD TO CART FUNCTION
function addToCart(name, price, img) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name, price, img, qty: 1 });
    }
    updateCartUI();
    showToast();
}

// 3. UPDATE CART UI (Color Fixed to Black)
function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const totalAmount = document.getElementById('cart-total-amount');
    const badgeDesk = document.getElementById('cart-count-badge');
    const badgeMob = document.getElementById('cart-count-badge-mob');

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p id="empty-msg" style="text-align: center; color: #000; font-weight: bold; margin-top: 50px;">Your cart is empty</p>';
        totalAmount.innerText = '₹0.00';
        totalAmount.style.color = "#000"; // Total price black
        badgeDesk.style.display = 'none';
        badgeMob.style.display = 'none';
        return;
    }

    let total = 0;
    let totalQty = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        totalQty += item.qty;

        container.innerHTML += `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                <img src="${item.img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 16px; color: #000; font-weight: 800;">${item.name}</h4>
                    
                    <p style="margin: 5px 0; color: #000; font-weight: bold;">₹${(item.price * item.qty).toFixed(2)}</p>
                    
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <button onclick="changeQty(${index}, -1)" style="width: 28px; height: 28px; border: 1px solid #000; background: white; cursor: pointer; border-radius: 4px; font-weight: bold;">-</button>
                        
                        <span style="font-weight: 900; color: #000; font-size: 16px;">${item.qty}</span>
                        
                        <button onclick="changeQty(${index}, 1)" style="width: 28px; height: 28px; border: 1px solid #000; background: white; cursor: pointer; border-radius: 4px; font-weight: bold;">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-trash" onclick="deleteItem(${index})" style="color: #ff0000; cursor: pointer; font-size: 18px;"></i>
            </div>
        `;
    });

    // Final Total Styling
    totalAmount.innerText = `₹${total.toFixed(2)}`;
    totalAmount.style.color = "#000"; 
    totalAmount.style.fontWeight = "900";

    badgeDesk.innerText = totalQty;
    badgeMob.innerText = totalQty;
    badgeDesk.style.display = 'inline-block';
    badgeMob.style.display = 'inline-block';
}

// 4. QUANTITY CHANGE
window.changeQty = function (index, change) {
    cart[index].qty += change;
    if (cart[index].qty < 1) {
        cart.splice(index, 1);
    }
    updateCartUI();
};

// 5. DELETE ITEM
window.deleteItem = function (index) {
    cart.splice(index, 1);
    updateCartUI();
};

// 6. OPEN/CLOSE CART
window.openCart = function () {
    document.getElementById('cart-sidebar').style.right = '0';
    document.getElementById('cart-overlay').style.display = 'block';
};

window.closeCart = function () {
    document.getElementById('cart-sidebar').style.right = '-100%';
    document.getElementById('cart-overlay').style.display = 'none';
};

// 7. TOAST NOTIFICATION
function showToast() {
    const toast = document.getElementById('cart-toast');
    toast.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(-100px)';
    }, 2000);
}
// 8. WHATSAPP CHECKOUT FUNCTION
window.sendToWhatsApp = function() {
    if (cart.length === 0) {
        alert("Aapka cart khali hai! Please kuch add karein.");
        return;
    }

    let phoneNumber = "919368549887"; // Aapka WhatsApp number (91 prefix ke sath)
    
    // Order Header
    let message = "🍕 *New Order - Royal Rock Pizza* 🍕\n";
    message += "--------------------------\n";

    let totalAmount = 0;

    // Loop through cart items to build message
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        totalAmount += itemTotal;
        // Format: 1. Item Name (xQuantity) - ₹Price
        message += `*${index + 1}.* ${item.name} (x${item.qty}) - *₹${itemTotal}*\n`;
    });

    message += "--------------------------\n";
    message += `💰 *Total Bill: ₹${totalAmount.toFixed(2)}*\n\n`;
    message += "📍 *Please share your delivery address below:*";

    // WhatsApp URL Encode (Special characters fix)
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
};
// =================================================================

function changePrice(el,newP,oldP){
  const card = el.closest(".card");
  card.querySelector(".new-price").innerText = "₹" + newP + ".00";
  card.querySelector(".old-price").innerText = "₹" + oldP + ".00";
};
console.log("website create by vansh verma");
