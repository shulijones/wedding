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
    background-color: rgba(256,256,256,0.85);
  }

  button[type="submit"] {
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

    input[type="text"] {
      margin: 5px;
    }


    .radios {
      width: 50%;
      margin-left: 6%;
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

    input[type="text"] {
      margin: 10px 5px;
    }

    .radios {
      width: 30%;
      margin-left: 6%;
      text-align: right;
    }
  }
</style>
<div style="width:100%">
  <h4 class="section-header">RSVP</h4>
  <div id="form-container">
    <div id="entireForm">
      <form id="form" style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        We'd like to hear from you by TODO.<br>
        <img src="./photo/flourish.png" style="width:75px"><br>
        Look up your invitation:
        <div>
            <input name="fname" type="text" placeholder="First name">
            <input name="lname" type="text" placeholder="Last name">
        </div>
        Enter your first and last name as it appears on your invitation.<br>If there is more than one name, enter any one of them.<br><br>
        <button type="submit">Continue</button>
        <div id="output"></div>
      </form>
      <script src="rsvp.js"></script>
    </div>
  </div>
</div>