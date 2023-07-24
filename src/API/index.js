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

export const Otp = (data) => {
    return fetch(AppUrl.OTP, {
        method: 'POST',
        body: data,
        // headers: { "Authorization": `Token ${token}` }
    }).then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e, 'error'));
};