const { error } = require("console");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "postgresql",
  host: "localhost",
  port: 5432,
  database: "students_db",
});

const getData = (request, response) => {
  pool.query("SELECT * FROM students", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addData = (req, res) => {
  pool.query("", (error, result) => {
    if (error) {
      throw error;
    }

    console.log("Added");
    res.end();
  });
};

const delData = (req, res) => {
  pool.query("", (error, result) => {
    if (error) {
      throw error;
    }

    console.log("Deleted");
    res.end();
  });
};

module.exports = {
  getData,
  addData,
  delData,
};
