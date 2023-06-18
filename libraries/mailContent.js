import config from '../config.js'

export const mailHtml = (idDevice) => {
  var url = `http://localhost:8080/estaciones/data/?k=${config.APIKEY}=${idDevice}`
  var mailHtml = `<html xmlns:v="urn:schemas-microsoft-com:vml">

  <head>
      <title></title>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style id="aw-autoinject" type="text/css">
          body,
          a {
              word-break: break-word;
          }
  
          .feed__title a {
              text-decoration: underline;
          }
  
          .text-element h1 {
              color: inherit;
              font-family: inherit;
              font-size: 36px;
              line-height: 1.15;
              font-weight: 700;
              margin: 0.5em 0;
          }
  
          .text-element h2 {
              color: inherit;
              font-family: inherit;
              font-size: 32px;
              line-height: 1.15;
              font-weight: 700;
              margin: 0.5em 0;
          }
  
          .text-element h3 {
              color: inherit;
              font-family: inherit;
              font-size: 28px;
              line-height: 1.15;
              font-weight: 700;
              margin: 0.5em 0;
          }
  
          .text-element h4 {
              color: inherit;
              font-family: inherit;
              font-size: 24px;
              line-height: 1.15;
              font-weight: 700;
              margin: 0.5em 0;
          }
  
          .text-element h5 {
              color: inherit;
              font-family: inherit;
              font-size: 20px;
              line-height: 1.15;
              font-weight: 700;
              margin: 0.5em 0;
          }
  
          .text-element h6 {
              color: inherit;
              font-family: inherit;
              font-size: 16px;
              line-height: 1.15;
              font-weight: 700;
              margin: 0.5em 0;
          }
  
          .text-element p,
          .paragraph p {
              color: inherit;
              font-family: inherit;
              font-size: 16px;
              line-height: 1.5;
              margin: 0;
          }
  
          .text-element div {
              color: inherit;
              font-family: inherit;
              font-size: 16px;
              line-height: 1.5;
              margin: 0;
          }
  
          .text-element pre {
              color: inherit;
              display: block;
              font-family: monospace;
              font-size: 16px;
              line-height: 1;
              margin: 1em auto;
              white-space: pre;
              max-width: 500px;
              overflow: auto;
              overflow-wrap: break-word;
          }
  
          .text-element address {
              color: inherit;
              font-family: inherit;
              display: block;
              font-size: 16px;
              font-style: italic;
              line-height: 1.15;
              margin: 0.5em 0;
          }
  
          .text-element blockquote,
          .headline blockquote,
          .paragraph blockquote {
              border-left: 5px solid #ccc;
              font-style: normal;
              margin-left: 0;
              margin-right: 0;
              overflow: hidden;
              padding-left: 15px !important;
              padding-right: 15px !important;
              box-sizing: border-box;
          }
  
          @media only screen and (max-width:599px) {
              img {
                  max-width: 100% !important;
                  min-height: 1px !important;
                  height: auto !important;
              }
  
              .text-element pre {
                  max-width: 250px;
              }
  
              .aw-stack .container {
                  box-sizing: border-box;
                  display: block !important;
                  float: left;
                  max-width: 100% !important;
                  margin: auto;
                  width: 100% !important;
              }
  
              .video .video-content {
                  width: auto !important;
              }
  
              .feed__item--postcard-side,
              .feed__item--postcard-main,
              .feed__item--block {
                  box-sizing: border-box;
                  display: block !important;
                  max-width: 100% !important;
                  margin: auto;
                  width: 100% !important;
              }
  
              .feed__item--block>div {
                  margin: 0 0 16px 0 !important;
              }
  
              .feed__image {
                  width: 100% !important;
              }
  
              .feed__spacer {
                  display: none !important;
              }
          }
      </style>
      <style type="text/css">
          v:* {
              behavior: url(#default#VML);
              display: inline-block;
          }
  
          body,
          #bodyTable,
          #bodyCell {
              height: 100%;
              margin: 0px;
              padding: 0px;
              width: 100%
          }
  
          body {
              background-color: #fefefe;
              color: #333333;
              font-family: Helvetica, Arial, sans-serif;
              font-size: 18px;
              line-height: 1.5em;
              font-weight: 400 !important;
              height: 100%;
              margin: 0 !important;
              padding: 0 !important;
              width: 100%
          }
  
          body,
          table,
          td {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%
          }
  
          table,
          td {
              color: #333333;
              font-family: Helvetica, Arial,
                  sans-serif;
              border-collapse: collapse;
              border-spacing: 0;
              border: 0;
              font-size: 18px;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt
          }
  
          img {
              -ms-interpolation-mode: bicubic;
              border: 0;
              height: auto;
              line-height: 100%;
              max-width: 100%;
              outline: none;
              text-decoration: none;
              color: #333333;
              font-size: 20px;
              font-weight: 700;
              border-radius: 10px
          }
  
          .temp-header img {
              border-radius: 0px
          }
  
          table {
              border-collapse: collapse !important
          }
  
          strong {
              font-weight: 700
          }
  
          .container {
              padding: 0
          }
  
          .floated-none td {
              padding: 0
          }
  
          .contained {
              max-width: 600px;
              width: 100%
          }
  
          .contained img {
              height: auto !important;
              max-width: 100% !important
          }
  
          .paragraph div,
          .paragraph p {
              color: #333333;
              font-family: Helvetica, Arial, sans-serif;
              font-size: 18px;
              line-height: 125%;
              font-weight: 400;
              text-align: left
          }
  
          .text-element div,
          .text-element p {
              color: #333333;
              font-family: Helvetica, Arial, sans-serif;
              font-size: 18px;
              line-height: 125%;
              font-weight: 400;
              text-align: left
          }
  
          .text-element a,
          .paragraph a {
              color: #000000;
              font-weight: bold
          }
  
          .headline {
              color: #333333;
              font-family: Helvetica, Arial, sans-serif;
              font-size: 36px;
              line-height: 125%;
              font-weight: 700;
              text-align: left
          }
  
          .headline a {
              color: #333333;
              text-decoration: none;
              font-weight: bold
          }
  
          .temp-footer .paragraph div,
          .temp-footer .paragraph p {
              color: #7c7c7c;
              font-size: 14px;
              line-height: 125%
          }
  
          .temp-footer .text-element div,
          .temp-footer .text-element p {
              color: #7c7c7c;
              font-size: 14px;
              line-height: 125%
          }
  
          .temp-footer .headline {
              color: #7c7c7c;
              font-size: 16px
          }
  
          .temp-footer .text-element a,
          .temp-footer .paragraph a {
              color: #7c7c7c
          }
  
          .temp-product .temp-padding {
              padding: 10px
          }
  
          .temp-product .image {
              max-width: 100%;
              height: auto;
              padding-bottom: 0px
          }
  
          .temp-product .image img {
              border-radius: 4px
          }
  
          .temp-product img a {
              text-decoration: none !important
          }
  
          .temp-product .temp-headline {
              color: #333333;
              font-size: 18px;
              line-height: 1.15em;
              max-width: 100%;
              text-align: left
          }
  
          .temp-product .temp-paragraph {
              font-size: 18px;
              line-height: 1.25em;
              font-weight: 400;
              max-width: 100%;
              text-align: left;
              padding-top: 2px
          }
  
          .temp-product .temp-price {
              font-size: 20px;
              line-height: 1.15em;
              font-weight: 500;
              max-width: 100%;
              text-align: left;
              padding-top: 2px
          }
  
          .temp-product a {
              color: #333333;
              font-weight: bold;
              text-decoration: none !important
          }
  
          .temp-product .temp-button-padding table {
              width: 100%
          }
  
          .coupon .headline {
              font-size: 20px;
              text-align: center
          }
  
          .coupon .paragraph {
              text-align: center
          }
  
          .temp-article .headline {
              font-size: 24px;
              margin: 0;
              text-align: left !important
          }
  
          .temp-article .paragraph {
              text-align: left !important
          }
  
          .temp-article td {
              padding: 0
          }
  
          .temp-article .padding {
              padding-bottom: 10px
          }
  
          .temp-article .read-more {
              text-align: left
          }
  
          .temp-article a {
              color: #333333
          }
  
          .clear {
              clear: both
          }
  
          .aw-image-link {
              border: 0;
              text-decoration: none
          }
  
          ol,
          ul {
              color: #333333
          }
  
          li {
              color: #333333
          }
  
          a[x-apple-data-detectors] {
              border-bottom: none !important;
              color: inherit !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
              text-decoration: none !important
          }
  
          center>div {
              box-sizing: border-box
          }
  
          @media screen and (max-width: 599px) {
  
              body,
              #bodyTable,
              #bodyCell {
                  width: 100% !important;
                  margin: auto;
                  clear: both !important;
                  display: block
              }
  
              img {
                  max-width: 100% !important;
                  height: auto !important;
                  max-height: 300%
              }
  
              .paragraph {
                  font-size: 18px !important
              }
  
              .headline {
                  font-size: 28px !important
              }
  
              .temp-footer .paragraph {
                  font-size: 14px !important
              }
  
              .temp-footer .headline {
                  font-size: 16px !important
              }
  
              .share img {
                  width: 20px !important;
                  height: auto !important;
                  display: inline-block
              }
  
              .temp-button-padding td {
                  padding: 10px 20px !important
              }
  
              .video td {
                  display: table-cell !important;
                  text-align: center !important
              }
  
              .temp-article div {
                  box-sizing: border-box !important;
                  display: block !important;
                  width: 100% !important
              }
  
              .floated-left {
                  display: inline-table !important;
                  width: 100% !important;
                  text-align: center !important
              }
  
              .floated-left td {
                  padding: 10px 0px !important
              }
  
              .floated-right {
                  display: inline-table !important;
                  width: 100% !important;
                  text-align: center !important
              }
  
              .floated-right td {
                  padding: 10px 0px !important
              }
  
              .signature_spacer {
                  display: none !important
              }
  
              .signature_content {
                  text-align: center !important
              }
          }
  
          @media only screen and (min-width: 10px) and (max-width: 599px) {
              u~div img {
                  width: auto !important
              }
          }
      </style>
  </head>
  
  <body>
  
      <center>
          <div align="center">
              <table border="0" cellspacing="0" cellpadding="0" width="100%" class="aw-bgc" align="center"
                  role="presentation"
                  style="background-color: rgb(248, 248, 248); font-weight: 400; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                  <tbody>
                      <tr>
                          <td class="temp-wrapper"
                              style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                              <div align="center">
  
                                  <!--[if (gte mso 9)]><table border="0" cellspacing="0" cellpadding="0" width="600" align="center" role="presentation"><tr><td class="temp-header"><![endif]-->
                                  <div class="temp-header" style="max-width: 600px; ">
                                      <div class="temp-fullbleed contained" style="max-width: 600px; width: 100%;">
                                          <div class="region">
                                              <div>
                                                  <table class="row aw-stack"
                                                      style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                      role="presentation">
                                                      <tbody>
                                                          <tr>
                                                              <td class="container" style="padding: 30px 20px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse;
      border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                  <div class="definition-parent"><span>
                                                                          <table align="center" width="100%"
                                                                              class="floated-none"
                                                                              style="float: none; text-align: center; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                                              role="presentation">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center"
                                                                                          style="padding: 0px; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
  
                                                                                          <img class="model"
                                                                                              src="https://drive.google.com/uc?export=view&id=1D7SPSPmFK1gYHyBdGW4OfmKiBGGRTRJp"
                                                                                              style="display: block;  border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 0px;"
                                                                                              alt="Logo" height="100">
  
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </span></div>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!--[if (gte mso 9)]></td></tr></table><![endif]-->
  
                                  <!--[if (gte mso 9)]><table border="0" cellspacing="0" cellpadding="0" width="600" align="center" bgcolor="#ffffff" role="presentation"><tr><td class="temp-body"><![endif]-->
                                  <div class="temp-body"
                                      style="background-color:#ffffff; border-radius:10px; max-width: 600px; ">
                                      <div class="temp-fullbleed contained" style="max-width: 600px; width: 100%;">
                                          <div class="region">
                                              <div>
                                                  <table class="row aw-stack"
                                                      style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                      role="presentation">
                                                      <tbody>
                                                          <tr>
                                                              <td class="container" style="padding: 0px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse;
      border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                  <div class="definition-parent"><span>
                                                                      </span></div>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <table class="row aw-stack"
                                                      style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                      role="presentation">
                                                      <tbody>
                                                          <tr>
                                                              <td class="container" style="padding: 30px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse:
      collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                  <div class="definition-parent">
                                                                      <div class="text-element paragraph">
                                                                          <div
                                                                              style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                              <h4>Instrucciones para conectar tu
                                                                                  dispositivo IoT</h4>
  
                                                                              <p
                                                                                  style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                  &nbsp;</p>
  
                                                                              <p
                                                                                  style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                  Deberás enviar los datos emitidos por tu
                                                                                  dispositivo a la siguiente URL:</p>
                                                                              <br>
  
                                                                              <p
                                                                                  style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                  ${url}</p>
  
                                                                              <br>
  
                                                                              <p
                                                                                  style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                  Ingresando en el body los siguientes
                                                                                  parámetros:</p>
  
                                                                              <br>
  
                                                                              <ul
                                                                                  style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                  <li>r (Reliability)</li>
                                                                                  <li>t (Temperature)</li>
                                                                                  <li>pm1</li>
                                                                                  <li>pm10</li>
                                                                                  <li>pm25</li>
                                                                              </ul>

                                                                              <br>
  
                                                                              <p
                                                                                  style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                  Ejemplo de body de la request:</p>
                                                                            
                                                                              <br>
  
                                                                              <p
                                                                                  style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                  r|1|t|22|pm1|10|pm10|5|pm25|5</p>

                                                                            
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class=" definition-parent">
                                                                      <div class="divider">
                                                                          <table cellpadding="0" cellspacing="0"
                                                                              width="100%" role="presentation"
                                                                              style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="divider-container"
                                                                                          style="padding: 20px 0px; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                          <table width="100%"
                                                                                              role="presentation"
                                                                                              style="border-width: 1px 0px 0px; border-style: solid none none; border-top-color: rgb(222, 224, 232); border-collapse: collapse; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-spacing: 0px; font-size: 18px;">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td width="100%"
                                                                                                          style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                                          <!--<hr style="border-top-style:none; border-left-style:none; border-right-style:none;"/>-->
                                                                                                      </td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </div>
                                                                  </div>
                                                                  <div class="temp-footer" style="max-width: 600px; ">
                                                                      <div class="temp-fullbleed contained"
                                                                          style="max-width: 600px; width: 100%;">
                                                                          <div class="region">
                                                                              <div>
                                                                                  <table class="row aw-stack"
                                                                                      style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                                                      role="presentation">
                                                                                      <tbody>
                                                                                          <tr>
                                                                                              <td class="container" style="padding: 30px 20px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse;
      border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                                                  <div
                                                                                                      class="definition-parent">
                                                                                                      <div
                                                                                                          class="social social--sm social--circle align-center">
                                                                                                          <table
                                                                                                              cellpadding="0"
                                                                                                              cellspacing="0"
                                                                                                              width="100%"
                                                                                                              role="presentation"
                                                                                                              style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                                              <tbody>
                                                                                                                  <tr>
                                                                                                                      <td align="center"
                                                                                                                          style="padding: 0.625rem 0px; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                                                          <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                          <a href="https://www.facebook.com/"
                                                                                                                              style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                              target="_blank"
                                                                                                                              rel="noopener noreferrer">
                                                                                                                              <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                  alt="Facebook Icon"
                                                                                                                                  src="https://awas.aweber-static.com/images/message-editor/social/black/circle/facebook.png"
                                                                                                                                  data-icon-name="Facebook"
                                                                                                                                  height="24"
                                                                                                                                  width="24">
                                                                                                                          </a>
                                                                                                                          <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                          <a href="https://twitter.com/"
                                                                                                                              style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                              target="_blank"
                                                                                                                              rel="noopener noreferrer">
                                                                                                                              <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                  alt="Twitter Icon"
                                                                                                                                  src="https://awas.aweber-static.com/images/message-editor/social/black/circle/twitter.png"
                                                                                                                                  data-icon-name="Twitter"
                                                                                                                                  height="24"
                                                                                                                                  width="24">
                                                                                                                          </a>
                                                                                                                          <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                          <a href="https://www.instagram.com/"
                                                                                                                              style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                              target="_blank"
                                                                                                                              rel="noopener noreferrer">
                                                                                                                              <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                  alt="Instagram Icon"
                                                                                                                                  src="https://awas.aweber-static.com/images/message-editor/social/black/circle/instagram.png"
                                                                                                                                  data-icon-name="Instagram"
                                                                                                                                  height="24"
                                                                                                                                  width="24">
                                                                                                                          </a>
                                                                                                                          <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                          <a href="https://www.youtube.com/"
                                                                                                                              style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                              target="_blank"
                                                                                                                              rel="noopener noreferrer">
                                                                                                                              <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                  alt="YouTube Icon"
                                                                                                                                  src="https://awas.aweber-static.com/images/message-editor/social/black/circle/youtube.png"
                                                                                                                                  data-icon-name="YouTube"
                                                                                                                                  height="24"
                                                                                                                                  width="24">
                                                                                                                          </a>
                                                                                                                          <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                          <a href="https://www.linkedin.com/"
                                                                                                                              style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                              target="_blank"
                                                                                                                              rel="noopener noreferrer">
                                                                                                                              <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                  alt="LinkedIn Icon"
                                                                                                                                  src="https://awas.aweber-static.com/images/message-editor/social/black/circle/linkedin.png"
                                                                                                                                  data-icon-name="LinkedIn"
                                                                                                                                  height="24"
                                                                                                                                  width="24">
                                                                                                                          </a>
                                                                                                                          <!--[if mso]>&nbsp;<![endif]-->
  
                                                                                                                      </td>
                                                                                                                  </tr>
                                                                                                              </tbody>
                                                                                                          </table>
                                                                                                      </div>
                                                                                                  </div>
                                                                                                  <div
                                                                                                      class="definition-parent">
                                                                                                      <div
                                                                                                          class="text-element paragraph">
                                                                                                          <div
                                                                                                              style="color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                                              <div
                                                                                                                  style="text-align: center; color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400;">
                                                                                                                  &nbsp;
                                                                                                              </div>
  
                                                                                                              <div
                                                                                                                  style="text-align: center; color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400;">
                                                                                                                  CABA<br>
                                                                                                                  Buenos
                                                                                                                  Aires<br>
                                                                                                                  Argentina
                                                                                                              </div>
  
                                                                                                              <div
                                                                                                                  style="text-align: center; color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400;">
                                                                                                                  <br>
                                                                                                                  <a class="validating"
                                                                                                                      href="#"
                                                                                                                      style="color: rgb(124, 124, 124); font-weight: bold;"
                                                                                                                      target="_blank"
                                                                                                                      rel="noopener noreferrer">Privacy
                                                                                                                      Policy</a>
                                                                                                                  |
                                                                                                                  <a class="validating"
                                                                                                                      href="https://www.aweber.com/z/r/?ThisIsATestEmail"
                                                                                                                      style="color: rgb(124, 124, 124); font-weight: bold;"
                                                                                                                      target="_blank"
                                                                                                                      rel="noopener noreferrer">Unsubscribe</a>
                                                                                                              </div>
                                                                                                          </div>
                                                                                                      </div>
                                                                                                  </div>
                                                                                              </td>
                                                                                          </tr>
                                                                                      </tbody>
                                                                                  </table>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <!--[if (gte mso 9)]></td></tr></table><![endif]-->
  
                                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </center>
  
      <div>&nbsp;</div>
      <div align="center" id="aweber_container" style="background-color:#ffffff; width:100% !important">
          <div id="aweber_rem"
              style="box-sizing:border-box; color:#000000 !important; font-family:Helvetica,Arial,sans-serif !important; font-size:12px !important; line-height:16px; margin:0px; max-width:600px; padding:0px 8px; width:100%">
              <!--[if gte mso 9]><table width="600" style="color: #000000;font-family: Helvetica, Arial, sans-serif;font-size: 12px;line-height: 16px;"><tr><td style="padding:8px;"><![endif]-->
              <div class="rem_align" style="text-align:center;"><span style="color:#000000 !important"></span><br><br><a
                      href="https://www.aweber.com/z/r/?ThisIsATestEmail" rel="noopener noreferrer"
                      style="color: #000000;" target="_blank"><span
                          style="color:#000000 !important">Unsubscribe</span></a> &nbsp; | &nbsp; <a
                      href="https://www.aweber.com/z/r/?ThisIsATestEmail" rel="noopener noreferrer"
                      style="color: #000000;" target="_blank"><span
                          style="color:#000000 !important">Change&nbsp;Subscriber&nbsp;Options</span></a><br><br></div>
              <!--[if gte mso 9]></td></tr></table><![endif]-->
          </div>
      </div>
  </body>
  
  </html>`;
  return mailHtml;
}

export const mailRechazoHtml = () => {
  var html = `<html xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style id="aw-autoinject" type="text/css">
        body,
        a {
            word-break: break-word;
        }

        .feed__title a {
            text-decoration: underline;
        }

        .text-element h1 {
            color: inherit;
            font-family: inherit;
            font-size: 36px;
            line-height: 1.15;
            font-weight: 700;
            margin: 0.5em 0;
        }

        .text-element h2 {
            color: inherit;
            font-family: inherit;
            font-size: 32px;
            line-height: 1.15;
            font-weight: 700;
            margin: 0.5em 0;
        }

        .text-element h3 {
            color: inherit;
            font-family: inherit;
            font-size: 28px;
            line-height: 1.15;
            font-weight: 700;
            margin: 0.5em 0;
        }

        .text-element h4 {
            color: inherit;
            font-family: inherit;
            font-size: 24px;
            line-height: 1.15;
            font-weight: 700;
            margin: 0.5em 0;
        }

        .text-element h5 {
            color: inherit;
            font-family: inherit;
            font-size: 20px;
            line-height: 1.15;
            font-weight: 700;
            margin: 0.5em 0;
        }

        .text-element h6 {
            color: inherit;
            font-family: inherit;
            font-size: 16px;
            line-height: 1.15;
            font-weight: 700;
            margin: 0.5em 0;
        }

        .text-element p,
        .paragraph p {
            color: inherit;
            font-family: inherit;
            font-size: 16px;
            line-height: 1.5;
            margin: 0;
        }

        .text-element div {
            color: inherit;
            font-family: inherit;
            font-size: 16px;
            line-height: 1.5;
            margin: 0;
        }

        .text-element pre {
            color: inherit;
            display: block;
            font-family: monospace;
            font-size: 16px;
            line-height: 1;
            margin: 1em auto;
            white-space: pre;
            max-width: 500px;
            overflow: auto;
            overflow-wrap: break-word;
        }

        .text-element address {
            color: inherit;
            font-family: inherit;
            display: block;
            font-size: 16px;
            font-style: italic;
            line-height: 1.15;
            margin: 0.5em 0;
        }

        .text-element blockquote,
        .headline blockquote,
        .paragraph blockquote {
            border-left: 5px solid #ccc;
            font-style: normal;
            margin-left: 0;
            margin-right: 0;
            overflow: hidden;
            padding-left: 15px !important;
            padding-right: 15px !important;
            box-sizing: border-box;
        }

        @media only screen and (max-width:599px) {
            img {
                max-width: 100% !important;
                min-height: 1px !important;
                height: auto !important;
            }

            .text-element pre {
                max-width: 250px;
            }

            .aw-stack .container {
                box-sizing: border-box;
                display: block !important;
                float: left;
                max-width: 100% !important;
                margin: auto;
                width: 100% !important;
            }

            .video .video-content {
                width: auto !important;
            }

            .feed__item--postcard-side,
            .feed__item--postcard-main,
            .feed__item--block {
                box-sizing: border-box;
                display: block !important;
                max-width: 100% !important;
                margin: auto;
                width: 100% !important;
            }

            .feed__item--block>div {
                margin: 0 0 16px 0 !important;
            }

            .feed__image {
                width: 100% !important;
            }

            .feed__spacer {
                display: none !important;
            }
        }
    </style>
    <style type="text/css">
        v:* {
            behavior: url(#default#VML);
            display: inline-block;
        }

        body,
        #bodyTable,
        #bodyCell {
            height: 100%;
            margin: 0px;
            padding: 0px;
            width: 100%
        }

        body {
            background-color: #fefefe;
            color: #333333;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.5em;
            font-weight: 400 !important;
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
            width: 100%
        }

        body,
        table,
        td {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%
        }

        table,
        td {
            color: #333333;
            font-family: Helvetica, Arial,
                sans-serif;
            border-collapse: collapse;
            border-spacing: 0;
            border: 0;
            font-size: 18px;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt
        }

        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            max-width: 100%;
            outline: none;
            text-decoration: none;
            color: #333333;
            font-size: 20px;
            font-weight: 700;
            border-radius: 10px
        }

        .temp-header img {
            border-radius: 0px
        }

        table {
            border-collapse: collapse !important
        }

        strong {
            font-weight: 700
        }

        .container {
            padding: 0
        }

        .floated-none td {
            padding: 0
        }

        .contained {
            max-width: 600px;
            width: 100%
        }

        .contained img {
            height: auto !important;
            max-width: 100% !important
        }

        .paragraph div,
        .paragraph p {
            color: #333333;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 125%;
            font-weight: 400;
            text-align: left
        }

        .text-element div,
        .text-element p {
            color: #333333;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 125%;
            font-weight: 400;
            text-align: left
        }

        .text-element a,
        .paragraph a {
            color: #000000;
            font-weight: bold
        }

        .headline {
            color: #333333;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 36px;
            line-height: 125%;
            font-weight: 700;
            text-align: left
        }

        .headline a {
            color: #333333;
            text-decoration: none;
            font-weight: bold
        }

        .temp-footer .paragraph div,
        .temp-footer .paragraph p {
            color: #7c7c7c;
            font-size: 14px;
            line-height: 125%
        }

        .temp-footer .text-element div,
        .temp-footer .text-element p {
            color: #7c7c7c;
            font-size: 14px;
            line-height: 125%
        }

        .temp-footer .headline {
            color: #7c7c7c;
            font-size: 16px
        }

        .temp-footer .text-element a,
        .temp-footer .paragraph a {
            color: #7c7c7c
        }

        .temp-product .temp-padding {
            padding: 10px
        }

        .temp-product .image {
            max-width: 100%;
            height: auto;
            padding-bottom: 0px
        }

        .temp-product .image img {
            border-radius: 4px
        }

        .temp-product img a {
            text-decoration: none !important
        }

        .temp-product .temp-headline {
            color: #333333;
            font-size: 18px;
            line-height: 1.15em;
            max-width: 100%;
            text-align: left
        }

        .temp-product .temp-paragraph {
            font-size: 18px;
            line-height: 1.25em;
            font-weight: 400;
            max-width: 100%;
            text-align: left;
            padding-top: 2px
        }

        .temp-product .temp-price {
            font-size: 20px;
            line-height: 1.15em;
            font-weight: 500;
            max-width: 100%;
            text-align: left;
            padding-top: 2px
        }

        .temp-product a {
            color: #333333;
            font-weight: bold;
            text-decoration: none !important
        }

        .temp-product .temp-button-padding table {
            width: 100%
        }

        .coupon .headline {
            font-size: 20px;
            text-align: center
        }

        .coupon .paragraph {
            text-align: center
        }

        .temp-article .headline {
            font-size: 24px;
            margin: 0;
            text-align: left !important
        }

        .temp-article .paragraph {
            text-align: left !important
        }

        .temp-article td {
            padding: 0
        }

        .temp-article .padding {
            padding-bottom: 10px
        }

        .temp-article .read-more {
            text-align: left
        }

        .temp-article a {
            color: #333333
        }

        .clear {
            clear: both
        }

        .aw-image-link {
            border: 0;
            text-decoration: none
        }

        ol,
        ul {
            color: #333333
        }

        li {
            color: #333333
        }

        a[x-apple-data-detectors] {
            border-bottom: none !important;
            color: inherit !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important
        }

        center>div {
            box-sizing: border-box
        }

        @media screen and (max-width: 599px) {

            body,
            #bodyTable,
            #bodyCell {
                width: 100% !important;
                margin: auto;
                clear: both !important;
                display: block
            }

            img {
                max-width: 100% !important;
                height: auto !important;
                max-height: 300%
            }

            .paragraph {
                font-size: 18px !important
            }

            .headline {
                font-size: 28px !important
            }

            .temp-footer .paragraph {
                font-size: 14px !important
            }

            .temp-footer .headline {
                font-size: 16px !important
            }

            .share img {
                width: 20px !important;
                height: auto !important;
                display: inline-block
            }

            .temp-button-padding td {
                padding: 10px 20px !important
            }

            .video td {
                display: table-cell !important;
                text-align: center !important
            }

            .temp-article div {
                box-sizing: border-box !important;
                display: block !important;
                width: 100% !important
            }

            .floated-left {
                display: inline-table !important;
                width: 100% !important;
                text-align: center !important
            }

            .floated-left td {
                padding: 10px 0px !important
            }

            .floated-right {
                display: inline-table !important;
                width: 100% !important;
                text-align: center !important
            }

            .floated-right td {
                padding: 10px 0px !important
            }

            .signature_spacer {
                display: none !important
            }

            .signature_content {
                text-align: center !important
            }
        }

        @media only screen and (min-width: 10px) and (max-width: 599px) {
            u~div img {
                width: auto !important
            }
        }
    </style>
</head>

<body>

    <center>
        <div align="center">
            <table border="0" cellspacing="0" cellpadding="0" width="100%" class="aw-bgc" align="center"
                role="presentation"
                style="background-color: rgb(248, 248, 248); font-weight: 400; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                <tbody>
                    <tr>
                        <td class="temp-wrapper"
                            style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                            <div align="center">

                                <!--[if (gte mso 9)]><table border="0" cellspacing="0" cellpadding="0" width="600" align="center" role="presentation"><tr><td class="temp-header"><![endif]-->
                                <div class="temp-header" style="max-width: 600px; ">
                                    <div class="temp-fullbleed contained" style="max-width: 600px; width: 100%;">
                                        <div class="region">
                                            <div>
                                                <table class="row aw-stack"
                                                    style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                    role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <td class="container" style="padding: 30px 20px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse;
    border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                <div class="definition-parent"><span>
                                                                        <table align="center" width="100%"
                                                                            class="floated-none"
                                                                            style="float: none; text-align: center; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center"
                                                                                        style="padding: 0px; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">

                                                                                        <img class="model"
                                                                                            src="https://drive.google.com/uc?export=view&id=1D7SPSPmFK1gYHyBdGW4OfmKiBGGRTRJp"
                                                                                            style="display: block;  border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 0px;"
                                                                                            alt="Logo" height="100">

                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </span></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--[if (gte mso 9)]></td></tr></table><![endif]-->

                                <!--[if (gte mso 9)]><table border="0" cellspacing="0" cellpadding="0" width="600" align="center" bgcolor="#ffffff" role="presentation"><tr><td class="temp-body"><![endif]-->
                                <div class="temp-body"
                                    style="background-color:#ffffff; border-radius:10px; max-width: 600px; ">
                                    <div class="temp-fullbleed contained" style="max-width: 600px; width: 100%;">
                                        <div class="region">
                                            <div>
                                                <table class="row aw-stack"
                                                    style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                    role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <td class="container" style="padding: 0px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse;
    border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                <div class="definition-parent"><span>
                                                                    </span></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table class="row aw-stack"
                                                    style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                    role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <td class="container" style="padding: 30px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse:
    collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                <div class="definition-parent">
                                                                    <div class="text-element paragraph">
                                                                        <div
                                                                            style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                            <h4>Tu solicitud fue rechazada</h4>  
                                                                            <p
                                                                                style="color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; font-size: 18px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                Lamentamos que tu solicitud haya sido rechazada, para conocer más detalles sobre el motivo de rechazo comunicate con tripitconsultora@gmail.com</p>                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class=" definition-parent">
                                                                    <div class="divider">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            width="100%" role="presentation"
                                                                            style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="divider-container"
                                                                                        style="padding: 20px 0px; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                        <table width="100%"
                                                                                            role="presentation"
                                                                                            style="border-width: 1px 0px 0px; border-style: solid none none; border-top-color: rgb(222, 224, 232); border-collapse: collapse; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-spacing: 0px; font-size: 18px;">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td width="100%"
                                                                                                        style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                                        <!--<hr style="border-top-style:none; border-left-style:none; border-right-style:none;"/>-->
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div class="temp-footer" style="max-width: 600px; ">
                                                                    <div class="temp-fullbleed contained"
                                                                        style="max-width: 600px; width: 100%;">
                                                                        <div class="region">
                                                                            <div>
                                                                                <table class="row aw-stack"
                                                                                    style="width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;"
                                                                                    role="presentation">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="container" style="padding: 30px 20px; width: 100%; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse;
    border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;" width="100%" valign="top">
                                                                                                <div
                                                                                                    class="definition-parent">
                                                                                                    <div
                                                                                                        class="social social--sm social--circle align-center">
                                                                                                        <table
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            role="presentation"
                                                                                                            style="text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td align="center"
                                                                                                                        style="padding: 0.625rem 0px; text-size-adjust: 100%; color: rgb(51, 51, 51); font-family: Helvetica, Arial, sans-serif; border-collapse: collapse; border-spacing: 0px; border-width: 0px; border-style: none; font-size: 18px;">
                                                                                                                        <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                        <a href="https://www.facebook.com/"
                                                                                                                            style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                            target="_blank"
                                                                                                                            rel="noopener noreferrer">
                                                                                                                            <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                alt="Facebook Icon"
                                                                                                                                src="https://awas.aweber-static.com/images/message-editor/social/black/circle/facebook.png"
                                                                                                                                data-icon-name="Facebook"
                                                                                                                                height="24"
                                                                                                                                width="24">
                                                                                                                        </a>
                                                                                                                        <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                        <a href="https://twitter.com/"
                                                                                                                            style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                            target="_blank"
                                                                                                                            rel="noopener noreferrer">
                                                                                                                            <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                alt="Twitter Icon"
                                                                                                                                src="https://awas.aweber-static.com/images/message-editor/social/black/circle/twitter.png"
                                                                                                                                data-icon-name="Twitter"
                                                                                                                                height="24"
                                                                                                                                width="24">
                                                                                                                        </a>
                                                                                                                        <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                        <a href="https://www.instagram.com/"
                                                                                                                            style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                            target="_blank"
                                                                                                                            rel="noopener noreferrer">
                                                                                                                            <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                alt="Instagram Icon"
                                                                                                                                src="https://awas.aweber-static.com/images/message-editor/social/black/circle/instagram.png"
                                                                                                                                data-icon-name="Instagram"
                                                                                                                                height="24"
                                                                                                                                width="24">
                                                                                                                        </a>
                                                                                                                        <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                        <a href="https://www.youtube.com/"
                                                                                                                            style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                            target="_blank"
                                                                                                                            rel="noopener noreferrer">
                                                                                                                            <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                alt="YouTube Icon"
                                                                                                                                src="https://awas.aweber-static.com/images/message-editor/social/black/circle/youtube.png"
                                                                                                                                data-icon-name="YouTube"
                                                                                                                                height="24"
                                                                                                                                width="24">
                                                                                                                        </a>
                                                                                                                        <!--[if mso]>&nbsp;<![endif]-->
                                                                                                                        <a href="https://www.linkedin.com/"
                                                                                                                            style="display: inline-block; font-size: 0; vertical-align: top; margin: 0.25rem; height: 24px; width: 24px;"
                                                                                                                            target="_blank"
                                                                                                                            rel="noopener noreferrer">
                                                                                                                            <img style="height: 24px; width: 24px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;"
                                                                                                                                alt="LinkedIn Icon"
                                                                                                                                src="https://awas.aweber-static.com/images/message-editor/social/black/circle/linkedin.png"
                                                                                                                                data-icon-name="LinkedIn"
                                                                                                                                height="24"
                                                                                                                                width="24">
                                                                                                                        </a>
                                                                                                                        <!--[if mso]>&nbsp;<![endif]-->

                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="definition-parent">
                                                                                                    <div
                                                                                                        class="text-element paragraph">
                                                                                                        <div
                                                                                                            style="color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400; text-align: left;">
                                                                                                            <div
                                                                                                                style="text-align: center; color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400;">
                                                                                                                &nbsp;
                                                                                                            </div>

                                                                                                            <div
                                                                                                                style="text-align: center; color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400;">
                                                                                                                CABA<br>
                                                                                                                Buenos
                                                                                                                Aires<br>
                                                                                                                Argentina
                                                                                                            </div>

                                                                                                            <div
                                                                                                                style="text-align: center; color: rgb(124, 124, 124); font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 125%; font-weight: 400;">
                                                                                                                <br>
                                                                                                                <a class="validating"
                                                                                                                    href="#"
                                                                                                                    style="color: rgb(124, 124, 124); font-weight: bold;"
                                                                                                                    target="_blank"
                                                                                                                    rel="noopener noreferrer">Privacy
                                                                                                                    Policy</a>
                                                                                                                |
                                                                                                                <a class="validating"
                                                                                                                    href="https://www.aweber.com/z/r/?ThisIsATestEmail"
                                                                                                                    style="color: rgb(124, 124, 124); font-weight: bold;"
                                                                                                                    target="_blank"
                                                                                                                    rel="noopener noreferrer">Unsubscribe</a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--[if (gte mso 9)]></td></tr></table><![endif]-->

                                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </center>

    <div>&nbsp;</div>
    <div align="center" id="aweber_container" style="background-color:#ffffff; width:100% !important">
        <div id="aweber_rem"
            style="box-sizing:border-box; color:#000000 !important; font-family:Helvetica,Arial,sans-serif !important; font-size:12px !important; line-height:16px; margin:0px; max-width:600px; padding:0px 8px; width:100%">
            <!--[if gte mso 9]><table width="600" style="color: #000000;font-family: Helvetica, Arial, sans-serif;font-size: 12px;line-height: 16px;"><tr><td style="padding:8px;"><![endif]-->
            <div class="rem_align" style="text-align:center;"><span style="color:#000000 !important"></span><br><br><a
                    href="https://www.aweber.com/z/r/?ThisIsATestEmail" rel="noopener noreferrer"
                    style="color: #000000;" target="_blank"><span
                        style="color:#000000 !important">Unsubscribe</span></a> &nbsp; | &nbsp; <a
                    href="https://www.aweber.com/z/r/?ThisIsATestEmail" rel="noopener noreferrer"
                    style="color: #000000;" target="_blank"><span
                        style="color:#000000 !important">Change&nbsp;Subscriber&nbsp;Options</span></a><br><br></div>
            <!--[if gte mso 9]></td></tr></table><![endif]-->
        </div>
    </div>
</body>

</html>`;
  return html;
};
