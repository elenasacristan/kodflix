import React from "react";
import ReactGA from "react-ga";
import "./NotFound.css";

function initializeAnalytics() {
  ReactGA.initialize("UA-171302758-1", {gaOptions: {
    siteSpeedSampleRate: 100
  }});
  ReactGA.pageview('/not-found');
}

export default function NotFound() {
  initializeAnalytics();
  return (
    <div className="NotFound">
      <h2 className="heading">
        Oops! It looks like this page doesn't exist :(
      </h2>
    </div>
  );
}
