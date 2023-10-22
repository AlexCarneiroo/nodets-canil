import { Request, Response } from "express";
import { createMenuObject } from "../helpes/createMenuObject";
import { Peet } from "../Models/Pet";

export const home = (req: Request, res: Response) => {

    let list = Peet.getAll()
    res.render('pages/home', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais'
        },
        list
    })
}
export const cachorro = (req: Request, res: Response) => {

    let list = Peet.getFromType('dog')

    res.render('pages/home', {
        menu: createMenuObject('cachorro'),
        banner: {
            title: 'Cachorros'
        },
        list
    })
}
export const gato = (req: Request, res: Response) => {
    let list = Peet.getFromType('cat')
    res.render('pages/home', {
        menu: createMenuObject("gato"),
        banner: {
            title: 'Gatos'
        },
        list
    })
}
export const peixe = (req: Request, res: Response) => {
    let list = Peet.getFromType('fish')
    res.render('pages/home', {
        menu: createMenuObject('peixe'),
        banner: {
            title: 'Peixes'
        }, list
    })
}   