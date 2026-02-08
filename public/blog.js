// Premium Maintenance-Focused Blog Content
const blogPosts = [
    {
        id: 1,
        title: "The Complete Guide to iPhone Preventive Maintenance",
        excerpt: "Discover professional maintenance techniques to keep your iPhone performing like new. Learn battery optimization, cleaning protocols, and diagnostic tools that technicians use daily.",
        image: "images/blog/iphone-maintenance.webp",
        author: "Tech Specialist",
        date: "2026-01-20",
        readTime: "8 min read",
        category: "iPhone Maintenance",
        tags: ["iPhone", "Preventive Care", "Battery Health", "Optimization"]
    },
    {
        id: 2,
        title: "MacBook Thermal Management: The Ultimate Maintenance Guide",
        excerpt: "Master the art of MacBook thermal maintenance. Learn professional cooling optimization, fan cleaning techniques, and thermal paste renewal protocols for peak performance.",
        image: "images/blog/macbook-thermal.webp",
        author: "Senior Technician",
        date: "2026-01-18",
        readTime: "10 min read",
        category: "MacBook Maintenance",
        tags: ["MacBook", "Thermal Management", "Cooling", "Performance"]
    },
    {
        id: 3,
        title: "iPad Storage Optimization & Performance Tuning",
        excerpt: "Transform your iPad's performance with professional storage management techniques. Learn cache clearing, app optimization, and system tuning strategies.",
        image: "images/blog/ipad-maintenance.webp",
        author: "iPad Specialist",
        date: "2026-01-16",
        readTime: "7 min read",
        category: "iPad Maintenance",
        tags: ["iPad", "Storage", "Performance", "Optimization"]
    },
    {
        id: 4,
        title: "Apple Watch Health Monitoring & Sensor Calibration",
        excerpt: "Ensure accurate health data with proper Apple Watch maintenance. Master sensor calibration, water resistance testing, and battery optimization techniques.",
        image: "images/blog/apple-watch-care.webp",
        author: "Wearables Expert",
        date: "2026-01-14",
        readTime: "6 min read",
        category: "Apple Watch Care",
        tags: ["Apple Watch", "Sensors", "Health", "Calibration"]
    },
    {
        id: 5,
        title: "iMac Display Calibration & Preventive Care Guide",
        excerpt: "Maintain stunning visual quality with professional iMac display calibration. Learn color accuracy optimization, internal dust prevention, and hardware diagnostics.",
        image: "images/blog/imac-maintenance.webp",
        author: "Display Technician",
        date: "2026-01-12",
        readTime: "9 min read",
        category: "iMac Maintenance",
        tags: ["iMac", "Display", "Calibration", "Diagnostics"]
    },
    {
        id: 6,
        title: "MacBook Battery Calibration & Longevity Secrets",
        excerpt: "Extend your MacBook battery life by years with professional calibration techniques. Discover charging optimization, health monitoring, and replacement timing strategies.",
        image: "images/blog/macbook-battery.webp",
        author: "Battery Specialist",
        date: "2026-01-10",
        readTime: "8 min read",
        category: "MacBook Maintenance",
        tags: ["MacBook", "Battery", "Calibration", "Longevity"]
    },
    {
        id: 7,
        title: "Professional iPhone Cleaning: Deep Dive Protocol",
        excerpt: "Learn technician-grade iPhone cleaning methods. From port maintenance to oleophobic coating care, master the art of keeping your device pristine.",
        image: "images/blog/iphone-cleaning.webp",
        author: "Cleaning Specialist",
        date: "2026-01-08",
        readTime: "6 min read",
        category: "iPhone Maintenance",
        tags: ["iPhone", "Cleaning", "Port Care", "Maintenance"]
    },
    {
        id: 8,
        title: "Mac Mini Cooling System Optimization Guide",
        excerpt: "Maximize Mac Mini performance with proper thermal management. Learn fan curve optimization, ventilation strategies, and diagnostic monitoring techniques.",
        image: "images/blog/mac-mini-cooling.webp",
        author: "Mac Specialist",
        date: "2026-01-06",
        readTime: "7 min read",
        category: "Mac Mini Maintenance",
        tags: ["Mac Mini", "Cooling", "Optimization", "Performance"]
    },
    {
        id: 9,
        title: "Comprehensive Apple Device Backup & Data Health",
        excerpt: "Protect your digital life with professional backup strategies. Learn automated backup systems, data integrity verification, and recovery planning.",
        image: "images/blog/apple-data-backup.webp",
        author: "Data Specialist",
        date: "2026-01-04",
        readTime: "9 min read",
        category: "Data Management",
        tags: ["Backup", "Data Health", "iCloud", "Time Machine"]
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    renderBlogPosts();
    initMobileMenu();
    lucide.createIcons();
});

// Render blog posts
function renderBlogPosts() {
    const container = document.getElementById('blog-posts');
    container.innerHTML = blogPosts.map(post => `
        <a href="blog-article.html?id=${post.id}" class="block group">
            <article class="bg-white border border-border rounded-3xl overflow-hidden shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                    ${post.image ? `
                        <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                    ` : `
                        <div class="w-full h-full flex items-center justify-center text-muted-foreground">
                            <i data-lucide="image" class="w-16 h-16"></i>
                        </div>
                    `}
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                            ${post.category}
                        </span>
                        <span class="text-xs text-muted-foreground">${post.readTime}</span>
                    </div>
                    <h2 class="text-xl font-bold mb-3 text-primary line-clamp-2">
                        ${post.title}
                    </h2>
                    <p class="text-muted-foreground mb-4 line-clamp-3">
                        ${post.excerpt}
                    </p>
                    <div class="flex items-center justify-between pt-4 border-t border-border">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <i data-lucide="user" class="w-4 h-4 text-primary"></i>
                            </div>
                            <div class="text-sm">
                                <div class="font-medium">${post.author}</div>
                                <div class="text-muted-foreground text-xs">${formatDate(post.date)}</div>
                            </div>
                        </div>
                        <span class="text-primary font-medium text-sm flex items-center gap-1">
                            Read More
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </span>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-4">
                        ${post.tags.map(tag => `
                            <span class="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                                #${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </article>
        </a>
    `).join('');
    lucide.createIcons();
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (!menuBtn || !menu || !overlay) return;

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;

        if (isOpen) {
            // Open menu
            overlay.classList.remove('hidden');
            menu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
            menu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';

            // Animate hamburger to X
            if (hamburgerIcon) {
                hamburgerIcon.classList.add('active');
            }
        } else {
            // Close menu
            menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
            menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';

            // Animate X back to hamburger
            if (hamburgerIcon) {
                hamburgerIcon.classList.remove('active');
            }
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking on a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) toggleMenu();
        });
    });
}
