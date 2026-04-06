// Menú de productos (mismo que en tu script.js)
const menu = [
    // Cafés
    { 
        id: 1, 
        name: 'Espresso TAFFY', 
        price: 35.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 15, 
        popular: true 
    },
    { 
        id: 2, 
        name: 'Americano', 
        price: 40.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1551030175-5b5b9c1a2b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 8,
        popular: false 
    },
    { 
        id: 3, 
        name: 'Cappuccino', 
        price: 55.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 12, 
        popular: true 
    },
    { 
        id: 4, 
        name: 'Latte TAFFY', 
        price: 55.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1561047021-37a7a3b2f9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 3,
        popular: false 
    },
    { 
        id: 5, 
        name: 'Mocha', 
        price: 60.00, 
        category: 'cafes', 
        image: 'https://images.unsplash.com/photo-1557008075-6f2c5a8b2b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 10,
        popular: false 
    },
    { 
        id: 6, 
        name: 'Té Negro', 
        price: 30.00, 
        category: 'tes', 
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 25,
        popular: false 
    },
    { 
        id: 7, 
        name: 'Té Verde', 
        price: 30.00, 
        category: 'tes', 
        image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 22,
        popular: false 
    },
    { 
        id: 8, 
        name: 'Té Chai', 
        price: 45.00, 
        category: 'tes', 
        image: 'https://images.unsplash.com/photo-1576092762791-5a1c1a5a8b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 4,
        popular: false 
    },
    { 
        id: 9, 
        name: 'Croissant', 
        price: 40.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 8, 
        popular: true 
    },
    { 
        id: 10, 
        name: 'Cheesecake', 
        price: 75.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 2, 
        popular: true 
    },
    { 
        id: 11, 
        name: 'Muffin', 
        price: 38.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 12,
        popular: false 
    },
    { 
        id: 12, 
        name: 'Galleta', 
        price: 25.00, 
        category: 'postres', 
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 30,
        popular: false 
    },
    { 
        id: 13, 
        name: 'Hot Cakes', 
        price: 85.00, 
        category: 'desayunos', 
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 6,
        popular: false 
    },
    { 
        id: 14, 
        name: 'Chilaquiles', 
        price: 95.00, 
        category: 'desayunos', 
        image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 5, 
        popular: true 
    },
    { 
        id: 15, 
        name: 'Huevos al Gusto', 
        price: 80.00, 
        category: 'desayunos', 
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 15,
        popular: false 
    },
    { 
        id: 16, 
        name: 'Frappé TAFFY', 
        price: 70.00, 
        category: 'frios', 
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 9, 
        popular: true 
    },
    { 
        id: 17, 
        name: 'Smoothie Fresa', 
        price: 65.00, 
        category: 'frios', 
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 7,
        popular: false 
    },
    { 
        id: 18, 
        name: 'Limonada', 
        price: 40.00, 
        category: 'frios', 
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        stock: 20,
        popular: false 
    }
];

let currentPage = 1;
let itemsPerPage = 10;
let filteredProducts = [...menu];
let productToDelete = null;

// Cargar inventario
document.addEventListener('DOMContentLoaded', function() {
    updateStats();
    loadTable();
    
    // Event listeners
    document.getElementById('searchInput').addEventListener('keyup', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('stockFilter').addEventListener('change', filterProducts);
    
    document.getElementById('prevPage').addEventListener('click', () => changePage(-1));
    document.getElementById('nextPage').addEventListener('click', () => changePage(1));
});

// Actualizar estadísticas
function updateStats() {
    const totalProducts = menu.length;
    const lowStock = menu.filter(item => item.stock <= 5).length;
    const totalValue = menu.reduce((sum, item) => sum + (item.price * item.stock), 0);
    
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('lowStock').textContent = lowStock;
    document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
}

// Cargar tabla
function loadTable() {
    const tbody = document.getElementById('tableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProducts = filteredProducts.slice(start, end);

    tbody.innerHTML = '';

    if (pageProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 50px;">
                    <i class="fas fa-box-open" style="font-size: 3em; color: #DEB887; margin-bottom: 15px;"></i>
                    <p style="color: #8B4513;">No se encontraron productos</p>
                </td>
            </tr>
        `;
    } else {
        pageProducts.forEach(item => {
            const row = createTableRow(item);
            tbody.appendChild(row);
        });
    }

    updatePagination();
}

// Crear fila de tabla
function createTableRow(item) {
    const row = document.createElement('tr');
    
    const stockStatus = item.stock <= 5 ? 'critical' : item.stock <= 10 ? 'low' : 'normal';
    const statusText = item.stock <= 5 ? 'Crítico' : item.stock <= 10 ? 'Bajo' : 'Normal';
    const statusClass = stockStatus === 'critical' ? 'status-critical' : 
                       stockStatus === 'low' ? 'status-low' : 'status-normal';
    
    const categoryNames = {
        'cafes': '☕ Cafés',
        'tes': '🍵 Tés',
        'postres': '🍰 Postres',
        'desayunos': '🍳 Desayunos',
        'frios': '🥤 Bebidas Frías'
    };

    row.innerHTML = `
        <td>
            <div class="product-info">
                <img src="${item.image}" class="product-thumb" alt="${item.name}">
                <span>${item.name}</span>
            </div>
        </td>
        <td><span class="category-badge">${categoryNames[item.category] || item.category}</span></td>
        <td><strong>$${item.price.toFixed(2)}</strong></td>
        <td>${item.stock} unidades</td>
        <td><span class="stock-status ${statusClass}">${statusText}</span></td>
        <td>
            <div class="action-icons">
                <i class="fas fa-edit" onclick="editProduct(${item.id})" title="Editar"></i>
                <i class="fas fa-trash delete" onclick="showDeleteModal(${item.id}, '${item.name}')" title="Eliminar"></i>
                <i class="fas fa-history" onclick="viewHistory(${item.id})" title="Historial"></i>
            </div>
        </td>
    `;
    
    return row;
}

// Filtrar productos
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const stockFilter = document.getElementById('stockFilter').value;

    filteredProducts = menu.filter(item => {
        // Filtro de búsqueda
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
                             item.category.toLowerCase().includes(searchTerm);
        
        // Filtro de categoría
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        
        // Filtro de stock
        let matchesStock = true;
        if (stockFilter === 'normal') matchesStock = item.stock > 10;
        else if (stockFilter === 'low') matchesStock = item.stock > 5 && item.stock <= 10;
        else if (stockFilter === 'critical') matchesStock = item.stock <= 5;
        
        return matchesSearch && matchesCategory && matchesStock;
    });

    currentPage = 1;
    loadTable();
}

// Paginación
function changePage(direction) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        loadTable();
    }
}

function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    document.getElementById('pageInfo').textContent = `Página ${currentPage} de ${totalPages}`;
    
    document.getElementById('prevPage').classList.toggle('disabled', currentPage === 1);
    document.getElementById('nextPage').classList.toggle('disabled', currentPage === totalPages || totalPages === 0);
}

// Funciones de acción
function editProduct(id) {
    showToast('Función de editar - ID: ' + id);
}

function showDeleteModal(id, name) {
    productToDelete = id;
    document.getElementById('deleteProductName').textContent = `"${name}"`;
    document.getElementById('deleteModal').classList.add('show');
}

function closeDeleteModal() {
    document.getElementById('deleteModal').classList.remove('show');
    productToDelete = null;
}

function confirmDelete() {
    if (productToDelete) {
        showToast('Producto eliminado');
        closeDeleteModal();
        
        // Simular eliminación
        const index = menu.findIndex(item => item.id === productToDelete);
        if (index !== -1) {
            menu.splice(index, 1);
            filterProducts();
            updateStats();
        }
    }
}

function viewHistory(id) {
    showToast('Historial del producto ID: ' + id);
}

function exportInventory() {
    showToast('Exportando inventario...');
    
    // Simular descarga
    setTimeout(() => {
        showToast('Inventario exportado con éxito');
    }, 1500);
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Cerrar modal con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('deleteModal').classList.contains('show')) {
        closeDeleteModal();
    }
});