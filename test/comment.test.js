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

// Mock the fetchComments function
jest.mock('../src/api/fetchcomments.js', () => {
  return jest.fn(() => {
    return Promise.resolve([
      {
        id: 1,
        username: 'John Doe',
        comment: 'This is a comment',
        creation_date: '2021-01-01 00:00:00',
      },
      {
        id: 2,
        username: 'Jane Doe',
        comment: 'This is another comment',
        creation_date: '2021-01-02 00:00:00',
      },
      {
        id: 3,
        username: 'John Smith',
        comment: 'This is a third comment',
        creation_date: '2021-01-03 00:00:00',
      },
    ]);
  });
});
