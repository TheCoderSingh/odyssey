import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div id="error-page">
      <h1>Page not found</h1>
    </div>
  );
};

export default RouteError;
