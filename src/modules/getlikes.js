const fetchLikes = async (appId) => {
  try {
    const involvementLikeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

    const response = await fetch(involvementLikeUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch likes');
  } catch (error) {
    console.error('Failed to fetch likes:', error);
    return [];
  }
};

export default fetchLikes;