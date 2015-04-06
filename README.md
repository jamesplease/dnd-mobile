# dnd-mobile
Drag and drop tests for mobile devices.

### Installation

1. Clone this repository.
2. Run `bower install` from the root project directory.
3. Start a simple server from the directory, and navigate to `127.0.0.1` in your browser.

### Testing

Try to drag the grey box. If it can be dragged, then the test is a success.

### FAQ

#### How do I start a server?

My preferred method is [`node-static`](https://github.com/cloudhead/node-static). Simply
install it globally via `npm i -g node-static`, then run `static` from this project's
directory.

#### How do I test it on mobile?

1. Get your IP address from your network settings.
2. Navigate to that IP on your mobile device.
3. Try to drag the box.