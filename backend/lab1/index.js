import {EventEmitter} from "node:events";
const task = new EventEmitter();

task.on("greet",(name)=>{
    console.log(`hello,${name}! welcome to the session`) ;
})

task.on("exit", (reason)=>{
    console.log(`Session ending Reason: ${reason}`);

});

task.on("greet",()=>{
    console.log("class started by chandresh mishra ");
});


task.on("exit",()=>{
    console.log("class is finish by chandresh mishra");
});
task.on("start", (course)=>{
    console.log(`${course} started`);
    
})
task.emit("greet", "students");
task.emit("exit", "class Complete");
task.emit("start","fsd");