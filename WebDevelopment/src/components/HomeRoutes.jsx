import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/HomeRoutes.css';

const HomeRoutes = () => {
  const routes = [
    { text: "Learn more about our mission", path: "/about" },
    { text: "Track our journey", path: "/updates" },
    { text: "Get involved", path: "/contact" }
  ];

  return (
    <section className="home-routes" role="navigation" aria-label="Quick Links">
      <div className="routes-container">
        {routes.map((route, index) => (
          <Link 
            to={route.path} 
            className="route-link"
            key={index}
            tabIndex="0"
          >
            <span className="route-text">{route.text}</span>
            <ArrowRight className="route-arrow" size={24} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeRoutes; 