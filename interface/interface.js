const product = document.querySelector("#product");
const pack = document.querySelector("#pack");
const image = document.querySelector("#image");
const price = document.querySelector("#price");
const dataDisplay = document.querySelector("#dataDisplay");
const replace_id = document.querySelector("#replace_id");
const replace_product = document.querySelector("#replace_product");
const replace_pack = document.querySelector("#replace_pack");
const replace_image = document.querySelector("#replace_image");
const replace_price = document.querySelector("#replace_price");

//DOM
window.addEventListener("DOMContentLoaded", () => {
	//DATA
	fetch("http://localhost:3001/api")
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));

	//BODY

	//SUBMIT
	const submitBt = document.querySelector("#submit");
	submitBt.addEventListener("click", (event) => {
		event.preventDefault();

		const productValue = JSON.stringify({
			name: product.value,
			pack: pack.value,
			image: image.value,
			price: price.value,
		});

		var post = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: productValue,
			redirect: "follow",
		};

		fetch("http://localhost:3001", post)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	});

	//DELETE
	const deleteBt = document.querySelector("#delete");
	deleteBt.addEventListener("click", (event) => {
		event.preventDefault();

		const productValue = JSON.stringify({
			name: product.value,
			pack: pack.value,
			image: image.value,
			price: price.value,
		});

		var post = {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: productValue,
			redirect: "follow",
		};

		fetch("http://localhost:3001", post)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	});

	//PUT

	const updateBt = document.querySelector("#update");
	updateBt.addEventListener("click", (event) => {
		event.preventDefault();

		const productReplace = JSON.stringify({
			name: product.value,
			pack: pack.value,
			image: image.value,
			price: price.value,

			replace_name: replace_product.value,
			replace_pack: replace_pack.value,
			replace_image: replace_image.value,
			replace_price: replace_price.value,
		});
		console.log(productReplace);

		var put = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: productReplace,
			redirect: "follow",
		};

		fetch("http://localhost:3001", put)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	});
});
