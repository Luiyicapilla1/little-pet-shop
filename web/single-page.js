"use strict";

import {PetService} from "./src/services/PetService.js";
import {DomFacade} from "./src/Facades/DomFacade.js";

let update_pet_form = document.getElementById('update_pet_form');
const single_pet_section = document.getElementById('single_pet_section');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

document.addEventListener('DOMContentLoaded', async function (){
    let pet_data = await PetService.getPetById(id);
    DomFacade.renderSinglePetPage(single_pet_section, pet_data);
});

update_pet_form.addEventListener('submit', async function (){
    const namePet = document.getElementById('name').value;
    const img = document.getElementById('img').value;
    const type = document.getElementById('type').value;
    const desc = document.getElementById('desc').value;
    const status = document.getElementById('status').value;

    await PetService.updatePet(id, namePet, desc, img, type, status);
});