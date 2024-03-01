import {Link} from "react-router-dom";
import {ServicesArr} from "../elements/JsonData";

const Services = () => {
  return (
    <div className="page-content bg-white">
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {ServicesArr.map(({ img, title, icon }, ind) => (
              <div className="col-lg-4 col-md-6 aos-item" key={ind}>
                <div
                  className="icon-bx-wraper style-1 m-b30"
                  data-name="1."
                >
                  <div className="back">
                    <div className="inner">
                      <div>
                        <div className="icon-lg">
                          <span className="icon-cell text-primary">
                            <i className={icon}></i>
                          </span>
                        </div>
                        <h4 className="title m-b15">
                          <Link to="/services-details" className="text-white">
                            Interior Design
                          </Link>
                        </h4>
                        <p>
                          Quisque vel condimentum dolor, vitae luctus lacus.
                          Integer finibus arcu non ultrices rhoncus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
