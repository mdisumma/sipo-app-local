const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signUp = document.querySelector("#sign_up");
const signIn = document.querySelector("#sign_in");
const signOut = document.querySelector("#sign_out");
const signGoogle = document.querySelector("#sign_google");

const { createClient } = supabase;
supabase = createClient(
	"https://avvelquwyslzkodskshw.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzM4MzE1NSwiZXhwIjoxOTQ4OTU5MTU1fQ.NHMBE0yY82XaMvPeBVWz56hIgjQLvYL9IkvsfFQkU8g"
);

console.log(supabase);

//DOM
window.addEventListener("DOMContentLoaded", () => {
	//DATA
	fetch("http://localhost:3001/api")
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
});
//signUP
signUp.addEventListener("click", (e) => {
	e.preventDefault();

	console.log(email.value);
	console.log(password.value);

	const post = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email.value,
			password: password.value,
		}),
	};

	fetch("http://localhost:3001/signUp/", post)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
});

//signIN
signIn.addEventListener("click", async (e) => {
	e.preventDefault();

	console.log(email.value);
	console.log(password.value);

	var post = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email.value,
			password: password.value,
		}),
	};

	fetch("http://localhost:3001/logIn/", post)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
});

//signOUT
signOut.addEventListener("click", (e) => {
	e.preventDefault();

	console.log(email.value);
	console.log(password.value);

	var post = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email.value,
			password: password.value,
		}),
	};

	fetch("http://localhost:3001/logOut/", post)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
});

//singGOOGLE
async function signInWithGoogle() {
	const { user, session, error } = await supabase.auth.signIn({
		provider: "google",
	});
}
signGoogle.addEventListener("click", (e) => {
	e.preventDefault();
	signInWithGoogle();
	console.log(supabase.auth);
});
