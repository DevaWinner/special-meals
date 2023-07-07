const updateCommentCounter = () => {
  const commentsCounter = document.getElementById('comment-counter');
  const commentsList = document.getElementById('comments-list');

  if (commentsCounter && commentsList) {
    const commentElements = commentsList.getElementsByClassName('comment-element');
    const commentCount = commentElements.length;
    commentsCounter.textContent = `(${commentCount})`;
  }
};

export default updateCommentCounter;
