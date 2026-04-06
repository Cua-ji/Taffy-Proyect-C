// Variables globales
let currentStep = 1;
let productImage = null;

document.addEventListener('DOMContentLoaded', function() {
    // Event listeners para vista previa en tiempo real
    document.getElementById('productName').addEventListener('input', updatePreview);
    document.getElementById('productCategory').addEventListener('change', updatePreview);
    document.getElementById('productPrice').addEventListener('input', updatePreview);
    document.getElementById('productStock').addEventListener('input', updatePreview);
    document.getElementById('productPopular').addEventListener('change', updatePreview);
    
    // Event listener para subir imagen
    document.getElementById('imagePreview').addEventListener('click', function() {
        document.getElementById('productImageFile').click();
    });
    
    document.getElementById('productImageFile').addEventListener('change', handleImageUpload);
    document.getElementById('productImageUrl').addEventListener('input', handleImageUrl);
    
    // Event listener para el formulario
    document.getElementById('addProductForm').addEventListener('submit', handleSubmit);
});

// Navegación entre pasos
function nextStep() {
    if (validateStep(currentStep)) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // Actualizar progress bar
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            if (index < currentStep) {
                step.classList.add('active');
            }
        });
        
        // Mostrar/ocultar botones
        document.getElementById('prevBtn').style.display = 'flex';
        
        if (currentStep === 3) {
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('submitBtn').style.display = 'flex';
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // Actualizar progress bar
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            if (index >= currentStep) {
                step.classList.remove('active');
            }
        });
        
        // Mostrar/ocultar botones
        if (currentStep === 1) {
            document.getElementById('prevBtn').style.display = 'none';
        }
        
        document.getElementById('nextBtn').style.display = 'flex';
        document.getElementById('submitBtn').style.display = 'none';
    }
}

// Validar cada paso
function validateStep(step) {
    switch(step) {
        case 1:
            const name = document.getElementById('productName').value;
            const category = document.getElementById('productCategory').value;
            const price = document.getElementById('productPrice').value;
            
            if (!name) {
                showToast('Por favor ingresa el nombre del producto');
                return false;
            }
            if (!category) {
                showToast('Por favor selecciona una categoría');
                return false;
            }
            if (!price || price <= 0) {
                showToast('Por favor ingresa un precio válido');
                return false;
            }
            return true;
            
        case 2:
            const stock = document.getElementById('productStock').value;
            if (!stock && stock !== '0') {
                showToast('Por favor ingresa el stock inicial');
                return false;
            }
            return true;
            
        default:
            return true;
    }
}

// Vista previa en tiempo real
function updatePreview() {
    const name = document.getElementById('productName').value || 'Nombre del producto';
    const category = document.getElementById('productCategory');
    const categoryText = category.options[category.selectedIndex]?.text || 'Categoría';
    const price = document.getElementById('productPrice').value || '0';
    const stock = document.getElementById('productStock').value || '0';
    const popular = document.getElementById('productPopular').checked;
    
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewCategory').textContent = categoryText;
    document.getElementById('previewPrice').textContent = `$${parseFloat(price).toFixed(2)}`;
    document.getElementById('previewStockValue').textContent = stock;
    
    // Mostrar/ocultar badge de popular
    const popularBadge = document.getElementById('previewPopular');
    if (popular) {
        popularBadge.style.display = 'inline-flex';
    } else {
        popularBadge.style.display = 'none';
    }
}

// Manejo de imágenes
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            showToast('La imagen no debe superar los 5MB');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            productImage = e.target.result;
            updatePreviewImage(productImage);
        };
        reader.readAsDataURL(file);
    }
}

function handleImageUrl(event) {
    const url = event.target.value;
    if (url) {
        productImage = url;
        updatePreviewImage(url);
    }
}

function useExampleImage(url) {
    productImage = url + '?w=300';
    document.getElementById('productImageUrl').value = url + '?w=300';
    updatePreviewImage(productImage);
}

function updatePreviewImage(src) {
    const preview = document.getElementById('previewImage');
    preview.innerHTML = `<img src="${src}" alt="Vista previa">`;
}

// Enviar formulario
function handleSubmit(event) {
    event.preventDefault();
    
    // Validar imagen
    if (!productImage) {
        showToast('Por favor agrega una imagen del producto');
        return;
    }
    
    // Crear objeto del producto
    const newProduct = {
        id: Date.now(), // ID temporal
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        stock: parseInt(document.getElementById('productStock').value),
        minStock: parseInt(document.getElementById('productMinStock').value) || 5,
        description: document.getElementById('productDescription').value,
        image: productImage,
        popular: document.getElementById('productPopular').checked,
        available: document.getElementById('productAvailable').checked,
        dateAdded: new Date().toISOString()
    };
    
    // Aquí iría la lógica para guardar en tu base de datos
    console.log('Producto guardado:', newProduct);
    
    // Guardar en localStorage (ejemplo)
    saveToLocalStorage(newProduct);
    
    // Mostrar modal de éxito
    showSuccessModal(newProduct.name);
}

function saveToLocalStorage(product) {
    let products = JSON.parse(localStorage.getItem('taffyProducts')) || [];
    products.push(product);
    localStorage.setItem('taffyProducts', JSON.stringify(products));
}

// Modales
function showSuccessModal(productName) {
    document.getElementById('successMessage').textContent = 
        `"${productName}" se ha guardado correctamente`;
    document.getElementById('successModal').classList.add('show');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('show');
    window.close();
}

function addAnotherProduct() {
    document.getElementById('successModal').classList.remove('show');
    resetForm();
}

function cancelForm() {
    document.getElementById('cancelModal').classList.add('show');
}

function closeCancelModal() {
    document.getElementById('cancelModal').classList.remove('show');
}

function confirmCancel() {
    document.getElementById('cancelModal').classList.remove('show');
    window.close();
}

// Resetear formulario
function resetForm() {
    document.getElementById('addProductForm').reset();
    currentStep = 1;
    document.querySelectorAll('.form-step').forEach((step, index) => {
        step.classList.remove('active');
        if (index === 0) step.classList.add('active');
    });
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        step.classList.remove('active');
        if (index === 0) step.classList.add('active');
    });
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'flex';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('previewImage').innerHTML = '<i class="fas fa-image"></i>';
    productImage = null;
    showToast('Formulario reiniciado');
}

// Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Validaciones en tiempo real
document.getElementById('productName').addEventListener('input', function(e) {
    if (e.target.value.length > 50) {
        e.target.value = e.target.value.slice(0, 50);
        showToast('Máximo 50 caracteres');
    }
});

document.getElementById('productDescription').addEventListener('input', function(e) {
    if (e.target.value.length > 200) {
        e.target.value = e.target.value.slice(0, 200);
        showToast('Máximo 200 caracteres');
    }
});

document.getElementById('productPrice').addEventListener('input', function(e) {
    let value = e.target.value;
    if (value < 0) e.target.value = 0;
});

document.getElementById('productStock').addEventListener('input', function(e) {
    let value = e.target.value;
    if (value < 0) e.target.value = 0;
});

// Cerrar modales con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('successModal').classList.contains('show')) {
            closeSuccessModal();
        }
        if (document.getElementById('cancelModal').classList.contains('show')) {
            closeCancelModal();
        }
    }
});

// Actualizar vista previa al cargar
updatePreview();