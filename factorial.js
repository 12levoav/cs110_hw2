

const f = function(b) {
	
if(b<0){
	return "I don't know";
}
	if (b===0)

	{

	return 1;
	}

	return b * f(b-1);


};

const factorial = function(b){
console.log(f(b))
};



factorial(10);

