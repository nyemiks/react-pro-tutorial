/** { /** key={name} {emoji} {name} $ {price} */

export default function Fruit({name, price, emoji, soldout}) {
    return (
        <>         
          { 
                <li> 
                     <h3>{emoji} {name} $ {price} {soldout ? " sold out" : ""}
                     </h3> 
                </li>                          
            }    
        </>
    );
    
   
}