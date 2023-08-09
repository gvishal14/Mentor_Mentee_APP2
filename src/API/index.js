import AppUrl from "./AppUrl";

export const Registration = (data) => {
    return fetch(AppUrl.REGISTRATION, {
        method: 'POST',
        body: data,
        // headers: { "Authorization": `Token ${token}` }
    }).then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e, 'error'));
};

export const Otp = (data, token) => {
    console.log('token', token)
    return fetch(AppUrl.OTP, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => response)
      .catch(e => console.log(e, 'error'));
  };


  export const Login = (data,token) => {
    console.log('token', token)
    return fetch(AppUrl.LOGIN, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 
        Authorization: token,
        'Content-Type': 'application/json',
       },
    }).then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e, 'error'));
};


export const Forget = (email) => {
  console.log('URl--->', `${AppUrl.FORGET + email}`)
  return fetch(`${AppUrl.FORGET + email}`, {
      method: 'GET',
      
  }).then(response => response.json())
      .then(response => response)
      .catch(e => console.log(e, 'error'));
};

export const Reset = (data,token) => {
  return fetch(AppUrl.RESET, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 
        Authorization: token,
        'Content-Type': 'application/json',
      }
  }).then(response => response.json())
      .then(response => response)
      .catch(e => console.log(e, 'error'));
};

// export const SessionList = (mentorid) => {
//   const url = `${AppUrl.SESSIONLIST}&mentorid=${mentorid}&page=1&filter={}&sessionType=online`;
//   console.log('URL-->', url);
  
//   return fetch(url, {
//   // console.log('URl--->', `${AppUrl.SESSIONLIST + mentorid}`)
//   // return fetch(`${AppUrl.SESSIONLIST}`, {
//       method: 'GET',
      
//   }).then(response => response.json())
//       .then(response => response)
//       .catch(e => console.log(e, 'error'));
// };

export const fetchSessionList = async (mentorid, sessionType,token) => {
  // const url = `${BASEURL}/mentorship/getAllDaywise?mentorid=${mentorid}&page=${1}&filter=${{}}
  //              &sessionType=${sessionType}`;
  const url = `${AppUrl.fetchSessionList}&mentorid=${mentorid}&page=1&filter=&sessionType=${sessionType}`;
  console.log("Data---->",mentorid,sessionType)
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 
        Authorization: token,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('data',data)
    return data;

  } catch (error) {
    console.error('Error fetching session list:', error);
    throw error;
  }
};