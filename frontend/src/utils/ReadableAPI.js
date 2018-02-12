/* global localStorage */
import fetch from 'cross-fetch';

const api = 'http://localhost:3001/';

let { token } = localStorage;

if (!token) {
  token = localStorage.token = Math.random().toString(36).sub(-8);
}

const headers = {
  Authorization: token,
};

export const getCategories = () =>
  fetch(`${api}categories`, { headers })
    .then(data => data.json())
    .then(data => data);

export const getPosts = () =>
  fetch(`${api}posts`, { headers })
    .then(data => data.json())
    .then(data => data);
