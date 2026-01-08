document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // 1. GLOBAL MOBILE MENU (Runs on all pages)
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileDrawer = document.getElementById('mobile-drawer');

    // Only run if the mobile menu elements actually exist
    if (mobileToggle && mobileDrawer) {
        function openMobileMenu() {
            mobileOverlay.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
            mobileDrawer.classList.remove('-translate-x-full');
            document.body.style.overflow = 'hidden'; 
        }

        function closeMobileMenu() {
            mobileOverlay.classList.add('opacity-0');
            mobileDrawer.classList.add('-translate-x-full');
            setTimeout(() => {
                mobileOverlay.classList.add('hidden');
                document.body.style.overflow = 'auto'; 
            }, 300);
        }

        mobileToggle.addEventListener('click', openMobileMenu);
        if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
        if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
    }


    // ==========================================
    // 2. HERITAGE ANIMATIONS (Specific Pages)
    // ==========================================
    const section = document.getElementById('heritage-section');

    // SAFETY CHECK: Only run this if the heritage section exists on the current page
    if (section) {
        const box = document.getElementById('heritage-box');
        const subtitle = document.getElementById('heritage-subtitle');
        const title = document.getElementById('heritage-title');
        const desc = document.getElementById('heritage-desc');
        const btn = document.getElementById('heritage-btn');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove hidden classes to trigger CSS transitions
                    if(box) box.classList.remove('opacity-0', 'translate-y-12');
                    if(subtitle) subtitle.classList.remove('opacity-0', 'translate-y-8');
                    if(title) title.classList.remove('opacity-0', 'translate-y-8');
                    if(desc) desc.classList.remove('opacity-0', 'translate-y-8');
                    if(btn) btn.classList.remove('opacity-0', 'translate-y-8');

                    observer.unobserve(section);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(section);
    }

});