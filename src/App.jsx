import axios from "axios";
import React, { useEffect, useState } from "react";
import Cancion from "./components/Cancion";
import Formulario from "./components/Formulario";
import Info from "./components/Info";
// npm  install canvas-confetti -E
import confetti from "canvas-confetti";
const App = () => {
  const reseatear = () => {
    guardarBusquedaLetra({});
    guardarMusica("");
    guardarInfo("");

    <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />;
  };

  //Definir el state
  const [busquedaletra, guardarBusquedaLetra] = useState({});

  const [musica, guardarMusica] = useState({});
  const [info, guardarInfo] = useState({});
  //Utilizamos el useEffect para estar pendiente cuando la busqueda de letra cambie
  useEffect(() => {
    if (Object.keys(busquedaletra).length == 0) {
      console.log("No se ejecuta nada");
      return;
    }
    const consultarAPiLetras = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${artista}&mus=${cancion}`;
      // const urlArtist=`theaudiodb.com/api/v1/json/{APIKEY}/discography.php?s=${artista}`;

      const [music, informacion] = await Promise.all([
        axios(url),
        // axios(urlArtist)
      ]);
      // guardarInfo(informacion.data.artists[0]);
      confetti();
      guardarMusica(music.data.mus[0]);

      //guardarMusica(music.mus[0]);
    };
    consultarAPiLetras();
  }, [busquedaletra]);

  return (
    <>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />

      <div className="container mt-5">
        <div className="row">
          {/* <div className='col-md-6'>
          <Info info={info}/>
          </div> */}

          <div className="col-md-12">
            <Cancion musica={musica} reseatear={reseatear} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
