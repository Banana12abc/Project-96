var firebaseConfig = {
    apiKey: "AIzaSyDUjNmNkSNih0K7TtM_9u92DTuhkV8ZDN0",
    authDomain: "let-s-chat-web-app-c813d.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-c813d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-c813d",
    storageBucket: "let-s-chat-web-app-c813d.appspot.com",
    messagingSenderId: "1016837623150",
    appId: "1:1016837623150:web:9f7623a033f33039cdc57f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace = ("kwitter.html");
}