var mainHeader = document.querySelector('#main-header');
function setHeaderText() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            mainHeader.innerText = 'Changed';
            console.log('text changed')
            resolve('some arg');
        }, 3000)
    });
}


function changeHeaderColor() {
    mainHeader.style.color = "red";
    console.log('color changed');
}

function getStarwarsData() {
    var url = 'https://swapi.dev/api/people';

    return fetch(url)
        .then(function (res) {
            return res.json();
        })
}

getStarwarsData()
    .then(function (data) {
        console.log(data)

    })


setHeaderText()
    .then(getStarwarsData)
    .then(changeHeaderColor);

/////////////////////////////////////////////////
//////////////////////JQUERY////////////////////
var mainHeader = $('#main-header')

function setHeaderText() {
    return new Promise (function (resolve,reject){
        setTimeout(function (){
            mainHeader.textContent('changed')
        },3000)
    })
}

function changeHeaderColor() {
    mainHeader.classList('color', 'red');
}