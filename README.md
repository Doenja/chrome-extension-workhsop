# Chrome extension workshop
This is a chrome extension that lets you choose the text color of any page you visit!

It demonstrates the working of popups, background scripts and content scripts. They communicate with eachother using the chrome runtime message API.

## How does it work?
The project is a little popup that has a color picker. Whenever the user inputs a color this value gets send to the service worker. The service worker saves this value to be able to use it later for other tabs. It also sends the saved color to the content script of the tab that is currently active, or any new that that gets opened. The content script then styles all the text in its tabs body to match the received color.

## How do extensions work?
I've written documentation on how modern chrome extensions work. 
You can find all of it on: https://humanoids.nl/curriculum/developers-guide/chrome-extensions/introduction


