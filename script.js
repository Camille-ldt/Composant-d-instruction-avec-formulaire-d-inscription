const containerRight = document.querySelector('.container-right');
console.log(containerRight);




    const inputContainer = document.createElement(`form`);
    inputContainer.classList = `configuration`;
    containerRight.appendChild(inputContainer);
    
    const inputFirstName = document.createElement(`input`);
    inputFirstName.type = `text`;
    inputFirstName.id = `inputContent`;
    inputFirstName.name = `First Name`;
    inputFirstName.placeholder = "First Name";
    inputContainer.appendChild(inputFirstName);
    
    const inputLastName = document.createElement(`input`); 
    inputLastName.type = `text`;
    inputLastName.id = `inputContent`;
    inputLastName.name = `Last Name`;
    inputLastName.placeholder = "Last Name";
    inputContainer.appendChild(inputLastName);
    
    const inputEmailAdress = document.createElement(`input`);
    inputEmailAdress.type = `text`; 
    inputEmailAdress.id = `inputContent`;
    inputEmailAdress.name = `Email Adress`;
    inputEmailAdress.placeholder = "Email Adress";
    inputContainer.appendChild(inputEmailAdress);
    
    const inputPasseword = document.createElement(`input`);
    inputPasseword.type = `text`;
    inputPasseword.id = `inputContent`;
    inputPasseword.name = `Passeword`;
    inputPasseword.placeholder = "Passeword";
    inputContainer.appendChild(inputPasseword);

    const inputButton = document.createElement(`input`);
    inputButton.type = `submit`;
    inputButton.id = `inputBtn`;
    inputButton.name = `Button`;
    inputButton.value = "Claim your free trial";
    inputContainer.appendChild(inputButton);

    // const inputContent = document.createElement(`text`);
    // inputContent.type = `text`;
    // inputContent.id = `inputP`;
    // inputContent.text = `By clicking the button, you are agreeing to our Terms and Services`;
    // inputContainer.appendChild(inputContent);

