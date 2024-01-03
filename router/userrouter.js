import validation from '../validation/joi.js'
import controller from '../controller/usercontroller.js'
import express from 'express'
const Router = express.Router()
Router.post('/register', validation.registerValidation, controller.registerController)
Router.get('/login', validation.loginValidation, controller.loginController)
export default Router
