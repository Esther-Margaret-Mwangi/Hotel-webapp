import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/FlushHeader.css";

export default function FlushHeader({ title, right }) {
  const navigate = useNavigate();

  return (
    <header className="flush-header">
      <button
        type="button"
        className="flush-header-btn"
        onClick={() => navigate(-1)}
        aria-label="Back"
      >
        <ArrowLeft size={18} />
      </button>
      <h1>{title}</h1>
      <div className="flush-header-right">{right ?? <span aria-hidden="true" />}</div>
    </header>
  );
}
