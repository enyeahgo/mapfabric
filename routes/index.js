const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Map Fabric'
  });
});

module.exports = router;