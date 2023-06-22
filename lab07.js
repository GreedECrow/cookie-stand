"use strict"
console.log("lab07");

const cookieStandForm = document.getElementById("addCookieStandForm");
const storeName = document.getElementById("storeLocationInput");
const minCustPerHour = document.getElementById("minCustPerHourInput");
const maxCustPerHour = document.getElementById("maxCustPerHourInput");
const avgCookiesPerHour = document.getElementById("avgCookiesPerHourInput");

const allStores = [];

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function CookieStand(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {

    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;
    this.render();

}

CookieStand.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
};

CookieStand.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
}

CookieStand.prototype.render = function () {
    const containerElement = document.getElementById("cookie-stand");

    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.textContent = this.storeName;

    tr.appendChild(th);

    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement("td");
        td.textContent = this.cookiesEachHour[i];
        tr.appendChild(td);
    }

    const storeTotal = document.createElement("th");
    storeTotal.textContent = this.totalDailyCookies;
    tr.appendChild(storeTotal);

    storeTable.appendChild(tr);


}


const seattle = new CookieStand("Seattle", 23, 65, 6.3);
const tokyo = new CookieStand("Tokyo", 3, 24, 1.2);
const dubai = new CookieStand("Dubai", 11, 38, 3.7);
const paris = new CookieStand("Paris", 20, 38, 2.3);
const Lima = new CookieStand("Lima", 2, 16, 4.6);

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

cookieStandForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const storeName = event.target.storeName.value;
    const minCustPerHour = event.target.minCustPerHour.value;
    const maxCustPerHour = event.target.maxCustPerHour.value;
    const avgCookiesPerHour = event.target.avgCookiesPerHour.value;

    const newStore = new CookieStand(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour);
    console.log(newStore);
    console.log(allStores);

    renderAllStores();
    cookieStandForm.reset();
});

function renderAllStores() {
    for (let i = 0; i < allStores.length; i++) {
        allstores[i].render();
    }
}

renderAllStores();