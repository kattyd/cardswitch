const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('nui')){
            themeStylesheet.href = 'huf.css';
            themeToggle.innerText = 'switch';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'nui.css';
            themeToggle.innerText = 'switch';

        }
    })