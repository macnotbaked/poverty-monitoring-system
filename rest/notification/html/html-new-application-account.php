<?php

function getHtmlNewApplicationAccount($key, $ROOT_DOMAIN, $IMAGES_URL)
{
    $html = '<div
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
                width: 360px;
                text-align: center;
                margin: 0 auto;
                padding: 100px 0;
            "
            >
            <div
                style="
                background-color: #fff;
                padding: 30px;
                line-height: 1.4;
                margin-bottom: 30px;
                "
            >
                <div style="text-align: center; margin-bottom: 20px">
                <figure>
                <img
                src="' . $IMAGES_URL . '/fbs-lcss-logo-email.png"
                alt="FBS Logo"
                />
                </figure>
                <h1 style="text-align: center;color: #000; font-size: 20px">New Account</h1>
                <p style="color:#000;">
                    To get started using your LCSS account you need to create a password.
                </p>
                <a
                    href="' . $ROOT_DOMAIN . '/trainee/create-password?key=' . $key . '"
                    style="
                    padding: 8px 16px;
                    background-color: #1568d7;
                    color: #fff;
                    border-radius: 5px;
                    text-decoration: none;
                    width: 50%;
                    display: block;
                    margin: 30px auto 0;
                    text-align: center;
                    "
                    >Create Password</a
                >
                <p style="margin-top: 20px; color: #000">
                    Or, paste this link into your browser: <strong style="word-wrap: break-word">' . $ROOT_DOMAIN . '/trainee/create-password?key=' . $key . '</strong>
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
                    color:#000;
                "
                >
                &copy; ' . date("Y") . ' All Rights Reserved<br />Frontline Business Solutions, Inc., Baloc Road, Brgy. San Ignacio,<br />
                San Pablo City, 4000, Laguna, Philippines
                </small>
            </div>
            </div>
        </div>';
    return $html;
}
