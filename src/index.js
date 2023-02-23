import { getElementByXpath } from "../scripts/utils/nodeUtils";
import { saveChatNodeButton } from "./content-scripts/saveChat";



const form = getElementByXpath('//*[@id="__next"]/div[1]/div[1]/main/div[2]/form');
form.appendChild(saveChatNodeButton())

console.log("test")