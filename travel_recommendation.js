let btnSearch = document.getElementById("btnSearch");
let resetButton = document.getElementById("resetButton");
let input = document.getElementById('recommendationInput');
let resultDiv = document.getElementById('searchResults');

   
fetch("travel_recommendation_api.json")
    .then(response => {
      if(!response.ok){
        throw new error("Couldn't find data");
      }
      return response.json();
    })
    .then(data => console.log(data))
    .then(data => {
    const countriesInfo = document.getElementById('countries')
        countriesInfo.innerHTML = `
         <h2 class="title">${name}</h2>
         <img class="search-img" src=${img}>
         <p class="description">${info}</p>`
         searchResults = countriesInfo;
    })
    
    .catch(error => console.error(error));




const searchError = () => {
    if (resultDiv.style.display === "none" || resultDiv.style.display === "") {
        resultDiv.style.display = "block";
    } else {
        resultDiv.style.display = "none";
    }
    resultDiv.innHTML = `<p class="nuttinFound">No results found</p>`;
};

const resetResults = () => {
    input.value = "";
    resultDiv.style.display = "none";
    console.log("clearing results")
};

const displayResults = (name, img, info) => {
    if (resultDiv.style.display === "none" || resultDiv.style.display === "") {
        resultDiv.style.display = "block";
    } else {
        resultDiv.style.display = "none";
    }
    resultDiv.innerHTML = `<h2 class="localName">${name}</div>
        <img class="localImg" src = images/${img}>
        <p class="localdescription">${info}</p>`;
};

resetButton.addEventListener("click", resetResults);
