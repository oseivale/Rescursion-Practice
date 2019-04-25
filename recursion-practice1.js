
// Write a recursive program to efficiently reverse a given string

function swap(x,y){
		var t = x;
		x = y;
		y = t; 
		return [x,y];
	}




var reverseString = function (str)
{
    if(str.length <= 1) return str;
    return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString('Valerie'));

