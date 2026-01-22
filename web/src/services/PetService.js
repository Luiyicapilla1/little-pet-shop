"use strict";
import {Pet} from "../models/Pet.js";

export class PetService{
    static async getPets(){
        try{
            let pets_list = [];
            let res = await fetch(`http://localhost:3000/pets`);
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
            let petData = await res.json();
            for (const singlePet of petData) {
                let pet = new Pet(
                    singlePet.name,
                    singlePet.desc,
                    singlePet.img,
                    singlePet.type,
                    singlePet.status
                );
                pets_list.push(pet);
            }
            return pets_list;
        }catch (e){
            console.log(e);
            return null;
        }
    }
    static async createPet(name, img, type, desc, status){
        try{
            let res = await fetch(`http://localhost:3000/pets`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": name,
                    "img": img,
                    "type": type,
                    "desc": desc,
                    "status": status
                })
            });
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
        }catch (e){
            console.log(e);
            return null;
        }
    }
}