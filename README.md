# Magic marker
This is a chrome extension that lets you choose the text color of any page you visit!

It demonstrates the working of popups, background scripts and content scripts. They communicate with eachother using the chrome runtime message API.

## How do extensions work?
I've written documentation on how chrome extensions work. 
You can find all of it on: https://humanoids.nl/curriculum/developers-guide/chrome-extensions/introduction

## How does this extension work?
The extension has a little popup that shows a color picker. Whenever the user inputs a color this value gets send to a service worker. The service worker saves this value in the local storage to use it later when the user opens new tabs. It also sends the saved color to the content script of the tab that is currently active. The content script then styles all the text in its tabs body to match the received color.


