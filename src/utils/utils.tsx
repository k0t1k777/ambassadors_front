// export const BASE_URL = "http://localhost:8000";
export const BASE_URL = 'http://5.35.89.44:8000/';
export const TOKEN = 'dd4f93c31dc3e3f2b23f66cbd6fa0619a1d6fa97';

const headers = {
  authorization: `Token ${TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getDataAmbassador = () => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getDataSending = () => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

// export const login = ({ email, password }) => {
//   return fetch(`${BASE_URL}/api/v1/signin`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   }).then(getResponseData);
// };
