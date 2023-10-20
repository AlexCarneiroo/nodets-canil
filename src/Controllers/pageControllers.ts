import { Request , Response } from "express";

export const home = (req: Request , res:Response) =>{
    res.render('pages/home')
}
export const cachorro = (req: Request , res:Response) =>{
    res.send('cachorro no controlers')
}
export const gato = (req: Request , res:Response) =>{
    res.send('gatos no controlers')
}
export const peixe = (req: Request , res:Response) =>{
    res.send('peixe no controlers')
}