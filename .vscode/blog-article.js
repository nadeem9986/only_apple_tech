// Blog data (same as blog.js)
const blogPosts = [
    {
        id: 1,
        title: "5 Signs Your iPhone Screen Needs Immediate Replacement",
        excerpt: "Is your iPhone screen acting up? Learn the warning signs that indicate it's time for a professional screen replacement before the damage gets worse.",
        content: `
            <p>Your iPhone screen is one of the most critical components of your device. When it starts showing signs of damage, it's important to act quickly to prevent further issues. Here are the five key warning signs that indicate you need immediate screen replacement:</p>
            
            <h2>1. Visible Cracks or Shattered Glass</h2>
            <p>This is the most obvious sign. Even small cracks can spread quickly and compromise the structural integrity of your screen. Cracks also make your device vulnerable to moisture and dust, which can damage internal components.</p>
            
            <h2>2. Unresponsive Touch Areas</h2>
            <p>If certain areas of your screen don't respond to touch, or if you notice "ghost touches" where the screen registers touches you didn't make, this indicates digitizer damage that requires professional repair.</p>
            
            <h2>3. Discoloration or Dead Pixels</h2>
            <p>Black spots, lines, or areas of discoloration on your screen suggest LCD damage. Dead pixels that appear as permanent black or colored dots are another sign that your screen needs replacement.</p>
            
            <h2>4. Screen Flickering or Glitching</h2>
            <p>If your screen flickers, shows strange lines, or displays distorted images, this could indicate a failing display connection or damaged screen components.</p>
            
            <h2>5. Separated Screen or Visible Gaps</h2>
            <p>If you notice your screen separating from the frame or see gaps around the edges, this is a serious issue. It could be caused by battery swelling or impact damage and requires immediate attention.</p>
            
            <h2>Why Professional Replacement Matters</h2>
            <p>While DIY screen replacement kits are available, professional service ensures:</p>
            <ul>
                <li>Genuine or high-quality OEM replacement parts</li>
                <li>Proper calibration and testing</li>
                <li>Warranty on the replacement</li>
                <li>No risk of damaging other components</li>
            </ul>
            
            <p>At Only Apple Tech, we use premium quality screens and provide a 90-day warranty on all screen replacements. Our expert technicians can typically complete iPhone screen replacements within 60-90 minutes.</p>
        `,
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
        content: `
            <p>MacBook battery life can significantly impact your productivity. Follow these expert tips to maximize your battery performance and extend its lifespan.</p>
            
            <h2>1. Optimize Your Display Settings</h2>
            <p>Your display is one of the biggest battery drains. Reduce brightness to a comfortable level and enable auto-brightness. Consider using dark mode, which can save battery on newer MacBooks with OLED displays.</p>
            
            <h2>2. Manage Background Applications</h2>
            <p>Close unnecessary applications and disable background app refresh for apps you don't need constantly updating. Check Activity Monitor to identify battery-hungry applications.</p>
            
            <h2>3. Update macOS Regularly</h2>
            <p>Apple frequently releases updates that include battery optimization improvements. Keep your macOS up to date for the best battery performance.</p>
            
            <h2>4. Use Energy Saver Preferences</h2>
            <p>Navigate to System Preferences > Battery and enable "Optimize battery charging" and "Low power mode" when needed. These features help preserve battery health over time.</p>
            
            <h2>5. Maintain Proper Charging Habits</h2>
            <p>Avoid letting your battery drain to 0% regularly. Keep it between 20-80% for optimal longevity. Don't leave your MacBook plugged in 24/7 if possible.</p>
            
            <h2>6. Control Bluetooth and Wi-Fi</h2>
            <p>Disable Bluetooth and Wi-Fi when not in use. These wireless connections constantly search for devices and networks, draining battery in the process.</p>
            
            <h2>When to Consider Battery Replacement</h2>
            <p>If your MacBook battery health drops below 80%, or if you notice significantly reduced battery life, it may be time for a replacement. Our technicians can assess your battery health and provide professional replacement services with genuine parts.</p>
        `,
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
        content: `
            <p>When your Apple device needs repair, you have two main options: Apple's official service or third-party repair shops. Understanding the differences can help you make an informed decision.</p>
            
            <h2>Apple Official Service</h2>
            <h3>Pros:</h3>
            <ul>
                <li>Genuine Apple parts guaranteed</li>
                <li>Maintains warranty status</li>
                <li>Certified technicians</li>
                <li>Comprehensive diagnostics</li>
            </ul>
            
            <h3>Cons:</h3>
            <ul>
                <li>Higher costs (often 2-3x more expensive)</li>
                <li>Longer wait times (3-7 days typical)</li>
                <li>May require appointment scheduling</li>
                <li>Limited locations</li>
            </ul>
            
            <h2>Third-Party Repair (Professional Shops)</h2>
            <h3>Pros:</h3>
            <ul>
                <li>Significantly lower costs (30-50% savings)</li>
                <li>Faster turnaround (same-day service often available)</li>
                <li>More convenient locations</li>
                <li>Personalized service</li>
                <li>Quality OEM parts available</li>
            </ul>
            
            <h3>Cons:</h3>
            <ul>
                <li>May void warranty if device is still covered</li>
                <li>Part quality varies by shop</li>
                <li>Not all shops are equally skilled</li>
            </ul>
            
            <h2>Making the Right Choice</h2>
            <p><strong>Choose Apple Official Service if:</strong></p>
            <ul>
                <li>Your device is under warranty or AppleCare+</li>
                <li>You need a repair covered by a recall program</li>
                <li>Cost is not a primary concern</li>
            </ul>
            
            <p><strong>Choose Professional Third-Party Repair if:</strong></p>
            <ul>
                <li>Your warranty has expired</li>
                <li>You need quick, same-day service</li>
                <li>Cost is a significant factor</li>
                <li>The repair is straightforward (screen, battery, etc.)</li>
            </ul>
            
            <h2>What We Offer at Only Apple Tech</h2>
            <p>We provide the best of both worlds: professional service with high-quality OEM parts at competitive prices. Our technicians are experienced with all Apple devices, and we offer a 90-day warranty on all repairs. Most repairs are completed the same day, and we're transparent about our pricing upfront.</p>
        `,
        image: "images/blog/warranty-comparison.webp",
        author: "Person 1",
        date: "2026-01-10",
        readTime: "6 min read",
        category: "Repair Guide",
        tags: ["Warranty", "Repair", "Cost Comparison"]
    },
    // Additional posts with placeholder content
    {
        id: 4,
        title: "iPad Screen Replacement: Everything You Need to Know",
        excerpt: "Cracked iPad screen? Learn about the repair process, costs, and what to expect when getting your iPad screen professionally replaced.",
        content: `<p>Comprehensive guide to iPad screen replacement coming soon...</p>`,
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
        content: `<p>Detailed guide to MacBook keyboard issues coming soon...</p>`,
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
        content: `<p>Emergency water damage guide coming soon...</p>`,
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
        content: `<p>Professional vs DIY repair comparison coming soon...</p>`,
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
        content: `<p>Apple Watch repair guide coming soon...</p>`,
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
        content: `<p>Device preparation checklist coming soon...</p>`,
        image: "images/blog/device-preparation.webp",
        author: "Person 1",
        date: "2025-12-22",
        readTime: "3 min read",
        category: "Repair Guide",
        tags: ["Preparation", "Backup", "Tips"]
    }
];

// Get article ID from URL
function getArticleId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load article content
function loadArticle() {
    const articleId = getArticleId();
    const article = blogPosts.find(post => post.id === articleId);
    
    if (!article) {
        window.location.href = 'blogs.html';
        return;
    }
    
    // Update page title
    document.title = `${article.title} | Only Apple Tech`;
    document.getElementById('article-title').textContent = `${article.title} | Only Apple Tech`;
    
    // Update article header
    document.getElementById('article-heading').textContent = article.title;
    document.getElementById('article-category').textContent = article.category;
    document.getElementById('article-read-time').textContent = article.readTime;
    document.getElementById('article-author').textContent = article.author;
    document.getElementById('article-date').textContent = formatDate(article.date);
    
    // Update article content
    document.getElementById('article-content').innerHTML = article.content;
    
    // Update tags
    const tagsContainer = document.getElementById('article-tags');
    tagsContainer.innerHTML = article.tags.map(tag => `
        <span class="text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
            #${tag}
        </span>
    `).join('');
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


// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    loadArticle();
    initMobileMenu();
    lucide.createIcons();
});
