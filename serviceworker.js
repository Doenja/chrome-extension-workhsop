chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message && request.message === 'color input') {
        saveColor(request.value);
        sendColor(request.value);
    }
});

chrome.tabs.onUpdated.addListener((tabId, updateInfo, tab) => {
    if(updateInfo.status === 'complete' && /^http/.test(tab.url)) {
        sendSavedColor();
    }
})

async function sendColor(color) {
    const tab = await chrome.tabs.query({ active: true});

    if(tab[0] && tab[0].id) {
        chrome.tabs.sendMessage(tab[0].id, { message: 'color saved', value: color})
    }
}

function saveColor(color) {
    chrome.storage.local.set({color: color}); 
}

function sendSavedColor() {
    chrome.storage.local.get(['color'], (result) => {
        if(result.color) {
            sendColor(result.color);
        }
    });
}



