#!/usr/bin/env node

// number of primes being output
var P = 100

var is_prime = function(n) {
	if (n < 2)
		return false
	for (var i = 2; i * i <= n; ++i)
		if (n % i == 0)
			return false
	return true
}

// Print to console
var fmt = function(arr) {
    return arr.join(",")
};

var res = []
for (var i = 1; res.length < P; ++i)
	if (is_prime(i))
		res.push(i)
console.log(fmt(res))
