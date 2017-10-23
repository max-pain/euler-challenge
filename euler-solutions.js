/* ----------- Problem 1 ----------- */

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

This is the solution I came up this. i am well aware that it is not ideal and requires more lines of code. 
It took me quite a while because my first version had double entries for values that could be multiplied with 3 and 5, because it was not stated in the problem, that the soultion should count those only once.
Anyways, this works.

*/

{

	const arr = [3, 5];
	const maxValue = 1000;
	let unique = new Set;

	arr.forEach( function(cur) {

		let multiplication = 0;
		let integer = 0;
		
		while (multiplication < maxValue) {

			multiplication = integer * cur;

			if (multiplication < maxValue) {

				unique.add(multiplication);

				integer++;
			}

		} 

	});

	function calcResult() {
		let sum = 0;
		
		for (x of unique) {
			sum = sum + x;
		}

		return sum;

	}

	let result = calcResult();

	console.log(`Problem 1: ${result}`);

}

/* ----------- Problem 2 ----------- */

/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

{

	let fibonacci = [1, 2, 3];
	let evenSum = 0;


	while ( fibonacci[fibonacci.length - 1] <= 4e+6 ) {

		fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);

	}

	for ( let value of fibonacci ) {

		if (value%2 === 0) {
			evenSum += value;
		}
	}

	console.log(`Problem 2: ${evenSum}`);

}

/* ----------- Problem 3 ----------- */

/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

This is my solution. Haven't done any maths like that since I left high school,
so had to catch up on some reading about prime numbers and factors.
The solution doesn't look very elegant and you quickly run into this error: 
"Uncaught RangeError: Maximum call stack size exceeded" when trying multiple large numbers (reopen window)"

*/

{

	let checkIfPrime = [];
	let primeNumbers = [];
	let target = 600851475143;
	let divident = target;
	let factors = [];
	let i = 0;

	// add possible relevant prime numbers to array
	for (let i=2; i < Math.sqrt(target); i++) {
		checkIfPrime.push(i);
	}

	// check if they are prime numbers and push to array
	checkIfPrime.forEach( function(cur) {
		let q = Math.floor(Math.sqrt(cur));

	    for (let i = 2; i <= q; i++)
	    {
	        if (cur % i == 0)
	        {
	            return false;
	        }
	    }

	    primeNumbers.push(cur);

	});

	// calculate the prime factors
	function calcFactors() {
		if (divident%primeNumbers[i] == 0) {
			factors.push(primeNumbers[i]);
		  divident = divident / primeNumbers[i];
		  calcFactors();
		} else if (primeNumbers.includes(divident) === true || divident === 1) {
			if (divident > 1) {
				factors.push(divident);
			}
			console.log(`Problem 3: ${factors[factors.length - 1]}`);
		} else {
			i++;
			calcFactors();
		}
	}

	calcFactors();

}













































