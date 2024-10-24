// routes.js
const express = require('express');
const router = express.Router();
const { loginController, signupController } = require('../controllers/LoginController');
const { createForm } = require('../controllers/formControllers');
const { chatController } = require('../controllers/chatController');
const { submitContactUs } = require('../controllers/contactcontroller');
const { submitFeedback } = require('../controllers/feedbackcontrollers');
const { createDrive } = require('../controllers/driveController');
const { createInternship } = require('../controllers/internshipController');
const { createQuestion } = require('../controllers/QuestionsController');

router.post('/api/login', loginController);
router.post('/api/signup', signupController);
router.post('/api/submit', createForm);
router.post('/api/chat', chatController);
router.post('/api/contact', submitContactUs);
router.post('/api/feedback', submitFeedback);
router.post('/api/drive', createDrive);
router.post('/api/internship', createInternship);
router.post('/api/question', createQuestion);
module.exports = router;
