import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

function CreatorIconLink() {
  return (
    <div className="creator-link">
      <Link to="/creator">
        <FaBookOpen size={30} />
      </Link>
    </div>
  );
}

export default CreatorIconLink;
