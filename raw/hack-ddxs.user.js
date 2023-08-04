// ==UserScript==
// @name         Hack DYXS
// @version      0.2
// @author       You
// @match        https://dyxs15.com/*
// @match        https://waipian28.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.error('hack ddxs')
    var style = document.createElement('style');
    style.innerHTML = `
        body > a#dy_card_dy {display: none}
        .player-rm,.rm-list {display:none}
        .player_pic_link {pointer-events: none!important; display: none;}
        .player_pic_box {
            min-height: 240px;
            min-width: 360px;
            background: darkgray; display:grid;place-items:center}
        .player_pic_box::before {
            display: block;
            content: 'AD';
            color: lightgray;
            font-size: 8em;
        }
    `;
    document.head.appendChild(style);
})();
