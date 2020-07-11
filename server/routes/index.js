const express = require('express');
const md5 = require('md5');
const Joi = require('@hapi/joi');
const router = express.Router();

router.post('/tiny', (req, res) => {
  const schema = Joi.object({
    url: Joi.string().uri()
  });
  console.log(req.body);
  const validation = schema.validate(req.body);
  // TODO: Change 500 to proper code
  if (!validation) { res.sendStatus(500) }
  const { url } = validation.value;
  console.log(url);
  const hashedUrl = md5(url);
  // TODO: Save this to DB;
  res.json({ hashedUrl: hashedUrl });
});

router.get('/redirect', (req, res) => {
  const hashedUrl = req.query.id;
  // TODO: get url from DB or hashmap
  const url = '';
  res.redirect(url);
});

module.exports = router;