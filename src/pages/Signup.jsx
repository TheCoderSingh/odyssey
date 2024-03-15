const Signup = () => {
  return (
    <div className="block md:flex">
      <div className="hidden md:block w-1/3 bg-auth h-screen bg-cover bg-center" />
      <div className="w-full md:w-2/3 p-5 h-screen bg-auth bg-center bg-cover md:bg-none">
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
        <form className="flex flex-col gap-5 justify-center items-center pt-5 w-[80%] sm:w-[50%] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto text-sm">
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
              className="border border-gray-300 px-3 py-2 w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="md:w-1/2">
              <input
                placeholder="First Name"
                className="border border-gray-300 px-3 py-2 w-full"
              />
            </div>
            <div className="md:w-1/2">
              <input
                placeholder="Last Name"
                className="border border-gray-300 px-3 py-2 w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <input
              placeholder="Email"
              type="email"
              className="border border-gray-300 px-3 py-2 w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="md:w-1/2">
              <input
                placeholder="Password"
                type="password"
                className="border border-gray-300 px-3 py-2 w-full"
              />
            </div>
            <div className="md:w-1/2">
              <input
                placeholder="Confirm Password"
                type="password"
                className="border border-gray-300 px-3 py-2 w-full"
              />
            </div>
          </div>
          <div className="w-full border border-gray-300">
            <select className="w-full text-gray-400 px-3 py-2">
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
