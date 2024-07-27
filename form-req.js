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

let currentdate = new Date();
let datetime = "VisitTime: " + currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear() + " - "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + " min"

  //get location func
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
//}

// vars for local storage
  //get location func end

const SCRIPT_EXECUTION_KEY = "scriptExecuted";
const TIMESTAMP_KEY = "scriptExecutionTimestamp";
const EXPIRY_TIME = 2 * 60 * 1000; // 2 minutes in milliseconds
const TIMES_RETURNED_KEY = "timesReturned";
const UNIQUE_NAME_KEY = "uniqueName";

// Initialize TIMES_RETURNED and UNIQUE_NAME from local storage
let TIMES_RETURNED = parseInt(localStorage.getItem(TIMES_RETURNED_KEY)) || 0;
let uniqueName = localStorage.getItem(UNIQUE_NAME_KEY);

// Function to generate random name
function generateRandomName(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
}

// Generate a new unique name if it doesn't exist
if (!uniqueName) {
	uniqueName = generateRandomName(8);
	localStorage.setItem(UNIQUE_NAME_KEY, uniqueName);
}

function YesYesYes() {
	let message = `${datetime}\nTimesReturned: ${TIMES_RETURNED}\nUniqueName: ${uniqueName}`;
	axios
		.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: "html",
			text: message,
		})
		.then((res) => {
			console.log('Message sent successfully:', res.data);
		})
		.catch((err) => {
			console.error('Error sending message:', err);
		});
}

// Start the function and set local storage data
window.addEventListener("load", () => {
	const currentTime = new Date().getTime();
	const storedTimestamp = localStorage.getItem(TIMESTAMP_KEY);
	const isExecuted = localStorage.getItem(SCRIPT_EXECUTION_KEY);

	if (
		!isExecuted ||
		(storedTimestamp && currentTime - storedTimestamp > EXPIRY_TIME)
	) {
		// Increment the counter and call the function
		TIMES_RETURNED += 1;
		YesYesYes();
		// Update local storage
		localStorage.setItem(TIMES_RETURNED_KEY, TIMES_RETURNED);
		localStorage.setItem(SCRIPT_EXECUTION_KEY, "true");
		localStorage.setItem(TIMESTAMP_KEY, currentTime.toString());
	}
});
