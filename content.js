/* global chrome */

function autoFillPin(PIN) {
    if (!PIN || PIN.length !== 4) return;

    const inputs = document.querySelectorAll('input.pin-number-input');

    if (inputs.length === 4) {
        inputs.forEach((input, index) => {
            input.focus();
            input.value = PIN[index];
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
        });

        const button = document.querySelector('button[data-uia="pin-submit-button"]');
        if (button) {
            button.click();
        }
    }
}

const observer = new MutationObserver(() => {
    chrome.storage.local.get('netflixPin', (data) => {
        const PIN = data.netflixPin;
        autoFillPin(PIN);
    });
});

observer.observe(document.body, { childList: true, subtree: true });

chrome.storage.local.get('netflixPin', (data) => {
    const PIN = data.netflixPin;
    autoFillPin(PIN);
});
