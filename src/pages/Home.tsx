import {useContext, useEffect} from "react";
import MainSlider from "../components/MainSlider";
import {Context} from "../context/contextApi";

const Home = () => {
  const { switcheData } = useContext(Context);

  useEffect(() => {
    document.body.setAttribute("data-color", "color_1");
  }, [switcheData]);

 
  return (
    <div className="page-content bg-white">
      <MainSlider />
    </div>
  );
};

export default Home;
