// export const BASE_URL = "http://localhost:8000";
export const BASE_URL = "http://178.208.79.39:8000";
export const TOKEN = "b1dcbce7fe0dce859496b1c95c290f7423eb665e";

// const headers = {
//   authorization: `Token ${TOKEN}`,
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

// const getResponseData = (res: Response) => {
//   if (!res.ok) {
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
//   return res.json();
// };

// export const getDataAmbassador = () => {
//   return fetch(`${BASE_URL}/api/v1/ambassadors/`, {
//     method: "GET",
//     headers,
//   }).then(getResponseData);
// };

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