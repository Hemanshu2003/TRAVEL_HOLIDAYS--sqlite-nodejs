const sqlite3 = require('sqlite3').verbose();
// Verbose mode in SQLite refers to the level of detail and output displayed by the database during query execution. It can be useful for debugging and understanding the query performance.

const db = new sqlite3.Database(
  './sqlite.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) console.log(err);
    else console.log('Connection to DB Sucessfull!!');
  }
);

// connect to DB

// const SQL = `CREATE TABLE TOURS ( ID INTEGER PRIMARY KEY,title varchar2(30),img_url varchar2(100),price varchar2(100),duration varchar2(100),location varchar2(100),description varchar2(600))`;
// const SQL = `create table USER(name varchar2(10))`;

// const SQL = `UPDATE TOURS SET title = '123' , img_url = '123' , price = '123' , duration = '123', location = '123' , description = '123' , ratings = '123'  where ID = 20`;
// db.run(SQL);

// const SQL = `ALTER TABLE TOURS ADD ratings varchar2(10)`;
// db.run(SQL);

/// imgUrl / Title / description / Price / location /duration /

module.exports = db;
