var express = require('express');
const { get } = require('http');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose(); 
var list=[];

// 중대 단위로 Get

/* GET users listing. */
router.get('/:keyword', function(req, res, next) {
  
  var key = req.params.keyword;
  
  const path = require('path'); 
  const dbPath = path.resolve(__dirname, './../db/UserDatabase.db');
  const getQuery = `SELECT * FROM Users where name like "%`+key+`%" OR belong like "%`+key+`%" ORDER BY belong ASC, number ASC`;
  //const getQuery = `SELECT * FROM Users where belong LIKE "%체계대대%" ORDER BY belong ASC, number ASC;`;

  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        console.error(dbPath);
    } else {
        console.log('Connected to the UserDatabase.');
    }
  });

  db.all(getQuery,[],(err,rows) =>{
    if(err){
      throw err;
    }
    rows.forEach((row,index)=>{ row.index=index })
    //console.log(rows)
    res.send(rows)

  });

  db.close();

  console.log("sended to front");
});


module.exports = router;
