console.log("start");

process.nextTick(()=>{
    console.log("nextTrick");
});
setTimeout(()=>{
    console.log("setTimeout");
} ,5000);
setTimeout(()=>{
    console.log("setTimeout at beg");
} ,0);
setImmediate(()=>{
    console.log("setImediate");
});
console.log("end");