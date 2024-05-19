const properties = require("./json/properties.json");
const users = require("./json/users.json");
const { Pool } = require("pg");



const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "lightbnb",
});

// // the following assumes that you named your connection variable `pool`
// pool.query(`SELECT id, owner_id FROM properties LIMIT 10;`).then(response => {console.log("the response is:",response.rows)})
// pool.end()




/// Users
//////////////////////////////////////////////////////////////////////////////////
/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
///////////////////////////////////////////////////////////////////////////////////////
const getUserWithEmail = (email) => {
  return pool
    .query('SELECT * FROM users WHERE email = $1', [email])
    .then ((result) => {
      console.log("----------------------------------------------")
      console.log("this is properties using the email :",result);
      console.log("----------------------------------------------")
      if(result.rows.length > 0) {
        console.log(result.rows[0]) ;
        return result.rows[0];
        

      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });   
  };
  
  
  /**
   * Get a single user from the database given their id.
   * @param {string} id The id of the user.
   * @return {Promise<{}>} A promise to the user.
  */
 const getUserWithId = function (id) {
  return pool
  .query('SELECT * FROM users WHERE email = $1', [id])
  .then ((result) => {
    console.log("----------------------------------------------")
    console.log("this is properties using the id :",result);
    console.log("----------------------------------------------")
    if(result.rows.length > 0) {
      console.log(result.rows[0]) ;
      return result.rows[0];
      

    } else {
      return null;
    }
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });   
};

  
  /**
   * Add a new user to the database.
   * @param {{name: string, password: string, email: string}} user
   * @return {Promise<{}>} A promise to the user.
  */
 const addUser = function (user) {
   const userId = Object.keys(users).length + 1;
   user.id = userId;
   users[userId] = user;
   return Promise.resolve(user);
  };
  
  ///////////////////////////////////////////////////////////////////////////////////////

  /// Reservations
  /**
   * Get all reservations for a single user.
   * @param {string} guest_id The id of the user.
   * @return {Promise<[{}]>} A promise to the reservations.
  */
 ///////////////////////////////////////////////////////////////////////////////////////

const getAllReservations = function (guest_id, limit = 4) {
  return getAllProperties(null, 2);
};

///////////////////////////////////////////////////////////////////////////////////////
// Properties

// /**
//  * Get all properties.
//  * @param {{}} options An object containing query options.
//  * @param {*} limit The number of results to return.
//  * @return {Promise<[{}]>}  A promise to the properties.
//  */
///////////////////////////////////////////////////////////////////////////////////////

const getAllProperties = (options, limit = 1) => {
  
  return pool
  .query( `SELECT * FROM properties LIMIT $1`, [limit])
  .then ((result) => {
    console.log("----------------------------------------------")
    console.log("result for getAllProperties :",result.rows);
    console.log("----------------------------------------------")
    return result.rows;
  })
    .catch((err) => {
      console.log(err.message);
    });



};

///////////////////////////////////////////////////////////////////////////////////////
/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
///////////////////////////////////////////////////////////////////////////////////////

const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// exports all functions
///////////////////////////////////////////////////////////////////////////////////////


module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
};
