// An introductory focus on the JavaScript syntax for final sprint. 
// Mimya Hafiz, SD 12.
// Date: 12 Aug, 2024.



// FETCH and READ the array.json disk file
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    document.write(`<ul>`);
    // Do something with the JSON data
    data.forEach(person => {
      document.write(`<li><b>ID No ${person.id}'s name is ${person.name} and interest's in ${person.courses[0]}`)
      console.log(`ID No ${person.id}'s name is ${person.name} and interest's in ${person.courses[0]}`); // Example: display name and age
    });
  })

  .catch(error => {
        // Handle any errors that occur while fetching the file
    console.error(error);
  });




 // The first function is below
fetch('./data.json')
 .then(response => response.json())
 .then(data => {
   
   // data is an array of objects with name and age properties
   data.forEach(person => {
     underage(person.name, person.age);
     formatHTML(person)
   });
 })
 .catch(error => {
   console.error(error);
 });
function underage(name, age) {
 if (age < 18) {
  console.log(`${name} is underage.`);
  ageInformation = "Underage";
 } else {
  ageInformation = console.log(`${name} is not underage.`);
  ageInformation = "Adult";
 }
}


 
 // The second function is below
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
    // Do something with the JSON data
    function personCourse(data, course) {
      return data.filter(person => person.courses.includes(course)).length;
      
    }
    
    // Usage:
    console.log(`Math is being taken by ${personCourse(data, "Math")} People`); 
    console.log(`Science is being taken by ${personCourse(data, "Science")} People`);     
    console.log(`English is being taken by ${personCourse(data, "English")} People`);     
    })
    
    .catch(error => {
          // Handle any errors that occur while fetching the file
      console.error(error);
    });
    
  

  

// The third function is below

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Calculate the total age
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);

    // Calculate the average age
    const averageAge = totalAge / data.length;

    console.log("Average age:", averageAge);
  })
  .catch(error => {
    console.error("Error fetching or processing data:", error);
  });


  // For displaying the data
  function formatHTML(person) {
    // create a new html element
    const newElement = document.createElement('div')
    // add a class to the new element
    newElement.classList.add('person')
    // add some text content to the new element
    newElement.textContent = `${person.name} is ${ageInformation}`;
    // Add new element to the DOM
    document.querySelector('body').appendChild(newElement);
  }

