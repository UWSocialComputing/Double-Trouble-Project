import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './content.css';
import 'jquery/dist/jquery.min.js';

setInterval(addCredDivs, 2000);

async function addCredDivs () {
    let channelInfo = null;
    while (channelInfo == null || channelInfo == undefined) {
        channelInfo = await loadChannelInfo(channelInfo, 500);
    }
    let credDivs = new Array();
    let channelNames = new Array();
    // console.log(channelInfo);
    if(channelInfo !== null) {
        for (let i = 0; i < channelInfo.length; i++) {
            let container = channelInfo[i];
            let channelNameElement = channelInfo[i].getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string")[0];
            let channelName = channelNameElement.textContent.split(" ").join("-");
            let div = document.createElement("div");
            div.className = "cred-signal-box";
            div.id = channelName;

            credDivs.push(div);
            channelNames.push(channelName);

            if(container.nextSibling.id == channelName) {
                // console.log("remove stale")
                container.parentNode.removeChild(container.nextSibling);
            }
            insertAfter(div, container);
                ReactDOM.render(
                    <App/>,
                    div)
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