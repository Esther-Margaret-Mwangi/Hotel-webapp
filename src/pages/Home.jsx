import "../styles/Home.css";
import { Link } from "react-router-dom";
import { MapPin, Heart } from "lucide-react";
import experiences from "../data/experiences";

const facilitators = [
  {
    id: 1,
    name: "Mary Muthoni",
    role: "Group 1 Facilitator",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&q=80",
    favorite: true,
  },
  {
    id: 2,
    name: "Max Fundi",
    role: "Group 2 Facilitator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&q=80",
    favorite: false,
  },
  {
    id: 3,
    name: "Grace Muthoni",
    role: "Group 3 Facilitator",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&q=80",
    favorite: false,
  },
];

export default function Home() {
  return (
    <div className="home-mobile">
      <section className="home-hero-card">
        <div className="home-hero-pills">
          <span>
            <MapPin size={13} /> Location
          </span>
        </div>
        <div className="home-hero-gradient" />
        <div className="home-hero-copy">
          <h2>The Forest Adventure Centre & Restaurant</h2>
          <p>
            The Forest Adventure Centre is Nairobi&apos;s premier adventure
            location nestled in the stunning Kerieta Forest.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <h3 className="home-section-title">Facilitators</h3>
          <button type="button" className="home-section-link">
            See more
          </button>
        </div>

        <div className="facilitator-list">
          {facilitators.map((person) => (
            <article key={person.id} className="facilitator-item">
              <img src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.role}</p>
              </div>
              <button type="button" aria-label={`Favorite ${person.name}`}>
                <Heart
                  size={18}
                  className={person.favorite ? "heart-active" : "heart-idle"}
                  fill={person.favorite ? "currentColor" : "none"}
                />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h3 className="home-section-title">Things To Look Forward To</h3>

        <div className="home-grid">
          {experiences.map((item) => (
            <article key={item.id} className="home-grid-card">
              <div
                className="home-grid-image"
                style={{ backgroundImage: `url(${item.hero})` }}
              />
              <div className="home-grid-body">
                <div className="home-grid-row">
                  <h4>{item.title}</h4>
                  <Link to={`/activity/${item.id}`} className="home-grid-cta">
                    See more
                  </Link>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
