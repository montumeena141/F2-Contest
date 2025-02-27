/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    
    arr.map((item) => {
      if (item.profession === "developer") {
        console.log(item);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((item) => {
        if (item.profession === "developer") {
          console.log(item);
        }
      });
  }
  
  function addData() {
    let newEmployee = { id: 4, name: "sam", age: "22", profession: "designer" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    arr = arr.filter((item) => item.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    let newArr = [
      { id: 5, name: "alice", age: "24", profession: "tester" },
      { id: 6, name: "bob", age: "27", profession: "developer" },
      { id: 7, name: "charlie", age: "26", profession: "manager" },
    ];
    let combinedArray = arr.concat(newArr);
    console.log(combinedArray);
  }
  
  