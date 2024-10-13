import { util } from './util.js';
import { like } from './like.js';
import { guest } from './guest.js';
import { theme } from './theme.js';
import { audio } from './audio.js';
import { comment } from './comment.js';
import { progress } from './progress.js';
import { pagination } from './pagination.js';
import { displayUserName } from './name.js';  // Import the function

document.addEventListener('DOMContentLoaded', () => {
    audio.init();
    theme.init();
    pagination.init();

    guest.init();
    progress.init();
    window.AOS.init();

    // Attach modules to the window object
    window.util = util;
    window.like = like;
    window.guest = guest;
    window.theme = theme;
    window.audio = audio;
    window.comment = comment;
    window.pagination = pagination;

    // Call displayUserName to display the user's name on the page
    displayUserName();
});
