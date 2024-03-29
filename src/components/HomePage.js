import React, { useState } from 'react';
import { Header } from '../layouts/Header/Header';
import { Footer } from '../layouts/Footer/Footer';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import  ProductWithHover from './ProductWithHover ';
import  ProductsGrid from './ProductsGrid';

export const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const slides = [
    { src: '/images/slider/img1.jpg', alt: 'Slide 1' },
    { src: '/images/slider/img2.jpg', alt: 'Slide 2' },
    { src: '/images/slider/img3.jpg', alt: 'Slide 3' },
  ];

  return (
    <div>
      <Header />
      <main>
        <div className='slider w-full'>

        <div class="relative   h-full">
    <img class="h-full w-full object-cover rounded-md" src="/images/slider/slider.jpg" alt="Random image"/>
    <div class="absolute inset-0 bg-gray-700 opacity-30 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-3xl font-bold">Start Shopping Now</h2>
    </div>
</div>                </div>
       
       

    
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10} id="sidebar">SIDEBAR</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center" id="main" size={75}>



        <Splitter style={{ height: '300px' }} layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center">
                <div>Freatured Products</div>
                    <div className='products'>
                {/* <ProductWithHover imageSrc={"/images/snkrs/5.png"} title={"sneakers1"} description={"deeeeesc"} price={"240"}></ProductWithHover>
                <ProductWithHover imageSrc={"/images/snkrs/6.png"} title={"sneakers1"} description={"deeeeesc"} price={"240"}></ProductWithHover>
                <ProductWithHover imageSrc={"/images/snkrs/7.png"} title={"sneakers1"} description={"deeeeesc"} price={"240"}></ProductWithHover>
                <ProductWithHover imageSrc={"/images/snkrs/8.png"} title={"sneakers1"} description={"deeeeesc"} price={"240"}></ProductWithHover> */}
                <ProductsGrid></ProductsGrid>
                    </div>

        
            </SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>

        
            </SplitterPanel>
        </Splitter>
    

        
      </main>
      <Footer />
    </div>
  );
};
