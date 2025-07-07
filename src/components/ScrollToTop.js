import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    // Comprehensive scroll reset function
    const performScrollReset = () => {
        // Do not scroll to top if there is a hash (let browser handle it)
        if (hash) return;
        try {
            // Method 1: Window scroll with behavior instant
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
            
            // Method 2: Direct property assignment
            window.scrollTo(0, 0);
            
            // Method 3: Document element
            if (document.documentElement) {
                document.documentElement.scrollTop = 0;
                document.documentElement.scrollLeft = 0;
            }
            
            // Method 4: Body element
            if (document.body) {
                document.body.scrollTop = 0;
                document.body.scrollLeft = 0;
            }
            
            // Method 5: All potentially scrollable elements
            const scrollableElements = document.querySelectorAll('*');
            scrollableElements.forEach(element => {
                if (element.scrollTop > 0 || element.scrollLeft > 0) {
                    element.scrollTop = 0;
                    element.scrollLeft = 0;
                }
            });
            
            // Method 6: Main container
            const main = document.querySelector('main');
            if (main) {
                main.scrollTop = 0;
                main.scrollLeft = 0;
            }
            
            // Method 7: App container
            const app = document.querySelector('.App');
            if (app) {
                app.scrollTop = 0;
                app.scrollLeft = 0;
            }
        } catch (error) {
            console.warn('Scroll reset error:', error);
        }
    };

    useEffect(() => {
        // Execute scroll reset on pathname change
        performScrollReset();
        
        // Execute after micro-task
        Promise.resolve().then(performScrollReset);
        
        // Execute after DOM update
        setTimeout(performScrollReset, 0);
        
        // Execute after a small delay for any async content
        setTimeout(performScrollReset, 50);
        setTimeout(performScrollReset, 100);
        
        // Execute after images and other resources might load
        setTimeout(performScrollReset, 500);

    }, [pathname, hash]);

    // Also listen for custom scroll reset events
    useEffect(() => {
        const handleCustomScrollReset = () => {
            performScrollReset();
        };

        window.addEventListener('forceScrollReset', handleCustomScrollReset);
        
        return () => {
            window.removeEventListener('forceScrollReset', handleCustomScrollReset);
        };
    }, []);

    // Make the scroll reset function globally available
    useEffect(() => {
        window.forceScrollToTop = performScrollReset;
        
        return () => {
            delete window.forceScrollToTop;
        };
    }, []);

    return null;
};

export default ScrollToTop;
