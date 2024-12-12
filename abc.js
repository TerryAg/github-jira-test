const db = require('./db');

http.get('/email', (req, res) => {
  db.query('SELECT email FROM users WHERE id = ' + req.query.id);
    .then((record) => {
      // logical flow
      res.send(record[0]);
    })
});
