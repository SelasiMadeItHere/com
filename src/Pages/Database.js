const {createPool} = require('mysql');

const pool = createPool({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'aitcommerce',
  connectionLimit: 10
})

$ID = 'id';
$Campus = 'campus';
$Service = 'servicetype'
$Image = 'paymentproof'

pool.query(`INSERT INTO cardrenewal(ID, Campus, Service, Image) `)