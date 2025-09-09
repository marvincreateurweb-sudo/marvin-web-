import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const portfolioAPI = {
  // Get personal information
  getPersonalInfo: async () => {
    try {
      const response = await apiClient.get('/portfolio/personal');
      return response.data;
    } catch (error) {
      console.error('Error fetching personal info:', error);
      throw error;
    }
  },

  // Get services and benefits
  getServices: async () => {
    try {
      const response = await apiClient.get('/portfolio/services');
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },

  // Get portfolio projects
  getProjects: async () => {
    try {
      const response = await apiClient.get('/portfolio/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Get pricing packages
  getPricing: async () => {
    try {
      const response = await apiClient.get('/portfolio/pricing');
      return response.data;
    } catch (error) {
      console.error('Error fetching pricing:', error);
      throw error;
    }
  },

  // Get testimonials
  getTestimonials: async () => {
    try {
      const response = await apiClient.get('/portfolio/testimonials');
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  },

  // Submit contact form
  submitContact: async (contactData) => {
    try {
      const response = await apiClient.post('/contact', contactData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
};

export default portfolioAPI;