import updateCommentCounter from '../src/modules/commentcounter.js';
import { JSDOM } from 'jsdom';

// Create a fake DOM for testing
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Meal Finder</title>
    </head>

    <body>
      <div id="popup"></div> <!-- Add the popup element here -->
    </body>
  </html>
`);

global.document = dom.window.document;
global.window = dom.window;

