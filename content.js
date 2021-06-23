chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message === 'color saved') {
        this.document.body.style.color = request.value;
    }
});