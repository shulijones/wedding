---
layout: main
---
<style>
  #form-container {
    font-family: Roboto;
    color: #F1E5AC;
    border: 3px double #F1E5AC;
    display: flex;
    justify-content: center;
  }

  #entireForm {
    max-width: 98%;
  }

  #form-inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-section {
    margin: 10px 0px;
  }

  .submit-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .loader {
    grid-column: 3;
    display: none;
    border: 5px solid #868686;
    border-top: 5px solid #DCC353;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
    margin-left: 10px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .guest-name {
    font-weight: 700;
  }

  .form-text {
    width: 100%;
    text-align: center;
    display: block;
  }

  .event-name {
    font-weight: 600;
  }

  input[type="radio"] {
    appearance: none;
    border-radius: 5px;
    width: 18px;
    height: 18px;
    border: 2px solid #F1E5AC;
  }

  input[type="radio"]:checked::before {
    background-color: #F1E5AC;
    display: block;
    content: " ";
    border-radius: 2px;
    width: 10px;
    height: 10px;
    margin-top: 2px;
    margin-left: 2px;
  }

  input[type="text"] {
    border-radius: 4px;
    padding: 5px;
    appearance: none;
    border: none;
    background-color: rgba(256,256,256,0.92);
  }

  button[type="submit"] {
    grid-column: 2;
    border: 3px solid #F1E5AC;
    border-radius: 10px;
    padding: 5px 15px;
    background-color: rgba(0,0,0,0);
    font-family: inherit;
    color: #F1E5AC;
    font-weight: 600;
    font-size: 20px;
    margin: 15px 0px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #F1E5AC;
    color: #550000;
  }

  .output {
    font-weight: 500px;
  }

  @media (max-width: 640px) {
    #form-container {
      padding: 16px 12px;
      width: 92%;
      margin-left: 4%;
    }

    .form-section {
      width: 95%;
    }

    #name-container {
      margin: 10px 0px;
    }

    input[type="text"] {
      margin: 5px;
    }

    .radios {
      width: 60%;
      margin-left: 6%;
      margin-bottom: 10px;
      text-align: right;
    }
  }

  @media (min-width: 641px) {
    #form-container {
      margin-top: 10px;
      padding: 16px;
      width: 60%;
      margin-left: 20%;
    }

    .form-section {
      width: 85%;
    }

    input[type="text"] {
      margin: 10px 5px;
    }

    .radios {
      width: 40%;
      margin-left: 6%;
      text-align: right;
    }

    #extra-text {
      width: 100%;
    }
  }
</style>
<div style="width:100%">
  <h4 class="section-header">RSVP</h4>
  <div id="form-container">
    <div id="entireForm">
      <form id="form" style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        <span>We'd like to hear from you by <b>August 31st, 2026</b>. If you're able to RSVP sooner, that would be really helpful for our planning (especially if you already know you unfortunately can't make it). Thank you!</span><br>
        <img src="./photo/flourish.png" style="width:75px"><br>
        Look up your invitation:
        <div id="name-container">
            <input name="fname" type="text" placeholder="First name">
            <input name="lname" type="text" placeholder="Last name">
        </div>
        Enter your first and last name as it appears on your invitation.<br>If there is more than one name, enter any one of them.<br><br>
        <div class="submit-container"><button id="continue" type="submit">Continue</button><div class="loader"></div></div>
        <div id="output"></div>
      </form>
      <script src="rsvp.js"></script>
    </div>
  </div>
</div>