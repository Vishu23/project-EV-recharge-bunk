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

const database = firebase.database();

const urlParams = new URLSearchParams(window.location.search);
var slot = urlParams.get('slots');
var resultsDiv = document.getElementById('results');
var slotCountElement = document.getElementById('slotCount');
var requestedSlots = document.getElementById('reqSlots');
// var newSlotCount = document.getElementById('newSlots');


database.ref('bunks/')
.orderByChild('slots')
.limitToFirst(1)
.equalTo(slot)
.on('value', function(snapshot) {
  var vacancy = snapshot.val();
  console.log(snapshot.val());
  
  if (vacancy) {
    // Get the number of available slots from the first vacancy in the snapshot
    var slotCount = vacancy[Object.keys(vacancy)[0]].slots;
    
    // Update the slotCount element with the number of available slots
    slotCountElement.innerHTML = slotCount;
  } else {
    slotCountElement.innerHTML = 0;
  } 
});




function onBook() {
  var a = parseInt(slotCountElement.innerHTML);
  var b = parseInt(requestedSlots.value);
  
  if (b <= a) {
    
    var newSlotCount = a - b;
    slotCountElement.innerHTML = newSlotCount;
    
      
        database.ref('bunks/').update({
          slots: newSlotCount
        });

        alert('Slot Booked')
    //   });
    // });
    
  } else {
    console.log("Not enough slots available");

  }
}




























