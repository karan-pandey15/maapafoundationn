import Image from 'next/image';
import './cartData.css';

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <Image 
          src="/education_card.jpg" 
          alt="Education for All" 
          width={300} 
          height={200} 
          className="image" 
        />
        <h3 className="title">Education for All</h3>
        <p className="text">
          Empowering minds through accessible education, breaking barriers, and fostering a love for learning among underprivileged children.
        </p>
      </div>

      <div className="card">
        <Image 
          src="/health_care_card.jpg" 
          alt="Healthcare Access" 
          width={300} 
          height={200} 
          className="image" 
        />
        <h3 className="title">Healthcare Access</h3>
        <p className="text">
          Ensuring quality healthcare for every individual, promoting wellness, and battling against preventable diseases in underserved communities.
        </p>
      </div>

      <div className="card">
        <Image 
          src="/slider-3.png" 
          alt="Maapa Rasoi" 
          width={300} 
          height={200} 
          className="image" 
        />
        <h3 className="title">Maapa Rasoi</h3>
        <p className="text">
          Fighting hunger and malnutrition. Your support helps us provide nutritious meals to those in need, creating a world without hunger.
        </p>
      </div>
    </div>
  );
}
