document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  var errormsg = `<div>Something went wrong. Check your internet connection and try again. If this persists, you can just send Shuli and Evan your RSVP directly.</div>`;
  var fname = this.elements.fname.value;
  var lname = this.elements.lname.value;
  var url = 'https://script.google.com/macros/s/AKfycbzLNuguRzjJq0dX43242RObKG0NkvRuGpe7XIVmMGTZboFY1WwBobd69TFHW1thGoc9/exec?fname=' + fname + '&lname=' + lname;
  
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
      if (idAndNames === "Name not found") {
        document.getElementById('output').innerHTML = `<div>Couldn't find guest name.</div>`;
      } else if (idAndNames === "Already RSVPd") {
        document.getElementById('output').innerHTML = `<div>This guest has already submitted an RSVP.</div>`;
      } else {
        create_rsvpPage1(idAndNames);
      }
    })
    .catch(error => {
      document.getElementById('output').innerHTML = errormsg;
    });
});

function getEventRsvpButtons(name) {
  return `<div>
  I'll be there! <input type="radio" name="${name}" id="yes-${name}" /><br>
  Not sure yet <input type="radio" name="${name}" id="maybe-${name}" /><br>
  Can't make it <input type="radio" name="${name}" id="no-${name}" /><br>
  </div>`
}

function create_rsvpPage1(idAndNames) {
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

  // Write HTML and checkboxes for each person
  document.getElementById('entireForm').innerHTML = `
      <div>
      ${data.map(
    person => `${person.name}: Attending? <input type="checkbox" id="rsvp-${person.id}" /><br/>Any dietary restrictions? <input type="text" id="diet-${person.id}" /><br/><br/>`
  ).join('')}
      We know you might not be sure yet, but we'd love a general sense of if you'll be able to make it to the events we're planning. (See the Schedule for more details.)<br>
      Thursday night Exploratorium: ${getEventRsvpButtons("explor")}<br>
      Friday afternoon brewery: ${getEventRsvpButtons("brewery")}<br>
      Sunday morning brunch at our house: ${getEventRsvpButtons("brunch")}<br>
      <button id="submit">Submit</button>
      <div id="form-output"></div>
      </div>
  `;

  // Submit button code
  document.getElementById('submit').addEventListener('click', () => {
    data.forEach(person => {
      person.attending = document.getElementById(`rsvp-${person.id}`).checked ? 1 : 0;
      person.diet = document.getElementById(`diet-${person.id}`).value;
    });
    eventData = [];
    for (event of ["explor", "brewery", "brunch"]) {
      eventData.push({
        attending: document.querySelector(`input[name="${event}"]:checked`).id.split('-')[0]
      })
    }
    var response = {};
    response.data = data;
    response.eventData = eventData;
    submitForm(response);

    // Disable the submit button so people can't click on it multiple times
    document.getElementById('submit').disabled = true;
  });
}

function submitForm(data) {
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
    const text = await response.text();
    
    // Check both status and the specific response string (equivalent to xhr.onload)
    if (response.status === 200 && text === 'Success') {
      document.getElementById('entireForm').innerHTML = `<div>Success!</div>`;
    } else {
      document.getElementById('form-output').innerHTML = `<div>Something went wrong. Check your internet connection and try again. If this persists, you can just send Shuli and Evan your RSVP directly.</div>`;
      document.getElementById('submit').disabled = false;
    }
  })
  .catch(error => {
    document.getElementById('form-output').innerHTML = `<div>Something went wrong. Check your internet connection and try again. If this persists, you can just send Shuli and Evan your RSVP directly.</div>`;
    document.getElementById('submit').disabled = false;
  });
}