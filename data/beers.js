const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export default [
  {
    tap: 1,
    dateAdded: new Date("9/02/2022 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Dry hopped pilsner",
    description:
      "Made entirely with Skagit Valley malt and then dry hopped with Saaz and Citra hops to give a slight hoppiness to an otherwise clean, classic pilsner. At 4.7% you, you can reach for another with ease.",
    ibu: 27,
    abv: 4.7,
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
      "It’s like a Pilsner, but slightly lighter with even less hoppiness. They say it’s one of the hardest styles of beer to brew because there’s nowhere to hide. This one is great. Clean, crisp, and refreshing any time of year.",
    ibu: 21,
    abv: 4.3,
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
      "The nod to the classic German Oktoberfest Beer. Malty and dry with a restrained hoppiness that makes this beer dangerously drinkable. That’s on purpose. The Germans know a thing or two about how to do that.",
    ibu: 33,
    abv: 5.6,
    classification: 1,
    imageName: "/images/marzen.png",
  },
  {
    tap: 4,
    dateAdded: new Date("10/15/2022 5:30:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    title: "Oatmeal stout",
    description:
      "Smooth, chocolaty, with a lingering sweetness. At 6% it’s the beer for all your dark story nights.",
    ibu: 27,
    abv: 4.7,
    classification: 2,
    imageName: "/images/oatmealStout.png",
  },
];
