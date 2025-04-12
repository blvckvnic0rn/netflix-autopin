/* global chrome */

const inputs = [
    document.getElementById('pin1'),
    document.getElementById('pin2'),
    document.getElementById('pin3'),
    document.getElementById('pin4')
];

function handleSaveClick() {
    const pin = inputs.map(input => input.value).join('');

    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
        document.getElementById('status').innerText = 'Inserisci 4 numeri';
        return;
    }

    chrome.storage.local.set({ netflixPin: pin }, () => {
        document.getElementById('status').innerText = 'PIN salvato!';
    });
}

document.getElementById('saveBtn').addEventListener('click', handleSaveClick);

chrome.storage.local.get('netflixPin', (data) => {
    const pin = data.netflixPin || '';
    inputs.forEach((input, index) => {
        input.value = pin[index] || '';
    });
});
