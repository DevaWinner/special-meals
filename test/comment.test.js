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

describe('updateCommentCounter', () => {
  beforeEach(() => {
    // Reset the comment counter and comments list before each test
    const popup = document.getElementById('popup');
    popup.innerHTML = `
      <div id="popup-content">
        <div id="popup-header">
          <h2 id="meal-title"></h2>
          <button id="close-popup">X</button> 
        </div>
        <div id="popup-body">
          <div id="popup-left">
            <img id="popup-img" src="" alt="">
            <p id="meal-instructions"></p>
          </div>
          <div id="popup-right">
            <form id="comment-form">
              <div class="form-control">
                <label for="comment-user">Name</label>
                <input type="text" id="comment-user" placeholder="Enter your name">
              </div>
              <div class="form-control">
                <label for="comment-input">Comment</label>
                <textarea id="comment-input" placeholder="Enter your comment"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
            <div id="comments">
              <h3>Comments <span id="comment-counter"></span></h3>
              <ul id="comments-list">
                <li class="comment-element">Comment 1</li>
                <li class="comment-element">Comment 2</li>
                <li class="comment-element">Comment 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  

  test('should update comment counter with correct count', () => {
    updateCommentCounter();
    const commentCounter = document.getElementById('comment-counter');
    expect(commentCounter.textContent).toBe('(3)');
  });

  test('should handle no comment counter element', () => {
    // Remove the comment counter element
    document.getElementById('comment-counter').remove();
    expect(() => {
      updateCommentCounter();
    }).not.toThrow();
  });

  test('should handle no comments list element', () => {
    // Remove the comments list element
    document.getElementById('comments-list').remove();
    expect(() => {
      updateCommentCounter();
    }).not.toThrow();
  });
