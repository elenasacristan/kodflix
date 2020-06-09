import React from "react";
import { Redirect } from "react-router-dom";
import "./Details.css";
import BackButton from "../BackButton/BackButton.js";
import Spinner from "../Spiner/Spiner.js";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      tvShow: {},
      resultsLoaded: false,
    };
  }

  componentDidMount() {
    let idTvShow = this.props.match.params.idTvShow;

    fetch("/rest/shows", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let tvShow = data.find((show) => show.id === idTvShow);
        this.setState({ tvShow: tvShow, resultsLoaded: true });
      });
  }

  render() {
    if (!this.state.tvShow) {
      return <Redirect to="/not-found" />;
    } else if (!this.state.resultsLoaded) {
      return <Spinner />;
    } else {
      return (
        <div className="Details">
          <h2 className="heading">{this.state.tvShow.title}</h2>
          <div className="Details-container">
            <p className="Details-synopsis">{this.state.tvShow.synopsis}</p>
            <div className="Details-picture">
              <img
                src={require(`../../common/images/${this.state.tvShow.id}.jpg`)}
                alt="{this.state.tvShow.title}"
              />
            </div>
          </div>
          <BackButton />
        </div>
      );
    }
  }
}
