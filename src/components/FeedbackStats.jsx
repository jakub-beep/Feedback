import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate ratio
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  const averageRounded = average.toFixed(2).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Revievs</h4>
      <h4>Average rating: {isNaN(average) ? 0 : averageRounded}</h4>
    </div>
  );
}

export default FeedbackStats;
