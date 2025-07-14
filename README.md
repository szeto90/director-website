# 🎬 Director Coming Soon Website

A stunning coming soon page for a professional video director, featuring a full-screen video background, countdown timer, and email notification signup.

## ✨ Features

- **Full-Screen Video Background** - Immersive highway-loop video background
- **Countdown Timer** - Real-time countdown to launch date (July 25, 2025)
- **Email Notifications** - Capture visitor emails for launch updates
- **Responsive Design** - Mobile-first design that works on all devices
- **Social Media Integration** - Links to social platforms
- **Modern Animations** - Smooth CSS transitions and hover effects

## 🚀 Demo

Launch the website by opening `index.html` in your browser or serving it with any web server.

## 📋 Project Structure

```
director-website/
├── index.html              # Main homepage with video background
├── about.html              # About page
├── blog.html               # Blog listing page
├── grid.html               # Grid portfolio layout
├── masonry.html            # Masonry portfolio layout
├── single-post.html        # Single blog post page
├── css/
│   ├── templatemo-style.css # Main custom styles
│   ├── bootstrap.min.css    # Bootstrap framework
│   ├── fontAwesome.css      # Font icons
│   └── light-box.css        # Lightbox gallery
├── js/
│   ├── main.js             # Custom JavaScript functionality
│   └── plugins.js          # jQuery plugins
├── img/                    # Images and media files
├── fonts/                  # Font files
└── highway-loop.mp4        # Background video file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Flexbox and animations
- **JavaScript** - Countdown timer and form handling
- **Bootstrap** - Responsive grid system
- **jQuery** - DOM manipulation and plugins
- **Font Awesome** - Icon fonts
- **Google Fonts** - Kanit typography

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers with video support

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd director-website
   ```

2. **Launch with a local server** (recommended)
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## ⚙️ Configuration

### Countdown Timer
Edit the launch date in `index.html`:
```javascript
const launchDate = new Date('2025-07-25T00:00:00');
```

### Email Form
The email form currently shows an alert. To integrate with a backend:
```javascript
// Replace the alert in index.html with your API call
document.querySelector('.notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Add your email service integration here
});
```

### Social Media Links
Update social media URLs in `index.html`:
```html
<div class="social-links">
    <a href="YOUR_FACEBOOK_URL"><i class="fa fa-facebook"></i></a>
    <a href="YOUR_TWITTER_URL"><i class="fa fa-twitter"></i></a>
    <a href="YOUR_INSTAGRAM_URL"><i class="fa fa-instagram"></i></a>
    <a href="YOUR_VIMEO_URL"><i class="fa fa-vimeo"></i></a>
    <a href="YOUR_YOUTUBE_URL"><i class="fa fa-youtube"></i></a>
</div>
```

## 🎨 Customization

### Colors
Main brand colors can be changed in `css/templatemo-style.css`:
```css
.notify-btn {
    background: #ff6b6b; /* Primary color */
}

.notify-btn:hover {
    background: #ff5252; /* Hover color */
}
```

### Typography
Font family is set to Kanit from Google Fonts. Change in the `<head>` section:
```html
<link href="https://fonts.googleapis.com/css?family=YourFont:100,200,300,400,500,600,700,800,900" rel="stylesheet">
```

### Video Background
Replace `highway-loop.mp4` with your own video file. Ensure it's optimized for web:
- MP4 format
- H.264 codec
- Reasonable file size (< 10MB recommended)
- 16:9 aspect ratio

## 📄 Pages

- **Homepage** (`index.html`) - Coming soon page with video background
- **About** (`about.html`) - Company information
- **Portfolio** - Three different layouts:
  - Grid layout (`grid.html`)
  - Masonry layout (`masonry.html`) 
  - Full-width gallery (`main.html`)
- **Blog** (`blog.html`) - Blog listing
- **Single Post** (`single-post.html`) - Individual blog post

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is based on the Highway template from [TemplateMo](https://templatemo.com/tm-520-highway).

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

**⭐ Star this repository if you found it helpful!**