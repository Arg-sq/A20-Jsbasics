// console.log(typeof +"1")
// console.log("b"+"a"+ +"a"+"a")
// console.log("1"+ +"1")

const apiResponse = {
  data: [
    {
      id: 1,
      name: "Aryan",
      isAdmin: false,
      hasUserManagementAccess: false,
    },
    {
      id: 2,
      name: "Kumari",
      isAdmin: true,
      hasUserManagementAccess: false,
    },
    {
      id: 3,
      name: "Deeya",
      isAdmin: true,
      hasUserManagementAccess: true,
    },
  ],
  responseCode: 200,
  responseMsg: "Users fetched successfully",
};

const numbers = [1, 5,2, 3, 4, 5,5];

const loopNumber = () => {
  const findNumber=numbers
    .find((num) => num % 2 == 0)
   
    const result =[findNumber].map((num) => (num*2));
    return result
};

console.log(loopNumber());

const loopNumberV2=()=>{
const result=numbers.filter((num)=>num!==5).map((num)=>num*3)

return result
}
// console.log(loopNumberV2())
