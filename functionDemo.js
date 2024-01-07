function message()
{
   console.log("Hi how are u") 
}
message()
message()
function messageWithName(name)
{
   console.log("Hi how are u "+name) 
}
messageWithName("mukund")
messageWithName("bhumika")
messageWithName()
function messageWithNameOptional(name="Guest")
{
   console.log("Hi how are u "+name) 
}
messageWithNameOptional("Ram")
messageWithNameOptional()
function getSum(a,b)
{
    return a+b
}
console.log(getSum(10,90))