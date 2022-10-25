var express = require('express');
const { get } = require('http');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose(); 
var list=[];

// 중대 단위로 Get

function getFromDB(dbPath,getQuery){

  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        console.error(dbPath);
    } else {
        console.log('Connected to the UserDatabase.');
    }
  });
  
  db.serialize(()=>{
  db.all(getQuery,[],(err,rows) =>{
    if(err){
      throw err;
    }
    rows.forEach((row,index)=>{ row.index=index })
    list[0]=rows;
    db.close();

  });
  })
  return list[0];
}

/* GET users listing. */
router.get('/', function(req, res, next) {

  const path = require('path'); 
  const dbPath = path.resolve(__dirname, './../db/UserDatabase.db');
  const getQuery = 'SELECT * FROM Users where belong like'+this.$router.keyword+'ORDER BY number ASC';
  
  

  var info = getFromDB(dbPath, getQuery ) 
  this.$router.push(
    {
      name:"CombatDashboard",
      data: info
    }
  )
  //res.send(info)
  console.log("sended to front");
});


module.exports = router;
