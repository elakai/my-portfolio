/**
 * ============================================================================
 * 🚀 PORTFOLIO INTERACTIVE LOGIC
 * ----------------------------------------------------------------------------
 * Author: Pamela Kaye Magnifico
 * Description: Handles single-page navigation, experience tab switching,
 * project filtering, and contact modal interactions.
 * ============================================================================
 */

'use strict';

/* =========================================
   1. GLOBAL NAVIGATION SYSTEM
   ========================================= */

/**
 * Transitions from the Landing Page to the Main Application Content
 * and handles navigation between specific sections (Experience, Projects, etc.)
 * @param {string} sectionId 
 */

function openSection(sectionId) {
   
    const landingPage = document.getElementById('landing-page');
    if (landingPage) landingPage.classList.add('hidden');
    

    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.add('visible');
    

    const mainApp = document.getElementById('main-app');
    if (mainApp) mainApp.classList.add('visible');
    
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });
}


function goHome() {

    const landingPage = document.getElementById('landing-page');
    if (landingPage) landingPage.classList.remove('hidden');

    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.remove('visible');

    const mainApp = document.getElementById('main-app');
    if (mainApp) mainApp.classList.remove('visible');
}


/* =========================================
   2. EXPERIENCE SECTION (TAB SWITCHER)
   ========================================= */

/**
 * @param {string} viewId - The ID of the container to show
 * @param {HTMLElement} btnElement - The button that was clicked (this)
 */
function showExperience(viewId, btnElement) {
    const placeholder = document.getElementById('exp-placeholder');
    if (placeholder) placeholder.style.display = 'none';
    const allViews = document.querySelectorAll('.exp-view');
    allViews.forEach(view => {
        view.style.display = 'none';
    });

    const allBtns = document.querySelectorAll('.exp-btn');
    allBtns.forEach(btn => {
        btn.classList.remove('active-btn');
    });

    const selectedView = document.getElementById(viewId);
    if (selectedView) {
        selectedView.style.display = 'block';
        selectedView.style.animation = 'fadeIn 0.5s ease-out';
    }

    if (btnElement) {
        btnElement.classList.add('active-btn');
    }
}


/* =========================================
   3. PROJECT FILTERING
   ========================================= */

/**
 * Filters project cards based on category (Software, Hardware, etc.)
 * @param {string} category - The category to filter by (or 'all')
 */
function filterProjects(category) {
    const projects = document.querySelectorAll('.filter-item');
    
    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
            project.style.animation = 'fadeIn 0.5s ease-out';
        } else {
            project.style.display = 'none';
        }
    });
}


/* =========================================
   4. CONTACT MODAL LOGIC
   ========================================= */

/**
 * Opens the Contact Form Overlay
 */
function openContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.style.display = 'flex';
}

/**
 * Closes the Contact Form Overlay
 * Checks if the click was on the Overlay (background) or the Close Button (X)
 * prevents closing if the user clicked inside the form itself.
 * @param {Event} event - The click event
 */
function closeContactModal(event) {
    const modal = document.getElementById('contact-modal');
    
    // Safety check: ensure modal exists
    if (!modal) return;

    // Close conditions:
    // 1. Event is null (manual close call)
    // 2. User clicked the dark overlay (event.target === modal)
    // 3. User clicked the 'X' button (classList contains 'close-btn')
    if (!event || event.target === modal || event.target.classList.contains('close-btn')) {
        modal.style.display = 'none';
    }
}