
function randomInt(max) {
	return (Math.floor(Math.random() * max))+1;
}

function diceRoll(n,m) {
	tmp_i = 0;
	for (i=0; i<n; i++) {
		tmp_i += randomInt(m);
	}
	return tmp_i;
}

class PlayerCharacter {
	constructor() {
		this.pcname = "";
		this.ability = [3,3,3,3,3,3,3,3,3,3,3,3];
		this.race = 0;
		/*
	    0:Human
	    1:Dwarf
	    2:Elf
	    3:Hobit
	    4:Orc
		*/
		this.job = 0;
		this.lev = 1;
		this.exp = 0;
		this.hp = 0;
		this.mp = 0;
		this.ac = 10;
		
		this.item = [];
		this.e_head = 0;
		this.e_neck = 0;
		this.e_armL = 0;
		this.e_armR = 0;
		this.e_body = 0;
		this.e_fingL = 0;
		this.e_fingR = 0;
		this.e_foot = 0;
	}
	
	get getPcName() {	return this.pcname; }
	set setPcName(pcname) { this.pcname = pcname; }
	
	get getSTR() {return this.ability[0];}
	get getDEX() {return this.ability[1];}
	get getCON() {return this.ability[2];}
	get getINT() {return this.ability[3];}
	get getWIS() {return this.ability[4];}
	get getLUC() {return this.ability[5];}
	
	set setSTR(strength) {this.ability[0] = strength;}
	set setDEX(dexiterity) {this.ability[1] = dexiterity;}
	set setCON(constitution) {this.ability[2] = constitution;}
	set setINT(inteligence) {this.ability[3] = inteligence;}
	set setWIS(wisdom) {this.ability[4] = wisdom;}
	set setLUC(luck) {this.ability[5] = luck;}
	
	get getRace() {return this.race;}
	set setRace(raceid) {this.race = raceid;}
	
}