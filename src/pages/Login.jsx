const Login = () => {
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
            <span className="mr-1">Don&apos;t have an account?</span>
            <a href="#" className="text-white md:text-primary underline">
              Signup
            </a>
          </div>
        </div>
        <h4 className="text-2xl text-center mt-[20rem] uppercase text-white md:text-primary">
          Login to Odyssey
        </h4>
        <form className="flex flex-col gap-5 justify-center items-center pt-5 w-[80%] sm:w-[50%] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto text-sm">
          <div className="w-full">
            <input
              placeholder="Username"
              className="border border-gray-300 px-3 py-2 w-full"
            />
          </div>
          <div className="w-full">
            <input
              placeholder="Password"
              type="password"
              className="border border-gray-300 px-3 py-2 w-full"
            />
          </div>
          <div className="w-full text-center bg-primary py-2">
            <button type="submit" className="text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
