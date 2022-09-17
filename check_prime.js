let n=9;
let count=0
for(let i=1;i<=n;i++)
  {
    if(i%2==0)
    {
      count++
    }
  }
if(count>2)
{
  console.log("Prime")
}
else
{
  console.log("Not Prime")
}