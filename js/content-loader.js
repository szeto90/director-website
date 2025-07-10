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
                <a href="#" class="video-link" data-youtube-url="${item.youtubeUrl}" data-title="${item.title}">
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

    // Add click handlers for video links
    document.querySelectorAll('.video-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const youtubeUrl = this.getAttribute('data-youtube-url');
            const title = this.getAttribute('data-title');
            openYouTubeModal(youtubeUrl, title);
        });
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

// YouTube modal functions
function getYouTubeVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function openYouTubeModal(youtubeUrl, title) {
    const videoId = getYouTubeVideoId(youtubeUrl);
    if (!videoId) {
        console.error('Invalid YouTube URL:', youtubeUrl);
        return;
    }

    // Create modal if it doesn't exist
    let modal = document.getElementById('youtube-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'youtube-modal';
        modal.className = 'youtube-modal';
        modal.innerHTML = `
            <div class="youtube-modal-content">
                <div class="youtube-modal-header">
                    <h3 class="youtube-modal-title"></h3>
                    <span class="youtube-modal-close">&times;</span>
                </div>
                <div class="youtube-modal-body">
                    <div class="youtube-video-container">
                        <iframe id="youtube-iframe" src="" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add close event listeners
        modal.querySelector('.youtube-modal-close').addEventListener('click', closeYouTubeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeYouTubeModal();
            }
        });
    }

    // Update modal content
    const modalTitle = modal.querySelector('.youtube-modal-title');
    const iframe = modal.querySelector('#youtube-iframe');
    
    modalTitle.innerHTML = title;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeYouTubeModal() {
    const modal = document.getElementById('youtube-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Stop video by removing src
        const iframe = modal.querySelector('#youtube-iframe');
        if (iframe) {
            iframe.src = '';
        }
    }
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadContent);