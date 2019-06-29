
/* Step One
 * Create xml http request object
 * Object has its own properties and methods
 * Variable can be anything 
*/
var xhr = new XMLHttpRequest();

/* Step Two
 * Call back function 
*/
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4){
    
    //console.log(typeof xhr.responseText);
    //this returns a string and must be parsed
    //use the JSON.parse to convert from string to JSON
    var employees = JSON.parse(xhr.responseText);
    //validating whether data has been parsed
    //json.parsed converted text into elements or array of items (object)
    //now we can manipulate with javascript
    //console.log(typeof employees);
    
    //checking what is inside the variable
    //console.log(employees);
    //Generate JavaScript for HTML
    //Opening UL tag
    var statusHTML = '<ul class="bulleted">';
    //for loops to go through array retrieve name to determine if they are in the office
    //loops starts counter variable i to zero
    //middle part is test condition to determine how many times the loop will run
    //as long as vslue is less than employees array we run through the progrwm
    //after the loop runs 1 is added to the variable it will run one for each item
    //an item in an array is represented as an index (variable = i) 
    for(var i = 0; i < employees.length; i += 1){
      //create a conditional to see if employee is in office
      if(employees[i].inoffice === true){
      //build single li for each employee
        statusHTML += '<li class="in">';
        //employee not in office else clause
      } else {
        statusHTML += '<li class="out">';
    } 
      //add name and close the tag
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

/* Step Three
 * Open a request GET METHOD to load file with JSON data
 * In the real world the second param would point
 * Back to server side script that would dynamically 
 * generate the data with most current information of employees
 */
xhr.open('GET', 'data/employees.json');
/* 
 * Send the request
 */
xhr.send();


var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function() {
  if(roomRequest.readyState === 4){
    var rooms = JSON.parse(roomRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    for(var i = 0; i < rooms.length; i += 1){
      if(rooms[i].available === true){
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
    } 
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};

roomRequest.open('GET', '../data/rooms.json');
roomRequest.send();
