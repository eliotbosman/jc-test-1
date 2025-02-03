document.addEventListener('DOMContentLoaded', () => {
    // Generate Lorem Ipsum text and split into words
    const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    document.querySelector('.text-content').textContent = loremText;

    // Load and display images
    const imageGrid = document.querySelector('.grid-container');
    const projectOverlay = document.querySelector('.project-overlay');
    const closeButton = document.querySelector('.close-button');
    const projectContent = document.querySelector('.project-content');
    const horizontalGallery = document.querySelector('.horizontal-gallery');

    // Function to load images
    async function loadImages() {
        const baseImages = [
            'chaos orb.png',
            'Planet1.png',
            'Phantomplanet.png',
            'zoom2.png',
            'Asset_1.png',
            'Asset_2.png',
            'Example1.png',
            'Gravitationalwaves_1.png'
        ];

        // Create 50 images by repeating the base set
        const images = Array(7).fill(baseImages).flat().slice(0,50);

        images.forEach(imageName => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            
            const img = document.createElement('img');
            img.src = `assets/images/${imageName}`;
            img.alt = imageName.split('.')[0];
            
            gridItem.appendChild(img);
            imageGrid.appendChild(gridItem);
            gridItem.addEventListener('click', () => showProject(imageName));
        });
    }

    // Function to show project overlay
    function showProject(imageName) {
        const projectText = document.querySelector('.project-text');
        projectText.innerHTML = `
            <h2>${imageName.split('.')[0]}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `;

        // Create horizontal gallery
        horizontalGallery.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const img = document.createElement('img');
            img.src = `assets/images/${imageName}`;
            horizontalGallery.appendChild(img);
        }

        // Show overlay
        projectOverlay.style.display = 'flex';
    }

    // Close overlay
    closeButton.addEventListener('click', () => {
        projectOverlay.style.display = 'none';
    });

    // Initialize
    loadImages();
});
