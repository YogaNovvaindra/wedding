import { guest } from './guest.js';
import { theme } from './theme.js';  // Import the theme module

export const progress = (() => {
    let info = null;
    let bar = null;

    let total = 0;
    let loaded = 0;
    let valid = true;
    let push = true;

    const onComplete = () => {
        guest.name();
    };

    const add = () => {
        if (!push) {
            return;
        }
        total += 1;
    };

    const complete = () => {
        if (!valid) {
            return;
        }

        loaded += 1;
        bar.style.width = Math.min((loaded / total) * 100, 100).toString() + "%";

        if (loaded === total) {
            onComplete();
        }
    };

    const invalid = () => {
        bar.style.backgroundColor = 'red';
        valid = false;
    };

    const run = async () => {
        document.querySelectorAll('img').forEach((asset) => {
            asset.onerror = () => {
                invalid('image');
            };
            asset.onload = () => {
                complete('image');
            };

            if (asset.complete && asset.naturalWidth !== 0 && asset.naturalHeight !== 0) {
                complete('image');
            } else if (asset.complete) {
                invalid('image');
            }
        });
    };

    const setThemeColor = () => {
        if (bar) {
            bar.style.backgroundColor = theme.isDarkMode() ? '#ffffff' : '#000000';
        }
    };

    const init = () => {
        document.querySelectorAll('img').forEach(add);

        info = document.getElementById('progress-info');
        bar = document.getElementById('progress-bar');
        info.style.display = 'block';

        // Set initial color based on current theme
        setThemeColor();

        // Listen for theme changes
        document.addEventListener('themeChanged', setThemeColor);

        push = false;
        run();
    };

    return {
        init,
        add,
        invalid,
        complete,
    };
})();