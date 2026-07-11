function styleSubmitButtonNormally(name) {
  document.querySelector(name).style.backgroundColor = "#0000";
  document.querySelector(name).style.color = "#F1E5AC";
    document.querySelector(".loader").style.display = "none";
}

function styleSubmitButtonForLoading(name) {
  document.querySelector(name).style.backgroundColor = "#a89d6b";
  document.querySelector(name).style.borderColor = "#bab081";
  document.querySelector(name).style.color = "#550000";
  document.querySelector(".loader").style.display = "block";
}

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  styleSubmitButtonForLoading("#continue");

  var errormsg = `<div>Something went wrong. Check your internet connection and try again. If this persists, you can just send Shuli and Evan your RSVP directly.</div>`;
  var fname = this.elements.fname.value;
  var lname = this.elements.lname.value;
  var url = 'https://script.google.com/macros/s/AKfycbzLNuguRzjJq0dX43242RObKG0NkvRuGpe7XIVmMGTZboFY1WwBobd69TFHW1thGoc9/exec?fname=' + fname + '&lname=' + lname;

  console.log('url ', url);
  fetch(url,
    {
      redirect: "follow",
      method: "GET",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      }
    }
  )
    .then(response => {
      if (!response.ok) {
        document.getElementById('output').innerHTML = errormsg;
      }
      return response.json();
    })
    .then(json => {
      var idAndNames = json.data;
      console.log('ids ', idAndNames);
      if (idAndNames.status === "Name not found") {
        styleSubmitButtonNormally("#continue");
        document.getElementById('output').innerHTML = `<div>Couldn't find guest name &mdash; please double-check and try again.</div>`;
      } else {
        console.log('info ', json.info);
        create_rsvpPage1(idAndNames, json.info);
      }
    })
    .catch(error => {
      styleSubmitButtonNormally("#continue");
      document.getElementById('output').innerHTML = errormsg;
    });

});

function getEventRsvpButtons(name, alreadyRsvpdInfo) {
  const rsvpd = alreadyRsvpdInfo.length > 0;
  var idx = 3;
  if (name === 'brewery') {
    idx = 4;
  } else if (name === 'brunch') {
    idx = 5;
  }

  return `<div class="radios">
  <label>I'll be there! <input type="radio" ${(rsvpd && (alreadyRsvpdInfo[0][idx] >= 1)) ? 'checked' : ''} name="${name}" id="yes-${name}" /></label><br>
  <label>Not sure yet <input type="radio" ${(rsvpd && (alreadyRsvpdInfo[0][idx] > 0) && (alreadyRsvpdInfo[0][idx] < 1)) ? 'checked' : ''} name="${name}" id="maybe-${name}" /></label><br>
  <label>Can't make it <input type="radio" ${(rsvpd && (alreadyRsvpdInfo[0][idx] == 0)) ? 'checked' : ''} name="${name}" id="no-${name}" /></label><br>
  </div>`
}

function escapeStr(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function create_rsvpPage1(idAndNames, alreadyRsvpdInfo) {
  const data = [];
  const inputArray = idAndNames.split(',');
  const inviteID = inputArray.shift() || "NA";

  // Iterate through the remaining names and create an object for each person
  inputArray.forEach((name, index) => {
    if (name) {
      data.push({
        inviteID: inviteID,
        name: name,
        attending: 0,
        id: `person${index}` // checkbox id, so submit button can find it
      });
    }
  });

  const rsvpd = alreadyRsvpdInfo.length > 0;
  const openingMessage = rsvpd ?
    "You already RSVP'd! Here's what we have from you &mdash; feel free to edit it and resubmit if something has changed."
    : "Will you be able to celebrate with us?";

  // Write HTML and checkboxes for each person
  document.getElementById('entireForm').innerHTML = `
      <div id="form-inner-container"><span class="form-text">${openingMessage}</span><br>
      <img src="./photo/flourish.png" style="width:75px"><br>
      ${data.map(
    (person, i) => `<div class="form-section"><span class="guest-name">${person.name}:</span><br>
      <div class="radios">
      <label>I'll be there! <input type="radio" ${rsvpd && alreadyRsvpdInfo[i][1] ? 'checked' : ''} name="rsvp-${person.id}" id="1-rsvp-${person.id}" /></label><br/>
      <label>I won't be there <input type="radio" ${rsvpd && !alreadyRsvpdInfo[i][1] ? 'checked' : ''} name="rsvp-${person.id}" id="0-rsvp-${person.id}" /></label><br/>
      </div>
      Any dietary restrictions? <input type="text" value="${rsvpd ? escapeStr(alreadyRsvpdInfo[i][2]) : ''}" id="diet-${person.id}" /></div><br/><br/>`
  ).join('')}
      <img src="./photo/flourish.png" style="width:75px">
      <div class="form-section">Please give us an email address we can use to contact you about the wedding. You can put multiple emails if you'd like &mdash; please separate them with commas.
      <input type="text" value="${rsvpd ? escapeStr(alreadyRsvpdInfo[0][6]) : ''}" id="email" style="width:70%"/></div><br><br>
      <span>We know you might not be sure yet, but we'd love a general sense of if you'll be able to make it to the events we're planning.
      (See the <a class="nicelink" href="/schedule" target="_blank">Schedule</a> for more details.)</span><br><br>
      <div class="form-section"><span class="event-name">Thursday from 6-10 pm: Exploratorium after Dark (18+)</span>${getEventRsvpButtons("explor", alreadyRsvpdInfo)}</div><br>
      <div class="form-section"><span class="event-name">Friday from 2-4 pm: Southern Pacific Brewing (all ages)</span>${getEventRsvpButtons("brewery", alreadyRsvpdInfo)}</div><br>
      <div class="form-section"><span class="event-name">Sunday from 10:30 am onwards: Brunch at our house</span>${getEventRsvpButtons("brunch", alreadyRsvpdInfo)}</div><br>
      <div class="form-section">Anything else you'd like to tell us? <input id="extra-text" type="text" value="${rsvpd ? escapeStr(alreadyRsvpdInfo[0][7]) : ''}" id="extra" /></div><br>
      <div class="submit-container"><button id="submit" type="submit">Submit</button><div class="loader"></div></div>
      <div id="form-output"></div>
      </div>
  `;

  // Submit button code
  document.getElementById('submit').addEventListener('click', () => {
    var requiredQsCompleted = true;
    data.forEach(person => {
      var attending = document.querySelector(`input[name="rsvp-${person.id}"]:checked`);
      if (attending === null) {
        // Didn't fill out the option
        document.getElementById('form-output').innerHTML = `<div>Not yet submitted &mdash; please indicate whether each guest will or will not be attending.</div>`;
        requiredQsCompleted = false;
        return;
      }
      person.attending = attending.id.split('-')[0];
      person.diet = document.getElementById(`diet-${person.id}`).value;
    });
    var email = document.getElementById("email").value;
    if (requiredQsCompleted && !email) {
       document.getElementById('form-output').innerHTML = `<div>Not yet submitted &mdash; please give us an email address we can use to contact you.</div>`;
    }
    if (!requiredQsCompleted || !email) {
      return;
    }
    eventData = [];
    for (event of ["explor", "brewery", "brunch"]) {
      var attending = document.querySelector(`input[name="${event}"]:checked`);
      var attendingVal = 0.5;
      if (attending !== null) {
        const attendingStr = attending.id.split('-')[0];
        attendingVal = attendingStr === 'yes' ? 1 : (attendingStr === 'maybe' ? 0.5 : 0);
      }
      eventData.push({
        attending: attendingVal
      })
    }
    var response = {};
    response.data = data;
    response.eventData = eventData;
    response.email = email;
    response.extra = document.getElementById("extra-text").value;
    // console.log(response);
    submitForm(response);

    // Disable the submit button so people can't click on it multiple times
    document.getElementById('submit').disabled = true;
  });
}

function submitForm(data) {
  styleSubmitButtonForLoading("#submit");
  const url = 'https://script.google.com/macros/s/AKfycbzLNuguRzjJq0dX43242RObKG0NkvRuGpe7XIVmMGTZboFY1WwBobd69TFHW1thGoc9/exec';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  })
    .then(async response => {
      // Read the response text just like xhr.responseText
      styleSubmitButtonNormally("#submit");
      const text = await response.text();

      // Check both status and the specific response string (equivalent to xhr.onload)
      if (response.status === 200 && text === 'Success') {
        document.getElementById('entireForm').innerHTML = `<div>Thank you for your RSVP!</div>`;
      } else {
        document.getElementById('form-output').innerHTML = `<div>Something went wrong. Check your internet connection and try again. If this persists, you can just send Shuli and Evan your RSVP directly.</div>`;
        document.getElementById('submit').disabled = false;
      }
    })
    .catch(error => {
      styleSubmitButtonNormally("#submit");
      document.getElementById('form-output').innerHTML = `<div>Something went wrong. Check your internet connection and try again. If this persists, you can just send Shuli and Evan your RSVP directly.</div>`;
      document.getElementById('submit').disabled = false;
    });
}