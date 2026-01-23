"use strict";
const Pet = require("../models/Pet");
const { MongoClient, ObjectId} = require("mongodb");
class DbService{
    static async get(){
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetDB');
            const table = database.collection('Pet');

            const pet_data = await table.find().toArray();
            return pet_data;
        }catch (error){
            console.log(error);
        }finally {
            await mongo_client.close();
        }
    }
    static async post(name, desc, img, type, status){
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetDB');
            const table = database.collection('Pet');

            const pet_data = await table.insertOne({name: name, desc: desc, img: img, type: type, status: status});
            return pet_data;
        }catch (error){
            console.log(error);
        }finally {
            await mongo_client.close();
        }
    }
    static async getById(id){
        const uri = "mongodb://mongoadmin:secret@localhost:27017";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("PetDB");
            const petDB = database.collection("Pet");

            const pet = await petDB.findOne( { '_id': new ObjectId(id) } );
            return pet;
        } finally {
            await client.close();
        }
    }
    static  async delete(id){
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetDB');
            const table = database.collection('Pet');

            const pet_data = await table.deleteOne({ '_id': new ObjectId(id) });
            return pet_data;
        }catch (error){
            console.log(error);
        }finally {
            await mongo_client.close();
        }
    }
    static async put(id, name, desc, img, type, status){
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetDB');
            const table = database.collection('Pet');

            const pet_data = await table.updateOne({ '_id': new ObjectId(id) }, { $set: {name: name, desc: desc, img: img, type: type, status: status}});
            return pet_data;
        }catch (error){
            console.log(error);
        }finally {
            await mongo_client.close();
        }
    }
}
module.exports = DbService;