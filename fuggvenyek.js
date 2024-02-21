export function paros(szam) {
    let ps = false;
    /*if (szam % 2 === 0){
        ps = true
    }*/

    // Ternális operátor
    szam % 2 === 0 ? ps =true : ps=false;
    
    return ps;
}