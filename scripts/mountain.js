"use strict"


window.onload = function (_event) {

    const mountainCategory = document.getElementById("mountains")
    mountainCategory.onchange = renderMountaincard

    popluateMountaincategory(mountainsArray, mountainCategory)
}

function popluateMountaincategory(mountainsArray, selectMountain) {
    let html = "option value = Pick a Mountain. </option>"
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountain = mountainsArray[index];
        html += `<option value = "${mountain.name}">${mountain.name}</option>`

    }
    selectMountain.innerHTML = html
}

function renderMountaincard(event) {
    const selectedMountainid = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const selectedMountain = mountainsArray[index];
        if (selectedMountain.name === selectedMountainid) {
            html += `
            <div class="card bg-dark text-purple">
            <img src="/data/images/${selectedMountain.img}" class="card-img" alt="Stony Beach"/>
            <div class="card-img-overlay">
              <h5 class="card-title">${selectedMountain.name}</h5>
              <p class="card-text">
                ${selectedMountain.desc}
              </p>
              <p class="card-text">
                ${selectedMountain.effort}
              </p>
              <p class="card-text">
                ${selectedMountain.elevation}
              </p>
              <p class="card-text">
               Latitude: ${selectedMountain.coords.lat}, Longitude: ${selectedMountain.coords.lng}
              </p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
           `
          
        }
         const resultDiv = document.getElementById("selected-mountain")
         resultDiv.innerHTML = html
    }

}
