import updateCommentCounter from '../modules/commentcounter.js';

// Mock the DOM elements for testing
document.body.innerHTML = `
  <div id="comment-counter"></div>
  <ul id="comments-list">
    <li class="comment-element">Comment 1</li>
    <li class="comment-element">Comment 2</li>
    <li class="comment-element">Comment 3</li>
  </ul>
`;

describe('updateCommentCounter', () => {
  beforeEach(() => {
    // Reset the comment counter and comments list before each test
    document.getElementById('comment-counter').textContent = '';
    document.getElementById('comments-list').innerHTML = `
      <li class="comment-element">Comment 1</li>
      <li class="comment-element">Comment 2</li>
      <li class="comment-element">Comment 3</li>
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

  test('should update comment counter with count of 0', () => {
    // Remove all comment elements from the comments list
    document.getElementById('comments-list').innerHTML = '';
    updateCommentCounter();
    const commentCounter = document.getElementById('comment-counter');
    expect(commentCounter.textContent).toBe('(0)');
  });
});
