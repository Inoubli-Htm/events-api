import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterContent = () => {
  return (
    <div className="text-center mb-2">
      <p className="footer-description">
        EventSphere est une plateforme innovante dédiée à la création, à
        l'affichage et à la gestion d'événements, connectant les passionnés tout
        en facilitant l'interaction et l'organisation.
      </p>
      <p className="mb-0">
        © {new Date().getFullYear()} EventSphere. Tous droits réservés.
      </p>
      <div className="social-icons">
        <Link
          to={{ pathname: "https://facebook.com" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={20} />
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
