let myNames = "Aaron damilola seun";
const myCourses = ["HTML", "CSS", "JAVASCRIPT", "PHP"];

console.log(myNames, myCourses);

if (myCourses.length % 2 == 0) {
    for (let i = 1; i <= 200; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}
    else {
    for (let i = 1; i <= 200; i++){
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}