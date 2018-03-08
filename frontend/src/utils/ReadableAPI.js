/* global localStorage */
import fetch from 'cross-fetch';

const api = 'http://localhost:3001/';

let { token } = localStorage;

if (!token) {
  token = localStorage.token = Math.random().toString(36).sub(-8);
}

const headers = {
  Authorization: token,
  'Content-Type': 'application/json',
};

export const getCategories = () =>
  fetch(`${api}categories`, { headers })
    .then(data => data.json())
    .then(data => data);

export const getPosts = () =>
  fetch(`${api}posts`, { headers })
    .then(data => data.json())
    .then(data => data);

export const getPost = id =>
  fetch(`${api}posts/${id}`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);

export const vote = (id, option) =>
  fetch(`${api}posts/${id}`, { headers, method: 'POST', body: JSON.stringify({ token, option }) })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);

export const getComments = id => 
  fetch(`${api}posts/${id}/comments`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
