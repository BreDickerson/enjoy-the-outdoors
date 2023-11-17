"use strict"

window.onload = function (_event) {

  const locationCategory = document.getElementById("locations")
  locationCategory.onchange = renderParkscard


  const parkTypecategory = document.getElementById("parktype")
  parkTypecategory.onchange = renderParkscard


  populateParkTypeSelect(parkTypesArray, parkTypecategory)
  populateLocationSelect(locationsArray, locationCategory)
  displayAllParkCards(nationalParksArray)
}

function populateParkTypeSelect(parkTypesArray, selectParktype) {
  let html = `<option>Pick Park by Parktype</option>`
  for (let parktypeIndex = 0; parktypeIndex < parkTypesArray.length; parktypeIndex += 1) {
    const Parktype = parkTypesArray[parktypeIndex]
    html += `<option value="${Parktype}">${Parktype}</option>`

  }
  selectParktype.innerHTML = html
}

function populateLocationSelect(locationsArray, selectLocation) {
  let html = `<option>Pick park by location</option>  `
  for (let locationIndex = 0; locationIndex < locationsArray.length; locationIndex += 1) {
    const locations = locationsArray[locationIndex];
    html += `<option value="${locations}">${locations}</option>`
  }
  selectLocation.innerHTML = html
}

function displayAllParkCards(nationalParksArray) {
  let html = ``
  for (let parkIndex = 0; parkIndex < nationalParksArray.length; parkIndex += 1) {
    const park = nationalParksArray[parkIndex];
    html += `<div class="card">
    <div class="card-header">
   ${park.LocationName}
    </div>
    <div class="card-body">
      <h5 class="card-title">${park.Address}</h5>
      <p class="card-text">${park.City}</p>
      <p class="card-text">${park.State}</p>
      <p class="card-text">${park.ZipCode}</p>
      <p class="card-text">${park.Phone}</p>
      <p class="card-text">${park.Fax}</p>
      <p class="card-text">Latitude:${park.Latitude} , Longitude: ${park.Longitude}</p>
      <a href="${park.Visit}">${park.Visit}</a>
    </div>
  </div>`
  }
  resultDiv.innerHTML = document.getElementById("resultDiv")
  resultDiv.innerHTML = html
}



function renderParkscard(event) {
  const selectedOption = event.target.value
  let html = ""
  for (let index = 0; index < nationalParksArray.length; index += 1) {
    const park = nationalParksArray[index];
    if (park.State === selectedOption) {
      html += `<div class="card">
            <div class="card-header">
              ${park.LocationName}
            </div>
            <div class="card-body">
              <h5 class="card-title">${park.Address}</h5>
              <p class="card-text">${park.City}</p>
              <p class="card-text">${park.State}</p>
              <p class="card-text">${park.ZipCode}</p>
              <p class="card-text">${park.Phone}</p>
              <p class="card-text">${park.Fax}</p>
              <p class="card-text">Latitude:${park.Latitude} , Longitude: ${park.Longitude}</p>
              <a href="${park.Visit}">${park.Visit}</a>
            </div>
          </div>`
    } if (park.LocationName.includes(selectedOption) === true) {
      html += `<div class="card">
            <div class="card-header">
              ${park.LocationName}
            </div>
            <div class="card-body">
              <h5 class="card-title">${park.Address}</h5>
              <p class="card-text">${park.City}</p>
              <p class="card-text">${park.State}</p>
              <p class="card-text">${park.ZipCode}</p>
              <p class="card-text">${park.Phone}</p>
              <p class="card-text">${park.Fax}</p>
              <p class="card-text">Latitude:${park.Latitude} , Longitude: ${park.Longitude}</p>
              <a href="${park.Visit}">${park.Visit}</a>
            </div>
          </div>`

  } 
  
    const resultDiv = document.getElementById("resultDiv")
    resultDiv.innerHTML = html
  }
}