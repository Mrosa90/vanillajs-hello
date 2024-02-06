/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["Mi perro", "Mi abuelo", "Su gato", "Tu prima"];
  let action = ["muerde", "corre", "salta", "rompe"];
  let what = ["el coche", "las llaves", "el collar"];
  let when = [
    "despues de comer",
    "cuando sale a correr",
    "despues de ir al baño",
    "durante la comida",
    "mientras pone gasolina"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
