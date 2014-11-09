// find sum of (from two) up to four squared primes that add up to the given number

var bint=require("/home/paul/node/bint")
var f=require("/home/paul/node/fact")
var np=f.np

var n=bint(process.argv[2])
for(var i=bint(2), ii=i.sq; ii.le(n); i=np(i), ii=i.sq)
   for(var j=bint(2), jj=j.sq; j.le(i); j=np(j), jj=j.sq){
      var x=ii.add(jj)
      if(x.eq(n)) process.stdout.write(n+" = "+j+"^2 + "+i+"^2\n")
      if(x.ge(n)) break
      for(var k=bint(2), kk=k.sq; k.le(j); k=np(k), kk=k.sq){
         var y=x.add(kk)
         if(y.eq(n)) process.stdout.write(n+" = "+k+"^2 + "+j+"^2 + "+i+"^2\n")
         if(y.ge(n)) break
         for(var l=bint(2), ll=l.sq; l.le(k); l=np(l), ll=l.sq){
            var z=y.add(ll)
            if(z.eq(n)) process.stdout.write(n+" = "+l+"^2 + "+k+"^2 + "+j+"^2 + "+i+"^2\n")
            if(z.ge(n)) break
            }
         }
      }
