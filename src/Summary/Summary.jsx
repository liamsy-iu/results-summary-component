import { useQuery } from "@tanstack/react-query";
import getResults from "../api/getResults";
import "./summary.css";

const Summary = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["summary"],
    queryFn: () => getResults(),
    staleTime: 30000,
  });

  console.log(data);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const categoryColors = {
    Reaction: { bg: "var(--lighter-red)", text: "var(--light-red)" },
    Memory: {
      bg: "var(--lighter-orangey-yellow)",
      text: "var(--orangey-yellow)",
    },
    Verbal: { bg: "var(--lighter-green-teal)", text: "var(--green-teal)" },
    Visual: { bg: "var(--lighter-cobalt-blue)", text: "var(--cobalt-blue)" },
  };

  return (
    <div className="summary">
      <h1>Summary</h1>
      {data &&
        data.map((summary) => {
          const colors = categoryColors[summary.category] || {};
          return (
            <div
              className="category"
              key={summary.category}
              style={{
                backgroundColor: colors.bg,
              }}
            >
              <div className="category-icon">
                <img src={summary.icon} alt={summary.category} />
                <p style={{ color: colors.text }}>{summary.category}</p>
              </div>
              <div className="category-score">
                <p>{summary.score}</p>
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
