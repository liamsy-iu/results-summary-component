import "./Result.css";

const Result = () => {
  return (
    <div className="result">
      <h1>Your Result</h1>
      <div className="percentage">
        <p>76</p>
        <span>of 100</span>
      </div>
      <div className="commentary">
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
