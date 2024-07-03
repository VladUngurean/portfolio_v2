const TOKEN = '7384728233:AAEqn5NrLORpp-CpywQkperU_Rk0YS7exLM';
const CHAT_ID = '951582541';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

//TRELLO BOT START

// let cart_items = document.querySelectorAll(".cart-item-name");

const contactForm = document.getElementById("contactForm");
let nameInput = document.querySelector( '#name' );
let emailInput = document.querySelector( '#email' );
let messageInput = document.querySelector( '#message' );



function checkInput() {
    if (inputPhone.value.length > 0 && inputPhone.value[5] == '0' || inputPhone.value[0] == 0) {
        inputPhone.value = '';
    }
}

contactForm.addEventListener("submit", ( e ) =>{
	e.preventDefault();
    let message = `Nume: ${nameInput.value} \n
        mail:  ${emailInput.value} \n
        Mesajul:  ${messageInput.value} \n
        `;
	axios.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: message
		})
		.then( ( res ) => {
            alert("Your Message was succesefully delivered");
			location.href = "index.html";
            contactForm.reset();
			// alert("All good!")
		} )
		.catch( ( err ) => {
			console.log(err);
			alert("Ошибка!")
			contactForm.reset();
		} )
});

