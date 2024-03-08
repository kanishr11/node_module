
const fs=require('node:fs/promises');

console.log("First Print")

fs.readFile('./file.txt','utf-8')
.then((data)=>{
    console.log('Second print')
    console.log(data)
})

.catch((error)=>console.log(error))

console.log("Thired print")

// const fs=require('fs');

// console.log("Last Print text");

// fs.writeFileSync('./green.txt',"hello");
