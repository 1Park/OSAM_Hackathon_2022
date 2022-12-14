var express = require('express');
const { get } = require('http');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose(); 
var list=[];


router.get('/:keyword', function(req, res, next) {
  
  var key = req.params.keyword;
  
  const path = require('path'); 
  const dbPath = path.resolve(__dirname, './../db/UserDatabase.db');
  const checkQuery = 'SELECT * from sqlite_master where tbl_name="_'+key+'"';
  const getQuery = `SELECT * FROM _`+key;

  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        console.error(dbPath);
    } else {
        console.log('Connected to the UserDatabase.');
    }
  });

  db.all(checkQuery,[],(err,rows) =>{
    if(err){
      throw err;
    }
    if(rows.length>=1){
      db.all(getQuery,function (err,rows)
      {
        //console.log(rows)
        if(err){
          throw err;
        }
        rows.forEach((row,index)=>{ row.index=index })
        //console.log(rows)
        res.send(rows)
      }
    )
    }
  });

  db.close();

  console.log("sended to front");
});


module.exports = router;