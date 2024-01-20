import React, { useState, useEffect } from "react";

// TODOs:
// 1 - I want to fetch the info from the API when the component renders (useEffect)
// 2 - I want to set the images to some state field
// 3 - I want to have an active index and show one pic that corresponds to the index
// 4 - I want to create two buttons that (maybe) change the active index +/- 1

// Questions:
// Loading state?
// Error state?

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchImages = async () => {
    const images = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((images) => {
        console.log("images", images);
        return images.data.children.map((image) => {
          const { title, preview } = image.data;
          const imageUrl = preview.images
            .map((image) => {
              return image.resolutions.find((i) => i.url);
            })
            .map((i) => i.url)
            .toString();

          return { title, imageUrl };
        });
      })
      .catch((err) => setHasError(true))
      .finally(() => setIsLoading(false));

    console.log("images", images);
    setImages(images);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleNavigateForward = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handleNavigateBackward = () => {
    setActiveIndex(activeIndex - 1);
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (hasError) {
    return (
      <div>
        <h1>oh no an error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Good Dogs</h1>
      <figure>
        <img
          src={images[activeIndex].imageUrl}
          alt="a good boi"
          style={{ height: 500, width: 450 }}
        />
        <figcaption>{images[activeIndex].title}</figcaption>
      </figure>
      <div>
        <button
          disabled={activeIndex === 0 ? true : false}
          style={{ margin: 5 }}
          onClick={handleNavigateBackward}
        >
          Previous
        </button>
        <button
          disabled={activeIndex === images.length - 1 ? true : false}
          style={{ margin: 5 }}
          onClick={handleNavigateForward}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
