import React, { useState } from 'react';
import './Home.css';
import bild1 from '../Images/bild1.jpeg';
import bild2 from '../Images/bild2.jpeg';
import bild3 from '../Images/bild3.jpeg';
import bild4 from '../Images/bild4.jpeg';
import bild5 from '../Images/bild5.jpeg';
import bild6 from '../Images/bild6.jpeg';
import bild7 from '../Images/bild7.jpeg';
import bild8 from '../Images/bild8.jpeg';
import bild9 from '../Images/bild9.jpeg';


function Home({ cart, addToCart }) {
  const [cartCount, setCartCount] = useState(0);

 
  if (cart === undefined) {
    cart = [];
  }

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Produkt 1',
      price: 350,
      description: 'En rosabukett är en vacker sammansättning av rosa färgtoner av blommor, vanligtvis sammansatta med olika nyanser av rosa för att skapa en romantisk och ömtålig känsla. ',
      stock: 10,
      image: bild1, 
    },
    {
      id: 2,
      name: 'Produkt 2',
      price: 300,
      description: 'En rosa blombukett med en liten twist är en charmig arrangemang som innehåller en variation av rosa blommor tillsammans med några gröna växter för kontrast och balans.Den rosa färgen symboliserar fortfarande kärlek och ömhet, men den gröna växten ger buketten en fräsch och naturlig känsla.',
      stock: 5,
      image: bild2, 
    },
    {
      id: 3,
      name: 'Produkt 3',
      price: 375,
      description: 'Denna orange blombukett är ett utmärkt val för att fira glädjefyllda tillfällen som födelsedagar, jubileer eller för att lyfta fram någon särskild dag. Orange är en färg som symboliserar energi och entusiasm, och denna bukett kommer definitivt att sprida glädje och positivitet till den som får den.',
      stock: 15,
      image: bild3, 
    },
    {
      id: 4,
      name: 'Product 4',
      price: 275,
      description: 'Denna röda blombukett är en vacker och klassisk arrangemang som utstrålar kärlek och passion. Den innehåller en varierad blandning av röda blommor och gröna växter för att skapa en perfekt balans mellan intensitet och friskhet.',
      stock: 15,
      image: bild4,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 275,
      description: 'En lila och grön blombukett är en underbar blomsterarrangemang som kombinerar harmonin i lila nyanser med fräschören av gröna växter. .Lila är en färg som symboliserar kreativitet, spirituell kraft och lugn. Gröna växter representerar naturens friskhet och vitalitet. Tillsammans skapar de en blombukett som är perfekt för att fira kärlek, vänskap eller en speciell händelse. ',
      stock: 15,
      image: bild5,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 40,description: 'En gul blombukett med rosor är en strålande och solig blomsterarrangemang som sprider glädje och värme. Denna bukett innehåller vackra gula rosor, som är en symbol för vänskap, glädje och lycka. Deras ljusa färg och milda doft förmedlar en känsla av positivitet och energi. Gula blommor är även känt för att föra fram solskenskänslan och kan vara ett uttryck för uppmuntran och vänskap.',
      stock: 15,
      image: bild6,
    }, {
      id: 7,
      name: 'Product 7',
      price: 200,
      description: 'En bukett med rosa tulpaner är en förtjusande och ömtålig blomsterarrangemang som förmedlar en känsla av romantik och elegans. De mjuka, rosa tulpanerna representerar kärlek, ömhet och beundran, vilket gör dem till den perfekta gåvan för någon du bryr dig om. Rosa tulpaner är kända för att symbolisera kärlekens begynnelse och harmoni.',
      stock: 15,
      image: bild7,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 400,
      description: 'En bukett med röda rosor är en klassisk symbol för kärlek och passion. Deras djupa, livliga färg och skönhet har gjort dem till en tidlös gest av kärlek och romantik. Röda rosor är känt för att uttrycka starka känslor av kärlek, önskan och respekt. De är en symbol för intensiv kärlek och passion, och denna blomsterbukett är ett uttryck för att du är djupt förälskad i mottagaren.',
      stock: 15,
      image: bild8,
    },
    {
      id: 9,
      name: 'Product 9',
      price: 250,
      description: 'Vår mixade blombukett är som en färgexplosion från trädgårdens alla hörn. Med en underbar blandning av rosa, lila och gröna blommor är den här buketten som en promenad i en sagolik trädgård. Buketten är fylld med olika sorters blommor, var och en med sin egen unika skönhet. Den är som en trädgård i en bukett, redo att lysa upp ditt liv.',
      stock: 15,
      image: bild9,
    }
  ]);

  const handleBuyNowClick = (product) => {
    const updatedProduct = { ...product };
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      updatedProduct.quantity = cart[existingProductIndex].quantity + 1;
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = updatedProduct;
      addToCart(updatedCart);
    } else {
      updatedProduct.quantity = 1;
      addToCart([...cart, updatedProduct]);
    }

   
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return {
          ...p,
          stock: p.stock - 1
        };
      }
      return p;
    });

    setProducts(updatedProducts);

    setCartCount(cartCount + 1);
  };

  return (
    <div>
       
      <div className="featured-products">
        
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Pris: kr{product.price}</p>
            <p>Lagersaldo: {product.stock}</p>
            {product.stock > 0 ? (
              <button onClick={() => handleBuyNowClick(product)}>Lägg till i varukorgen</button>
            ) : (
              <p>Slutsåld</p>
            )}
          </div>
        ))}
      </div>
      <p>Antal produkter i kundvagnen: {cartCount}</p>
    </div>
  );
}

export default Home;
