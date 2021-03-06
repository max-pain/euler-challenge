/* ----------- Problem 9 ----------- */
    
/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 2^5 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

{
    let a = 1;
    let b = 1000;
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    let solved = false;
    
    for(a; a < b; a++) {
    
        for(b; b > a; b--) {
            let aSquare, bSquare, cSquare;
            
            aSquare = Math.pow(a,2);
            bSquare = Math.pow(b,2);
            cSquare = aSquare + bSquare
            c = Math.sqrt(cSquare);	
    
            if(a + b + c === 1000) {
    
                console.log(`Problem 9: ${a*b*c}`);
    
            }
    
        }
    
        b = 1000;
    }
}