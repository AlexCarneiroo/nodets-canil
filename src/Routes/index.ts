import { Router } from "express";
import * as pagesControllers from '../Controllers/pageControllers'
import * as sercheControllers from '../Controllers/sercheControllers'
const router = Router();

router.get('/', pagesControllers.home)
router.get('/cachorro' , pagesControllers.cachorro)
router.get('/gato' , pagesControllers.gato)
router.get('/peixe' , pagesControllers.peixe)


export default router;