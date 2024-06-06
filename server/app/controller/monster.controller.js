const db = require("../models");
const Monster = db.monster;
//CRUD controller for Monster collection in MongoDB

//Create functions
exports.create = async (mon) => {
    try {
        await Monster.create( {
            monster: mon
        });
    }
    catch (err) {
        console.error("Error creating monster entry.")
    }
}

//Retrieve functions
exports.findAll = async () => {
    let mons;
    try {
        mons = await Monster.findAll();
    }
    catch (err) {
        console.error("Error retrieving monsters.");
        return null;
    }
    return mons;
}

exports.findOneByMonsterID = async (id) => {
    let mon;
    try {    
        mon = await Monster.findOne({"monster.id": id});
    }
    catch (err) {
        console.error("Error retrieving monster.");
        return null;
    }
    return mon.monster;
}

exports.findOneByName = async (req) => {
    let mon;
    let words = req.split('-');
    for (i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    let name = words.join(' ');
    try {
        mon = await Monster.findOne({ "monster.local_name": name });
        mon = mon.monster;
    }
    catch (err) {
        console.error("Error retrieving monster.");
        return null;
    }

    console.log(mon.local_name);
    return mon;
}

//Update functions
exports.update = async (filter, update) => {
    try {
        Monster.findOneAndUpdate(filter, update);
    }
    catch (err) {
        console.log("Error finding and updating monster.");
    }
}

//Delete functions
exports.deleteOne = async (filter) => {
    try {
        let mon = Monster.findOne(filter).remove();
    }
    catch (err) {
        console.log("Error deleting monster.");
    }
}

