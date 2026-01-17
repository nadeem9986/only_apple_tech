// Blog data
const blogPosts = [
    {
        id: 1,
        title: "5 Signs Your iPhone Screen Needs Immediate Replacement",
        excerpt: "Is your iPhone screen acting up? Learn the warning signs that indicate it's time for a professional screen replacement before the damage gets worse.",
        image: "images/blog/iphone-screen-repair.webp",
        author: "Person 1",
        date: "2026-01-15",
        readTime: "5 min read",
        category: "iPhone Repair",
        tags: ["iPhone", "Screen Repair", "Tips"]
    },
    {
        id: 2,
        title: "How to Extend Your MacBook Battery Life: Expert Tips",
        excerpt: "Maximize your MacBook's battery performance with these proven techniques from our expert technicians. Simple changes can make a huge difference.",
        image: "images/blog/macbook-battery.webp",
        author: "Person 2",
        date: "2026-01-12",
        readTime: "7 min read",
        category: "MacBook Tips",
        tags: ["MacBook", "Battery", "Optimization"]
    },
    {
        id: 3,
        title: "Apple Warranty vs Third-Party Repair: What You Need to Know",
        excerpt: "Understanding your options when your Apple device needs repair. We break down the pros, cons, and costs of official vs third-party service.",
        image: "images/blog/warranty-comparison.webp",
        author: "Person 1",
        date: "2026-01-10",
        readTime: "6 min read",
        category: "Repair Guide",
        tags: ["Warranty", "Repair", "Cost Comparison"]
    },
    {
        id: 4,
        title: "iPad Screen Replacement: Everything You Need to Know",
        excerpt: "Cracked iPad screen? Learn about the repair process, costs, and what to expect when getting your iPad screen professionally replaced.",
        image: "images/blog/ipad-repair.webp",
        author: "Person 3",
        date: "2026-01-08",
        readTime: "5 min read",
        category: "iPad Repair",
        tags: ["iPad", "Screen Repair", "Guide"]
    },
    {
        id: 5,
        title: "Common MacBook Keyboard Issues and How to Fix Them",
        excerpt: "Sticky keys, unresponsive keyboard, or random characters? Discover the most common MacBook keyboard problems and their solutions.",
        image: "images/blog/macbook-keyboard.webp",
        author: "Person 2",
        date: "2026-01-05",
        readTime: "6 min read",
        category: "MacBook Repair",
        tags: ["MacBook", "Keyboard", "Troubleshooting"]
    },
    {
        id: 6,
        title: "Water Damage on iPhone: What to Do Immediately",
        excerpt: "Dropped your iPhone in water? Follow these critical steps within the first hour to maximize your chances of saving your device.",
        image: "images/blog/water-damage.webp",
        author: "Person 1",
        date: "2026-01-03",
        readTime: "4 min read",
        category: "iPhone Repair",
        tags: ["iPhone", "Water Damage", "Emergency"]
    },
    {
        id: 7,
        title: "Why Choose Professional Apple Repair Over DIY",
        excerpt: "Thinking about fixing your Apple device yourself? Here's why professional repair services are worth the investment for your valuable devices.",
        image: "images/blog/professional-repair.webp",
        author: "Person 3",
        date: "2025-12-28",
        readTime: "5 min read",
        category: "Repair Guide",
        tags: ["Professional Service", "DIY", "Quality"]
    },
    {
        id: 8,
        title: "Apple Watch Screen Repair: Cost and Process Explained",
        excerpt: "Comprehensive guide to Apple Watch screen replacement, including pricing, repair time, and what to expect during the service process.",
        image: "images/blog/apple-watch-repair.webp",
        author: "Person 2",
        date: "2025-12-25",
        readTime: "4 min read",
        category: "Apple Watch",
        tags: ["Apple Watch", "Screen Repair", "Cost"]
    },
    {
        id: 9,
        title: "How to Prepare Your Device for Repair Service",
        excerpt: "Essential checklist before bringing your Apple device for repair. Backup your data, disable security features, and more important steps.",
        image: "images/blog/device-preparation.webp",
        author: "Person 1",
        date: "2025-12-22",
        readTime: "3 min read",
        category: "Repair Guide",
        tags: ["Preparation", "Backup", "Tips"]
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
        <a href="blog-article.html?id=${post.id}" class="block">
            <article class="bg-white border border-border rounded-3xl overflow-hidden shadow-sm cursor-pointer">
                <div class="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div class="w-full h-full flex items-center justify-center text-muted-foreground">
                        <i data-lucide="image" class="w-16 h-16"></i>
                    </div>
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
