export const BASE_URL = 'https://crm-ambassadors.hopto.org';
export const TOKEN = '533a0668f9e834d15f0c79194a37daa90b346740';

const headers = {
  authorization: `Token ${TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export const addNewContent = (content: object) => {
  return fetch(`${BASE_URL}/api/v1/content/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(content),
  }).then(getResponseData);
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

export const getFilteredMonths = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/?search=${value}`, {
    method: 'GET',
    headers,
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
  return fetch(`${BASE_URL}/api/v1/ambassadors/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const postSending = (selects: object) => {
  return fetch(`${BASE_URL}/api/v1/sending/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(selects)
  }).then(getResponseData);
};

export const getBudjet = () => {
  return fetch(`${BASE_URL}/api/v1/merch/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getBudjetDownload = () => {
  return fetch(`${BASE_URL}/api/v1/merch/download`, {
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

export const updateAmbassadorCourse = (course: number | undefined, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/ambassadors/${id}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      course: course
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

export const getProgram = () => {
  return fetch(`${BASE_URL}/api/v1/loyalty/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getNotifications = () => {
  return fetch(`${BASE_URL}/api/v1/notifications/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getNotificationsUnseen = () => {
  return fetch(`${BASE_URL}/api/v1/notifications/unseen`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getNotificationsAllAsRead = () => {
  return fetch(`${BASE_URL}/api/v1/notifications/mark_all_as_read/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getNotificationsOneAsRead = (notifications: unknown, id: string | undefined) => {
  return fetch(`${BASE_URL}/api/v1/notifications/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      notifications: notifications,
    }),
  }).then(getResponseData);
};

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

export const getDataPromocodes = () => {
  return fetch(`${BASE_URL}/api/v1/promos/`, {
    headers
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

export const getDataPromocodesArchive = () => {
  return fetch(`${BASE_URL}/api/v1/promos/archive/`, {
    headers
  }).then(getResponseData);
};

export const getSearchPromos = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/promos/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getSearchPromosArchive = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/promos/archive/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredPromosAmbaStatus = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/promos/?ambassador__status=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredPromosArchiveAmbaStatus = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/promos/archive/?status=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredPromosOrder = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/promos/?ordering=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredPromosArchiveOrder = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/promos/archive/?ordering=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredPromosDateRange = (value1: string, value2: string) => {
  return fetch(`${BASE_URL}/api/v1/promos/?created_after=${value1}&created_before=${value2}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredPromosArchiveDateRange = (value1: string, value2: string) => {
  return fetch(
    `${BASE_URL}/api/v1/promos/archive/?created_after=${value1}&created_before=${value2}`,
    {
      method: 'GET',
      headers
    }
  ).then(getResponseData);
};

export const getFilteredContentDateRange = (value1: string, value2: string) => {
  return fetch(`${BASE_URL}/api/v1/content/?created_after=${value1}&created_before=${value2}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getSearchContent = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/content/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getSearchProgram = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/loyalty/?search=${value}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredProgramDateRange = (value1: string, value2: string) => {
  return fetch(`${BASE_URL}/api/v1/loyalty/?start=${value1}&finish=${value2}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getFilteredMerchDateRange = (value1: string, value2: string) => {
  return fetch(`${BASE_URL}/api/v1/merch/?start=${value1}&finish=${value2}`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};

export const getSearchSending = (value: string) => {
  return fetch(`${BASE_URL}/api/v1/loyalty/?search=${value}`, {
    method: 'GET',
    headers
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

export const login = (email: string, password: string) => {
  return fetch(`${BASE_URL}/api/v1/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(getResponseData);
};
