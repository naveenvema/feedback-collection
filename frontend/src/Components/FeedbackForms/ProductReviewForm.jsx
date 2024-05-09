import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { BiSolidStar } from 'react-icons/bi';
import { BiStar } from 'react-icons/bi';

const ProductReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your submission logic
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Product Review</h2>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            rating > index ? (
              <BiSolidStar
                key={index}
                onClick={() => handleRatingClick(index)}
                className="text-yellow-400 text-3xl cursor-pointer"
              />
            ) : (
              <BiStar
                key={index}
                onClick={() => handleRatingClick(index)}
                className="text-gray-300 text-3xl cursor-pointer"
              />
            )
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full h-32 border border-gray-300 rounded-md p-3 mb-4"
            placeholder="Write your feedback here..."
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductReviewForm;
