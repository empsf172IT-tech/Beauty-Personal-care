// Theme toggle
const themeToggleBtns = document.querySelectorAll('.theme-toggle');

// On load, check for theme preference
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    });
});

// Simple Cart Interaction
let cartCount = parseInt(localStorage.getItem('cart-count')) || 0;
const cartCountElements = document.querySelectorAll('.cart-count');

function updateCartUI() {
    cartCountElements.forEach(el => {
        el.textContent = cartCount;
    });
}

function addToCart() {
    cartCount++;
    localStorage.setItem('cart-count', cartCount);
    updateCartUI();
    
    // Optional: show mini toast/feedback
}

// Init cart on load
updateCartUI();

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>`;
backToTopBtn.className = "fixed bottom-8 right-8 bg-black dark:bg-white text-white dark:text-black p-3 shadow-lg opacity-0 pointer-events-none transition-all duration-300 z-50 hover:bg-gray-800 dark:hover:bg-gray-200 border border-transparent dark:border-gray-800";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
    } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Logic
const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
const mobileMenuCloseBtns = document.querySelectorAll('.mobile-menu-close');
const mobileMenus = document.querySelectorAll('.mobile-menu');

mobileMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        mobileMenus.forEach(menu => {
            menu.classList.remove('hidden');
        });
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

mobileMenuCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        mobileMenus.forEach(menu => {
            menu.classList.add('hidden');
        });
        document.body.style.overflow = ''; // Restore scrolling
    });
});

