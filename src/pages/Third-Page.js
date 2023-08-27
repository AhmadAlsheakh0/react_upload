import { Link } from "react-router-dom";
const Empty = ({ pageName }) => (
    <div>
      <h1>{pageName}</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
  export default Empty;