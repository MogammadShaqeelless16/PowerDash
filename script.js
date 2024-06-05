import { auth, db } from './firebase';
import { login, register } from './services/authentication';
import { getDashboardData, getReportsData } from './services/data';

// Login form submission handler
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  login();
});

// Register form submission handler
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  register();
});

// Dashboard data fetch handler
document.getElementById('dashboard-link').addEventListener('click', () => {
  getDashboardData();
});

// Reports data fetch handler
document.getElementById('reports-link').addEventListener('click', () => {
  getReportsData();
});