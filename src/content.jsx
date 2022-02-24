import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './content.css';
// import { render } from 'react-dom'; //this isn't used, does it need to be here?
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//import 'bootstrap/dist/js/bootstrap.min.js';


console.log('hellooooo');

function loadMetacontents(contents, ms) {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            contents = document.getElementById("meta-contents");
            console.log(contents);
            if (contents !== null && contents !== undefined) {
                resolve(contents);
                clearInterval(interval);
            } else {
                resolve(loadMetacontents);
            }
        }, ms);
    });
}

function loadHTML(contents, container, ms) {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            container = contents.getElementsByClassName("style-scope ytd-page-manager")[0];
            if (container !== null && container !== undefined) {
                resolve(container);
                clearInterval(interval);
            } else {
                resolve(loadHTML);
            }
        }, ms);
    });
}

async function getVideosContainer () {
    let div = document.createElement("div");
    div.id = "citation-box";

    let container = null;

    let contents = document.getElementById("page-manager");
    if (contents !== null) {
        container = contents.getElementsByClassName("style-scope ytd-page-manager")[0];
        while (container === null || container === undefined) {
            container = await loadHTML(contents, container, 700);
        }
        container = container.getElementsByClassName("style-scope ytd-search")[0];
        container = container.getElementsByClassName("style-scope ytd-search")[0];
        container = container.getElementsByClassName("style-scope ytd-two-column-search-results-renderer")[0];
        container = container.getElementsByClassName("style-scope ytd-two-column-search-results-renderer")[0];
        container = container.getElementsByClassName("style-scope ytd-section-list-renderer")[4];
        container = container.getElementsByClassName("style-scope ytd-section-list-renderer")[0];
        container = container.getElementsByClassName("style-scope ytd-item-section-renderer")[3];
    }
    return container;
}

function AddDivToVideo (container) {
    container = container.getElementsByClassName("style-scope ytd-item-section-renderer");
    
    for (let i = 0; i < container.length; i++) {
        let searchItem = container[i];
        let videoItem = searchItem.getElementsByClassName("style-scope ytd-video-renderer")[0];
        if (videoItem !== null && videoItem !== undefined) {
            videoItem = videoItem.getElementsByClassName("text-wrapper style-scope ytd-video-renderer")[0];
            videoItem = videoItem.getElementsByClassName("style-scope ytd-video-renderer")[10];
            console.log(videoItem);
        } else {
            console.log("Not Video");
        }
        // console.log(video);
        // ReactDOM.render(
        //     <App/>,
        //     video)
    
    }
}

// let mainPage = document.querySelector("#ytd-page-manager");

// Main DOM load event
window.addEventListener('load', (event) => {
    // let addBoxes = addCredDivs;
    // let credBoxes = addBoxes[0];
    // let channelNames = addBoxes[1];

    getVideosContainer().then((container) => {
        AddDivToVideo(container);
    });
});

// let video = document.querySelector("#movie_player > div.html5-video-container > video");

// video.addEventListener('canplay', function load() {
    
// })

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