"use strict"
console.log("JavaScript Project")

const $ = sel => {
  return document.querySelector(sel);
}
const selAll = sel => {
  return document.querySelectorAll(sel);
}

const longparagaph1 = evt1 => {
    const curH3Element = evt1.currentTarget;
    curH3Element.classList.toggle("minus");

    const curDivElement = curH3Element.nextElementSibling;
    curDivElement.classList.toggle("hide")

    const curDivElement2 = curDivElement.nextElementSibling;
    curDivElement2.classList.toggle("show")
  }

const formName = $("#input_name");
const formPassport = $("#passport_name");
const formCreditcard = $("#creditcard_name");
const formCity = $("#creditcard_name");
const formTransportation = $("#creditcard_name");
const noneOne = $("#c1");
const berlin = $("#c2");
const hamburg = $("#c3");
const noneTwo = $("#c4");
const train = $("#c5");
const taxi = $("#c6");
// Output
const output_destination = $("#output_destination");
const output_passport = $("#output_passport");
const output_cost = $("#output_cost");
const output_city_selected = $("#city_selected");
const output_transportation_method = $("#transportation_method");


const processReset = () => {
  
  formName.value = " ";
  formPassport.value = " ";
  formCreditcard.value = " ";
  noneOne.checked = false;
  berlin.checked = false;
  hamburg.checked = false;
  noneTwo.checked = false;
  train.checked = false;
  taxi.checked = false;
  $("#formdisplay").style.display = "none";
  $("#isASpan").style.display = "none";
  $("#isASpanRadio").style.display = "none";
  $("#isASpanRadioTwo").style.display = "none";
  $("#isASpan2").style.display = "none";
  $("#isASpan3").style.display = "none";
  $("#booktrip").style.visibility = "hidden";
}

const generateCookie = (cookie_name, value) => {
  console.log("generateCookie with " + cookie_name + " " + value);
  let cookie = cookie_name + "=" + encodeURIComponent(value);
  cookie += "; path=/";
  document.cookie = cookie;
}

const processPurchase = () => {
    if (isNaN(formName.value) == false) {
    $("#isASpan").style.display = "inline";
    }

    if(formPassport.value.length >= 7 || formPassport.value == "") {
      $("#isASpan2").style.display = "inline";
    }

    if(formCreditcard.value.length >= 7 || formCreditcard.value == "") {
      $("#isASpan3").style.display = "inline";
    }

    if (noneOne.checked == false & berlin.checked == false & hamburg.checked == false) {
      $("#isASpanRadio").style.display = "inline";
    }
    if (noneTwo.checked == false & train.checked == false & taxi.checked == false) {
      $("#isASpanRadioTwo").style.display = "inline";
      }
      else {
        generateCookie("CustomerName",formName.value);
        $("#booktrip").style.visibility = "visible";
        output_destination.value = formName.value;
        output_passport.value = formPassport.value;
        output_cost.value = formCreditcard.value;
        $("#formdisplay").style.display = "block";
          if (noneOne.checked == true) {
            output_city_selected.value =  "Nothing Selected";
          }
          if (berlin.checked == true) {
            output_city_selected.value = "Berlin";
            generateCookie("citySelected", output_city_selected.value);
          } 
          if (hamburg.checked == true) {
            output_city_selected.value = "Hamburg"; 
            generateCookie("citySelected", output_city_selected.value);
          }
          if (noneTwo.checked == true) {
            output_transportation_method.value = "Nothing Selected";
          }
          if (train.checked == true) {
            output_transportation_method.value = "Train"; 
            generateCookie("transportationSelected", output_transportation_method.value);
          }
          if (taxi.checked == true) {
            output_transportation_method.value = "Taxi";
            generateCookie("transportationSelected", output_transportation_method.value);
          }
        }
    }

    
const addDocumentListeners = () => {
    $("#reset").addEventListener("click", processReset);
    $("#process").addEventListener("click", processPurchase);
    const allH3Elements = selAll("h3");
    const length = allH3Elements.length;
    for (let i=0; i<length; i++) {
        let curElement = allH3Elements[i];
        curElement.addEventListener("click", longparagaph1);
    }
}


document.addEventListener("DOMContentLoaded",addDocumentListeners);