# towers_of_hanoi-recursion

This is a towers of hanoi recursive function I found in java and ported into jscript. It functions from the command line and will solve any towers of hanoi game in the least possible amount of moves. Beware when using, solutions quickly climb into high needs over about 14 as the solution to each towers problem is exponential (2^n-1 moves for n disks).

## to use

Simply copy the files to a directory and from the command line:

```
node towers.js <#disks> <from> <to> <aux>
```

The app will then solve the towers of hanoi problem printing out each step along the way.
