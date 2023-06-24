import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1&per_page=5');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
