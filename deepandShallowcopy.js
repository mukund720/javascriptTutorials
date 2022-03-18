let a=10;
let b=a;
b=20;
console.log(b)
console.log(a)
let a1={name:'Mk',address:{city:'A'},
getName:function()
{
    return this.name;
},
dob:new Date(),
}
// let b1={...a1} // shallow copy
// let b1=Object.assign({},a1) // way2 shallow copy
let b1=JSON.parse(JSON.stringify(a1))
b1.name='PK'
b1.address.city='C'
console.log(a1)
console.log(b1)