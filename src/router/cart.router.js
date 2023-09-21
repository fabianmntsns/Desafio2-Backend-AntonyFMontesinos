import { Router } from "express"
import CartManager from "../dao/managers/cartManager.js"

const router = Router()
const cartManager = new CartManager('./data/carts.json')

router.post('/', async (req, res ) => {
    const result = await cartManager.addCart()
    if(typeof result == 'string'){
        const error = result.split(' ')
        return res.status(parseInt(error[0].slice(1,4))).json({ error: result.slice(6)})
    }
    res.status(201).json({status: 'success', payload: result})
})

router.get('/:cid', async (req, res) => {
    const id = parseInt(req.params.cid)
    const result = await cartManager.getCartById(id)
    if(typeof result == 'string'){
        const error = result.split(' ')
        return res.status(parseInt(error[0].slice(1,4))).json({ error: result.slice(6)})
    }
    res.status(200).json({ status: 'success', payload: result})
})

router.post('/:cid/product/:pid', async (req, res)  => {
    const cid = parseInt(req.params.cid)
    const pid = parseInt(req.params.pid)
    const result = await cartManager.addProductToCart(pid, cid)
    if(typeof result == 'string'){
        const error = result.split(' ')
        return res.status(parseInt(error[0].slice(1,4))).json({ error: result.slice(6)})
    }
    res.status(201).json({ status: 'success', payload: result})
})

export default router