
import axios from 'axios';

// Set the base URL of your Laravel API
const apiClient = axios.create({
  baseURL:`http://127.0.0.1:8000/api/v1.0.0/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}` 
  }
});

export default apiClient;


