const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');
const imageController = require('../controllers/imageController');
const clusterController = require('../controllers/clusterController');

router.get('/img/:id', imageController.getImg);
router.get('/imgdata/:id', imageController.getImgData);
router.get('/in-cluster/:cid', clusterController.clusterQuery);
router.get('/related/:pid', clusterController.getRelated);
router.get('/number-of-layers/:cid', clusterController.getNumberOfLayers);

router.post('/searchfiltered', searchController.search);
router.get('/individual/:id', searchController.getIndividualInfo);

module.exports = router;
