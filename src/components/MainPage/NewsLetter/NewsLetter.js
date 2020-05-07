import React from "react";

const newsletter = () => {
  return (
    <section id="newsletter" className="text-center p-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Newsletter</h1>
            <p>
              Wpisz poniżej swoje imię oraz adres e-mail aby być na bieżąco z
              naszą ofertą!
            </p>
            <form className="form-inline justify-content-center">
              <input
                type="text"
                className="form-control mb-2 mr-2"
                placeholder="Wpisz imię"
              />
              <input
                type="text"
                className="form-control mb-2 mr-2"
                placeholder="Wpisz nazwisko"
              />
              <button className="btn btn-primary mb-2">Zapisz się</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default newsletter;
