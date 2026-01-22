"use strict";

import {UserService} from "./src/services/UserService.js";

let register_form = document.getElementById('register_form');

register_form.addEventListener('submit', async function (e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const passw = document.getElementById('passw').value;
    await UserService.postUser(username, passw);
    if (await UserService.postUser(username, passw) === true){
        location.href = '/little-pet-shop/web/index.html';
    }
});