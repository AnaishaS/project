//YOUR FIREBASE LINKS
var firebaseConfig = { 
      apiKey: "AIzaSyCvqoNGzMj3xUbFrjrbvIitDGGebaVXxiw", 
      authDomain: "kwitter-9f5b1.firebaseapp.com",
       databaseURL: "https://kwitter-9f5b1-default-rtdb.firebaseio.com", 
       projectId: "kwitter-9f5b1",
        storageBucket: "kwitter-9f5b1.appspot.com", 
       messagingSenderId: "76481222995",
        appId: "1:76481222995:web:cb1b83551963dee7e969a6" }; 
        // Initialize Firebase 
        firebase.initializeApp(firebaseConfig);
      
      //ADD YOUR FIREBASE LINKS HERE
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
      
function send(){
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}