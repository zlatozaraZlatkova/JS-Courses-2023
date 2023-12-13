import { get, post } from './api.js';

const endpoints = {
  register: "users/register",
  user: "users/login",
  logout: "users/logout",
};

export async function register(email, password) {
  const user = await post(endpoints.register, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
}

export async function login(email, password) {
  const user = await post(endpoints.user, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
}


export async function logout() {
  get(endpoints.logout);
  sessionStorage.removeItem('user');
}