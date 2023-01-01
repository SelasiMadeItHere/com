// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "aitecommerce"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE TABLE Staff", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
// });


const {createPool} = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "aitecommerce",
  connectionLimit: 10
})

pool.query(`CREATE TABLE Staff`, (err,results)=>{
  if (err){
    return console.log(err)
  }
   return console.log(results)
})