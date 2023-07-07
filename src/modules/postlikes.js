const postLike = async (appId, itemId) => {
  try {
    const involvementLikeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

    const response = await fetch(involvementLikeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });

    if (response.ok) {
      return true;
    }
    throw new Error('Failed to post like');
  } catch (error) {
    console.error('Failed to post like:', error);
    throw error;
  }
};

export default postLike;
