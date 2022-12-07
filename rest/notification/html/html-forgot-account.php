<?php

function getHtmlForgotAccount($key, $ROOT_DOMAIN, $name)
{
  $html = '<div
  style="
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
    width: 100%;
    height: 100%;
    /* position: relative; */
  "
>
  <div
    style="
      /* position: absolute; */
      left: 50%;
      top: 50%;
      /* transform: translate(-50%, -50%); */
      width: 660px;
      text-align: left;
      margin: 0 auto;
      padding: 100px 0;
    "
  >
    <div style="background: #def2f1; line-height: 1.4; margin-bottom: 30px">
      <div style="margin-bottom: 20px; padding: 30px; text-align: center">
        <p style="color: #000; font-size: 20px">Hi ' . $name . ',</p>
        <p style="width: 30rem; margin: 0 auto">
          It looks like you are resetting your password.
        </p>
        <p style="width: 30rem; margin: 0 auto">
          To continue resettings your password please click the button
          below.
        </p>
        <p style="width: 30rem; margin: 15px auto 0">
          If you did not request a password change, then just ignore this
          message.
        </p>
        <div style="padding: 20px 0">
          <img
            style="width: 110px"
            src="https://lh3.googleusercontent.com/kQtkbgKZVynaayh0SZwmSTSlUw47nFjuhgdu9PRJgLcgEs4xcEXCSwukq5PLVc0KxcW98RWo4Q2ZCzrWhchv8R_YBIlojUiTeDMeIgOjtbvM9TinO8BkcaxiVF-JElHNm2GgKJ1q0c0E8PAjt_uLw-jvzPYfdVKarEe6qN5rGOwu0SV7K6ODugP6Jmc1Xw235efx1gnNCFUN-3tzXsJtMIorhrQiAwZ5fV3zHQ-Wc9s7M7dSNro38Pdx3CQtFb0okKdKAHwpbPZt6jqqQUEQyMTLyXHUJBVlgyUfUdmis5jWzwLlZgGp2h4AVYzigH08rtdRpR_OVy7BjnA0Vux9TTgNy9yxqSc4UC5EPX2lU9zdnspLoJdZR_lTkd81rD8susReOSuucWynl0H-1qgn88a5xIwh0PqgG7lgZr-ewL5RV4A4xRurmwTlwRBj3A2dUImDr_V_BB3XdSYOCaGgqoRbNbXSNDQkRdyuBsUX-Dwy2rJQ5caiBZAp1zQgYtBirOjKevBB2JQUAMhroXVHLMQnFqn_3iFezg58lB4Rt4vuCjF-iNGx_Id-HYplvg_YviUxzmOFiTGy-Wrj5aFUe-W01h-FXBm3IhNb9l-1kEB6oh_3s5Wb2_EOiLpXEPqb-DraCH16hOaJL9yAUDzAO061UDrlO1yVXtjO0isRC7nLFEbp-INTBA9ckqjx53hX0Eaghs7nLQOiuPGUpaOvHkL130KyG3pZH15_5B2TnYBHbX5sSkHeS6IV6lqjYhNCzqzGtghpiyrcmai5ypqScAEob5u4R1GfohXwne0VPbmVQ8oc07UP9bhxEhbuxbKILUlzSIQSU7w0Y3M6uryGhmyTKw74s8WrJBi-DufFaleGio2VYZdeD4xzF91pFMw0st3yN7aqQgVpBrzhMhZ4L7c25I4VLKfPYfll5tRv-6Yo4sSqLpTZyiOX_5OoOPIFdkit5nwXBIxWaNmuJy5IIdETw9IDfodl6HFqLe-pLUkhnY8pSL7lDuqer6xw4q2_ZGQKe5Ri-PJHBg3tiXeiwek-YkMK3EpVsFKgm-4SYb3Q6M0QTTEQACvyz8hVCl3NDFEhttsY7BORj5Vq0TujksEJIAPZPUU=w157-h181-no?authuser=0"
            alt=""
          />
        </div>
        <a
          href="' . $ROOT_DOMAIN . '/create-password?key=' . $key . '"
          style="
            padding: 8px 16px;
            background-color: #17252a;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
            max-width: 50%;
            display: block;
            margin: 0 auto;
            text-align: center;
          "
          >Reset Password</a
        >
        <p style="color: #000">
          Or, paste this link into your browser:
          <strong style="word-wrap: break-word"
            >' . $ROOT_DOMAIN . '/create-password?key=' . $key . '</strong
          >
        </p>
        <hr />
        <div style="position: relative; text-align: center !important">
          <small
            style="
              line-height: 1.4;
              font-size: 10px;
              width: 100%;
              color: #000;
            "
          >
            &copy; ' . date("Y") . ' All Rights Reserved<br />Poverty
            Monitoring System, Brgy. San Elena,<br />
            San Pablo City, 4000, Laguna, Philippines
          </small>
        </div>
      </div>
    </div>
  </div>
</div>';
  return $html;
}
