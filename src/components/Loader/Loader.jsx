import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <HashLoader
      visible={true}
      height="180"
      width="180"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#475467", "#6C717B", "#D84343", "#ffffff", "#FFC531"]}
    />
  );
};

export default Loader;
