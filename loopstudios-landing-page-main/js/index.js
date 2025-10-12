import { imagesmobile, imagesdesktop } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.querySelector('.creations-grid');

    class MenuManager {
        constructor() {
            this.menuButton = document.querySelector('.nav_menu_icon');
            this.navLinks = document.querySelector('.nav_links');
            this.isMenuOpen = false;
        }

        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            this.navLinks.classList.toggle('active');
            this.updateMenuIcon();
            this.toggleBodyScroll();
        }

        updateMenuIcon() {
            if (this.isMenuOpen) {
                this.menuButton.innerHTML = '<img src="./images/icon-close.svg" alt="close menu">';
            } else {
                this.menuButton.innerHTML = '<img src="./images/icon-hamburger.svg" alt="menu icon">';
            }
        }

        toggleBodyScroll() {
            document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
        }

        closeMenu() {
            this.isMenuOpen = false;
            this.navLinks.classList.remove('active');
            this.updateMenuIcon();
            this.toggleBodyScroll();
        }

        init() {
            if (this.menuButton && this.navLinks) {
                this.menuButton.addEventListener('click', () => this.toggleMenu());

                const navItems = this.navLinks.querySelectorAll('.nav_item a');
                navItems.forEach(item => {
                    item.addEventListener('click', () => this.closeMenu());
                });

                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768 && this.isMenuOpen) {
                        this.closeMenu();
                    }
                });
            }
        }
    }

    class CreationItem {
        constructor(src, alt) {
            this.src = src;
            this.alt = alt;
        }

        createElement() {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('creation-item');

            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;
            img.classList.add('creation-image');

            const title = document.createElement('h3');
            title.textContent = this.alt;
            title.classList.add('creation-title');

            imageContainer.appendChild(img);
            imageContainer.appendChild(title);

            return imageContainer;
        }
    }

    class GridManager {
        constructor(container) {
            this.container = container;
            this.resizeTimeout = null;
        }

        loadImages() {
            const isMobile = window.innerWidth <= 768;
            const images = isMobile ? imagesmobile : imagesdesktop;

            this.container.innerHTML = '';

            images.forEach(imageData => {
                const creation = new CreationItem(imageData.src, imageData.alt);
                const element = creation.createElement();
                this.container.appendChild(element);
            });
        }

        init() {
            this.loadImages();
            this.setupResizeListener();
        }

        setupResizeListener() {
            window.addEventListener('resize', () => {
                clearTimeout(this.resizeTimeout);
                this.resizeTimeout = setTimeout(() => this.loadImages(), 250);
            });
        }
    }

    const menuManager = new MenuManager();
    menuManager.init();

    if (gridContainer) {
        const gridManager = new GridManager(gridContainer);
        gridManager.init();
    }
});