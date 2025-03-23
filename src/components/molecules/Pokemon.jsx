const Pokemon = (props) => {
    const { id, name, type, base, image, onClick, region } = props;
    return (
      <div className="pokemonDetalle">
        <div onClick={onClick} id={name}>
          <img src={image} alt={name} className="imagenPoke"/>
          <h3>{name}</h3>
        </div>
      </div>
    );
}

export default Pokemon;