import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import experiences from "../data/experiences";
import "../styles/AllActivities.css";

export default function AllActivities() {
  const navigate = useNavigate();

  return (
    <div className="all-activities-page">
      <header className="all-activities-header">
        <button
          className="all-activities-back"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowLeft size={18} />
        </button>
        <h1>All Activities</h1>
      </header>

      <section className="all-activities-list">
        {experiences.map((item) => (
          <article key={item.id} className="all-activities-card">
            <div
              className="all-activities-image"
              style={{ backgroundImage: `url(${item.hero})` }}
            />
            <div className="all-activities-body">
              <div className="all-activities-row">
                <h2>{item.title}</h2>
                <Link
                  to={`/activity/${item.id}`}
                  className="all-activities-link"
                >
                  See more
                </Link>
              </div>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
