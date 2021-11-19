import dataJson0 from "../public/data/StreamingHistory0.json";
import dataJson1 from "../public/data/StreamingHistory1.json";
import dataJson2 from "../public/data/StreamingHistory2.json";
export default function dataFetch() {
  const merged = [...dataJson0, ...dataJson1, ...dataJson2];
  return merged;
}
