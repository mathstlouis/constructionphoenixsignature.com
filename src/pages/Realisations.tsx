import {Helmet} from "react-helmet";

const Realisations = () => {
  //const [data] = useState(HomeGalleryArr);

  return (
    <>
    <Helmet>
        <title>Construction Phoenix Signature - Nos Réalisations</title>
        <meta name="description" content="Voir les réalisations et travaux effectués par Construction Phoenix Signature" />
        <meta property="og:site_name" content="Construction Phoenix Signature" />
        <meta property="og:locale" content="fr_CA" />
    </Helmet>
    <div className="page-content bg-white">
        <section className="content-inner-1 line-img overflow-hidden masonry-portfolio">
            <div className="container">
                <h1>Nos réalisations</h1>

                <p>Nous travaillons activement à plusieurs projets. Nos réalisations seront présentées très bientôt.</p>
  {/*              <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    selector={".lightimg"}
                >
                    <Swiper
                        className="swiper-container swiper-portfolio lightgallery aos-item"
                        slidesPerView={4}
                        loop={true}
                        breakpoints={{
                            1200: {slidesPerView: 4},
                            991: {slidesPerView: 3},
                            575: {slidesPerView: 2},
                            240: {slidesPerView: 1},
                        }}
                    >
                        {data.map((item, ind) => {
                            if (item?.className !== "hide") {
                                return (
                                    <SwiperSlide className="swiper-slide" key={ind}>
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="dz-info">
                        <span
                            data-exthumbimage={item.img}
                            data-src={item.img}
                            className="view-btn lightimg"
                            title="INTERIOR DESIGN"
                        >
                          <img
                              src={item.img}
                              alt=""
                              style={{display: "none"}}
                          />
                        </span>
                                                <h6 className="sub-title">INTERIOR DESIGN</h6>
                                                <h4 className="title m-b15">
                                                    <Link to="/portfolio-details">
                                                        Modern House Interior <span>New York</span>
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={item?.img2} alt=""/>
                                            </div>
                                            <div className="dz-info">
                        <span
                            data-exthumbimage={item?.img2}
                            data-src={item?.img2}
                            className="view-btn lightimg"
                            title="CREATIVE"
                        >
                          <img
                              src={item?.img2}
                              alt=""
                              style={{display: "none"}}
                          />
                        </span>
                                                <h6 className="sub-title">CREATIVE</h6>
                                                <h4 className="title m-b15">
                                                    <Link to="/portfolio-details">
                                                        Sample Hotel Art,<span> India</span>
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            } else {
                                return (
                                    <SwiperSlide className="swiper-slide" key={ind}>
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="dz-info">
                        <span
                            data-exthumbimage={item.img}
                            data-src={item.img}
                            className="view-btn lightimg"
                            title="INTERIOR DESIGN"
                        >
                          <img
                              src={item.img}
                              alt=""
                              style={{display: "none"}}
                          />
                        </span>
                                                <h6 className="sub-title">INTERIOR DESIGN</h6>
                                                <h4 className="title m-b15">
                                                    <Link to="/portfolio-details">
                                                        Modern House Interior <span>New York</span>
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={item?.img2} alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            }
                        })}
                    </Swiper>
                </LightGallery>*/}
            </div>
        </section>
    </div>
    </>
  );
};

export default Realisations;
