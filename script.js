// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .download-card, .community-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Download button analytics (placeholder)
document.querySelectorAll('.btn-download, .btn-download-alt').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get platform info
        const platform = button.closest('.download-card').querySelector('h3').textContent;
        const downloadType = button.textContent.trim();
        
        // Analytics tracking (replace with your analytics service)
        console.log(`Download clicked: ${platform} - ${downloadType}`);
        
        // Show download modal or redirect to actual download
        showDownloadModal(platform, downloadType);
    });
});

// Download modal functionality
function showDownloadModal(platform, downloadType) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Download OMAK for ${platform}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Your download will begin shortly...</p>
                <div class="download-info">
                    <p><strong>File:</strong> OMAK-${platform.toLowerCase()}-latest${getFileExtension(downloadType)}</p>
                    <p><strong>Size:</strong> ~45 MB</p>
                    <p><strong>Version:</strong> 1.0.0</p>
                </div>
                <div class="installation-steps">
                    <h4>Installation Steps:</h4>
                    <ol>
                        ${getInstallationSteps(platform, downloadType)}
                    </ol>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="startDownload('${platform}', '${downloadType}')">
                    <i class="fas fa-download"></i>
                    Start Download
                </button>
                <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .download-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .modal-content {
            background: white;
            border-radius: 1rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-secondary);
        }
        .modal-body {
            padding: 1.5rem;
        }
        .download-info {
            background: var(--bg-secondary);
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
        }
        .installation-steps ol {
            margin-left: 1rem;
        }
        .installation-steps li {
            margin-bottom: 0.5rem;
        }
        .modal-footer {
            display: flex;
            gap: 1rem;
            padding: 1.5rem;
            border-top: 1px solid var(--border-color);
        }
    `;
    
    // Add styles to head if not already added
    if (!document.querySelector('#modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(modal);
    
    // Animate modal in
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
    }, 10);
    
    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on close button click
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
}

function getFileExtension(downloadType) {
    if (downloadType.includes('.exe')) return '.exe';
    if (downloadType.includes('.dmg')) return '.dmg';
    if (downloadType.includes('.deb')) return '.deb';
    if (downloadType.includes('MSI')) return '.msi';
    if (downloadType.includes('AppImage')) return '.AppImage';
    return '';
}

function getInstallationSteps(platform, downloadType) {
    const steps = {
        'Windows': {
            '.exe': `
                <li>Run the downloaded OMAK-windows-latest.exe file</li>
                <li>Follow the installation wizard</li>
                <li>Launch OMAK from the Start Menu or Desktop shortcut</li>
            `,
            'MSI': `
                <li>Right-click the downloaded MSI file and select "Install"</li>
                <li>Follow the installation prompts</li>
                <li>Launch OMAK from the Start Menu</li>
            `
        },
        'macOS': {
            '.dmg': `
                <li>Open the downloaded DMG file</li>
                <li>Drag OMAK to your Applications folder</li>
                <li>Launch OMAK from Applications or Spotlight</li>
            `,
            'Homebrew': `
                <li>Open Terminal</li>
                <li>Run: <code>brew install --cask omak</code></li>
                <li>Launch OMAK from Applications or Spotlight</li>
            `
        },
        'Linux': {
            '.deb': `
                <li>Open Terminal in the download directory</li>
                <li>Run: <code>sudo dpkg -i omak-linux-latest.deb</code></li>
                <li>Launch OMAK from your application menu</li>
            `,
            'AppImage': `
                <li>Make the file executable: <code>chmod +x OMAK-linux-latest.AppImage</code></li>
                <li>Double-click the AppImage file to run</li>
                <li>Optionally, integrate with your desktop environment</li>
            `
        }
    };
    
    const platformSteps = steps[platform];
    if (platformSteps) {
        for (const [key, value] of Object.entries(platformSteps)) {
            if (downloadType.includes(key.replace('.', ''))) {
                return value;
            }
        }
    }
    
    return '<li>Download and run the installer</li><li>Follow the setup instructions</li>';
}

function startDownload(platform, downloadType) {
    // Simulate download start
    console.log(`Starting download for ${platform} - ${downloadType}`);
    
    // In a real implementation, this would trigger the actual download
    // For demo purposes, we'll just show a success message
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--secondary-color); margin-bottom: 1rem;"></i>
            <h3>Download Started!</h3>
            <p>Your download should begin automatically. If it doesn't, please check your downloads folder.</p>
            <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
                Need help? Check our <a href="#" style="color: var(--primary-color);">installation guide</a> or 
                <a href="#" style="color: var(--primary-color);">contact support</a>.
            </p>
        </div>
    `;
    
    // Auto-close modal after 3 seconds
    setTimeout(closeModal, 3000);
}

function closeModal() {
    const modal = document.querySelector('.download-modal');
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add tilt effect to cards
    const cards = document.querySelectorAll('.feature-card, .download-card, .community-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add pulse effect to download buttons
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 1s infinite';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.animation = 'none';
        });
    });
});

// Add CSS for pulse animation
const pulseAnimation = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = pulseAnimation;
document.head.appendChild(styleSheet);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add loading animation for the hero dashboard
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = document.querySelector('.dashboard-preview');
    if (dashboard) {
        // Add a subtle loading animation
        setTimeout(() => {
            dashboard.style.opacity = '1';
            dashboard.style.transform = 'translateY(0)';
        }, 500);
    }
}); 