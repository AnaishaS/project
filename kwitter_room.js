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
      document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
      function addroom(){
            room_name=document.getElementById("room_name").value ;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
      }
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
             Room_names = childKey;
            //Start code
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML+=row;
            //End code
            });});}
      getData();
      function redirectToRoomName(name){
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }