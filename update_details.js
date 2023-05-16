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
const id = urlParams.get('id');

database.ref('bunks/' + id).once('value', function (snapshot) {
    const location = snapshot.val().location;
    const area = snapshot.val().area;
    const slots = snapshot.val().slots;
    const phone = snapshot.val().phone;
    const capacity = snapshot.val().capacity;
    const minChargeTime = snapshot.val().minChargeTime;

    
});

function updateBunk(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const area = document.getElementById('area').value;
    const slots = document.getElementById('slots').value;
    const phone = document.getElementById('phone').value;
    const capacity = document.getElementById('capacity').value;
    const minChargeTime = document.getElementById('minChargeTime').value;

    const updates = {
        location: location,
        area: area,
        slots: slots,
        phone: phone,
        capacity: capacity,
        minChargeTime: minChargeTime
    };

    database.ref('bunks/' + id).update(updates).then(() => {

        window.location.href = 'manage_recharge_slots.html'


    })
}