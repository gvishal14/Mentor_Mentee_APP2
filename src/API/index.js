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
