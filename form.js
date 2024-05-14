// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDK3Back4lbnHdcfDD22a6UwtmKWg4eoho",
    authDomain: "fir-e8ae2.firebaseapp.com",
    projectId: "fir-e8ae2",
    storageBucket: "fir-e8ae2.appspot.com",
    messagingSenderId: "1073659317790",
    appId: "1:1073659317790:web:e5b6be1ca2d9eb7bd9680f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		function redirectToAnotherPage() {
            window.location.href = "product.html";
        }
		
		
	});
	

