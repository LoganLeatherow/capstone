require("dotenv").config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect:"postgres", 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    submitResin: (req,res)=>{
        let { 
                materialDescription,
                lotNumber
        } =req.body
        sequelize.query(`INSERT INTO silo_one(
        material_description, lot_number)
        VALUES('${materialDescription}','${lotNumber}')`)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    getResin: (req,res) =>{
        sequelize.query(`SELECT silo_one.material_description, silo_one.lot_number, silo_one.silo_one_id FROM silo_one
        `)
        .then((dbRes) =>{
            console.log(dbRes);
            res.status(200).send(dbRes[0]);
        })
        .catch((err)=>console.log(err));
    },
}







    // deleteResin: (req,res)=>{
    //     let {
    //         id
    //     } =req.params
    //     sequelize.query(`DELETE FROM silo_one WHERE silo_one_id='${id}`)
    //     .then(()=> res.sendStatus(200))
    //     .catch(err => console.log(err))
    // }

    // seed: (req, res) => {
    //     sequelize.query(`
    //         create table silo_one (
    //             silo_one_id serial primary key,
    //             material_description varchar,
    //             lot_number integer,
    //         );
    //         `).then(() => {
    //     console.log('DB seeded!')
    //     res.sendStatus(200)
    //     }).catch(err => console.log('error seeding DB', err))
    // }


