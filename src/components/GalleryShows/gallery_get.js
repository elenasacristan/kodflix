import ozark from "./images/ozark.jpg";
import tigerKing from "./images/tigerking.jpg";
import moneyHeist from "./images/MoneyHeist.jpg";
import got from "./images/got.jpg";
import breakingBad from "./images/breakingbad.jpg";
import narcos from "./images/narcos.jpg";

export default function arrayTvShows() {
    return (
        [
            {
              id: "Ozark",
              title: "Ozark",
              picture: ozark,
            },
            {
              id: "Tiger_King",
              title: "Tiger King",
              picture: tigerKing,
            },
            {
              id: "Money_Heist",
              title: "Money Heist",
              picture: moneyHeist,
            },
            {
              id: "Game_of_Thrones",
              title: "Game of Thrones",
              picture: got,
            },
            {
              id: "Breaking_Bad",
              title: "Breaking Bad",
              picture: breakingBad,
            },
            {
              id: "Narcos",
              title: "Narcos",
              picture: narcos,
            },
          ]
    )
}


