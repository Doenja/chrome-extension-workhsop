chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message && request.message === 'color selected') {
        saveColor(request.value);
        sendColorSaved(request.value);
    }
});

chrome.runtime.onInstalled.addListener(() => {
    saveColor('#779');
})

chrome.tabs.onUpdated.addListener((tabId, updateInfo, tab) => {
    if(updateInfo.status === 'complete' && /^http/.test(tab.url)) {
        getSavedColor();
    }
})

function saveColor(color) {
    chrome.storage.local.set({color: color}, function() {
        console.log('Value is set to ' + color);
      }); 
}

function getSavedColor() {
    chrome.storage.local.get(['color'], function(result) {
        chrome.storage.local.get(['color'], function(result) {
            console.log('Value currently is ' + result.color);
        }); 

        sendColorSaved(result.color);
    });
}

async function sendColorSaved(color) {
    const tab = await chrome.tabs.query({ active: true});

    if(tab[0] && tab[0].id) {
        chrome.tabs.sendMessage(tab[0].id, { message: 'color saved', value: color})
    }
}

