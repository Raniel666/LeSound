import React from "react";

const Cancion = ({ musica, reseatear }) => {
  if (musica.name) {
    return (
      <>
        <div class="modal">
          <div class="modal-content">
            <button className=" btn-sound" onClick={reseatear}>
              X
            </button>
            <h2 className="titulo">{musica.name}</h2>
            <p className="letra">{musica.text}</p>
          </div>
        </div>
      </>
    );
  }
};

export default Cancion;
