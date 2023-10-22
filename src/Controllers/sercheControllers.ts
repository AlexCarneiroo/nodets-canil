import { Request , Response } from "express";
import { Peet } from "../Models/Pet";
import {createMenuObject} from '../helpes/createMenuObject';




export const serche = (req: Request , res:Response) =>{

    let query:string = req.query.q as string

    if(!query){
        res.redirect('/')
        return;
    }

    let list = Peet.getFromName(query)

    res.render('pages/home' , {
        menu: createMenuObject(''),
        list,query
    })



}