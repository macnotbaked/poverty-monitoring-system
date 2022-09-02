<?php

function getHtmlNotifyTrainee($firstname, $IMAGES_URL)
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
                  padding: 30px 30px 10px;
                  line-height: 1.4;
                  margin-bottom: 15px;
                  border-radius: 25px;
                "
              >
                <div style="text-align: center; margin-bottom: 20px">
                  <p style="color: #000; text-align: left; font-size: 14px">
                    Hi <span
                      style="
                        font-weight: 700;
                        text-transform: uppercase;
                      ">' . $firstname . '!</span
                    >
                  </p>
                  <p
                    style="
                      color: #000;
                      text-align: left;
                      font-size: 14px;
                      text-align: justify;
                      text-indent: 30px;
                    "
                  >
                    We would like to inform you that we received your application to our
                    ON-THE-JOB training program. The head of our Learning Center Solutions
                    and Human Resource staff will be waiting for the documents that you
                    need to submit for you to become an official trainee. The list of
                    requirements was sent by Ms. Kennie Deriquito in a separate email.
                    Once your application is approved, you will receive an invitation to
                    Google Meeting for the official start of training.
                  </p>
                  <p
                    style="
                      color: #000;
                      text-align: left;
                      font-size: 14px;
                      text-align: justify;
                      text-indent: 30px;
                    "
                  >
                    Thank you for considering Frontline Business Solutions as your
                    industry partner in your On-the-Job Training.
                  </p>

                  <hr style="border: 0.5px solid #ddd; margin: 50px 0" />

                  <p style="color: #000; text-align: left; font-size: 14px">
                  Your Growth Partner, <br />
                  <span
                    style="
                      font-weight: 700;
                      text-transform: uppercase;
                      text-align: left;
                    "
                  >
                    The FBS Team
                  </span>
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
