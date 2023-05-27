import express from 'express'
import studentController from '../controllers/studentController.js'
const router=express.Router()

router.get('/',studentController.getAllDoc)
router.post('/',studentController.createDoc)
router.get('/edit/:id',studentController.editDoc)
router.post('/update/:id',studentController.updateDoc)
router.post('/delete/:id',studentController.deleteDoc)



export default router;