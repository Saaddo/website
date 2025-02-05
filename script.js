// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Cart Functionality
let cartItems = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        cartItems++;
        updateCartCount();
        
        // Add animation/feedback
        const btn = e.target;
        btn.textContent = 'Added!';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.disabled = false;
        }, 1000);
    });
});

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartItems;
}

// Search Functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Add search logic here
    console.log('Searching for:', searchTerm);
});

// Responsive Navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});