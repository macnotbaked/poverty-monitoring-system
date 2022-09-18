<?php

function getHtmlNotifyAdmin($lastname, $firstname, $email, $ROOT_DOMAIN, $IMAGES_URL)
{
  $html = '
  <div
    style="
      font-family: Arial, Helvetica, sans-serif;
      background-color: #e9e9e9;
      width: 100%;
      height: 100%;
      position: relative;
    "
  >
    <div
      style="
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 450px;
        text-align: center;
        margin: 0 auto;
        padding: 25px 0;
      "
    >
      <figure>
      <img
      src="' . $IMAGES_URL . '/fbs-lcss-logo-email.png"
      alt="FBS Logo"
      />
      </figure>
      <div
        style="
          background-color: #fff;
          padding: 30px 60px 10px;
          line-height: 1.4;
          margin-bottom: 15px;
          border-radius: 25px;
        "
      >
        <div style="text-align: center; margin-bottom: 20px">
          <h1
            style="
              text-align: center;
              color: #000;
              font-size: 18px;
              margin: 30px 0 50px;
            "
          >
            New OJT / Immersion Application
          </h1>
          <p style="color: #000; text-align: left; font-size: 14px">
            Name: <span
              style="
                font-weight: 700;
                text-transform: uppercase;
              "
              >' . $firstname . ' ' . $lastname . '</span
            >
          </p>
          <p style="color: #000; text-align: left; font-size: 14px">
            Email: <span
              style="
                font-weight: 700;
                word-break: break-all;
                font-size: 14px;
              "
              >' . $email . '</span
            >
          </p>
          <a
            href="' . $ROOT_DOMAIN . '/admin/trainee-active"
            style="
              padding: 8px 50px;
              background-color: #1568d7;
              color: #fff;
              border-radius: 25px;
              text-decoration: none;
              width: 50%;
              display: block;
              margin: 50px auto 30px;
              text-align: center;
              font-size: 14px;
            "
            >See Details</a
          >
          <hr style="border: 0.5px solid #ddd" />
          <p
            style="
              margin-top: 20px;
              color: #000;
              font-size: 12px;
              text-align: left;
            "
          >
            Or, paste this link into your browser:
            <strong style="word-wrap: break-word"
              >' . $ROOT_DOMAIN . '/admin/trainee-active</strong
            >
          </p>
        </div>
      </div>
  
      <div style="text-align: center; position: relative">
        <small
          style="
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            line-height: 1.4;
            font-size: 10px;
            width: 100%;
            color: #000;
          "
        >
          &copy; ' . date("Y") . ' All Rights Reserved<br />Frontline Business
          Solutions, Inc., Baloc Road, Brgy. San Ignacio,<br />
          San Pablo City, 4000, Laguna, Philippines
        </small>
      </div>
    </div>
  </div>  
  ';
  return $html;
}
