"use strict"
console.log("JavaScript Project")

const $ = sel => {
  return document.querySelector(sel);
}
const selAll = sel => {
  return document.querySelectorAll(sel);
}
const getCookieByName = cookie_name => {
    const cookies = document.cookie;
   let start = cookies.indexOf(cookie_name + "=");
   if (start === -1) { 
     return "";
   } else {
     start = start + (cookie_name.length + 1);
     let end = cookies.indexOf(";", start); 
     if (end === -1) {
       end = cookies.length; 
     }
     const cookieValue = cookies.substring(start, end);
     return decodeURIComponent(cookieValue);
   } 
};

const CookieInfo = () => {  
    const traintoBerlin = 53.99;
    const taxitoBerlin = 23.99;
    const traintoHamburg = 43.99;
    const taxitoHamburg = 73.99;
    const BookName = getCookieByName("CustomerName");
    const BookCity = getCookieByName("citySelected");
    const BookTransportation = getCookieByName("transportationSelected");

    const formName = $("#FormName");
    const cityTotal = $("#CityTotal");
    const TransTotal = $("#booked_trans");
    const bookedTotal = $("#bookedTotal");
    formName.value = BookName;
    cityTotal.value = BookCity;
    TransTotal.value = BookTransportation;
    if (cityTotal.value == "Hamburg") {
        if (TransTotal.value == "Train") {
            bookedTotal.value = traintoHamburg.toFixed(2);
        }
        else {
            bookedTotal.value = taxitoHamburg.toFixed(2);
        }
         
    }
    if (cityTotal.value == "Berlin") {
        if (TransTotal.value == "Train") {
            bookedTotal.value = traintoBerlin.toFixed(2);
        }
        else {
            bookedTotal.value = taxitoBerlin.toFixed(2);
        }  
    }
}

document.addEventListener("DOMContentLoaded",CookieInfo);