const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export default [
  {
    tap: 1,
    dateAdded: new Date("9/02/2021 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Belgian Dubbel",
    description:
      "Raise a pint to the original avalanche dogs, the St. Bernards of Switzerland. Legend has it, they kept a small keg of high ABV beer around their neck to bring hydration and warmth to stranded travelers. Malty, rich, and dry, this beer will warm you up on the snowiest of apres ski days.",
    ibu: 32,
    abv: "8.0%",
    classification: 2,
    imageName: "/images/marzen.png",
  },
  {
    tap: 2,
    dateAdded: new Date("10/01/2022 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Weissbier",
    description:
      "Bananas and cloves with a a medium body to compliment the bannanas. A perfect compliment to summer.",
    ibu: 34,
    abv: "5.0%",
    classification: 0,
    imageName: "/images/weissbier.png",
  },
  {
    tap: 3,
    dateAdded: new Date("10/01/2022 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Berlinerweisse",
    description:
      "Kettle soured and up for anything. Add a dollup of blackberry syrup to bring some fruity/citrusy sweetness to compliment the sour. A great entry level sour if you've never tried one.",
    ibu: 33,
    abv: "5.6%",
    classification: 1,
    imageName: "/images/helles.png",
  },
  {
    tap: 4,
    dateAdded: new Date("9/02/2022 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Dry hopped pilsner",
    description:
      "Made entirely with Skagit Valley malt and then dry hopped with Saaz and Citra hops to give a slight hoppiness to an otherwise clean, classic pilsner. At 4.7% you, you can reach for another with ease.",
    ibu: 27,
    abv: "4.7%",
    classification: 0,
    imageName: "/images/dryHoppedPilsner.png",
  },
  {
    tap: 2,
    dateAdded: new Date("10/01/2022 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Helles lager",
    description:
      "It is like a Pilsner, but slightly lighter with even less hoppiness. They say it is one of the hardest styles of beer to brew because there is nowhere to hide. This one is great. Clean, crisp, and refreshing any time of year.",
    ibu: 21,
    abv: "4.3%",
    classification: 0,
    imageName: "/images/helles.png",
  },
  {
    tap: 3,
    dateAdded: new Date("10/01/2022 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Märzen",
    description:
      "The nod to the classic German Oktoberfest Beer. Malty and dry with a restrained hoppiness that makes this beer dangerously drinkable. That is on purpose. The Germans know a thing or two about how to do that.",
    ibu: 33,
    abv: "5.6%",
    classification: 1,
    imageName: "/images/marzen.png",
  },

];
