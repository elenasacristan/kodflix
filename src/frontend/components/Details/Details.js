import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Details.css";
import Spinner from "../../common/images/Spinner.svg";

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
      return (
        <div className="Spinner">
          <img src={Spinner} alt="{this.state.tvShow.title}" />
        </div>
      );
    } else {
      return (
        <div className="Details">
          <h2 className="heading">{this.state.tvShow.title}</h2>
          <div className="container">
            <p className="synopsis">{this.state.tvShow.synopsis}</p>
            <div className="picture">
              <img
                src={require(`../../common/images/${this.state.tvShow.id}.jpg`)}
                alt="{this.state.tvShow.title}"
              />
            </div>
          </div>
          <Link className="back-button" to="/">
            Back to home page
          </Link>
        </div>
      );
    }
  }
}
