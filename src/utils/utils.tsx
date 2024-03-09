// export const BASE_URL = "http://localhost:8000";
export const BASE_URL = 'http://5.35.89.44:8000';
export const TOKEN = '85f4eb5d5a8b44cfd13b6af1b23721d03a1ca826';

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

export const getDataCurrentAmbassador = (id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredSex = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?sex=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredCountry = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredCity = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredStatus = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?status=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredCourse = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredDate = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?created=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getSearchAmbassadors = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getDropdowns = () => {
  return fetch(`${BASE_URL}/api/v1/dropdowns/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const updateAmbassadorStatus = (status: string, id: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      status: status
    })
  }).then(getResponseData);
};

export const updateAmbassadorOnboarding = (onboarding: boolean, id: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      onboarding_status: onboarding
    })
  }).then(getResponseData);
};

export const addNewAmbassador = (ambassador: object) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(ambassador)
  }).then(getResponseData);
};

export const getDataSending = () => {
  return fetch(`${BASE_URL}/api/v1/sending/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getBudjet = () => {
  return fetch(`${BASE_URL}/api/v1/merch/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const updateAmbassadorName = (
  name: string | undefined,
  id: string | undefined | undefined
) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      name: name
    })
  }).then(getResponseData);
};

export const updateAmbassadorSex = (sex: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      sex: sex
    })
  }).then(getResponseData);
};

export const updateAmbassadorCountry = (country: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      country: country
    })
  }).then(getResponseData);
};

export const updateAmbassadorCity = (city: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      city: city
    })
  }).then(getResponseData);
};

export const updateAmbassadorAddress = (address: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      address: address
    })
  }).then(getResponseData);
};

export const updateAmbassadorIndex = (index: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      index: index
    })
  }).then(getResponseData);
};

export const updateAmbassadorPromo = (promo: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      promo: promo
    })
  }).then(getResponseData);
};

export const updateAmbassadorEmail = (email: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      email: email
    })
  }).then(getResponseData);
};

export const updateAmbassadorPhone = (phone: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      phone: phone
    })
  }).then(getResponseData);
};

export const updateAmbassadorTelegram = (telegram: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      telegram: telegram
    })
  }).then(getResponseData);
};

export const updateAmbassadorCurrentWork = (
  current_work: string | undefined,
  id: string | undefined
) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      current_work: current_work
    })
  }).then(getResponseData);
};

export const updateAmbassadorEducationGoal = (education_goal: unknown, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      education_goal: education_goal
    })
  }).then(getResponseData);
};

// export const getProgram = () => {
//   return fetch(`${BASE_URL}/api/v1/program/`, {
//     method: 'GET',
//     headers,
//   }).then(getResponseData);
// };

// export const getNotifications = () => {
//   return fetch(`${BASE_URL}/api/v1/notifications/`, {
//     method: 'GET',
//     headers,
//   }).then(getResponseData);
// };

export const updateAmbassadorGoals = (ambassador_goals: unknown, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      ambassador_goals: ambassador_goals
    })
  }).then(getResponseData);
};

export const updateAmbassadorBlogLink = (blog_link: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      blog_link: blog_link
    })
  }).then(getResponseData);
};

export const updateAmbassadorClothingSize = (
  clothing_size: string | undefined,
  id: string | undefined
) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      clothing_size: clothing_size
    })
  }).then(getResponseData);
};

export const updateAmbassadorFootSize = (foot_size: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      foot_size: foot_size
    })
  }).then(getResponseData);
};

export const updateAmbassadorComment = (comment: string | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      comment: comment
    })
  }).then(getResponseData);
};

export const getContent = () => {
  return fetch(`${BASE_URL}/api/v1/content/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

// export const getFilteredState = (value: string) => {
//   return fetch(`${BASE_URL}/api/v1/ambassadors/?guide_step=${value}`, {
//     method: 'GET',
//     headers
//   }).then(getResponseData);
// };

export const postNewContent = () => {
  return fetch(`${BASE_URL}/api/v1/content/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({})
  }).then(getResponseData);
};

export const updateContentLink = (link: string | undefined, id: string | undefined | undefined) => {
  return fetch(`${BASE_URL}/api/v1/content/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      link: link
    })
  }).then(getResponseData);
};

export const updateContentFile = (file: string | undefined, id: string | undefined | undefined) => {
  return fetch(`${BASE_URL}/api/v1/content/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      file: file
    })
  }).then(getResponseData);
};

// {
//   "id": "e958c1ca-64ec-46bc-b612-97364788a471",
//   "telegram": "test_engineer",
//   "name": "Соколова Мария Алексеевна",
//   "status": "not_ambassador",
//   "onboarding_status": true,
//   "sex": "w",
//   "education_goal": {
//       "id": 2,
//       "title": "Углубление имеющихся знаний, чтобы использовать их в текущей работе"
//   },
//   "country": "Россия",
//   "city": "Новосибирск",
//   "address": "пер. Технический, д. 12, кв. 345",
//   "index": "630123",
//   "email": "maria.sokolova@example.com",
//   "phone": "+7 913 876 54 32",
//   "current_work": "QA Experts Group",
//   "education": "Высшее тестирование программного обеспечени",
//   "blog_link": "maria-tester-insights.com",
//   "clothing_size": "xs",
//   "foot_size": "38",
//   "comment": "Тестовый профиль с разнообразными данными для проверки различных аспектов системы.",
//   "ambassador_goals": [
//       {
//           "id": 1,
//           "title": "Вести блог"
//       },
//       {
//           "id": 3,
//           "title": "Писать статьи"
//       }
//   ],
//   "course": {
//       "id": 7,
//       "title": "Маркетинг"
//   },
//   "created": "2024-02-25T15:00:00+03:00",
//   "updated": "2024-03-06T13:51:00.033553+03:00",
//   "guide_content": 0,
//   "content": []
// }

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
