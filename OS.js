//Node js Modules

//OS Module

const os=require('os');


//OS version find syntax:
let osVersion = os.version();
//OS EOL method
//The os.EOL constant is an inbuilt application programming interface of the os module:
let osEOL=os.EOL
//totalmem() method:
let totalmem=os.totalmem();
//freememory() method;
let freememory=os.freemem();
//arch() method:
let arch=os.arch();
//homedir() method:
let homedir=os.homedir();

switch(arch){
    case 'x32':
        console.log('32 bit extended system');
        break;
    case 'x64':
        console.log('64 bit extended system');
        break; 
    case 'arm':
        console.log('32 bit Advanced RISC Machine');
        break;           
}
//Cpus() method
let cpus=os.cpus();
let no_of_cpus=0;
cpus.forEach(element=>{
    no_of_cpus++;
    console.log('Logical core '+no_of_cpus+':');
    console.log(element);
});
console.log("Total number of logical core is :"+no_of_cpus);
//endianness() method:
let endianness=os.endianness();
//getPriority() method:
let priority=os.getPriority();
//hostname() method:
let hostname=os.hostname();



//Console.log:
console.log(JSON.stringify(osEOL));
console.log(os.EOL);
console.log(endianness);
console.log(priority);
console.log(homedir);
console.log(hostname);
console.log('OS Version:',osVersion);
console.log('Total Memory:'+totalmem);
console.log(freememory);
console.log(`Total Memory:${os.totalmem}`);
console.log(`Free Memory:${os.freemem}`);
