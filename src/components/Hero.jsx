import React from "react";

const Hero = () => {
  return (
    <div className="bg-cover  w-full bg-no-repeat  h-[80vh] flex items-center justify-center" style={{ backgroundImage: 'url(https://i.postimg.cc/Kjs1dYbx/460639017-1106932154128651-5333036050651271515-n.jpg)' }}>
      <div className="text-center text-white ">
        <h1 className="text-5xl font-bold mb-4  p-2  ">Welcome to Our Store</h1>
        <p className="text-xl mb-8 font-bold">Discover the latest trends and exclusive offers</p>
        <button className="bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 duration-300">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
