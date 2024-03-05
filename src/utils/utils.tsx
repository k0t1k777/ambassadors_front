// export const BASE_URL = "http://localhost:8000";
export const BASE_URL = 'http://178.208.79.39:8000';
export const TOKEN = '39795cab103d8c6d824d53c2acb64a7878be9430';

const headers = {
  authorization: `Token ${TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json'
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
    headers
  }).then(getResponseData);
};

export const getContent = () => {
  return fetch(`${BASE_URL}/api/v1/content/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredSex = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?sex=${value}`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getFilteredCountry = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getFilteredCity = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getFilteredStatus = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?status=${value}`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getFilteredCourse = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getFilteredDate = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?created=${value}`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getSearchAmbassadors = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const getDropdowns = () => {
  return fetch(`${BASE_URL}/api/v1/dropdowns/`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const updateAmbassadorStatus = (status: string, id: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      status: status,
    }),
  }).then(getResponseData);
};

export const updateAmbassadorOnboarding = (onboarding: boolean, id: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      onboarding_status: onboarding,
    }),
  }).then(getResponseData);
};

export const addNewAmbassador = (ambassador: object) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(ambassador),
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
