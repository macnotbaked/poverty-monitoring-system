<?php

function getHtmlNewAccount($key, $ROOT_DOMAIN, $IMAGES_URL, $name)
{
  $html = '<div
    style="
      font-family: Arial, Helvetica, sans-serif;
      background-color: #e9e9e9;
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
      <div
        style="background-color: #fff; line-height: 1.4; margin-bottom: 30px"
      >
        <div
          style="border-bottom: 1px solid #d4d4d4; padding: 10px 0 10px 10px"
        >
          <img
            style="width: 150px"
            src="https://lh3.googleusercontent.com/2vx039FxFahu1x1EODNAB1oZyZH5ZYjj5rGK7Lhos8a_tKRLtzTBCAcUqqQnpKlX8rb1pJ3JheZH-pP64WUbsZ87j-4d85eitzf0Ss-vdXb8CzkQJzwiNeh-nkXSXYyui4KjC12ipTsYu4kC9E9WY1bM8irXH5D5_4NlAJIShMDtTJl09DnxMxSqSJ0IkhWGkaVmEWE1tt29C6l-77Q9dWVOQ8RTYiC1YgntDuXAVknhn2Xiu1ZSC4LmBok7jAULPUfaqk9gme42Yhqmdnx2D19OhSoRfeUfuyJD2TVkS5Ou2IlSb7V1GDoraRyrDxkyKskrdjONyjEug5a6CUbpg9IA1b8NpJ-RBKwnKE0-lVc8jiqrM4ADQLLQMZ3bmPtBVmdX2MvHgt-xdAHKyBbSY01YHToM1C2MrreDObe4wUtrPvmKUd37c9qGssy7dmk56pcy5VbgyQCbxMgAAwhm4XqP0qZmJq425NDjFerZJ9FNjOOGBOfgrlpM4vLU1JS7Wf5nlCzqpcu2jxsXHRKX7zIgqiBqeZW3JkPBzO0ZdrONlE8Jgsr4zcRo-s-LoJ-CLvqeXyttOEHIjikNPKN_c2p6kMgglBzcS2VAJ8kDSC5SDxjvjhuaQvBTCl2FHs0F4p6Z78LTb1kfHKk5OqDt703kpiqfmaZ2pWDTdPiCIpNc2ff_F_aBfbZCUJq-PgLNe8rr6i5Iyht0jrI3jVIGtH2ZAU4vAXqrV3JrdAbr44dog1K7R-be8iSyUF1jj7nilRLBZHFaWh-s-DEvhtOEtG3ih-zoHpcC_oDThUlWsPq_lwJr-SL0fjP_cfw6DIc5hQM4JjEVPWLdFaQaOIbzq3O-0MITjnf8bswgWhbUhynM10oGRLr0L_J-IgejEVm59S_pyoFhzKFKZtQDDN-kPhCvFE80MCbr-PvnN8ahRt0onRToGLEZ3hoLZs_rHkDsIS__P1Yd7mfradPbIdRvD7MCQlgAdQrEzZ1WFfRlEIbyldHagNB7G8oxEDMwpVSL0epEGjCIBS-Zy1yTh-DhnMkpLTWiC6CPVvtR5nEymwX_gtQYuIOKMpK8Bl-tmdQeurIOyj7zvAj72P0L8NZQ3u3h=w200-h59-no?authuser=0"
            alt=""
          />
        </div>

        <div style="margin-bottom: 20px; padding: 30px">
          <p style="color: #000; font-size: 20px">Hi ' . $name . ',</p>
          <p>
            To get started you need to create a password. Your account will
            not be created until you have succesfully created a password.
          </p>
          <a
            href="' . $ROOT_DOMAIN . '/create-password?key=' . $key . '"
            style="
              padding: 8px 16px;
              background-color: #49958b;
              color: #fff;
              border-radius: 5px;
              text-decoration: none;
              width: 30%;
              display: block;
              margin: 30px auto 0;
              text-align: center;
            "
            >Create Password</a
          >
          <p style="margin-top: 20px; color: #000">
            Or, paste this link into your browser:
            <strong style="word-wrap: break-word"
              >' . $ROOT_DOMAIN . '/create-password?key=' . $key .
    '</strong
            >
          </p>
        </div>
      </div>

      <div style="position: relative; 
      text-align: center !important;
      ">
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
          &copy; ' . date("Y") . ' All Rights Reserved<br />Poverty Monitoring
          System, Brgy. San Mateo,<br />
          San Pablo City, 4000, Laguna, Philippines
        </small>
      </div>
    </div>
  </div>';
  return $html;
}
