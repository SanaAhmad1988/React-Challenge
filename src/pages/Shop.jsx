import itemsData from '../itemsData.json';
import PlantCard from '../components/PlantCard';

 function Shop ({item,name,price,imageUrl}){

    return(
        <div>
        <h1>Our Plants</h1>
        
        {itemsData.map((item) =>(
         <PlantCard
         name = {item.name}
         price = {item.price}
         imageUrl = {item.imageUrl}/>

        ))}
        </div>
    )
}
export default Shop

  