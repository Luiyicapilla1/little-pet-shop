"use strict";
import {User} from "../models/User.js";

export class UserService{
    static async getUserByName(name){
        try{
            let res = await fetch(`http://localhost:3000/users/${name}`);
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
            let data = await res.json();
            let user = new User(
                data.username,
                data.passw
            );
            return user;
        }catch (e){
            console.log(e);
            return null;
        }
    }
    static async postUser(username, passw){
        try{
            let res = await fetch(`http://localhost:3000/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "passw": passw,
                })
            });
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
            return true;
        }catch (e){
            console.log(e);
            return null;
        }
    }
}