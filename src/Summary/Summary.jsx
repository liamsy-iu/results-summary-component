import { useQuery } from "@tanstack/react-query";
import getResults from "../api/getResults";
import "./summary.css";

const Summary = () => {
  const { isLoading, data } = useQuery({
    queryFn: () => getResults(),
    staleTime: 30000,
  });

  const categoryColors = {
    Reaction: { bg: "var(--lighter-red)", text: "var(--light-red)" },
    Memory: {
      bg: "var(--lighter-orangey-yellow)",
      text: "var(--orangey-yellow)",
    },
    Verbal: { bg: "var(--lighter-green-teal)", text: "var(--green-teal)" },
    Visual: { bg: "var(--lighter-cobalt-blue)", text: "var(--cobalt-blue)" },
  };

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="summary">
      <h1>Summary</h1>
      {data.map(({ category, score, icon }) => {
        const colors = categoryColors[category] || {};
        return (
          <div
            className="category"
            key={category}
            style={{
              backgroundColor: colors.bg,
            }}
          >
            <div className="category-icon">
              <img src={icon} alt={category} />
              <p style={{ color: colors.text }}>{category}</p>
            </div>
            <div className="category-score">
              <p>{score}</p>
              <span>/100</span>
            </div>
          </div>
        );
      })}
      <button>Continue</button>
    </div>
  );
};

export default Summary;
