// when the page is loaded check the state of both of these
document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login")
    const createAcconuntForm = document.querySelector("#createAccount")

    // when clicking create account link hide the login page link
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        createAcconuntForm.classList.remove("formHidden")
    })

    // when clicking login link hide create an account link
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAcconuntForm.classList.add("formHidden")
    })
})