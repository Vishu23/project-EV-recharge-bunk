const firebaseConfig = {
  apiKey: "AIzaSyCuJosFL0V4UdW4R6jlRpFoSYdqe6G9Vm4",
  authDomain: "electric-vehicle-recharge-bunk.firebaseapp.com",
  databaseURL:
    "https://electric-vehicle-recharge-bunk-default-rtdb.firebaseio.com",
  projectId: "electric-vehicle-recharge-bunk",
  storageBucket: "electric-vehicle-recharge-bunk.appspot.com",
  messagingSenderId: "522928578798",
  appId: "1:522928578798:web:e4cd11c97ecb1d36a653ff",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

var bunkTableBody = document.getElementById("bunk-table-body");

function deleteRow(id) {
  var ref = database.ref("bunks/" + id);
  ref.remove().then(function () {
    var row = document.getElementById(id);
    row.parentNode.removeChild(row);
  });
}

database.ref("bunks").on("child_added", function (snapshot) {
  var location = snapshot.val().location;
  var area = snapshot.val().area;
  var slots = snapshot.val().slots;
  var phone = snapshot.val().phone;
  var capacity = snapshot.val().capacity;
  var minChargeTime = snapshot.val().minChargeTime;
  var id = snapshot.key;

  var row = bunkTableBody.insertRow();
  row.id = id;
  var locationCell = row.insertCell(0);
  var areaCell = row.insertCell(1);
  var slotsCell = row.insertCell(2);
  var phoneCell = row.insertCell(3);
  var capacityCell = row.insertCell(4);
  var minChargeTimeCell = row.insertCell(5);
  var deleteCell = row.insertCell(6);

  locationCell.innerText = location;
  areaCell.innerText = area;
  slotsCell.innerText = slots;
  phoneCell.innerText = phone;
  capacityCell.innerText = capacity;
  minChargeTimeCell.innerText = minChargeTime;
  deleteCell.innerHTML =
    "<button onclick=\"deleteRow('" + id + "')\">Delete</button>";
});
