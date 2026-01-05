import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
<>
  <section id="hero-section">
    <div className="container">
      <div className="hero-text">
        <h1 className="hero-header">Make your interior more
minimalistic & modern</h1>
        <p className="hero-description">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <input type="text" placeholder="Search for products..." className="search-bar" />
      </div>

    </div>

  </section>

  <section id="four">
    <div className="four-container">
      <div className="four-item"> 
        </div>
      <div className="four-item"> 
        </div>
      <div className="four-item"> 
        </div>
      <div className="four-item"> 
        </div>
      <div className="four-item"> 
        </div>

    </div>
    
  </section>
  </>
  );
}
