# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project called "Highway" - a responsive HTML template from templatemo.com. The site features a full-width video background, portfolio galleries, modal forms, and modern CSS animations.

## Directory Structure

```
templatemo_520_highway/
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
└── fonts/                  # Font files
```

## Key Features

1. **Video Background**: Full-screen video background on homepage (`highway-loop.mp4`)
2. **Portfolio Galleries**: Three different layout options (full-width, masonry, grid)
3. **Modal System**: Contact form modal with animations
4. **Responsive Design**: Bootstrap-based responsive layout
5. **Smooth Scrolling**: jQuery-based smooth scroll navigation
6. **Lightbox Gallery**: Image gallery with lightbox functionality

## Main JavaScript Components

- **Modal Management**: Contact form modal with open/close animations (`main.js:8-30`)
- **Smooth Scrolling**: Section navigation with active state management (`main.js:33-57`)
- **Mobile Menu**: Hamburger menu toggle functionality (`main.js:60-63`)

## CSS Architecture

- **Variables**: Custom CSS variables for theming
- **Animations**: CSS keyframe animations for modal transitions
- **Responsive**: Mobile-first responsive design with media queries
- **Typography**: Kanit font family with custom font weights

## Common Development Tasks

Since this is a static HTML website, there are no build commands or package managers. Development involves:

1. **File Editing**: Direct editing of HTML, CSS, and JavaScript files
2. **Browser Preview**: Open `index.html` in a browser to preview changes
3. **Asset Management**: Images and media files are stored in the `img/` directory

## Page Types

- **Homepage** (`index.html`): Full-width video background with portfolio grid
- **Portfolio Pages**: Three different gallery layouts (masonry, grid, full-width)
- **About Page**: Company information with parallax background
- **Blog Pages**: Blog listing and single post layouts

## External Dependencies

- Bootstrap CSS framework
- jQuery library
- Font Awesome icons
- Google Fonts (Kanit family)
- Lightbox plugin for image galleries

## Browser Support

The template uses modern CSS features and requires:
- Modern browsers with CSS3 support
- JavaScript enabled for interactive features
- Video support for background video functionality