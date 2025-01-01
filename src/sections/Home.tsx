import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <div>
          <h2>About Me </h2>
        </div>
        <div>
          <Link to="/dreams">
            <h2>Dreams </h2>
          </Link>
        </div>
        <div>
          <h2>Resume </h2>
        </div>
      </div>
    </>
  );
}
