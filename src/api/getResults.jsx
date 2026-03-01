export default async function getResults() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}
