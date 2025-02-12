// src/routes/task.routes.js
const { Router } = require('express');
const { getAllTasks, getTasks, createTasks, deleteTasks, updateTasks } = require('../controllers/task.controllers');
const upload = require('../middlewares/multer'); // Asegúrate de que esta ruta sea correcta

const router = Router();

router.get('/task', getAllTasks);
router.get('/task/:id', getTasks);
router.post('/task', upload.single('image'), (req, res, next) => {
    if (!req.body.title || !req.body.description) {
        return res.status(400).json({ message: "Title and description are required" });
    }
    next();
}, createTasks);
router.delete('/task/:id', deleteTasks);
router.put('/task/:id', upload.single('image'), updateTasks);

module.exports = router;
