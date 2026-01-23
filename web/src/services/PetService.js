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
                    singlePet._id,
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
    static async getPetById(id){
        try{
            let res = await fetch(`http://localhost:3000/pets/${id}`);
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
            let petData = await res.json();
            let pet = new Pet(
                petData._id,
                petData.name,
                petData.desc,
                petData.img,
                petData.type,
                petData.status
                );
            return pet;
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
                    "desc": desc,
                    "img": img,
                    "type": type,
                    "status": status
                })
            });
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
            const data = await res.json();
            return data;
        }catch (e){
            console.log(e);
            return null;
        }
    }

    static async updatePet(id, name, desc, img, type, status){
        try{
            let res = await fetch(`http://localhost:3000/pets/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": name,
                    "desc": desc,
                    "img": img,
                    "type": type,
                    "status": status
                })
            });
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
            const data = await res.json();
            return data;
        }catch (e){
            console.log(e);
            return null;
        }
    }
}