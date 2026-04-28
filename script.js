// Store pause states for each iframe
const pausedStates = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
};

// Reload a specific iframe
function reloadIframe(accountNumber) {
    const iframe = document.getElementById(`iframe-${accountNumber}`);
    if (iframe) {
        iframe.src = iframe.src;
        console.log(`Reloaded Account ${accountNumber}`);
    }
}

// Reload all iframes
function reloadAllIframes() {
    for (let i = 1; i <= 5; i++) {
        reloadIframe(i);
    }
    console.log('Reloaded all accounts');
}

// Toggle pause state for a specific iframe
function toggleIframe(accountNumber) {
    const iframe = document.getElementById(`iframe-${accountNumber}`);
    const button = event.target;
    
    if (pausedStates[accountNumber]) {
        // Resume
        iframe.classList.remove('paused');
        pausedStates[accountNumber] = false;
        button.textContent = 'Pause';
    } else {
        // Pause
        iframe.classList.add('paused');
        pausedStates[accountNumber] = true;
        button.textContent = 'Resume';
    }
    
    console.log(`Account ${accountNumber} ${pausedStates[accountNumber] ? 'paused' : 'resumed'}`);
}

// Stop all iframes
function stopAllIframes() {
    for (let i = 1; i <= 5; i++) {
        const iframe = document.getElementById(`iframe-${i}`);
        iframe.classList.add('paused');
        pausedStates[i] = true;
    }
    updateAllButtons();
    console.log('Stopped all accounts');
}

// Resume all iframes
function resumeAllIframes() {
    for (let i = 1; i <= 5; i++) {
        const iframe = document.getElementById(`iframe-${i}`);
        iframe.classList.remove('paused');
        pausedStates[i] = false;
    }
    updateAllButtons();
    console.log('Resumed all accounts');
}

// Update button text for all iframes
function updateAllButtons() {
    for (let i = 1; i <= 5; i++) {
        const buttons = document.querySelectorAll(`#container-${i} .btn-small`);
        buttons.forEach(btn => {
            if (btn.textContent.includes('Pause') || btn.textContent.includes('Resume')) {
                btn.textContent = pausedStates[i] ? 'Resume' : 'Pause';
            }
        });
    }
}
