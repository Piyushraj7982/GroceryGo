import React from "react";
import Card from "../components/Card";

const products = [
    { title: "Apple", price: 1.99, image: "https://cdn.pixabay.com/photo/2023/05/30/08/34/apple-8027938_1280.jpg" },
    { title: "Banana", price: 0.99, image: 'https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706_1280.jpg' },
    { title: "Carrot", price: 0.79, image: "https://media.istockphoto.com/id/526490997/photo/fresh-carrots-on-black-background.jpg?s=1024x1024&w=is&k=20&c=h3gkeyGX_Pz13Wjj_4HSrd4kIGf2K6fcjy8qBS-Bmn0=" },
    { title: "Orange", price: 1.29, image: "https://media.istockphoto.com/id/899238622/photo/tangerine-fruits.jpg?s=1024x1024&w=is&k=20&c=d5vLPzWxWYsxHJGLUtAHygA_O4zQe5vd9fCeC21hl8g=" },
    { title: "Grapes", price: 2.49, image: "https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=sna16XpdAIS_ebKZr6VcPH_Iq5rdYFu0bqM5Qx94_aA=" },
    { title: "Cucumber", price: 1.19, image: "https://cdn.pixabay.com/photo/2023/04/19/13/51/vegetables-7937832_1280.jpg" },
    { title: "Strawberry", price: 2.99, image: "https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875_1280.jpg" },
    { title: "Pineapple", price: 3.49, image: "https://cdn.pixabay.com/photo/2015/02/14/18/10/pineapple-636562_1280.jpg" },
    { title: "Broccoli", price: 1.59, image: "https://cdn.pixabay.com/photo/2014/10/22/18/34/broccoli-498600_1280.jpg" }
    
];

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
