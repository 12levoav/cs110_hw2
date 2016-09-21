
const star = function(a) {
	if(a===0){
		return "";
	}
	return "*"+star(a-1);
};

const space = function (a) {
	if (a===0){
		return "";
}
	return " " + space(a-1);
};

const l = function (a,s) {
	if(a===0){
		return "";
	}
	return space(a)+star(s)+"\n"+l(a-1,s+2);
	
};


const triangleStars = function (a){
	if(a===0){
		return "";
	}
console.log(l(a,1))
	
};


triangleStars(30);
