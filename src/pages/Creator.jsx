import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function Creator() {
  return (
    <Card>
      <h1>Creator of this content is Jakub Wytykowski</h1>
      <p>Hope you enjoy it</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Card>
  );
}

export default Creator;
