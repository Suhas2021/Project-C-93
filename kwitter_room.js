
  
  const config = {
      apiKey: "AIzaSyDSWhwJacAvIGVUFJA49ksOzZEHTVarAtc",
      authDomain: "kwitter-5f1ef.firebaseapp.com",
      projectId: "kwitter-5f1ef",
      storageBucket: "kwitter-5f1ef.appspot.com",
      messagingSenderId: "77253852101",
      appId: "1:77253852101:web:62439196186fc7048329ac"
    };
  
  
    firebase.initializeApp(config);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
