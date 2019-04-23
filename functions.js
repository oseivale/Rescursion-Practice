// A recursive program to provide the solution to factorial

function factorial(n){
	if (n <= 1){
		return 1;
	} else {
		return n * factorial(n-1);
	}

}

console.log(factorial(4));

// factorail(4) -> 4 * factorial(3)
// factorial(3) -> 3 * factorial(2)
// factorial(2) -> 2 * factorial(1)

// A recursive program to provide solution to even numbers

function even(n) {

	if (n == 0){
		return "You are done"
	} else{
		return even(n-1);	
	} 
}

console.log(even(2))

//even(2) -> even(1)
//even(1) -> even(0) -> You are done

function sum(x){
	if(x<=0){
		return 1
	} else {
		return x * sum(x-2)
	}
}

console.log(sum(5));

//sum(5) -> 5 * sum(3)
//sum(3) -> 3 * sum(1)
//sum(1) -> 1