/*let Xuser = new Object()//-> singlton object

//console.log(Xuser)

let Xuser={}// ->non singlton object

//console.log(Xuser)

Xuser.id= "rta_eng";

Xuser.name="john";

Xuser.logged=false;

//console.log(Xuser)

const user={

email:"john@email",

fullname:{

    userfullname:{
        firstname:"john",
        lastname:"travis"
    }
} 

}

//console.log(user.fullname?.userfullname)


const obj1={1:'a',2:'b'}

const obj2={3:'c',4:'d'}

const obj3={obj1,obj2}

//console.log(obj3)


const obj4= Object.assign(obj1,obj2)
//console.log(obj4)
//console.log(obj2)

const obj5= Object.assign(obj2,obj1,obj3)


//console.log(obj5)

console.log(Xuser)

const ans= Object.keys(Xuser)

console.log(typeof ans , ans)

console.log(Object.values(Xuser))

console.log(Object.entries(Xuser))

*/

///////DESTRUCTURING OF OBJECT//+++++++++===++++++++

const course={
          

        coursename: 'sigma',
        price:'399',
        logged:false



}

console.log(course.price)

const {price:p}=course;

console.log(p)