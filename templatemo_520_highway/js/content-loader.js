let siteContent = null;

async function loadContent() {
    try {
        console.log('Loading content from content.json...');
        const response = await fetch('content.json');
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        siteContent = await response.json();
        console.log('Content loaded successfully:', siteContent);
        updateContent();
    } catch (error) {
        console.error('Error loading content:', error);
        console.error('Make sure you are serving this page from a web server (not opening the file directly)');
    }
}

function updateContent() {
    if (!siteContent) return;

    // Update site title
    document.title = siteContent.site.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = siteContent.site.description;
    }

    // Update logo
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.innerHTML = siteContent.site.logo;
    }

    // Update hero section
    const heroTitle = document.querySelector('.video-content h1');
    if (heroTitle) {
        heroTitle.innerHTML = siteContent.hero.title;
    }

    const heroSubtitle = document.querySelector('.video-content p:first-of-type');
    if (heroSubtitle) {
        heroSubtitle.textContent = siteContent.hero.subtitle;
    }

    const heroDescription = document.querySelector('.video-content p:nth-of-type(2)');
    if (heroDescription) {
        heroDescription.textContent = siteContent.hero.description;
    }

    // Update background video
    const videoSource = document.querySelector('video source');
    if (videoSource) {
        videoSource.src = siteContent.hero.backgroundVideo;
    }

    // Update portfolio items
    updatePortfolio();

    // Update contact modal
    const contactTitle = document.querySelector('.header-title');
    if (contactTitle) {
        contactTitle.innerHTML = siteContent.contact.title;
    }

    const contactForm = document.getElementById('contact');
    if (contactForm) {
        contactForm.action = siteContent.contact.formAction;
        contactForm.method = siteContent.contact.formMethod;
    }

    // Update footer
    const footerCopyright = document.querySelector('footer p');
    if (footerCopyright) {
        footerCopyright.innerHTML = siteContent.footer.copyright;
    }

    // Update navigation
    updateNavigation();
}

function updatePortfolio() {
    const portfolioContainer = document.querySelector('.full-screen-portfolio .container-fluid');
    if (!portfolioContainer || !siteContent.portfolio.items) return;

    portfolioContainer.innerHTML = '';

    siteContent.portfolio.items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'col-md-4 col-sm-6';
        portfolioItem.innerHTML = `
            <div class="portfolio-item">
                <a href="${item.largeImage}" data-lightbox="image-1">
                    <div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h1>${item.title}</h1>
                                <p>${item.subtitle}</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                    </div>
                </a>
            </div>
        `;
        portfolioContainer.appendChild(portfolioItem);
    });
}

function updateNavigation() {
    const navMenu = document.querySelector('.main-menu ul');
    if (!navMenu || !siteContent.navigation.items) return;

    navMenu.innerHTML = '';

    siteContent.navigation.items.forEach(item => {
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a href="${item.url}">${item.name}</a>`;
        navMenu.appendChild(navItem);
    });

    const navDescription = document.querySelector('.main-menu p');
    if (navDescription) {
        navDescription.textContent = siteContent.navigation.description;
    }
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadContent);