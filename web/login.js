"use strict";
import {UserService} from "./src/services/UserService.js";

const login_form = document.getElementById('login_form');
login_form.addEventListener('submit', async function (e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    let db_user = await UserService.getUserByName(username);
    const passw = document.getElementById('passw').value;

    if (db_user !== null){
        if (db_user.username === username && passw === db_user.passw){
            location.href = '/little-pet-shop/web/main-page.html';
        }
    }else{
        location.href = '/little-pet-shop/web/register.html';
    }
});