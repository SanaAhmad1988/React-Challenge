function PlantCard({ id, name, price, imageUrl }) {
   
    return (
      <div className="card">
            <h1>{name}</h1>
            <h3>{price.toFixed(2)}</h3>
            <img className="card-image" src={imageUrl} alt="no pic :(" />
          </div>
       
    );
  }
   
  export default PlantCard;
