// ============================================
// CONFIGURATION & DATA
// ============================================

const WHATSAPP_NUMBER = "919739767039";

const repairSlides = [
    {
        title: "iPhone Repair",
        description: "Screen replacement, battery upgrades, charging issues, and camera fixes for all iPhone models.",
        image: "images/services/iphone.webp"
    },
    {
        title: "iPad Repair",
        description: "Cracked screens, unresponsive touch, and battery issues for all iPad models.",
        image: "images/services/ipad.webp"
    },
    {
        title: "MacBook Services",
        description: "Keyboard repair, SSD upgrades, battery replacement, and liquid damage restoration.",
        image: "images/services/macbook.webp"
    },
    {
        title: "iMac Repair",
        description: "Screen issues, power problems, performance upgrades, and hardware repairs for all iMac models.",
        image: "images/services/imac.webp"
    },
    {
        title: "Apple Watch Repair",
        description: "Screen replacement, battery issues, and sensor repairs for all Apple Watch models.",
        image: "images/services/apple-watch.webp"
    },
    {
        title: "Mac Mini Services",
        description: "Power supply repair, port replacements, overheating issues, and SSD upgrades.",
        image: "images/services/mac-mini.webp"
    }
];

const showcaseSlides = [
    {
        title: "iPhone Maintenance",
        description: "Complete diagnostics, battery health checks, deep cleaning, software optimization, and preventive care to keep your iPhone running smoothly.",
        image: "images/showcase/iphone.webp"
    },
    {
        title: "iPad Care Services",
        description: "Performance tuning, storage optimization, system diagnostics, thermal management, and regular maintenance for peak iPad performance.",
        image: "images/showcase/ipad.webp"
    },
    {
        title: "MacBook Maintenance",
        description: "Thermal paste renewal, fan cleaning, SSD health monitoring, battery calibration, and comprehensive system diagnostics for optimal performance.",
        image: "images/showcase/macbook.webp"
    },
    {
        title: "iMac Care & Optimization",
        description: "Internal dust removal, display calibration, hardware diagnostics, performance upgrades, and preventive maintenance for all iMac models.",
        image: "images/showcase/imac-new.webp"
    },
    {
        title: "Apple Watch Services",
        description: "Sensor calibration, battery optimization, water resistance testing, software updates, and health monitoring system checks.",
        image: "images/showcase/apple-watch.webp"
    },
    {
        title: "Mac Mini Maintenance",
        description: "Cooling system optimization, port cleaning, storage upgrades, system diagnostics, and preventive care for reliable performance.",
        image: "images/showcase/mac-mini.webp"
    }
];

const reviews = [
    {
        name: "Rahul Sharma",
        rating: 5,
        text: "Excellent service! Fixed my iPhone 14 Pro Max screen in just 2 hours. The quality is as good as original. Highly recommend Only Apple Tech."
    },
    {
        name: "Priya V",
        rating: 5,
        text: "Best place for MacBook repairs in Bangalore. They fixed my motherboard issue which other shops said was impossible. Very professional."
    },
    {
        name: "Anand Kumar",
        rating: 5,
        text: "Quick battery replacement for my Apple Watch. Affordable pricing and genuine parts used. The technician was very knowledgeable."
    },
    {
        name: "Deepak Reddy",
        rating: 5,
        text: "Amazing experience! My MacBook Pro was running slow and overheating. They cleaned it, upgraded the SSD, and now it works like new. Great value for money!"
    },
    {
        name: "Sneha Patel",
        rating: 5,
        text: "Took my iPad for screen replacement. The team was very honest and transparent about the costs. Repair done in same day with warranty. Couldn't ask for better service."
    },
    {
        name: "Arjun Nair",
        rating: 5,
        text: "My iPhone had water damage and wouldn't turn on. Other shops refused to touch it but these guys brought it back to life! Outstanding work and fair pricing."
    },
    {
        name: "Kavya Menon",
        rating: 5,
        text: "Highly professional team! Got my iMac repaired here after the display started showing lines. They diagnosed the issue quickly and fixed it perfectly. 100% satisfied!"
    },
    {
        name: "Vikram Shah",
        rating: 5,
        text: "Best Apple service center in Bangalore! They replaced my iPhone battery and charging port. Works perfectly now. Staff is friendly and knowledgeable."
    },
    {
        name: "Meera Krishnan",
        rating: 5,
        text: "Fantastic service! My MacBook keyboard had liquid damage. They replaced it with genuine parts and it feels brand new. Very reasonable prices compared to official Apple service."
    }
];

const deviceIcons = {
    iphone: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="iphoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="18" y="8" width="28" height="48" rx="4" fill="url(#iphoneGrad)" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="51" r="2" fill="white" opacity="0.8"/>
        <rect x="26" y="12" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
    </svg>`,
    ipad: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="ipadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#f093fb;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="12" y="10" width="40" height="44" rx="3" fill="url(#ipadGrad)" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="50" r="2" fill="white" opacity="0.8"/>
        <rect x="28" y="14" width="8" height="1.5" rx="0.75" fill="white" opacity="0.6"/>
    </svg>`,
    macbook: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="macGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="10" y="16" width="44" height="28" rx="2" fill="url(#macGrad)" stroke="currentColor" stroke-width="2"/>
        <path d="M8 44 L56 44 L54 48 L10 48 Z" fill="currentColor" opacity="0.3"/>
        <rect x="28" y="46" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
    </svg>`,
    watch: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="watchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#fa709a;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#fee140;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="20" y="18" width="24" height="28" rx="6" fill="url(#watchGrad)" stroke="currentColor" stroke-width="2"/>
        <rect x="22" y="14" width="20" height="4" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="22" y="46" width="20" height="4" rx="1" fill="currentColor" opacity="0.3"/>
        <circle cx="32" cy="32" r="2" fill="white" opacity="0.9"/>
    </svg>`,
    imac: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="imacGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#a8edea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#fed6e3;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="8" y="12" width="48" height="32" rx="2" fill="url(#imacGrad)" stroke="currentColor" stroke-width="2"/>
        <rect x="26" y="44" width="12" height="8" fill="currentColor" opacity="0.2"/>
        <rect x="18" y="52" width="28" height="2" rx="1" fill="currentColor" opacity="0.3"/>
    </svg>`,
    macmini: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="miniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#9ca3af;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4b5563;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="12" y="16" width="40" height="32" rx="4" fill="url(#miniGrad)" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.15"/>
        <rect x="16" y="42" width="32" height="1" rx="0.5" fill="black" opacity="0.2"/>
    </svg>`,
    other: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="otherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ffecd2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#fcb69f;stop-opacity:1" />
            </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" fill="url(#otherGrad)" stroke="currentColor" stroke-width="2"/>
        <path d="M24 32 L30 38 L40 26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
};

const devices = [
    { id: "iphone", name: "iPhone", icon: "iphone" },
    { id: "macbook", name: "MacBook", icon: "macbook" },
    { id: "ipad", name: "iPad", icon: "ipad" },
    { id: "watch", name: "Apple Watch", icon: "watch" },
    { id: "imac", name: "iMac", icon: "imac" },
    { id: "macmini", name: "Mac Mini", icon: "macmini" },
    { id: "other", name: "Other", icon: "other" }
];

const deviceProblems = {
    iphone: [
        "Cracked or broken screen",
        "Won't charge or loose port",
        "Camera not working properly",
        "Phone keeps restarting or dead",
        "Back glass is cracked",
        "Battery drains too fast",
        "Slow, freezing, or software issues",
        "Something else — let's chat"
    ],
    ipad: [
        "Cracked or broken screen",
        "Won't charge or loose port",
        "Camera not working properly",
        "iPad keeps restarting or dead",
        "Battery drains too fast",
        "Slow, freezing, or software issues",
        "Something else — let's chat"
    ],
    macbook: [
        "Cracked or broken screen",
        "Trackpad not responding",
        "Keyboard issues or broken keys",
        "Battery drains too fast",
        "Water or liquid damage",
        "Slow, freezing, or software issues",
        "Something else — let's chat"
    ],
    watch: [
        "Cracked or broken screen",
        "Battery drains too fast",
        "Won't charge properly",
        "Something else — let's chat"
    ],
    imac: [
        "Won't turn on or power issues",
        "Screen issues or lines",
        "Slow performance or freezing",
        "Something else — let's chat"
    ],
    macmini: [
        "Won't turn on or power issues",
        "Overheating or loud fan",
        "Bluetooth or Wi-Fi issues",
        "Slow performance or freezing",
        "Something else — let's chat"
    ],
    other: [
        "Something else — let's chat"
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentStep = 1;
let selectedDevice = "";
let selectedProblem = "";
let currentServiceIdx = 0;
let currentMobileShowcaseIdx = 0;
let currentServiceCarouselIdx = repairSlides.length;
let currentDesktopCarouselIdx = showcaseSlides.length;
let currentReviewPage = 0;
let currentMobileReviewIdx = 0;
let mobileServiceInterval;
let mobileShowcaseInterval;
let serviceCarouselInterval;
let desktopCarouselInterval;
let mobileReviewInterval;
let isServiceTransitioning = false;
let isDesktopTransitioning = false;
let resizeTimeout;
let lastWidth = window.innerWidth;
let ticking = false;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    renderDevices();
    renderServiceCards();
    renderReviews();
    renderDeviceShowcase();
    lucide.createIcons();
    initSmoothScrolling();
    initMobileMenu();
    initServiceTabs();
    setTimeout(() => {
        initPremiumEnhancements();
        initWhatsAppTooltipPopup();
    }, 100);
});

// ============================================
// RENDERING FUNCTIONS
// ============================================

function renderDevices() {
    const deviceList = document.getElementById('device-list');
    deviceList.innerHTML = devices.map(device => `
        <div class="device-card bg-white border border-border p-8 rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-lg hover:border-primary/50" onclick="handleDeviceSelect('${device.id}')">
            <div class="device-icon w-16 h-16 mb-4 transition-transform hover:scale-150">
                ${deviceIcons[device.icon]}
            </div>
            <span class="font-semibold text-gray-800">${device.name}</span>
        </div>
    `).join('');
}

function renderProblems() {
    const problemList = document.getElementById('problem-list');
    const problems = deviceProblems[selectedDevice] || [];
    problemList.innerHTML = problems.map(problem => {
        const escapedProblem = problem.replace(/'/g, "\\'");
        return `
            <div class="bg-white border border-border p-6 rounded-3xl flex items-center justify-between cursor-pointer transition-all hover:bg-accent/50 ${problem === "Something else — let's chat" ? 'card-frosted-green' : ''}" onclick="handleProblemSelect('${escapedProblem}')">
                <div class="flex items-center gap-3">
                    ${problem === "Something else — let's chat" ? '<i data-lucide="message-circle" class="w-5 h-5 text-green-600"></i>' : ''}
                    <span class="font-medium">${problem}</span>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-muted-foreground"></i>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function renderReviews() {
    const reviewsList = document.getElementById('reviews-list');
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        renderMobileReviews(reviewsList);
    } else {
        renderDesktopReviews(reviewsList);
    }
}

function renderMobileReviews(container) {
    container.innerHTML = `
        <div class="relative w-full overflow-hidden">
            <div id="mobile-reviews-track" class="flex transition-transform duration-700 ease-in-out">
                ${reviews.map(review => `
                    <div class="w-full flex-shrink-0 px-4">
                        <div class="bg-white border-none shadow-lg rounded-3xl p-8">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex gap-1">
                                    ${Array(review.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>').join('')}
                                </div>
                                <img src="images/ui/google-logo.webp" alt="Google" class="h-6 w-6 object-contain">
                            </div>
                            <p class="text-lg italic mb-6">"${review.text}"</p>
                            <div class="mt-auto">
                                <span class="font-bold">${review.name}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div id="mobile-review-dots" class="flex justify-center gap-2 mt-6">
                ${reviews.map((_, i) => `
                    <span class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-primary' : 'bg-muted-foreground/30'}"></span>
                `).join('')}
            </div>
        </div>
    `;
    lucide.createIcons();
    initMobileReviews();
}

function renderDesktopReviews(container) {
    const totalPages = Math.ceil(reviews.length / 3);
    const extendedReviews = [...reviews, ...reviews, ...reviews];

    container.innerHTML = `
        <div class="col-span-3 overflow-hidden">
            <div id="desktop-reviews-track" class="flex gap-6 transition-transform duration-700 ease-in-out">
                ${extendedReviews.map(review => `
                    <div class="review-card flex-shrink-0 w-[calc(33.333%-1rem)] bg-white border border-gray-200 rounded-2xl p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex gap-1">
                                ${Array(review.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>').join('')}
                            </div>
                            <img src="images/ui/google-logo.webp" alt="Google" class="h-6 w-6 object-contain">
                        </div>
                        <p class="text-base italic mb-6 text-gray-700">"${review.text}"</p>
                        <div class="mt-auto">
                            <span class="font-bold text-gray-900">${review.name}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="col-span-full flex justify-center gap-4 mt-8">
            <button onclick="changeReviewPage(-1)" 
                class="carousel-nav-btn w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <i data-lucide="chevron-left" class="w-6 h-6"></i>
            </button>
            <div id="desktop-review-dots" class="flex items-center gap-2">
                ${Array(totalPages).fill(0).map((_, i) => `
                    <div class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === 0 ? 'bg-primary w-8' : 'bg-muted-foreground/30'}" onclick="goToReviewPage(${i})"></div>
                `).join('')}
            </div>
            <button onclick="changeReviewPage(1)" 
                class="carousel-nav-btn w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <i data-lucide="chevron-right" class="w-6 h-6"></i>
            </button>
        </div>
    `;
    lucide.createIcons();
    initDesktopReviewsCarousel();
}

let currentDesktopReviewIdx = reviews.length;
let isReviewTransitioning = false;

function initDesktopReviewsCarousel() {
    currentDesktopReviewIdx = reviews.length;
    setTimeout(() => {
        updateDesktopReviewsPosition(false);
    }, 50);
}

function changeReviewPage(direction) {
    if (isReviewTransitioning) return;
    currentDesktopReviewIdx += direction * 3;
    updateDesktopReviewsPosition(true);
}

function goToReviewPage(pageIndex) {
    if (isReviewTransitioning) return;
    currentDesktopReviewIdx = reviews.length + (pageIndex * 3);
    updateDesktopReviewsPosition(true);
}

function updateDesktopReviewsPosition(withTransition) {
    const track = document.getElementById('desktop-reviews-track');
    const dots = document.querySelectorAll('#desktop-review-dots > div');
    if (!track || !track.children[0]) return;

    isReviewTransitioning = true;
    track.style.transition = withTransition ? 'transform 700ms ease-in-out' : 'none';

    const container = track.parentElement;
    const containerWidth = container.offsetWidth;
    const cardWidth = track.children[0].offsetWidth;
    const gap = 24;
    const visibleCardsWidth = (cardWidth * 3) + (gap * 2);
    const centerOffset = (containerWidth - visibleCardsWidth) / 2;
    const offset = (currentDesktopReviewIdx * (cardWidth + gap)) - centerOffset;
    track.style.transform = `translateX(-${offset}px)`;

    const totalPages = Math.ceil(reviews.length / 3);
    const actualPage = Math.floor((currentDesktopReviewIdx % reviews.length) / 3);
    dots.forEach((dot, i) => {
        if (i === actualPage) {
            dot.classList.add('bg-primary', 'w-8');
            dot.classList.remove('bg-muted-foreground/30');
        } else {
            dot.classList.remove('bg-primary', 'w-8');
            dot.classList.add('bg-muted-foreground/30');
        }
    });

    if (withTransition) {
        setTimeout(() => {
            if (currentDesktopReviewIdx >= reviews.length * 2) {
                currentDesktopReviewIdx = reviews.length + (currentDesktopReviewIdx % reviews.length);
                track.style.transition = 'none';
                updateDesktopReviewsPosition(false);
            } else if (currentDesktopReviewIdx < reviews.length) {
                currentDesktopReviewIdx = reviews.length + (currentDesktopReviewIdx % reviews.length);
                track.style.transition = 'none';
                updateDesktopReviewsPosition(false);
            }
            isReviewTransitioning = false;
        }, 700);
    } else {
        isReviewTransitioning = false;
    }
}

// Mobile Reviews Carousel Functions
function initMobileReviews() {
    startMobileReviewInterval();
    initSwipeSupport('mobile-reviews-track', (dir) => moveMobileReview(dir));
}

function startMobileReviewInterval() {
    clearInterval(mobileReviewInterval);
    mobileReviewInterval = setInterval(() => moveMobileReview(1), 5000);
}

function moveMobileReview(direction) {
    currentMobileReviewIdx = (currentMobileReviewIdx + direction + reviews.length) % reviews.length;
    updateMobileReviewUI();
}

function updateMobileReviewUI() {
    const track = document.getElementById('mobile-reviews-track');
    const dots = document.querySelectorAll('#mobile-review-dots > span');
    
    if (!track) return;
    
    track.style.transform = `translateX(-${currentMobileReviewIdx * 100}%)`;
    
    dots.forEach((dot, i) => {
        if (i === currentMobileReviewIdx) {
            dot.classList.add('bg-primary');
            dot.classList.remove('bg-muted-foreground/30');
        } else {
            dot.classList.remove('bg-primary');
            dot.classList.add('bg-muted-foreground/30');
        }
    });
}

function renderServiceCards() {
    const serviceCards = document.getElementById('service-cards');
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
        renderMobileServiceCards(serviceCards);
    } else {
        renderDesktopServiceCards(serviceCards);
    }
    lucide.createIcons();
}

function renderMobileServiceCards(container) {
    // Create extended slides array for infinite loop (3 copies like desktop)
    const extendedSlides = [...repairSlides, ...repairSlides, ...repairSlides];
    
    container.innerHTML = `
        <div class="max-w-3xl mx-auto px-4">
            <div class="bg-white border border-border rounded-3xl overflow-hidden shadow-lg">
                <div id="service-mobile-container" class="relative aspect-square overflow-hidden" style="background-image: url('images/ui/card-background.webp'); background-size: cover; background-position: center;">
                    <div id="service-image-track" class="flex h-full transition-transform duration-700 ease-in-out">
                        ${extendedSlides.map(slide => `
                            <div class="w-full h-full flex items-center justify-center flex-shrink-0">
                                <img src="${slide.image}" alt="${slide.title}" width="800" height="450" loading="lazy" class="max-w-full max-h-full object-contain">
                            </div>
                        `).join('')}
                    </div>
                    <div id="service-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        ${repairSlides.map((_, i) => `
                            <span class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/40'}"></span>
                        `).join('')}
                    </div>
                </div>
                <div class="p-8 text-center" id="service-text-container">
                    <h3 class="text-2xl font-bold mb-3">${repairSlides[0].title}</h3>
                    <p class="text-muted-foreground text-lg max-w-xl mx-auto">${repairSlides[0].description}</p>
                </div>
            </div>
        </div>
    `;
    initMobileServiceCards();
}

function renderDesktopServiceCards(container) {
    const extendedSlides = [...repairSlides, ...repairSlides, ...repairSlides];
    container.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="overflow-hidden py-10 -my-10">
                <div id="service-carousel-track" class="flex gap-8 transition-transform duration-700 ease-in-out -mx-4 px-4">
                    ${extendedSlides.map(slide => `
                        <div class="flex-shrink-0 w-full md:w-[calc(33.333%-1.333rem)] bg-white border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <div class="relative aspect-[4/3] rounded-t-3xl overflow-hidden flex items-center justify-center" style="background-image: url('images/ui/card-background.webp'); background-size: cover; background-position: center;">
                                <img src="${slide.image}" alt="${slide.title}" width="800" height="450" loading="lazy" class="max-w-full max-h-full object-contain">
                            </div>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-bold mb-2">${slide.title}</h3>
                                <p class="text-muted-foreground">${slide.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="flex justify-center gap-4 items-center mt-8">
                <button class="carousel-nav-btn w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all" onclick="moveServiceCarousel(-1)">
                    <i data-lucide="chevron-left" class="w-6 h-6"></i>
                </button>
                <div id="service-carousel-dots" class="flex gap-2">
                    ${repairSlides.map((_, i) => `
                        <div class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === 0 ? 'bg-primary w-8' : 'bg-muted-foreground/30'}" onclick="goToServiceSlide(${i})"></div>
                    `).join('')}
                </div>
                <button class="carousel-nav-btn w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all" onclick="moveServiceCarousel(1)">
                    <i data-lucide="chevron-right" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    `;
    initDesktopServiceCarousel();
}

function renderDeviceShowcase() {
    const showcaseContainer = document.getElementById('device-showcase-container');
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
        renderMobileShowcase(showcaseContainer);
    } else {
        renderDesktopShowcase(showcaseContainer);
    }
    lucide.createIcons();
}

function renderMobileShowcase(container) {
    // Create extended slides array for infinite loop (3 copies like desktop)
    const extendedSlides = [...showcaseSlides, ...showcaseSlides, ...showcaseSlides];
    
    container.innerHTML = `
        <div class="max-w-3xl mx-auto px-4">
            <div class="bg-white border border-border rounded-3xl overflow-hidden shadow-lg">
                <div id="showcase-mobile-container" class="relative aspect-square overflow-hidden" style="background-image: url('images/ui/wood-texture.webp'); background-size: cover; background-position: center;">
                    <div id="mobile-showcase-track" class="flex h-full transition-transform duration-700 ease-in-out">
                        ${extendedSlides.map(slide => `
                            <div class="w-full h-full flex items-center justify-center flex-shrink-0">
                                <img src="${slide.image}" alt="${slide.title}" width="800" height="450" loading="lazy" class="max-w-full max-h-full object-contain">
                            </div>
                        `).join('')}
                    </div>
                    <div id="mobile-showcase-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        ${showcaseSlides.map((_, i) => `
                            <span class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/40'}"></span>
                        `).join('')}
                    </div>
                </div>
                <div class="p-8 text-center" id="mobile-showcase-text">
                    <h3 class="text-2xl font-bold mb-3">${showcaseSlides[0].title}</h3>
                    <p class="text-muted-foreground text-lg max-w-xl mx-auto">${showcaseSlides[0].description}</p>
                </div>
            </div>
        </div>
    `;
    initMobileShowcase();
}

function renderDesktopShowcase(container) {
    const extendedSlides = [...showcaseSlides, ...showcaseSlides, ...showcaseSlides];
    container.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="overflow-hidden py-10 -my-10">
                <div id="desktop-carousel-track" class="flex gap-8 transition-transform duration-700 ease-in-out -mx-4 px-4">
                    ${extendedSlides.map(slide => `
                        <div class="flex-shrink-0 w-full md:w-[calc(33.333%-1.333rem)] bg-white border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <div class="relative aspect-[4/3] rounded-t-3xl overflow-hidden flex items-center justify-center" style="background-image: url('images/ui/wood-texture.webp'); background-size: cover; background-position: center;">
                                <img src="${slide.image}" alt="${slide.title}" width="800" height="450" loading="lazy" class="max-w-full max-h-full object-contain">
                            </div>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-bold mb-2">${slide.title}</h3>
                                <p class="text-muted-foreground">${slide.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="flex justify-center gap-4 items-center mt-8">
                <button class="carousel-nav-btn w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all" onclick="moveDesktopCarousel(-1)">
                    <i data-lucide="chevron-left" class="w-6 h-6"></i>
                </button>
                <div id="desktop-carousel-dots" class="flex gap-2">
                    ${showcaseSlides.map((_, i) => `
                        <div class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === 0 ? 'bg-primary w-8' : 'bg-muted-foreground/30'}" onclick="goToDesktopSlide(${i})"></div>
                    `).join('')}
                </div>
                <button class="carousel-nav-btn w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all" onclick="moveDesktopCarousel(1)">
                    <i data-lucide="chevron-right" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    `;
    initDesktopCarousel();
}

// ============================================
// CAROUSEL LOGIC
// ============================================

// Mobile Service Cards
let isMobileServiceTransitioning = false;

function initMobileServiceCards() {
    // Start at the middle set of slides (index = repairSlides.length)
    currentServiceIdx = repairSlides.length;
    updateMobileServicePosition(false);
    startMobileServiceInterval();
    initSwipeSupport('service-mobile-container', (dir) => moveServiceSlide(dir));
}

function startMobileServiceInterval() {
    clearInterval(mobileServiceInterval);
    mobileServiceInterval = setInterval(() => moveServiceSlide(1), 4000);
}

function moveServiceSlide(direction) {
    if (isMobileServiceTransitioning) return;
    currentServiceIdx += direction;
    updateMobileServicePosition(true);
}

function updateMobileServicePosition(withTransition) {
    const imageTrack = document.getElementById('service-image-track');
    const textContainer = document.getElementById('service-text-container');
    const dotsContainer = document.getElementById('service-dots');

    if (!imageTrack || !textContainer || !dotsContainer) return;

    isMobileServiceTransitioning = true;
    imageTrack.style.transition = withTransition ? 'transform 700ms ease-in-out' : 'none';
    imageTrack.style.transform = `translateX(-${currentServiceIdx * 100}%)`;
    
    // Update text and dots based on actual index
    const actualIndex = currentServiceIdx % repairSlides.length;
    const currentSlide = repairSlides[actualIndex];
    
    if (withTransition) {
        textContainer.classList.add('text-fade-out');
        setTimeout(() => {
            textContainer.innerHTML = `
                <h3 class="text-2xl font-bold mb-3">${currentSlide.title}</h3>
                <p class="text-muted-foreground text-lg max-w-xl mx-auto">${currentSlide.description}</p>
            `;
            textContainer.classList.remove('text-fade-out');
            textContainer.classList.add('text-fade-in');
            setTimeout(() => textContainer.classList.remove('text-fade-in'), 500);
        }, 350);
    } else {
        textContainer.innerHTML = `
            <h3 class="text-2xl font-bold mb-3">${currentSlide.title}</h3>
            <p class="text-muted-foreground text-lg max-w-xl mx-auto">${currentSlide.description}</p>
        `;
    }

    Array.from(dotsContainer.children).forEach((dot, i) => {
        if (i === actualIndex) {
            dot.classList.add('bg-white', 'scale-125');
            dot.classList.remove('bg-white/40');
        } else {
            dot.classList.remove('bg-white', 'scale-125');
            dot.classList.add('bg-white/40');
        }
    });

    if (withTransition) {
        setTimeout(() => {
            // Reset to middle set when reaching boundaries
            if (currentServiceIdx >= repairSlides.length * 2) {
                currentServiceIdx = repairSlides.length;
                imageTrack.style.transition = 'none';
                imageTrack.style.transform = `translateX(-${currentServiceIdx * 100}%)`;
            } else if (currentServiceIdx < repairSlides.length) {
                currentServiceIdx = repairSlides.length * 2 - 1;
                imageTrack.style.transition = 'none';
                imageTrack.style.transform = `translateX(-${currentServiceIdx * 100}%)`;
            }
            isMobileServiceTransitioning = false;
        }, 700);
    } else {
        isMobileServiceTransitioning = false;
    }
}

// Desktop Service Carousel
function initDesktopServiceCarousel() {
    updateServiceCarouselPosition(false);
    startServiceCarouselInterval();
}

function startServiceCarouselInterval() {
    clearInterval(serviceCarouselInterval);
    serviceCarouselInterval = setInterval(() => moveServiceCarousel(1), 4000);
}

function moveServiceCarousel(direction) {
    if (isServiceTransitioning) return;
    currentServiceCarouselIdx += direction;
    updateServiceCarouselPosition(true);
}

function goToServiceSlide(index) {
    if (isServiceTransitioning) return;
    clearInterval(serviceCarouselInterval);
    currentServiceCarouselIdx = repairSlides.length + index;
    updateServiceCarouselPosition(true);
    startServiceCarouselInterval();
}

function updateServiceCarouselPosition(withTransition) {
    const track = document.getElementById('service-carousel-track');
    const dots = document.querySelectorAll('#service-carousel-dots > div');
    if (!track) return;

    isServiceTransitioning = true;
    track.style.transition = withTransition ? 'transform 0.7s ease-in-out' : 'none';

    const cardWidth = track.children[0].offsetWidth;
    const gap = 32;
    const offset = currentServiceCarouselIdx * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    const actualIndex = currentServiceCarouselIdx % repairSlides.length;
    dots.forEach((dot, i) => {
        if (i === actualIndex) {
            dot.classList.add('bg-primary', 'w-8');
            dot.classList.remove('bg-muted-foreground/30');
        } else {
            dot.classList.remove('bg-primary', 'w-8');
            dot.classList.add('bg-muted-foreground/30');
        }
    });

    if (withTransition) {
        setTimeout(() => {
            if (currentServiceCarouselIdx >= repairSlides.length * 2) {
                currentServiceCarouselIdx = repairSlides.length;
                track.style.transition = 'none';
                updateServiceCarouselPosition(false);
            } else if (currentServiceCarouselIdx < repairSlides.length) {
                currentServiceCarouselIdx = repairSlides.length * 2 - 1;
                track.style.transition = 'none';
                updateServiceCarouselPosition(false);
            }
            isServiceTransitioning = false;
        }, 700);
    } else {
        isServiceTransitioning = false;
    }
}

// Mobile Showcase
let isMobileShowcaseTransitioning = false;

function initMobileShowcase() {
    // Start at the middle set of slides (index = showcaseSlides.length)
    currentMobileShowcaseIdx = showcaseSlides.length;
    updateMobileShowcasePosition(false);
    startMobileShowcaseInterval();
    initSwipeSupport('showcase-mobile-container', (dir) => moveMobileShowcaseSlide(dir));
}

function startMobileShowcaseInterval() {
    clearInterval(mobileShowcaseInterval);
    mobileShowcaseInterval = setInterval(() => moveMobileShowcaseSlide(1), 4000);
}

function moveMobileShowcaseSlide(direction) {
    if (isMobileShowcaseTransitioning) return;
    currentMobileShowcaseIdx += direction;
    updateMobileShowcasePosition(true);
}

function updateMobileShowcasePosition(withTransition) {
    const track = document.getElementById('mobile-showcase-track');
    const textContainer = document.getElementById('mobile-showcase-text');
    const dotsContainer = document.getElementById('mobile-showcase-dots');
    
    if (!track || !textContainer || !dotsContainer) return;

    isMobileShowcaseTransitioning = true;
    track.style.transition = withTransition ? 'transform 700ms ease-in-out' : 'none';
    track.style.transform = `translateX(-${currentMobileShowcaseIdx * 100}%)`;

    // Update text and dots based on actual index
    const actualIndex = currentMobileShowcaseIdx % showcaseSlides.length;
    const currentSlide = showcaseSlides[actualIndex];
    
    if (withTransition) {
        textContainer.classList.add('text-fade-out');
        setTimeout(() => {
            textContainer.innerHTML = `
                <h3 class="text-2xl font-bold mb-3">${currentSlide.title}</h3>
                <p class="text-muted-foreground text-lg max-w-xl mx-auto">${currentSlide.description}</p>
            `;
            textContainer.classList.remove('text-fade-out');
            textContainer.classList.add('text-fade-in');
            setTimeout(() => textContainer.classList.remove('text-fade-in'), 500);
        }, 350);
    } else {
        textContainer.innerHTML = `
            <h3 class="text-2xl font-bold mb-3">${currentSlide.title}</h3>
            <p class="text-muted-foreground text-lg max-w-xl mx-auto">${currentSlide.description}</p>
        `;
    }

    Array.from(dotsContainer.children).forEach((dot, i) => {
        if (i === actualIndex) {
            dot.classList.add('bg-white', 'scale-125');
            dot.classList.remove('bg-white/40');
        } else {
            dot.classList.remove('bg-white', 'scale-125');
            dot.classList.add('bg-white/40');
        }
    });

    if (withTransition) {
        setTimeout(() => {
            // Reset to middle set when reaching boundaries
            if (currentMobileShowcaseIdx >= showcaseSlides.length * 2) {
                currentMobileShowcaseIdx = showcaseSlides.length;
                track.style.transition = 'none';
                track.style.transform = `translateX(-${currentMobileShowcaseIdx * 100}%)`;
            } else if (currentMobileShowcaseIdx < showcaseSlides.length) {
                currentMobileShowcaseIdx = showcaseSlides.length * 2 - 1;
                track.style.transition = 'none';
                track.style.transform = `translateX(-${currentMobileShowcaseIdx * 100}%)`;
            }
            isMobileShowcaseTransitioning = false;
        }, 700);
    } else {
        isMobileShowcaseTransitioning = false;
    }
}

// Desktop Showcase Carousel
function initDesktopCarousel() {
    updateDesktopCarouselPosition(false);
    startDesktopCarouselInterval();
}

function startDesktopCarouselInterval() {
    clearInterval(desktopCarouselInterval);
    desktopCarouselInterval = setInterval(() => moveDesktopCarousel(1), 4000);
}

function moveDesktopCarousel(direction) {
    if (isDesktopTransitioning) return;
    currentDesktopCarouselIdx += direction;
    updateDesktopCarouselPosition(true);
}

function goToDesktopSlide(index) {
    if (isDesktopTransitioning) return;
    clearInterval(desktopCarouselInterval);
    currentDesktopCarouselIdx = showcaseSlides.length + index;
    updateDesktopCarouselPosition(true);
    startDesktopCarouselInterval();
}

function updateDesktopCarouselPosition(withTransition) {
    const track = document.getElementById('desktop-carousel-track');
    const dots = document.querySelectorAll('#desktop-carousel-dots > div');
    if (!track) return;

    isDesktopTransitioning = true;
    track.style.transition = withTransition ? 'transform 0.7s ease-in-out' : 'none';

    const cardWidth = track.children[0].offsetWidth;
    const gap = 32;
    const offset = currentDesktopCarouselIdx * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    const actualIndex = currentDesktopCarouselIdx % showcaseSlides.length;
    dots.forEach((dot, i) => {
        if (i === actualIndex) {
            dot.classList.add('bg-primary', 'w-8');
            dot.classList.remove('bg-muted-foreground/30');
        } else {
            dot.classList.remove('bg-primary', 'w-8');
            dot.classList.add('bg-muted-foreground/30');
        }
    });

    if (withTransition) {
        setTimeout(() => {
            if (currentDesktopCarouselIdx >= showcaseSlides.length * 2) {
                currentDesktopCarouselIdx = showcaseSlides.length;
                track.style.transition = 'none';
                updateDesktopCarouselPosition(false);
            } else if (currentDesktopCarouselIdx < showcaseSlides.length) {
                currentDesktopCarouselIdx = showcaseSlides.length * 2 - 1;
                track.style.transition = 'none';
                updateDesktopCarouselPosition(false);
            }
            isDesktopTransitioning = false;
        }, 700);
    } else {
        isDesktopTransitioning = false;
    }
}

// Swipe Support
function initSwipeSupport(elementId, callback) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let touchStartX = 0;
    let touchEndX = 0;

    el.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    el.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        const threshold = 50;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > threshold) {
            // Swipe right (diff > 0) = go back (-1), Swipe left (diff < 0) = go forward (1)
            callback(diff > 0 ? -1 : 1);
        }
    }, { passive: true });
}

// ============================================
// FORM & INQUIRY LOGIC
// ============================================

function handleDeviceSelect(id) {
    selectedDevice = id;
    renderProblems();
    goToStep(2);
}

function handleProblemSelect(problem) {
    selectedProblem = problem;
    goToStep(3);
}

function goToStep(step) {
    currentStep = step;
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');

    document.querySelectorAll('#step-indicators div').forEach((el, idx) => {
        if (idx + 1 <= step) {
            el.classList.add('bg-primary');
            el.classList.remove('bg-muted');
        } else {
            el.classList.remove('bg-primary');
            el.classList.add('bg-muted');
        }
    });

    lucide.createIcons();
}

document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();
    const model = formData.get('model').trim();
    const description = (formData.get('description') || "").trim();
    const deviceName = devices.find(d => d.id === selectedDevice)?.name || selectedDevice;

    const intro = name ? `Hi, this is ${name}.` : "Hi there,";
    const deviceDisplay = model ? `${deviceName} ${model}` : deviceName;

    let message = `${intro}\n\nI need help with my ${deviceDisplay}.\n\nThe issue is ${selectedProblem}.`;
    if (description) {
        message += `\n\n${description}`;
    }

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    document.getElementById('whatsapp-direct-link').href = waUrl;
    document.getElementById('success-overlay').classList.add('active');
});

function resetInquiry() {
    document.getElementById('success-overlay').classList.remove('active');
    document.getElementById('quote-form').reset();
    goToStep(1);
    selectedDevice = "";
    selectedProblem = "";
}

function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('[data-lucide="chevron-down"]');
    const isOpen = !content.classList.contains('hidden');

    if (isOpen) {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    }
}

// ============================================
// UI ENHANCEMENTS
// ============================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            if (targetId === "") return;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in-up');
        if (index > 0) {
            fadeInObserver.observe(section);
        } else {
            section.classList.add('visible');
        }
    });

    const reviewCards = document.querySelectorAll('#reviews-list > div');
    reviewCards.forEach((card, index) => {
        card.classList.add('fade-in-up', `stagger-${Math.min(index + 1, 6)}`);
        fadeInObserver.observe(card);
    });

    const faqItems = document.querySelectorAll('#faq .border');
    faqItems.forEach((item, index) => {
        item.classList.add('fade-in-up', `stagger-${Math.min(index + 1, 6)}`);
        fadeInObserver.observe(item);
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

function initRippleEffects() {
    const buttons = document.querySelectorAll('button:not(.carousel-nav-btn), a[class*="bg-"]');
    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', createRipple);
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleNavbarScroll();
            ticking = false;
        });
        ticking = true;
    }
}

function initCardEnhancements() {
    const cards = document.querySelectorAll('.bg-white.border');
    cards.forEach(card => card.classList.add('gradient-overlay'));
}

function initWhatsAppTooltipPopup() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    const tooltip = document.querySelector('.whatsapp-tooltip');

    if (!whatsappButton || !tooltip) return;

    setTimeout(() => {
        tooltip.style.opacity = '1';
        tooltip.style.pointerEvents = 'auto';

        setTimeout(() => {
            tooltip.style.opacity = '0';
            tooltip.style.pointerEvents = 'none';
        }, 3000);
    }, 3000);
}

function initPremiumEnhancements() {
    initScrollAnimations();
    initRippleEffects();
    initCardEnhancements();
    window.addEventListener('scroll', onScroll, { passive: true });
    handleNavbarScroll();
}

// ============================================
// EVENT LISTENERS
// ============================================

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const currentWidth = window.innerWidth;
        const wasMobile = document.getElementById('mobile-showcase-track') !== null;
        const isMobile = currentWidth < 1024;

        if (wasMobile !== isMobile) {
            clearInterval(mobileShowcaseInterval);
            clearInterval(mobileServiceInterval);
            clearInterval(desktopCarouselInterval);
            clearInterval(serviceCarouselInterval);

            renderDeviceShowcase();
            renderServiceCards();
        } else if (!isMobile && Math.abs(currentWidth - lastWidth) > 50) {
            requestAnimationFrame(() => {
                updateDesktopCarouselPosition(false);
                updateServiceCarouselPosition(false);
            });
        }


        // Re-render reviews on mobile/desktop breakpoint
        const wasReviewMobile = lastWidth < 768;
        const isReviewMobile = currentWidth < 768;
        if (wasReviewMobile !== isReviewMobile) {
            clearInterval(mobileReviewInterval);
            renderReviews();
        }

        lastWidth = currentWidth;
    }, 250);
}, { passive: true });

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const whatsappBtn = document.querySelector('.whatsapp-float');
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
            
            // Hide WhatsApp button
            if (whatsappBtn) {
                whatsappBtn.style.opacity = '0';
                whatsappBtn.style.pointerEvents = 'none';
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
            
            // Show WhatsApp button
            if (whatsappBtn) {
                whatsappBtn.style.opacity = '1';
                whatsappBtn.style.pointerEvents = 'auto';
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
// ============================================
// Service Tabs Functionality
// ============================================

function initServiceTabs() {
    const tabs = document.querySelectorAll('.service-tab');
    const contents = document.querySelectorAll('.service-content');
    
    if (!tabs.length || !contents.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const service = tab.getAttribute('data-service');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content with slide animation
            contents.forEach(content => {
                if (content.getAttribute('data-service') === service) {
                    // Remove active from all first
                    contents.forEach(c => c.classList.remove('active'));
                    
                    // Add active to selected content
                    setTimeout(() => {
                        content.classList.add('active');
                        
                        // Reinitialize lucide icons for the new content
                        lucide.createIcons();
                    }, 50);
                }
            });
        });
    });
}
