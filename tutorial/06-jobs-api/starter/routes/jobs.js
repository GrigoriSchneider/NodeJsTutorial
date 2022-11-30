const express = require('express');
const { register } = require('../controllers/auth');
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs');

router.route('/').post(createJob).get(getAllJobs); // domain/api/v1/jobs
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob); // domain/api/v1/jobs/:id

module.exports = router;
