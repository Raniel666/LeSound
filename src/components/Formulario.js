import React, { useState } from "react";

const Formulario = ({ guardarBusquedaLetra }) => {
  guardarBusquedaLetra("");
  //State de error
  const [error, guardarError] = useState(false);

  //EL name de la entrada debe ser tener el mismo nombre del state
  const [busqueda, guardarBusqueda] = useState({
    //Creamos un objeto que contendra el artista y la cancion
    artista: "",
    cancion: "",
  });
  //Aplicamos destructuracion de objetos
  const { artista, cancion } = busqueda;

  //Fucuncion a cada input para leer su contenida
  const actualizarState = (evento) => {
    //Utilixzamos  la funcion guardar donde con el operador spread realizamos una copia
    //de busqueda  y luego actualizamos el valor del que cambio
    guardarBusqueda({
      ...busqueda,
      [evento.target.name]: [evento.target.value],
    });
  };

  //Consultar Apis
  const buscarInformacion = (evento) => {
    evento.preventDefault();
    if (artista === "" || cancion === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusquedaLetra(busqueda);
  };

  return (
    <section className="header">
      {error ? <p className="alert alert-info text-center p-2">Error</p> : null}
      <div className="container">
        <div className="row">
          <form
            id="formulario"
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend className="text-center">
                Buscador de Letras de Canciones
              </legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control entrada"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control entrada"
                      name="cancion"
                      placeholder="Nombre Cancion"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <div className="contencion">
                <button
                  type="submit"
                  className="btn btn-primary display-block boton"
                >
                  Buscar
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
