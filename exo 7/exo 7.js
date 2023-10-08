"use strict"
// pokémon
class Pokemoun{
    constructor(name,attaque, def, pdv,chance){
        this.name=name;
        this.attaque=attaque;
        this.def=def;
        this.pdv=pdv;
        this.chance=chance;
    }
    attackPokemon(pokemoun){
        if(this.isLucky()){
            let damage=this.attaque-pokemoun.def
            pokemoun.pdv-=damage
            console.log(this.name+' a violemment attaqué '+pokemoun.name+' il prend '+damage+' de dégât il lui reste '+pokemoun.pdv+" points de vie :0");
        }else {
            console.log(this.name+" a raté son attaque :(");
        }
    }
    isLucky(){
        return this.chance > Math.random();
    }
}
let Salamioche = new Pokemoun("Salamioche",27,15,40,0.3);
let Mangoéland = new Pokemoun("Mangoéland",33,10,35,0.7);

while(Salamioche.pdv >0 && Mangoéland.pdv>0){
    Salamioche.attackPokemon(Mangoéland)
    if(Mangoéland.pdv<=0){
        console.log(Mangoéland.name+" a succombé !");
        break;
    }
    Mangoéland.attackPokemon(Salamioche)
    if(Salamioche.pdv<=0){
        console.log(Salamioche.name+" a succombé !");
        break
    }
}


