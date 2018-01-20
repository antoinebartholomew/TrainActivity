







// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyAVa2klY2hbJSCluHyhZhbGOOiOF2zOrao",
    authDomain: "traintimes-5c272.firebaseapp.com",
    databaseURL: "https://traintimes-5c272.firebaseio.com",
    projectId: "traintimes-5c272",
    storageBucket: "traintimes-5c272.appspot.com",
    messagingSenderId: "983995110868"
  };

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name").val().trim();
  var Destination = $("#Destination").val().trim();
  var FirstTrain = moment($("#FirstTrainTime").val().trim(), "DD/MM/YY").format("'MMMM Do YYYY, h:mm:ss a'");
  var Frequency = $("#Frequency").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    whereTo: Destination,
    trainTime: FirstTrain,
    frequency1: Frequency
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(trainName.name);
  console.log(Destination.whereTo);
  console.log(FirstTrain.trainTime);
  console.log(Frequency.frequency1);

  // Alert
  //alert("New Train Time successfully added");

  // Clears all of the text-boxes
  $("#train-name").val("");
  $("#Destination").val("");
  $("#FirstTrainTime").val("");
  $("#Frequency").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var Destination = childSnapshot.val().whereTo;
  var FirstTrain = childSnapshot.val().trainTime;
  var Frequency = childSnapshot.val().frequency1;

  // Employee Info
  console.log(trainName);
  console.log(Destination);
  console.log(FirstTrain);
  console.log(Frequency);

  // Prettify the employee start
  //var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  //var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  //console.log(empMonths);

  // Calculate the total billed rate
  //var empBilled = empMonths * empRate;
  //console.log(empBilled);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + Destination + "</td><td>" +
  FirstTrainTime + "</td><td>" + Frequency + "</td><td>" );
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
