import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>¿Necesitas más consejos?</h2>
              <p>Regístrate gratis y obtén los últimos consejos.</p>
              <form className="form-section">
                <input placeholder="Tu email..." name="email" type="email" />
                <input value="Sí, quiero!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
