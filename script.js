// Menú de TAFFY con imágenes
const menu = [
    // Cafés
    { 
        id: 1, 
        name: 'Espresso TAFFY', 
        price: 35.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 100, 
        popular: true 
    },
    { 
        id: 2, 
        name: 'Americano', 
        price: 40.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1551030175-5b5b9c1a2b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 100 
    },
    { 
        id: 3, 
        name: 'Cappuccino', 
        price: 55.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 100, 
        popular: true 
    },
    { 
        id: 4, 
        name: 'Latte TAFFY', 
        price: 55.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1561047021-37a7a3b2f9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 100 
    },
    { 
        id: 5, 
        name: 'Mocha', 
        price: 60.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1557008075-6f2c5a8b2b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 100 
    },
    
    // Tés
    { 
        id: 6, 
        name: 'Té Negro', 
        price: 30.00, 
        category: 'tes', 
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 50 
    },
    { 
        id: 7, 
        name: 'Té Verde', 
        price: 30.00, 
        category: 'tes', 
        image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 50 
    },
    { 
        id: 8, 
        name: 'Té Chai', 
        price: 45.00, 
        category: 'tes', 
        image: 'https://images.unsplash.com/photo-1576092762791-5a1c1a5a8b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 40 
    },
    
    // Postres
    { 
        id: 9, 
        name: 'Croissant', 
        price: 40.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 15, 
        popular: true 
    },
    { 
        id: 10, 
        name: 'Cheesecake', 
        price: 75.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 8, 
        popular: true 
    },
    { 
        id: 11, 
        name: 'Muffin', 
        price: 38.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 18 
    },
    { 
        id: 12, 
        name: 'Galleta', 
        price: 25.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 30 
    },
    
    // Desayunos
    { 
        id: 13, 
        name: 'Hot Cakes', 
        price: 85.00, 
        category: 'desayunos', 
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 20 
    },
    { 
        id: 14, 
        name: 'Chilaquiles', 
        price: 95.00, 
        category: 'desayunos', 
        image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 15, 
        popular: true 
    },
    { 
        id: 15, 
        name: 'Huevos al Gusto', 
        price: 80.00, 
        category: 'desayunos', 
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 25 
    },
    
    // Bebidas Frías
    { 
        id: 16, 
        name: 'Frappé TAFFY', 
        price: 70.00, 
        category: 'frios', 
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 40, 
        popular: true 
    },
    { 
        id: 17, 
        name: 'Smoothie Fresa', 
        price: 65.00, 
        category: 'frios', 
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 30 
    },
    { 
        id: 18, 
        name: 'Limonada', 
        price: 40.00, 
        category: 'frios', 
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 50 
    }
];

let currentOrder = [];
let currentTip = 0;
let orderNumber = 1024;
let timerInterval = null;
let seconds = 0;

document.addEventListener('DOMContentLoaded', function() {
    loadMenu();
    updateTime();
    setInterval(updateTime, 1000);
    updateOrderNumber();
    
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Categorías
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryClick);
    });
    
    // Iniciar timer de orden
    startTimer();
    
    // Mensaje de bienvenida
    console.log('☕ ¡Bienvenido a TAFFY! ☕');
});

// Cargar menú con imágenes
function loadMenu() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    menu.forEach(item => {
        const card = createMenuItem(item);
        grid.appendChild(card);
    });
}

// Crear item del menú con imagen
function createMenuItem(item) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', item.category);
    card.onclick = () => addToOrder(item);
    
    const popularBadge = item.popular ? '<span class="product-badge">✨ Popular</span>' : '';
    
    card.innerHTML = `
        ${popularBadge}
        <img src="${item.image}" alt="${item.name}" class="product-image" loading="lazy">
        <div class="product-info">
            <h3>${item.name}</h3>
            <div class="product-price">$${item.price.toFixed(2)}</div>
            <div class="product-stock">
                <i class="fas fa-box"></i>
                ${item.stock} disponibles
            </div>
        </div>
    `;
    
    return card;
}

// Manejar clic en categorías
function handleCategoryClick(e) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    const category = e.target.dataset.category;
    const menuItems = document.querySelectorAll('.product-card');
    
    menuItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Manejar búsqueda
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const menuItems = document.querySelectorAll('.product-card');
    
    menuItems.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Agregar a la orden
function addToOrder(item) {
    const existingItem = currentOrder.find(orderItem => orderItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        currentOrder.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    updateOrder();
    animateAddToCart();
    
    // Feedback
    showTaffyFeedback(item.name);
}

// Mostrar feedback
function showTaffyFeedback(itemName) {
    const feedback = document.createElement('div');
    feedback.style.position = 'fixed';
    feedback.style.top = '50%';
    feedback.style.left = '50%';
    feedback.style.transform = 'translate(-50%, -50%)';
    feedback.style.background = '#8B4513';
    feedback.style.color = '#FFE4B5';
    feedback.style.padding = '20px 40px';
    feedback.style.borderRadius = '50px';
    feedback.style.fontSize = '1.5em';
    feedback.style.fontWeight = 'bold';
    feedback.style.boxShadow = '0 10px 30px rgba(139,69,19,0.5)';
    feedback.style.zIndex = '9999';
    feedback.style.animation = 'fadeOut 1s ease forwards';
    feedback.style.border = '2px solid #DEB887';
    feedback.innerHTML = `☕ ¡Agregado a TAFFY! ☕<br><small>${itemName}</small>`;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 1000);
}

// Animar agregado al carrito
function animateAddToCart() {
    const cartIcon = document.querySelector('.cart-header h2 i');
    cartIcon.style.transform = 'scale(1.3)';
    cartIcon.style.color = '#8B4513';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.color = '';
    }, 200);
}

// Actualizar orden
function updateOrder() {
    const cartItems = document.getElementById('cartItems');
    
    if (currentOrder.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-mug-hot"></i>
                <p>¡Tu orden está vacía!</p>
                <small>Haz clic en cualquier producto para empezar</small>
            </div>
        `;
    } else {
        cartItems.innerHTML = '';
    }
    
    let subtotal = 0;
    
    currentOrder.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = createOrderItemElement(item, itemTotal);
        cartItems.appendChild(cartItem);
    });
    
    const tax = subtotal * 0.16;
    const tip = subtotal * (currentTip / 100);
    const total = subtotal + tax + tip;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('tip').textContent = `$${tip.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Crear elemento de orden con imagen
function createOrderItemElement(item, itemTotal) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
    `;
    return div;
}

// Actualizar cantidad
window.updateQuantity = function(itemId, change) {
    const item = currentOrder.find(item => item.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            currentOrder = currentOrder.filter(item => item.id !== itemId);
        }
        updateOrder();
    }
};

// Agregar propina
window.addTip = function(percentage) {
    currentTip = percentage;
    updateOrder();
    
    document.querySelectorAll('.tip-btn').forEach(btn => {
        btn.style.background = '';
        btn.style.color = '';
    });
    
    if (percentage > 0) {
        event.target.style.background = '#8B4513';
        event.target.style.color = '#FFE4B5';
    }
};

// Limpiar orden
window.clearOrder = function() {
    if (currentOrder.length === 0) {
        alert('☕ La orden TAFFY está vacía');
        return;
    }
    
    if (confirm('¿Cancelar la orden TAFFY?')) {
        currentOrder = [];
        currentTip = 0;
        seconds = 0;
        updateTimer();
        updateOrder();
        document.getElementById('orderNotes').value = '';
    }
};

// Pausar orden
window.holdOrder = function() {
    if (currentOrder.length === 0) {
        alert('No hay orden TAFFY para pausar');
        return;
    }
    
    alert('⏸️ Orden TAFFY pausada. ¡Vuelve pronto!');
};

// Enviar a cocina
window.sendToKitchen = function() {
    if (currentOrder.length === 0) {
        alert('No hay items TAFFY para enviar a cocina');
        return;
    }
    
    const table = document.getElementById('tableSelect').value;
    const notes = document.getElementById('orderNotes').value;
    
    // Simular impresión en cocina
    console.log('☕ NUEVA ORDEN TAFFY ☕');
    console.log('='.repeat(40));
    console.log(`Mesa: ${table}`);
    console.log(`Hora: ${new Date().toLocaleTimeString()}`);
    console.log('-'.repeat(40));
    currentOrder.forEach(item => {
        console.log(`${item.quantity}x ${item.name}`);
    });
    console.log('-'.repeat(40));
    console.log(`Notas: ${notes || 'Sin notas'}`);
    console.log('='.repeat(40));
    
    alert(`✅ Orden enviada a cocina TAFFY\nMesa: ${table}`);
};

// Procesar pago
window.processPayment = function() {
    if (currentOrder.length === 0) {
        alert('La orden TAFFY está vacía');
        return;
    }
    
    const total = document.getElementById('total').textContent;
    document.getElementById('modalTotal').textContent = `Total TAFFY: ${total}`;
    document.getElementById('confirmModal').classList.add('show');
};

// Cerrar modal
window.closeModal = function() {
    document.getElementById('confirmModal').classList.remove('show');
};

// Confirmar pago
window.confirmPayment = function() {
    const table = document.getElementById('tableSelect').value;
    const total = document.getElementById('total').textContent;
    const paymentMethod = document.querySelector('.quick-btn:hover') ? 
        document.querySelector('.quick-btn:hover').querySelector('span').textContent : 'Efectivo';
    
    alert(`☕ ¡Gracias por elegir TAFFY! ☕\n\nTotal: ${total}\nMétodo: ${paymentMethod}\nMesa: ${table}\n\n¡Vuelve pronto!`);
    
    // Generar nueva orden
    orderNumber++;
    updateOrderNumber();
    currentOrder = [];
    currentTip = 0;
    seconds = 0;
    updateTimer();
    updateOrder();
    document.getElementById('orderNotes').value = '';
    closeModal();
};

// Acciones rápidas
window.quickAction = function(action) {
    const actions = {
        efectivo: '💵 Pago en efectivo TAFFY',
        tarjeta: '💳 Pago con tarjeta TAFFY',
        transferencia: '📱 Pago por transferencia TAFFY',
        qr: '📲 Pago con QR TAFFY'
    };
    
    if (currentOrder.length > 0) {
        alert(actions[action]);
    } else {
        alert('Agrega productos TAFFY a la orden primero');
    }
};

// Timer de orden
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (currentOrder.length > 0) {
            seconds++;
            updateTimer();
        }
    }, 1000);
}

function updateTimer() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('orderTimer').innerHTML = `
        <i class="far fa-clock"></i>
        <span>${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}</span>
    `;
}

// Actualizar número de orden
function updateOrderNumber() {
    document.getElementById('orderNumber').textContent = orderNumber;
}

// Actualizar hora
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
}

// Agregar estilo de animación fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        70% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);