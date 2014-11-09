// find pairs of primes that add up to the given number

var bint=require("/home/paul/node/bint")
var f=require("/home/paul/node/fact")
var np=f.np

var n=bint(process.argv[2])
for(var i=bint(2), ii=i.sq; ii.le(n); i=np(i), ii=i.sq)
   for(var j=bint(2), jj=j.sq; j.le(i); j=np(j), jj=j.sq)
      if(ii.add(jj).eq(n)) process.stdout.write(n+" = "+j+"^2 + "+i+"^2\n")

