const MONGO_IP='localhost';
const MONGO_PORT=27017;
const DB_NAME='talkroom'

const mongodb = require('mongodb');
const server = new mongodb.Server(MONGO_IP, MONGO_PORT);
const database = new mongodb.Db(DB_NAME, server, {safe: true});

const mongoose = require('mongoose')
const postSchema =  new mongoose.Schema({name: String, comment: String});

mongoose.connect(`mongodb://${MONGO_IP}:${MONGO_PORT}/${DB_NAME}`);

module.exports = mongoose.model('Post', postSchema);
