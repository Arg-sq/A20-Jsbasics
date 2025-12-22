// const collegeName = ["deeya", "babish", "surendra"];

// const name = {
//   id: 1,
//   firstName: " deeya",
//   colleges: collegeName,
// };

// console.log(collegeName[2]);
// console.log(name.colleges[2]);

const students = ["bikesh", "suresh", "lokesh", "mahesh"];
// console.log(students.length);

const collgeDetails = {
  name: "techspire",
  section: 20,
  students: students,
  award: null,
};
// console.log(Object.keys(collgeDetails));
// console.log(collgeDetails.students[3]);

getStudentName();
function getStudentName() {
  console.log("i am normal func");
}

// getCollegeName();
const getCollegeName = () => {
  console.log("i am arrow func");
};
// console.log(abc);
// var abc = "hari";

const getName = (name) => {
  console.log(`hi, ${name}`);
};
getName("babish");
