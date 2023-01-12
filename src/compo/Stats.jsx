import "./stats.css";
import StatImageM from "../images/mobile.jpg";

import StatImageD from "../images/desktop.jpg";

const Stats = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-img mb-24">
            <picture>
              <source media="(min-width: 768px)" srcSet={StatImageD} />
              <img className="img-overlay" src={StatImageM} alt="working women in an office" />
            </picture>
          </div>
          <div className="card-body">
            <h1 className="card-title mb-24">
              Get <span className="t-accent">insights</span> that help your business grow.
            </h1>

            <p className="card-text mb-24">
              Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
              and overall efficiency.
            </p>

            <div className="listing">
              <ul>
                <li className="li-head">10k+</li>
                <li className="li-text">Companies</li>
              </ul>
              <ul>
                <li className="li-head">314</li>
                <li className="li-text">Templates</li>
              </ul>
              <ul>
                <li className="li-head">12M+</li>
                <li className="li-text">Queries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
