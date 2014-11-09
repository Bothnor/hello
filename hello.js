// find pairs of primes that add up to the given number

var bint=require("/home/paul/node/bint")
var f=require("/home/paul/node/fact")
var isprime=f.isprime
var np=f.np

var n=bint(process.argv[2])
for(var i=bint(2); i.le(n); i=np(i))
   for(var j=bint(2); j.le(i); j=np(j))
      if(i.add(j).eq(n)) process.stdout.write(n+" = "+j+" + "+i+"\n")

