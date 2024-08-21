import { useState, useEffect } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import "./image-slider.css";

function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImg = async (getUrl) => {
    try {
      setLoading(true);
      setError(null);
      setImages(null);

      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

      if (!res.ok) {
        throw new Error("Error fetching data");
      }

      const data = await res.json();
      setImages(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    fetchImg(url);
  }, [url]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container">
      <BiLeftArrowAlt className="arrow arrow-left" onClick={handlePrevious} />
      {images &&
        images.length > 0 &&
        images.map((image, index) => (
          <img
            key={image.id}
            alt={image.author}
            src={image.download_url}
            className={`image-slider ${
              currentSlide === index ? "active" : "inactive"
            }`}
          />
        ))}
      <BiRightArrowAlt className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicators">
        {images &&
          images.length > 0 &&
          images.map((_, index) => (
            <button
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
              key={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </span>
    </div>
  );
}

export default ImageSlider;
