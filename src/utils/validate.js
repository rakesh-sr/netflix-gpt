export const checkValidData = (isSignInForm, name, email, password) => {
    const isNameValid = /^[a-zA-Z0-9\s]+$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);
    if (!isSignInForm && !isNameValid)
        return "Name is invalid";

    if (!isEmailValid)
        return "Email Address is invalid";

    if (!isPasswordValid)
        return "Password is invalid";
    return null;
}