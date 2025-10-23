import request from "/src/utils/request";

// 发送验证码
export function smsSend(phoneNumber) {
    return request({
        url: "/login/otp/send",
        method: "post",
        params: {
            mobile: phoneNumber
        }
    });
}
// 通过短信登录
export function smsLogin(data) {
    return request({
        url: "/login/sms",
        method: "post",
        data: data
    });
}
// 第三方登录
export function socialLogin(data) {
    return request({
        url: "/login/social",
        method: "post",
        data: data
    });
}
// 登录方法
export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data: data,
  });
}