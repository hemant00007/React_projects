const HeroSection = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
       
        <div className="hero-buttons">
          <button>Shop now </button>
           <button className="btn-secondary">Category </button>
        </div>
        <div className="shoping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="images/amazon.png" alt="amazon" />
              <img src="images/flipkart.png" alt="flipkart" />
          </div>
        </div>
         </div>
         <div className="hero-image"> 
          <img src="images/shoe_image.png" alt="hero" />
         </div>
      </main>
    </>
  );
};
export default HeroSection;
