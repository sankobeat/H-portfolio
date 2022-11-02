import React from "react";
import designImageOne from "../../assets/portfolio/balazs-ketyi-_x335IZXxfc-unsplash.jpg";
import designImageTwo from "../../assets/portfolio/budka-damdinsuren-xihqiK6rD9k-unsplash.jpg";
import "./MyWork.css";

const MyWork = () => {
  return (
    <section>
      <div className="container my-work">
        <div className="inner-content">
          <div className="images">
            <div className="image-container">
              <div className="img-left">
                <img src={designImageOne} alt="" />
              </div>
              <div className="img-right">
                <img src={designImageTwo} alt="" />
              </div>
            </div>
          </div>
          <div className="text">
            <div className="text-content">
              <h1>UI/UX vision</h1>
              <p>
                experience the modern UI/UX design with an attractive approach
                &#38; creative view
              </p>
              <a href="#" className="btn-more">
                more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
