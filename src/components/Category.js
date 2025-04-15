import React from "react";
import "../styles/Category.scss";
function Catagory({ description, image, price, title }) {
  return (
    <div className="best-products">
      <section className="header">
        <h4>{title}</h4>
        <p>{description}</p>
      </section>
      <section className="img">
        <img
          src={image}
          alt={title}
        />
      </section>
    </div>
  );
}

export default Catagory;
