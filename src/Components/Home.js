import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75"
          alt=""
          className="home_image"
        />
        <div className="home_row">
          <Product
            id="123454"
            title="Miraggio Women's Jada Solid Tote Bag With Laptop Compartment | Tote Bags for Women For Office Use, Work | Ladies Shoulder Purse"
            price={34.5}
            rating={4}
            image="https://img.freepik.com/free-photo/pink-handbags_1203-7710.jpg?t=st=1742972581~exp=1742976181~hmac=9fa446bd223fb3000453be4777cd480e3fcb3b8d5dac6c2b5cdae8af48c6e192&w=996"
          />
          <Product
            id="234235"
            title="Redmi Note 14 5G (Phantom Purple, 6GB RAM 128GB Storage) | Global Debut MTK Dimensity 7025 Ultra | 2100 nits Segment Brightest 120Hz AMOLED | 50MP Sony LYT 600 OIS+EIS Triple Camera"
            price={2345}
            rating={4}
            image="https://m.media-amazon.com/images/I/71lq435TlUL._SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="456345"
            title="POND's Natural Glow Face Matte Powder For Normal Skin, Bb Glow - 30G, Pink"
            price={12}
            rating={3}
            image="https://m.media-amazon.com/images/I/51pNLVL+DKL._SL1000_.jpg"
          />
          <Product
            id="458745"
            title="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg), Anti-Glare, 15.6-inch(39.6cm) FHD Laptop"
            price={12000}
            rating={3}
            image="https://m.media-amazon.com/images/I/71J+OBadJCL._SL1500_.jpg"
          />
          <Product
            id="376345"
            title="The Theory Of Everything by Stephen Hawking"
            price={56}
            rating={5}
            image="https://m.media-amazon.com/images/I/61fR6OnVBUL._SL1276_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="246895"
            title="Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant (Magico Black)"
            price={876}
            rating={4}
            image="https://m.media-amazon.com/images/I/51UhwaQXCpL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
