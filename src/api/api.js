import axios from 'axios';

const getTest = async () => {
  const response = await axios.get('/test');
  console.log(response);
  return response;
};

export { getTest };
