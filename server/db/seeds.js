use countries;
db.dropDatabase();

db.countries_details.insertMany([
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    latlng: [60.116667,
      19.9
    ],
    region: "Europe",
    population: 28875,
    language: "Swedish",
    flag: "https://restcountries.eu/data/ala.svg",
    image: ["ala_01.jpg", "ala_02.jpg", "ala_03.jpg"],
    message: ["Bra Gjort! 😊", "Det är inte rätt 😕"]
  },

  {
    name: "Albania",
    capital: "Tirana",
    latlng: [41,
      20
    ],
    region: "Europe",
    population: 2886026,
    language: "Albanian",
    flag: "https://restcountries.eu/data/alb.svg",
    image: ["alb_01.jpg", "alab_02.jpg", "alb_03.jpg"],
    message: ["Te Lumte! 😊", "Kjo nuk është e drejtë 😕"]

  },

  {
    name: "Andorra",
    capital: "Andorra la Vella",
    latlng: [42.5,
      1.5
    ],
    region: "Europe",
    population: 78014,
    language: "Catalan",
    flag: "https://restcountries.eu/data/and.svg",
    image: ["and_01.jpg", "and_02.jpg", "and_03.jpg"],
    message: ["Ben Fet! 😊", "Això no està bé 😕"]
  },

  {
    name: "Austria",
    capital: "Vienna",
    latlng: [47.33333333,
      13.33333333
    ],
    region: "Europe",
    population: 8725931,
    language: "",
    flag: "https://restcountries.eu/data/and.svg",
    image: ["and_01.jpg", "and_02.jpg", "and_03.jpg"],
    message: ["Ben Fet! 😊", "Això no està bé 😕"]
  },



]);
