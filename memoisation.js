function memoizedSequence() {
    let memo = {};

    return function sequence(n) {
        if (n <= 1) return n;
        if (memo[n]) {
            console.log("Get seq(", n, ") from closure =>", memo[n]);
            return memo[n];
        }
        console.log("Call seq(", n, ")");
        memo[n] = sequence(n - 1) + sequence(n - 2);
        return memo[n];
    };
}

let seq = memoizedSequence();

console.log(seq(10));
console.log(seq(7));
console.log(seq(15));
console.log(seq(10));
