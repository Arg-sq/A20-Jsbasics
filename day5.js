const arr=["ritu","manish","aman","anusha","aurum"]

const printNames=(name)=>{
    // const name="aman"
    // arr.map((name)=>{
        // console.log(`Hello my name is ${name}`)
        if(arr.includes(name)){
            // 
            console.log("Hello my name is " + name)
            
        }
    // })
}

printNames("aman")

const numb=[9,9,9,9]
console.log(numb.filter((num)=>num ===2))
console.log(numb.find((num)=>num ===2))
console.log(numb.includes(9))
console.log(numb.every(num=>num%2!=0))