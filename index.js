const start_program = () => {

	var pass = "patience";

	const unnamed_function = () => {

		//function to be created at later date...
	}

	
	//importing verification name
	
	const btn = document.getElementById("click")
	
	btn.addEventListener("click", (e) => {

		e.preventDefault();

		const password = document.getElementById("password").value;

		//checking if the password is correct

		try {

			if (password === "patience") {

				console.log("Verification complete");
			}

			else {

				console.log("Wrong Password");
			}
		}

		catch (err) {

			console.log(err);
		}



	
	});

	
}

start_program();
