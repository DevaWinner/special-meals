const fetchComments = async (itemId) => {
  try {
    const appId = 'KfZAQJtzqeC2UIXf6vLd';
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comments.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert('error');
    return [];
  }
};

export default fetchComments;