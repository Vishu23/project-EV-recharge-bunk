const firebaseConfig = {
    apiKey: "AIzaSyCuJosFL0V4UdW4R6jlRpFoSYdqe6G9Vm4",
    authDomain: "electric-vehicle-recharge-bunk.firebaseapp.com",
    databaseURL: "https://electric-vehicle-recharge-bunk-default-rtdb.firebaseio.com",
    projectId: "electric-vehicle-recharge-bunk",
    storageBucket: "electric-vehicle-recharge-bunk.appspot.com",
    messagingSenderId: "522928578798",
    appId: "1:522928578798:web:e4cd11c97ecb1d36a653ff"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function search() {
    var searchQuery = document.getElementById('search-bar').value;
    var resultsDiv = document.getElementById('results');


    // Query the database for data matching the search query
    database.ref('bunks/').orderByChild('area').equalTo(searchQuery).once('value', function (snapshot) {
        var results = snapshot.val();
        console.log(results);
           
            // Display the results in a table
            if (results) {
                // Display the results in a table
                var display = '<table class="results-table">';
                display += '<tr><th>Location</th><th>Area</th><th>Phone</th><th>Vacancy</th></tr>';
                for (var key in results) {
                    display += '<tr>';
                    display += '<td>' + results[key].location + '</td>';
                    display += '<td>' + results[key].area + '</td>';
                    display += '<td>' + results[key].phone + '</td>';
                    display += '<td><a href="slot_vacancy.html?slots=' + results[key].slots + '"><button class="vacancy-btn">Vacancy</button></a></td>';
                    display += '</tr>';
                }
                display += '</table>';
                resultsDiv.innerHTML = display;


        } else {
            resultsDiv.innerHTML = 'No results found.';
        }
    });
}
const navbar = document.getElementById('navbar');

// Add a Firebase Auth state observer
auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log(user)
      // User is signed in
      let usern = user.email;
     
      // Extract the first letter of the email
      let firstLetter = usern.charAt(0).toUpperCase();
      
      // Add the first letter to the navbar
      navbar.innerHTML = `${firstLetter}`;
    } else {
      // User is signed out
      navbar.innerHTML = 'Sign In';
    }
  });





































