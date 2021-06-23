const input = document.querySelector('input');

input.addEventListener('input', (e) => {
    const color = e.target.value;
    chrome.runtime.sendMessage({ message: 'color input', value: color});
})