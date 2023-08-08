const BASEURL = "https://mean.stagingsdei.com:452"

 

export default {

    REGISTRATION: BASEURL + "/mentor/register",
    OTP: BASEURL + "/auth/otpverify",
    LOGIN: BASEURL+ "/auth/login",
    FORGET: BASEURL+ "/auth/forgot-password?email=",
    RESET: BASEURL+ "/auth/create-password",
    fetchSessionList: BASEURL + `/mentorship/getAllDaywise?mentorid=${{}}&page=${{}}&filter=${{}}&sessionType=${{}}`,
   
}
