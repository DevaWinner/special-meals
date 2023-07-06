import likeurl from '../api/apidata.js';

const getlikes = async () => {
  try {
    const response = await fetch(likeurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
export default getlikes;