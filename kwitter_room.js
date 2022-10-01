
//ADD YOUR FIREBASE LINKS
var firebaseConfig = { 
  apiKey: "AIzaSyBZYKKuRWNmJqc--agPtaVdcRXn4ft5Bvs", 
  authDomain: "kwitter-b8e79.firebaseapp.com", 
  databaseURL: "https://kwitter-b8e79-default-rtdb.firebaseio.com", 
  projectId: "kwitter-b8e79", 
  storageBucket: "kwitter-b8e79.appspot.com",
  messagingSenderId: "318721932581", 
  appId: "1:318721932581:web:47b7a8fbd9846ad7a06ecc" 
  };
  
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
 window.location = "index.html";
}
