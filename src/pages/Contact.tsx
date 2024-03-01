import {useState} from "react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours");
    const formData = new FormData(event.target);

    formData.append("access_key", "c49708ae-61ec-405a-bb17-886833d1d4e8");
    formData.append("subject", "Nouvel envoi sur constructionphoenixsignature.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulaire envoyé avec succès");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="page-content bg-white">
      <section className="content-inner-2 line-img">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 m-b30">
              <div className="mb-3">Veuillez remplir le formulaire suivant pour nous envoyer un message</div>
              <form
                  onSubmit={onSubmit}
              >
                <div className="row sp10">
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                          type="text"
                          className="form-control"
                          name="dzFirstName"
                          placeholder="Prénom"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                          type="text"
                          className="form-control"
                          name="dzLastName"
                          placeholder="Nom"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Courriel"
                      />
                    </div>
                  </div>
                  <input type="checkbox" name="botcheck" id="" style={{display: 'none'}}/>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                          type="text"
                          className="form-control"
                          name="dzPhoneNumber"
                          placeholder="Téléphone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <input
                          type="text"
                          className="form-control"
                          name="dzOther[subject]"
                          placeholder="Sujet"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <textarea
                          name="dzMessage"
                          className="form-control"
                          placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                        name="submit"
                        type="submit"
                        value="submit"
                        className="btn btn-primary"
                    >
                      Envoyer <i className="m-l10 fas fa-caret-right"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div className="pt-2">{result}</div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                <div className="col-lg-12 m-b30">
                  <div className="icon-bx-wraper style-8 bg-white">
                    <div className="icon-md m-r20">
                      <span className="icon-cell text-primary">
                        <i className="flaticon-telephone"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="tilte m-b10">Téléphone</h4>
                      <p className="m-b0">(418) 934-6815</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 m-b30">
                  <div className="icon-bx-wraper style-8 bg-white">
                    <div className="icon-md m-r20">
                      <span className="icon-cell text-primary">
                        <i className="flaticon-email"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="tilte m-b10">Courriel</h4>
                      <p className="m-b0 text-break">info@constructionphoenixsignature.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
