import Datastore from 'nedb';
import fs from 'fs';
import path from 'path';

let db = {};
var exists = fs.existsSync(path.resolve(__dirname, "./items.db")) && fs.existsSync(path.resolve(__dirname, "./types.db"));
db.items = new Datastore({ filename: path.resolve(__dirname, "./items.db"), autoload: true });
db.types = new Datastore({ filename: path.resolve(__dirname, "./types.db"), autoload: true });

if (!exists) {
  console.log("INIT DB;")
  db.types.insert({_id: "1", name: "A"});
  db.types.insert({_id: "2", name: "B"});
  db.types.insert({_id: "3", name: "C"});
  db.types.insert({_id: "4", name: "D"});

  db.items.insert({_id: "1", name: "První", type_id: "1"});
  db.items.insert({_id: "2", name: "Druhý", type_id: "3"});
  db.items.insert({_id: "3", name: "Třetí", type_id: "1"});
}

export default db;
