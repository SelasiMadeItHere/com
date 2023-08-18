
const express = require('express');
const bodyParser = require('body-parser');
const { createPool } = require('mysql');
const cors = require('cors')
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const MailMessage = require('nodemailer/lib/mailer/mail-message');
const bcrypt = require('bcrypt');

const app = express()
const port = process.env.PORT || 5002

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(port, () => console.log(`Let's start cooking on Port ${port}`))
app.use("/imageUploads", express.static("./imageUploads"));



//Sign Up Handler
app.post('/register', async (req, res) => {
  const { officer_name, role, mail, username, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert the user into the database
  pool.query(
    'INSERT INTO tbl_requests_officers (officer_name, role, mail, username, password) VALUES (?, ?, ?, ?, ?)',
    [officer_name, role, mail, username, hashedPassword],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating user.');
      } else {
        res.status(200).send('User created successfully.');
      }
    }
  );
});


// Login Handler
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;
//   const login = `SELECT role FROM requests.tbl_requests_officers WHERE username = '${username}' AND password = '${password}';`;
//   pool.query(login, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Error occurred during login.');
//     } else {

//       // Check if any user with the given uname and password is found
//       if (results.length > 0) {
//         const user = results[0];
//         var lg_state =
//         {
//           "state": 0,
//           "role": ""
//         }

//         switch (user.role) {
//           case 'admin':
//             // res.redirect('/dashboard');
//             lg_state.state = 1
//             lg_state['role'] = 'admin'
//             break;
//           case 'DFA':
//             // res.redirect('/dashboard');
//             lg_state.state = 1
//             lg_state['role'] = 'DFA'
//             break;
//           case 'IDU':
//             // res.redirect('/idunit');
//             lg_state.state = 1
//             lg_state['role'] = 'IDU'
//             break;
//           case 'Registrar':
//             lg_state.state = 1
//             lg_state['role'] = 'Registrar'
//             // res.redirect('/registrar');
//             break;
//           default:
//           //
//         }
//         if (lg_state.state == 1) {
//           res.status(200).json(lg_state)
//         } else {
//           res.status(403).json(lg_state)

//         }
//       } else {
//         res.status(403).send('Invalid username or password entered');
//       }
//     }
//   });
// });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve user with the provided username
  pool.query('SELECT * FROM tbl_requests_officers WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0) {
      console.error(err);
      res.status(401).send('Invalid username or password.');
    } else {
      const user = results[0];
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);

      var lg_state =
      {
        "state": 0,
        "role": ""
      }

      switch (user.role) {
        case 'admin':
          // res.redirect('/dashboard');
          lg_state.state = 1
          lg_state['role'] = 'admin'
          break;
        case 'DFA':
          // res.redirect('/dashboard');
          lg_state.state = 1
          lg_state['role'] = 'DFA'
          break;
        case 'IDU':
          // res.redirect('/idunit');
          lg_state.state = 1
          lg_state['role'] = 'IDU'
          break;
        case 'Registrar':
          lg_state.state = 1
          lg_state['role'] = 'Registrar'
          // res.redirect('/registrar');
          break;
        default:
        //
      }
      if (lg_state.state == 1) {
        res.status(200).json(lg_state)
      } else {
        res.status(403).json(lg_state)
      }
      if (passwordMatch) {
        req.session.user = user;
        res.status(200).send('Login successful.');
      } else {
        // res.status(401).send('Invalid username or password.');

      }
    }
  });
});




//MYSQL
const pool = createPool({ host: "localhost", user: "root", password: "", database: "requests", connectionLimit: 10 })

//DEFERMENT************************************************************************************************************************************
// ...Finance
app.get('/api/getdeferment', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_deferments WHERE status = 'Pending' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//....Finance Office Approves Request
app.post('/api/deferment/finapprove', (req, res) => {
  const { defid } = req.body;
  const sqlInsert = 'UPDATE tbl_deferments SET status = "verified" WHERE defid = ?';
  pool.query(sqlInsert, [defid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});



//...Registrar Gets Verified Requests
app.get('/api/reggetdeferment', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_deferments WHERE status = 'verified' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Register Approves Verified Requests
app.post('/api/deferment/regapprove', (req, res) => {
  const { defid } = req.body;
  const sqlInsert = 'UPDATE tbl_deferments SET status = "worked on" WHERE defid = ?';
  pool.query(sqlInsert, [defid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Processed Deferment Requests
app.get('/api/RegProcessedDefer', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_deferments WHERE status = 'worked on' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Tracking the Deferment request 
app.post('/api/trackDefer', (req, res) => {
  const { stuid, defid } = req.body;
  const sql = 'SELECT status FROM tbl_deferments WHERE stuid = ? AND defid = ?';

  // Execute the SQL query with the provided parameters
  pool.query(sql, [stuid, defid], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});




//TRANSCRIPT************************************************************************************************************************



app.get('/api/gettranscript', (req, res) => {
  const sqlGetTrans = "SELECT * FROM tbltranscript_requests WHERE status = 'Pending'";
  const created_at = new Date();
  pool.query(sqlGetTrans, (error, result) => {
    res.send(result);
  })
});


//....Finance Office Approves Request
app.post('/api/transcript/finapprove', (req, res) => {
  const { reqid } = req.body;
  const sqlInsert = 'UPDATE tbltranscript_requests SET stat = "verified" WHERE reqid = ?';
  pool.query(sqlInsert, [reqid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Registrar Gets from Finance
app.get('/api/getfinanceapprovedtranscripts', (req, res) => {
  const sqlGet = "SELECT * FROM tbltranscript_requests WHERE status = 'Verified' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Register Approves Verified Requests
app.post('/api/transcripts/regapprove', (req, res) => {
  const { defid } = req.body;
  const sqlInsert = 'UPDATE tbltranscript_requests SET status = "worked on" WHERE reqid = ?';
  pool.query(sqlInsert, [defid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Processed Transcripts Requests
app.get('/api/RegProcessedTrans', (req, res) => {
  const sqlGet = "SELECT * FROM tbltranscript_requests WHERE status = 'worked on' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Tracking the Transcript request 
app.post('/api/trackTrans', (req, res) => {
  const { stuid, reqid } = req.body;
  const sql = 'SELECT status FROM tbltranscript_requests WHERE stuid = ? AND reqid = ?';

  // Execute the SQL query with the provided parameters
  pool.query(sql, [stuid, reqid], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});










//INTRODUCTORY REQUESTS************************************************************************************************************************
app.get('/api/getIntro', (req, res) => {
  const sqlGetIntro = "SELECT * FROM tbl_introductory_requests";
  pool.query(sqlGetIntro, (error, result) => {
    res.send(result);
  })
});

app.delete('/api/delete/:reqid', (req, res) => {
  const { reqid } = req.params;
  const sqlDeleteIntro = "DELETE FROM tbl_introductory_requests WHERE reqid = ?";
  pool.query(sqlDeleteIntro, reqid, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Failed to delete entity." });
    } else {
      res.status(200).json({ success: true, message: "Entity deleted successfully." });
    }
  });
});


//...Registrar Gets from Finance
app.get('/api/Intro/getfinapproved', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_introductory_requests WHERE status = 'verified' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Register Approves Verified Requests
app.post('/api/Intro/regapprove', (req, res) => {
  const { deqid } = req.body;
  const sqlInsert = 'UPDATE tbl_introductory_requests SET status = "worked on" WHERE reqid = ?';
  pool.query(sqlInsert, [deqid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Processed Transcripts Requests
app.get('/api/Intro/RegProcessed', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_introductory_requests WHERE status = 'worked on' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Tracking the Introuctory Letter request s
app.post('/api/Intro/trackIntro', (req, res) => {
  const { stuid, reqid } = req.body;
  const sql = 'SELECT status FROM tbl_introductory_requests WHERE stuid = ? AND reqid = ?';

  // Execute the SQL query with the provided parameters
  pool.query(sql, [stuid, reqid], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});





//My AIT Commerce database***************************************************************************************************************
// const pool = createPool({ host: "localhost", user: "root", password: "", database: "aitcommerce", connectionLimit: 10 })

//Card
//Posting a renewal request
app.post('/api/insert', (req, res) => {
  const { stuid, rqst_id, Campus, Service, Email, imagePath } = req.body;
  const dateApplied = new Date();

  const sqlInsert = `INSERT INTO card_tbl (stuid, rqst_id, campus, service, email, image, DateApplied, status) VALUES (?,?,?,?,?,?,?, 'pending')`;
  const values = [stuid, rqst_id, Campus, Service, Email, imagePath, dateApplied];

  pool.query(sqlInsert, values, (err, result) => {
    res.status(201).send(result)
    if (err) {
      console.log(err)
    }
  })


  // Nodemailer Component
  let mailTransponder = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'a44c4de27ead4a',
      pass: '8d4115cf506fe3' //password
    },
  });

  let message = {
    from: "selasiprecious20@gmail.com",
    to: Email,
    subject: "AIT ID Card Renewal",
    text: "Your request for a renewal/replacement has been issued. Here's your request's Tracking ID: " + rqst_id +
      "\n Use this tracking ID to track the progress of your request",
  }

  mailTransponder.sendMail(message, (error, info) => {
    if (error) {
      return console.log(error)
    } else
      console.log('message sent: %s', info.messageId)
  })
})

//Fetching Initial state of request
app.get('/api/getCard', (req, res) => {
  const sqlGetCard = `SELECT * FROM card_tbl WHERE status= 'pending'`;
  pool.query(sqlGetCard, (error, result) => {
    res.send(result);
  })
})

//Updating state of Card
app.post('/api/cards/updatecards', (req, res) => {
  const { rqst_id } = req.body;
  const dateApproved = new Date(); // Get the current timestamp

  const sqlInsert = 'UPDATE card_tbl SET status = "verified", DateApproved = ? WHERE rqst_id = ?';
  const values = [dateApproved, rqst_id];

  pool.query(sqlInsert, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//Displaying finalized card
app.get('/api/finishedcards', (req, res) => {
  const sqlgetfinishedcards = `SELECT * FROM card_tbl WHERE status = "Verified" ORDER BY DateApproved DESC`;
  pool.query(sqlgetfinishedcards, (error, result) => {
    res.send(result)
  })
})

//Posting a complaint
app.post('/api/complain', (req, res) => {
  const { ID, rqst_id, Complaints } = req.body
  const sqlPostComplain = `INSERT INTO card_complaint (ID, rqst_id, complaints, image) VALUES (?,?,?,?)`;
  pool.query(sqlPostComplain, [ID, rqst_id, Complaints], (error, result) => {
    if (error) {
      console.log(result)
    }
  })
})

//Delete a request
app.delete('/api/deleteCard/:ID', (req, res) => {
  const { ID } = req.params;
  const sqlDeleteCard = "DELETE FROM card_tbl WHERE ID = ?";
  pool.query(sqlDeleteCard, ID, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Failed to delete entity." });
    } else {
      res.status(200).json({ success: true, message: "Entity deleted successfully." });
    }
  });
});



app.post('/api/checkTracking', (req, res) => {
  const { id, trackID } = req.body;
  // Assuming you have a table named 'requests' with columns 'id_number' and 'tracking_id'
  const sqlCheck = 'SELECT status FROM card_tbl WHERE ID = ? AND rqst_id = ?';
  pool.query(sqlCheck, [id, trackID], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Entry not found.' });
      }
    }
  });
});

// Helper function to map status to step number
function getStepFromStatus(status) {
  if (status === 'Pending') {
    return 0;
  } else if (status === 'Verified') {
    return 1;
  } else if (status === 'Approved') {
    return 2;
  }
  return 0; // Default to step 0 if status is unknown
}






//IMAGE HANDLING
// //Configuring multer storage

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "/imageUploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer(       
//   storage: storage,
//   limits: { fileSize: "5000000" },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|JPG|gif/;
//     const mimeType = fileTypes.test(file.mimetype);
//     const extname = fileTypes.test(path.extname(file.originalname));

//     if (mimeType && extname) {
//       return cb(null, true);
//     }
//     cb("Give proper files format to upload");
//   },
// )


// // Handle image upload
// app.post('/api/upload', upload.single('image'), (req, res) => {
//   if (req.file) {
//     // Here, you can store the image in the database
//     console.log('Image uploaded:', req.file.path);
//     res.sendStatus(200);
//   } else {
//     res.status(400).send('No image file found');
//   }
// });




//Searching through Joint Database to fatch Request state

app.post('/api/entries', (req, res) => {
  const { id, rqst_id } = req.body;
  const sql = `SELECT 'card_tbl' AS table_name, \n
  status FROM card_tbl WHERE stuid ='${id}'AND rqst_id = '${rqst_id}' \n
  UNION ALL \n
  SELECT 'tbl_deferments' AS table_name, \n
  status FROM tbl_deferments WHERE stuid = '${id}' AND rqst_id = '${rqst_id}' \n
  UNION ALL \n
  SELECT 'tbl_introductory_requests' AS table_name, \n
  status FROM tbl_introductory_requests WHERE stuid ='${id}' AND rqst_id = '${rqst_id}'\n 
  UNION ALL \n
  SELECT 'tbltranscript_requests' AS table_name, \n
  status FROM tbltranscript_requests WHERE stuid ='${id}' AND rqst_id = '${rqst_id}';`;


  // Execute the SQL query with the provided parameters
  pool.query(sql, [id, rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});


// REPORTS
app.post('/reportscalc', (req, res) => {
  const selectedMonth = req.body.selectedMonth;

  let sqlreport = "SELECT COUNT(*) AS count FROM card_tbl WHERE status='pending'";
  
  if (selectedMonth && selectedMonth !== 'All') {
      // Modify the SQL query to include the selected month filter
      sqlreport += ` AND MONTH(DateApplied) = ${selectedMonth}`;
  }

  pool.query(sqlreport, (err, result) => {
      if (err) {
          console.log(err);
          res.json({ success: false, message: "An error occurred" });
      } else {
          res.json({ success: true, count: result[0].count });
      }
  });
});



// // API endpoint for fetching request data
app.get('/api/requests', (req, res) => {
  const timeRange = req.query.timeRange; // 'months' or 'weeks'

  let sqlQuery = `
    SELECT DATE_FORMAT(DateApplied, '%Y-%m-%d') AS date,
           COUNT(*) AS requestCount
    FROM card_tbl
  `;

  if (timeRange === 'months') {
    sqlQuery += `
      WHERE YEAR(DateAppliedDateApplied) = YEAR(CURRENT_DATE())
      GROUP BY YEAR(DateApplied), MONTH(DateApplied)
      ORDER BY DateApplied
    `;
  } else if (timeRange === 'weeks') {
    sqlQuery += `
      WHERE YEAR(DateApplied) = YEAR(CURRENT_DATE())
      AND WEEK(DateApplied) = WEEK(CURRENT_DATE())
      GROUP BY YEAR(DateApplied), WEEK(DateApplied)
      ORDER BY DateApplied
    `;
  }

  pool.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});