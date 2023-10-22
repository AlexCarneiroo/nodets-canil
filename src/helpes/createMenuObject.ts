type Menus = '' | 'all' | 'cachorro' | 'gato' | 'peixe'


export const createMenuObject = (activeMenu:Menus) =>{
    let returnObject = {
        all:false,
        cachorro:false,
        gato:false,
        peixe:false
    }

    if(activeMenu != ''){
        returnObject[activeMenu] = true
    }


    return returnObject
}