import "./styles.css";
import Img from "./web-api.png";
import Logo from "./react-icon.svg";

export const App = () => {
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      ;
      <img src={Img} alt='Web API' width='300' height='200' />
      <img src={Logo} alt='React Logo' width='300' />
    </>
  );
};
