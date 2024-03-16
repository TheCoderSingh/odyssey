import { useEffect, useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);

  const [usernameError, setUsernameError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [genderError, setGenderError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUsernameValid(validateUsername());
    setIsFirstNameValid(validateFirstName());
    setIsLastNameValid(validateLastName());
    setIsPasswordValid(validatePassword());
    setIsGenderValid(validateGender());
  };

  const validateUsername = () => {
    if (username.trim() === "") {
      setUsernameError("Username cannot be blank");
      return false;
    }

    if (!/^[a-zA-Z][a-zA-Z0-9._]{2,}$/.test(username)) {
      setUsernameError(
        "Username must be at least 3 characters long, can only contain letters, numbers, periods and underscores, and must start with a letter."
      );
      return false;
    }

    setUsernameError(null);
    return true;
  };

  const validateFirstName = () => {
    if (firstName.trim() === "") {
      setFirstNameError("First Name cannot be blank");
      return false;
    }

    if (!/^[a-z ,.'-]+$/i.test(firstName)) {
      setFirstNameError("Invalid First Name");
      return false;
    }

    setFirstNameError(null);
    return true;
  };

  const validateLastName = () => {
    if (lastName.trim() === "") {
      setLastNameError("Last Name cannot be blank");
      return false;
    }

    if (!/^[a-z ,.'-]+$/i.test(firstName)) {
      setLastNameError("Invalid Last Name");
      return false;
    }

    setLastNameError(null);
    return true;
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }

    setPasswordError(null);
    return true;
  };

  const validateGender = () => {
    if (gender === "Gender") {
      setGenderError("Please select a gender");
      return false;
    }

    setGenderError(null);
    return true;
  };

  return (
    <div className="block md:flex">
      <div className="hidden md:block w-1/3 bg-auth h-screen bg-cover bg-center" />
      <div className="w-full md:w-2/3 p-5 h-screen bg-auth bg-center bg-cover md:bg-none max-h-screen overflow-y-scroll">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-2xl font-bold text-white md:text-primary">
              Odyssey
            </h4>
          </div>
          <div>
            <span className="mr-1">Already have an account?</span>
            <a href="#" className="text-white md:text-primary underline">
              Login
            </a>
          </div>
        </div>
        <h4 className="text-2xl text-center mt-[3rem] md:mt-[10rem] uppercase text-primary">
          Create an account
        </h4>
        <form
          className="flex flex-col gap-5 justify-center items-center pt-5 w-[80%] sm:w-[50%] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto text-sm"
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <div className="w-[7rem] h-[7rem] border border-gray-300 mb-1">
              <img src="https://placehold.co/110x110?text=Upload\nyour&nbsp;photo" />
            </div>
            <span className="text-xs underline text-white md:text-gray-400">
              Upload
            </span>
          </div>
          <div className="w-full">
            <input
              placeholder="Username"
              required
              className={`border border-gray-300 px-3 py-2 w-full ${
                isUsernameValid
                  ? ""
                  : "bg-orange-700 border-none text-white placeholder:text-white"
              }`}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="md:w-1/2">
              <input
                placeholder="First Name"
                required
                className={`border border-gray-300 px-3 py-2 w-full ${
                  isFirstNameValid
                    ? ""
                    : "bg-orange-700 border-none text-white placeholder:text-white"
                }`}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className="md:w-1/2">
              <input
                placeholder="Last Name"
                required
                className={`border border-gray-300 px-3 py-2 w-full ${
                  isLastNameValid
                    ? ""
                    : "bg-orange-700 border-none text-white placeholder:text-white"
                }`}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
          <div className="w-full">
            <input
              placeholder="Email"
              required
              type="email"
              className={`border border-gray-300 px-3 py-2 w-full ${
                isEmailValid
                  ? ""
                  : "bg-orange-700 border-none text-white placeholder:text-white"
              }`}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="md:w-1/2">
              <input
                placeholder="Password"
                required
                type="password"
                className={`border border-gray-300 px-3 py-2 w-full ${
                  isPasswordValid
                    ? ""
                    : "bg-orange-700 border-none text-white placeholder:text-white"
                }`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="md:w-1/2">
              <input
                placeholder="Confirm Password"
                required
                type="password"
                className={`border border-gray-300 px-3 py-2 w-full ${
                  isPasswordValid
                    ? ""
                    : "bg-orange-700 border-none text-white placeholder:text-white"
                }`}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
          </div>
          <div className="w-full border border-gray-300">
            <select
              className={`w-full text-gray-400 px-3 py-2 ${
                isGenderValid
                  ? ""
                  : "bg-orange-700 border-none text-white placeholder:text-white"
              }`}
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option defaultChecked>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="w-full text-center bg-primary py-2">
            <button type="submit" className="text-white">
              Create Account
            </button>
          </div>
          {usernameError && (
            <p className="bg-orange-700 w-full pl-2 py-1.5 text-white text-center text-xs">
              {usernameError}
            </p>
          )}
          {firstNameError && (
            <p className="bg-orange-700 w-full pl-2 py-1.5 text-white text-center text-xs">
              {firstNameError}
            </p>
          )}
          {lastNameError && (
            <p className="bg-orange-700 w-full pl-2 py-1.5 text-white text-center text-xs">
              {lastNameError}
            </p>
          )}
          {emailError && (
            <p className="bg-orange-700 w-full pl-2 py-1.5 text-white text-center text-xs">
              {emailError}
            </p>
          )}
          {passwordError && (
            <p className="bg-orange-700 w-full pl-2 py-1.5 text-white text-center text-xs">
              {passwordError}
            </p>
          )}
          {genderError && (
            <p className="bg-orange-700 w-full pl-2 py-1.5 text-white text-center text-xs">
              {genderError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
