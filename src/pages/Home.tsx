import {useContext, useEffect} from "react";
import MainSlider from "../components/MainSlider";
import {Context} from "../context/contextApi";
import { Helmet } from 'react-helmet';

const Home = () => {
  const { switcheData } = useContext(Context);

  useEffect(() => {
    document.body.setAttribute("data-color", "color_1");
  }, [switcheData]);

 
  return (
    <>
    <Helmet>
      <title>Construction Phoenix Signature - Accueil</title>
      <meta name="description" content="Page d'accueil du site Construction Phoenix Signature - Jean-François Dorval entrepreneur" />
      <meta property="og:site_name" content="Construction Phoenix Signature" />
      <meta property="og:locale" content="fr_CA" />
    </Helmet>
    <div className="page-content bg-white">
      <MainSlider />
    </div>
    </>
  );
};

export default Home;
