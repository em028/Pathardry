

class PlayerCharacter {
	constructor() {
		this.pcname = "";
		this.ability = [];
		this.race = 0;
		this.job = 0;
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
	
	get getPcName() {
		return this.pcname;
	}
	set setPcName(pcname) {
		this.pcname = pcname;
	}
	
}