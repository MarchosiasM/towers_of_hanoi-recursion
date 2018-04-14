var [path, node, ...args] = process.argv


var index = 0;
function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n === 1) {
        index++
        console.log("Move disk 1 from rod " + from_rod + " to rod " + to_rod + ". Step " + index);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    index++
    console.log("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + ". Step " + index);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);

}

towerOfHanoi(args[0], args[1], args[2], args[3])

var proof = (Math.pow(2,args[0]) - 1)
console.log(args[0] + " disks led to " + index + " steps. According to the theory, should be " + proof)