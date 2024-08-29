import React, { useState } from "react";

const testimonials = [
  {
    name: "James Darwin",
    location: "Kolkata, West Bengal",
    testimonial:
      "Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.",
    rating: 5,
    image: "https://s3-alpha-sig.figma.com/img/39eb/7177/0fed45eca0505838ad3a8d7bc0e597a4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaN64ISwL2CRlHdmHH~MaMDj6OCp6Tcm4N8mZsYJreLqWkRb1oTpZxTBycxBdvzsZh0QRrV7FfHnLvGxD4WC1bOuI5gKTOF3ois4vwPFne4cyj2wsa4u-mA5JsvoCr2tya36RJ9~WKpvAkhvi2IJVuhA-kF0FPeDgKSbV01RfBmij2qmULYINqpKth7VwIfND9exIIuPtxt84BhdI29nt0UQeL5QWaWb3d2mvYSY8YpuIllShK4tLQoQWTimtFx2Z8zGHU7RKr8-0Qg6VY1aI9TTPEQkagxLyGau6majH7QhvTD4ZVYiGO2GWmbYhBxcIobv5cjmDLqgf513VtGnEA__",
  },
  {
    name: "James Darwin",
    location: "Kolkata, West Bengal",
    testimonial:
      "Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.",
    rating: 5,
    image: "https://s3-alpha-sig.figma.com/img/39eb/7177/0fed45eca0505838ad3a8d7bc0e597a4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaN64ISwL2CRlHdmHH~MaMDj6OCp6Tcm4N8mZsYJreLqWkRb1oTpZxTBycxBdvzsZh0QRrV7FfHnLvGxD4WC1bOuI5gKTOF3ois4vwPFne4cyj2wsa4u-mA5JsvoCr2tya36RJ9~WKpvAkhvi2IJVuhA-kF0FPeDgKSbV01RfBmij2qmULYINqpKth7VwIfND9exIIuPtxt84BhdI29nt0UQeL5QWaWb3d2mvYSY8YpuIllShK4tLQoQWTimtFx2Z8zGHU7RKr8-0Qg6VY1aI9TTPEQkagxLyGau6majH7QhvTD4ZVYiGO2GWmbYhBxcIobv5cjmDLqgf513VtGnEA__",
  },
  {
    name: "James Darwin",
    location: "Kolkata, West Bengal",
    testimonial:
      "Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.",
    rating: 5,
    image: "https://s3-alpha-sig.figma.com/img/39eb/7177/0fed45eca0505838ad3a8d7bc0e597a4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaN64ISwL2CRlHdmHH~MaMDj6OCp6Tcm4N8mZsYJreLqWkRb1oTpZxTBycxBdvzsZh0QRrV7FfHnLvGxD4WC1bOuI5gKTOF3ois4vwPFne4cyj2wsa4u-mA5JsvoCr2tya36RJ9~WKpvAkhvi2IJVuhA-kF0FPeDgKSbV01RfBmij2qmULYINqpKth7VwIfND9exIIuPtxt84BhdI29nt0UQeL5QWaWb3d2mvYSY8YpuIllShK4tLQoQWTimtFx2Z8zGHU7RKr8-0Qg6VY1aI9TTPEQkagxLyGau6majH7QhvTD4ZVYiGO2GWmbYhBxcIobv5cjmDLqgf513VtGnEA__",
  },
  {
    name: "James Darwin",
    location: "Kolkata, West Bengal",
    testimonial:
      "Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.",
    rating: 5,
    image: "https://s3-alpha-sig.figma.com/img/39eb/7177/0fed45eca0505838ad3a8d7bc0e597a4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaN64ISwL2CRlHdmHH~MaMDj6OCp6Tcm4N8mZsYJreLqWkRb1oTpZxTBycxBdvzsZh0QRrV7FfHnLvGxD4WC1bOuI5gKTOF3ois4vwPFne4cyj2wsa4u-mA5JsvoCr2tya36RJ9~WKpvAkhvi2IJVuhA-kF0FPeDgKSbV01RfBmij2qmULYINqpKth7VwIfND9exIIuPtxt84BhdI29nt0UQeL5QWaWb3d2mvYSY8YpuIllShK4tLQoQWTimtFx2Z8zGHU7RKr8-0Qg6VY1aI9TTPEQkagxLyGau6majH7QhvTD4ZVYiGO2GWmbYhBxcIobv5cjmDLqgf513VtGnEA__",
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, location, testimonial, rating, image } =
    testimonials[currentIndex];

  return (
    <div className="md:h-[357px] h-auto md:w-[530px] bg-green-50 px-6 pt-4 pb-2 md:rounded-2xl">
      {/* Profile Section */}
      <div className="flex items-center">
        <img src={image} alt={name} className="md:w-16 w-10 h-10 md:h-16 rounded-full mr-4" />
        <div>
          <h3 className="md:text-lg text-sm font-bold">{name}</h3>
          <p className="md:text-sm text-xs text-gray-600">{location}</p>
        </div>
      </div>
      {/* Testimonial Text */}
      <p className="mt-6 text-gray-800 text-xs md:text-lg ">“ {testimonial} “</p>
      {/* Star Rating */}
      <div className="md:mt-6 my-2 md:mb-6 flex">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="md:w-5 w-3 h-3 m-1 md:h-5 text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.571L24 9.748l-6 5.854 1.415 8.264L12 18.896l-7.415 4.97L6 15.602 0 9.748l8.332-1.59L12 .587z" />
          </svg>
        ))}
      </div>
      {/* Navigation Dots and Arrows */}
      <div className="md:mt-6 flex items-center justify-between">
        <div className="flex space-x-1 my-4 px-5 py-2.5 md:px-6 md:py-4 bg-white rounded-lg">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`md:h-2 p-[3px] md:w-2 rounded-full ${
                i === currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="md:p-2 p-1.5 cursor-pointer rounded-full bg-white shadow hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-4 w-3 h-3 md:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="md:p-2 p-1.5 cursor-pointer rounded-full bg-white shadow hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-4 w-3 h-3 md:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
