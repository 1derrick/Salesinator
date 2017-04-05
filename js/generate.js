/*
  event listener for the 'submit' button
  helper functions when DOM is loaded
*/
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById('submit').addEventListener('click', getSalesinatorOptions);
  motd();

  /* dynamically geneate the drop down menus */
  // buildHowTo();
  buildOptionList(generateIntro(), 'introduction');
  buildOptionList(generatePlatformFeatures(), 'platform_features');
  buildOptionList(generateEnterpriseFeatures(), 'enterprise_features');
  buildOptionList(generateAdministration(), 'administration');

  buildOptionList(generateVPN(), 'vpn');
  buildOptionList(generateMicrosoft(), 'microsoft');
  buildOptionList(generateWeb(), 'web');
  buildOptionList(generateOther(), 'other');

  buildOptionList(generateCloud(), 'cloud');
  buildOptionList(generateAPI(), 'api');
  buildOptionList(generateReference(), 'reference');

  evt.preventDefault();
  document.getElementById("");

});

/*
  event listener for the close button in overlay
*/
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById('navclose').addEventListener('click', closeNav);
  document.getElementById('foobar').style.height - "0%";
})

/*
  event listener for the checkbox to hide/show images in overlay
*/
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById('pics').addEventListener('change', flagPics);
})

/*
  iterate through the 'select' elements within page.html
  building new HTML to inject
*/
function getSalesinatorOptions() {
  optionsList =  document.getElementsByTagName('select');
  finalHTML = "";
  render_images = false;
  if(document.getElementById("pics").checked) {
    render_images = true;
  }

  for (i = 0; i < optionsList.length; i++) {
    try {
      // if the option is found add it to the HTML list
      if (optionsList[i] != null) {
        key = optionsList[i].value;
        finalHTML = finalHTML + (key == null ? "" : buildEmail(key, render_images));
      } else { console.log("Null Entry"); }
    } catch(e){
      if(e){ console.log(e); }
    }
  }

  document.getElementById('foobar').innerHTML += finalHTML;
  document.getElementById('foobar').style.width = "100%";
  return false;
}

/* helper functions for opening and closing the nav-bar */
function openNAV() {
  document.getElementById('foobar').style.height = "100%";
}

function closeNav() {
  document.getElementById('foobar').style.height - "0%";
}

/* grab state of checkbox and store last value locally */
function flagPics() {
  if (document.getElementById('pics').checked == true) {
    chrome.storage.sync.set({"pics" : true});
  } else {
    chrome.storage.sync.set({"pics" : false});

  }
}

/* helper function to format the <option> tag */
function buildOptionHTML(key, value) {
  return "<option value=\"" + key + "\">" + value + "</option>\n"
}

/* builds the Intro Section based on a passed Dictionary */
function buildOptionList(list, section) {

  let maxCount = 3;
  var finalHTML = "";

  for ( x = 0; x < maxCount; x++ ) {
    finalHTML += "<select id=\"" + section + x + "\">";
    finalHTML += "<option label=\" \"></option>\n";
    for (var key in list) {
      if(list.hasOwnProperty(key)) {
        /* pass along the id and the text to helper function */
        finalHTML += buildOptionHTML(key, list[key]);
      }
    }
    finalHTML += "</select>"
  }
  document.getElementById(section).innerHTML += finalHTML;
}
