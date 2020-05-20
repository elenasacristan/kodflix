import React from "react";
import { Link, Redirect } from "react-router-dom";
import arrayTvShows from "../GalleryShows/gallery_get.js";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      tvShow: {},
    };
  }

  componentDidMount() {
    let idTvShow = this.props.match.params.idTvShow;
    let tvShow = arrayTvShows().find((show) => show.id === idTvShow);
    this.setState({ tvShow: tvShow });
  }

  render() {
    return !this.state.tvShow ? (
      <Redirect to="/not-found" />
    ) : (
      <div>
        <div>
          <h2>{this.state.tvShow.title}</h2>
          <img
            src={this.state.tvShow.picture}
            alt="{this.state.tvShow.title}"
          />
        </div>
        <Link to="/">Back to home page</Link>
      </div>
    );
  }
}
