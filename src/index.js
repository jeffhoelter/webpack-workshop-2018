import nav from "./nav";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { red, makeColorStyle } from "./button-styles";

const button = makeButton("Yay! A button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
console.log(nav(), top, bottom, makeButton("hello"), red);
