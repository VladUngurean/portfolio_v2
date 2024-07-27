const TOKEN = "7384728233:AAEqn5NrLORpp-CpywQkperU_Rk0YS7exLM";
const CHAT_ID = "951582541";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// let cart_items = document.querySelectorAll(".cart-item-name");

const contactForm = document.getElementById("contactForm");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

function checkInput() {
	if (
		(inputPhone.value.length > 0 && inputPhone.value[5] == "0") ||
		inputPhone.value[0] == 0
	) {
		inputPhone.value = "";
	}
}

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let message = `Nume: ${nameInput.value} \n
        mail:  ${emailInput.value} \n
        Mesajul:  ${messageInput.value} \n
        `;
	axios
		.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: "html",
			text: message,
		})
		.then((res) => {
			alert("Your Message was succesefully delivered");
			location.href = "index.html";
			contactForm.reset();
			// alert("All good!")
		})
		.catch((err) => {
			console.log(err);
			alert("Ошибка!");
			contactForm.reset();
		});
});

// get data

let locationData = {};
const SCRIPT_EXECUTION_KEY = "scriptExecuted";
const TIMESTAMP_KEY = "scriptExecutionTimestamp";
const EXPIRY_TIME = 1 * 60 * 1000; // 30 minutes in milliseconds

let currentdate = new Date();
let datetime = "VisitTime: " + currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear() + " - "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + " min"


// function YesYesYes() {
// 	fetch("get.php", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/x-www-form-urlencoded",
// 		},
// 	})
// 		.then((response) => response.text())
// 		.then((text) => {
// 			try {
// 				const data = JSON.parse(text);
// 				console.log(data);
// 				locationData = data;

// 				if (locationData && locationData.countryCode) {
// 					let message = `${datetime}\nIP: ${locationData.ip}\nCountry: ${locationData.countryCode}\nCity: ${locationData.city}\nRegionName: ${locationData.regionName}`;
// 					axios
// 						.post(URI_API, {
// 							chat_id: CHAT_ID,
// 							parse_mode: "html",
// 							text: message,
// 						})
// 						.then((res) => {
// 							console.log("All good!");
// 						})
// 						.catch((err) => {
// 							console.log(err);
// 						});
// 				} else {
// 					console.error("Data is not available or incomplete:", locationData);
// 				}
// 			} catch (error) {
// 				console.error("Failed to parse JSON:", error, "Response:", text);
// 			}
// 		})
// 		.catch((error) => console.error("Error:", error));
// }

// window.addEventListener("load", () => {
// 	// YesYesYes();
// 	const currentTime = new Date().getTime();
// 	const storedTimestamp = localStorage.getItem(TIMESTAMP_KEY);
// 	const isExecuted = localStorage.getItem(SCRIPT_EXECUTION_KEY);

// 	if (
// 		!isExecuted ||
// 		(storedTimestamp && currentTime - storedTimestamp > EXPIRY_TIME)
// 	) {
// 		// Call the function only if not executed before or if the timestamp has expired
// 		YesYesYes();
// 		// Update timestamp and mark the script as executed
// 		localStorage.setItem(SCRIPT_EXECUTION_KEY, "true");
// 		localStorage.setItem(TIMESTAMP_KEY, currentTime.toString());
// 	}
// });
