"use strict";
const { MongoClient, ObjectId} = require("mongodb");

class UsersService{
    static async getUser(){
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('UsersDB');
            const table = database.collection('Users');

            const user_data = await table.find().toArray();
            return user_data;
        }catch (error){
            console.log(error);
        }finally {
            await mongo_client.close();
        }
    }
    static async postUser(username, passw){
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('UsersDB');
            const table = database.collection('Users');

            const user_data = await table.insertOne({username: username, passw: passw});
            return user_data;
        }catch (error){
            console.log(error);
        }finally {
            await mongo_client.close();
        }
    }
    static async getByName(username){
        const uri = "mongodb://mongoadmin:secret@localhost:27017";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("UsersDB");
            const usersDB = database.collection("Users");

            const users = await usersDB.findOne( { 'username': username } );
            return users;
        } finally {
            await client.close();
        }
    }
    delete(id){

    }
}
module.exports = UsersService;