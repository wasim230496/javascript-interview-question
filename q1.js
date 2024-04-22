// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Rumi","wasim akram ","Nusrat Parveen","shadia Parveen ","aisha ali","md kaif", "saif ali khan ","aqsa khatoon","haider ali","faisal solanki","shanawaz ","sumi"]

let House = [];

for (const student of students) {
if(student.length<5){
    House.push("bahadur")
}else if(student.length<8){
    House.push("commandar")
}else if(student.length<10){
    House.push("wazandar")
}else{
    House.push("zamindar")
}
}

console.log(House)