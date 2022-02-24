//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import './content.css';
//import { render } from 'react-dom'; //this isn't used, does it need to be here?
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//import 'bootstrap/dist/js/bootstrap.min.js';


console.log('hellooooo');



let mainPage = document.querySelector("#ytd-page-manager");

//window.addEventListener('load', (event) => {});
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
    let addBoxes = addCredDivs;
    let credBoxes = addBoxes[0];
    let channelNames = addBoxes[1];
    
});


async function addCredDivs () {
    const channelInfo = document.querySelectorAll("[id='channel-info']");
    await loadChannelInfo(channelInfo, 500);
    let credDivs = new Array();
    let channelNames = new Array();
    
    if(channelInfo !== null) {
        for (let i = 0; i < channelInfo.length; i++) {
            let container = collection[i];
            let channelNameElement = collection[i].getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string")[0];
            let channelName = channelNameElement.textContent.split(" ").join("-");
            let div = document.createElement("div");
            div.className = "cred-signal-box";
            div.id = channelName;

            credDivs.push(div);
            channelNames.push(channelName);

            if(container.nextSibling.id = channelName) {
                container.parentNode.removeChild(container.nextSibling);
            } else {
                insertAfter(div, container);
            }
        }
    }
    return ([credDivs, channelNames]);
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function loadChannelInfo(contents, ms) {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            contents = document.querySelectorAll("[id='channel-info']");
            if (contents !== null && contents !== undefined) {
                resolve(contents);
                clearInterval(interval);
            } else {
                resolve(loadMetacontents);
            }
        }, ms);
    });
  }