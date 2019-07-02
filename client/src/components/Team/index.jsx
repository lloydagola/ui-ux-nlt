import React from "react";
import WOW from "wowjs";
import "./Team.css";

class Team extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section>
        <div className="team box-layout">
          <div
            className="team-background-right blue-gradient wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          />
          <div
            className="team-pic heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          >
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80"
              alt=""
            />
          </div>
          <div
            className="team-text white heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          >
            <h1 className="font-76">leila</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendus quam consequatur
              odio. Assumenda at minus corrupti eum nisi animi et fuga similique
              modi.
            </p>
            <div className="flat-button">find out more</div>
          </div>
          <div
            className="team-background-left  blue-gradient wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          />
        </div>

        <div className="yellow-gradient">
          <div className="team-inverted box-layout">
            <div
              className="team-background-right-inverted blue-gradient wow fadeInUp"
              data-wow-iteration="1"
              data-wow-offset="80"
              data-wow-delay=".15s"
            />
            <div
              className="team-pic-inverted heavy-shadow wow fadeInUp"
              data-wow-iteration="1"
              data-wow-offset="80"
              data-wow-delay=".15s"
            >
              <img
                src="https://images.pexels.com/photos/1154787/pexels-photo-1154787.jpeg?cs=srgb&dl=beautiful-beauty-case-1154787.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div
              className="team-text-inverted white heavy-shadow wow fadeInUp"
              data-wow-iteration="1"
              data-wow-offset="80"
              data-wow-delay=".15s"
            >
              <h1 className="font-76">leila</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci vel suscipit harum ipsum unde iusto repellendus quam
                consequatur odio. Assumenda at minus corrupti eum nisi animi et
                fuga similique modi.
              </p>
              <div className="flat-button">find out more</div>
            </div>
            <div
              className="team-background-left-inverted  blue-gradient wow fadeInUp"
              data-wow-iteration="1"
              data-wow-offset="80"
              data-wow-delay=".15s"
            />
          </div>
        </div>

        <div className="team white box-layout">
          <div
            className="team-background-left blue-gradient wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          />
          <div
            className="team-pic heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          >
            <img src="https://images.unsplash.com/photo-1547508446-e097049cade7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
          </div>
          <div
            className="team-text white heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          >
            <h1 className="font-76">lloyd</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendus quam consequatur
              odio. Assumenda at minus corrupti eum nisi animi et fuga similique
              modi.
            </p>
            <div className="flat-button">find out more</div>
          </div>
          <div
            className="team-background-right  blue-gradient wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          />
        </div>
      </section>
    );
  }
}

export default Team;
