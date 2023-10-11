import { Router } from "express";
import { privateRoutes, publicRoutes } from "../middlewares/auth.middleware.js";


const router = Router()


router.get('/register', privateRoutes, async (req, res) => {
    res.render('sessions/register')
})

router.get('/', privateRoutes, async (req, res) => {
    res.render('sessions/login')
})

router.get('/profile', publicRoutes, async (req, res) => {
    res.render('sessions/profile', req.session.user)
})

router.get('/session/register', privateRoutes, async (req, res) => {
    res.render('sessions/register')
})

router.get('/session/login', privateRoutes, async (req, res) => {
    res.render('sessions/login')
})

router.get('/session/profile', publicRoutes, async (req, res) => {
    res.render('sessions/profile', req.session.user)
})




export default router