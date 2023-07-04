import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Base from "../Base";
import AnimatedText from "../Styled_component/animated_text";

const HomePage = () => {
  return (
    <Base>
      <AnimatedText text="netAIsys" />
      <div
        className="container"
        style={{
          width: "100%",
          height: "100vh",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            color: "#fff",
            "text-align": "center",
            backgroundColor: "#177d9a",
            width: "100%",
          }}
        >
          Welcome to our official Site
        </h1>

        <p className="description" style={{ color: "black" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          magnam placeat, quas ducimus repudiandae at. Provident, commodi. Iste,
          dolor, aspernatur nostrum eligendi mollitia pariatur maiores inventore
          dolores perspiciatis, earum vitae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quibusdam magnam placeat, quas ducimus
          repudiandae at. Provident, commodi. Iste, dolor, aspernatur nostrum
          eligendi mollitia pariatur maiores inventore dolores perspiciatis,
          earum vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam magnam placeat, quas ducimus repudiandae at. Provident,
          commodi. Iste, dolor, aspernatur nostrum eligendi mollitia pariatur
          maiores inventore dolores perspiciatis, earum vitae. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam magnam placeat, quas
          ducimus repudiandae at. Provident, commodi. Iste, dolor, aspernatur
          nostrum eligendi mollitia pariatur maiores inventore dolores
          perspiciatis, earum vitae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam magnam placeat, quas ducimus repudiandae
          at. Provident, commodi. Iste, dolor, aspernatur nostrum eligendi
          mollitia pariatur maiores inventore dolores perspiciatis, earum vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          magnam placeat, quas ducimus repudiandae at. Provident, commodi. Iste,
          dolor, aspernatur nostrum eligendi mollitia pariatur maiores inventore
          dolores perspiciatis, earum vitae.
        </p>
      </div>
    </Base>
  );
};

export default HomePage;
