import Fruit from "./Fruit";

export default function Fruits() {

   // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"]

   const fruits = [
    { 
        name: "Apple",
        price: 10,
        emoji: "&#127822;",
        soldout: true
    },
    { 
        name: "Banana",
        price: 2,
        emoji: "&#127820;",
        soldout: true
    }
    ,
    { 
        name: "Mango",
        price: 7,
        emoji: "&#128512;",
        soldout: false
    },
    { 
        name: "Orange",
        price: 5,
        emoji: "&#128512;",
        soldout: false
    },
    { 
        name: "Pineapple",
        price: 8,
        emoji: "&#127821;",
        soldout: true
    }
   ]

return <div>
           <ul>
            {fruits.map(fruit =>
              <Fruit name={fruit.name}
               price={fruit.price} 
               emoji={fruit.emoji}  
               soldout={fruit.soldout}>             
               </Fruit>)
            }
            </ul>
     </div>

}