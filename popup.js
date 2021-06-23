const input = document.querySelector('input');

if(input) {
    input.addEventListener('input', (e) => {
        const color = e.target.value;
        
        if(color) {
            sendColorSelectedMessage(color);
        }
    })
}

function sendColorSelectedMessage(color) {
    chrome.runtime.sendMessage({ message: 'color selected', value: color});
}