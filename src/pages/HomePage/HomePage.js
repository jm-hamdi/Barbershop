import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import "./HomePage.css";
import ImageSlider from "./ImgSlider/ImageSlider";

const IMAGES = [
  { url: "client1.jpg", alt: "Client 1 - Haircut" },
  { url: "client2.jpg", alt: "Client 2 - Beard" },
  { url: "client3.jpg", alt: "Client 3 - Haircut and Beard" },
  { url: "client4.jpg", alt: "Client 1 - Haircut" },
  { url: "client5.jpg", alt: "Client 2 - Beard" },
  { url: "client6.jpg", alt: "Client 3 - Haircut and Beard" },
  { url: "client7.jpg", alt: "Client 1 - Haircut" },
  { url: "client8.jpg", alt: "Client 2 - Beard" },
  { url: "client9.jpg", alt: "Client 3 - Haircut and Beard" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Helmet>
        <title>Test barbershop.</title>
        <meta
          name="description"
          content="Discover the best barbershop. Barbershop offers expert haircuts, beard grooming, to make you look and feel your best."
        />
      </Helmet>

      <div className="HeroSection">
        <button
          className="BookApptButton"
          onClick={() => navigate('/book-appointment')}
        >
          Book Appointment
        </button>
        <h1 className="ParaHeroSection">Barbershop</h1>
      </div>

      <div className="servicesContainer bg-slate-900">
        <h2 className="servicesTitle">Men Services</h2>
        <div className="servicesGrid">
          <div className="serviceItem">
            <h3>Haircuts</h3>
          </div>
          <div className="serviceItem">
            <h3>Beard</h3>
          </div>
          <div className="serviceItem">
            <h3>Head Shave</h3>
          </div>
          <div className="serviceItem">
            <h3>Beard Shave</h3>
          </div>
          <div className="serviceItem">
            <h3>Designs</h3>
          </div>
          <div className="serviceItem">
            <h3>Kids Haircut</h3>
          </div>
        </div>
      </div>

      <div className="gallery bg-slate-900">
        <p className="gpara">Gallery</p>
        <ImageSlider images={IMAGES} />
      </div>
    </div>
  );
}
