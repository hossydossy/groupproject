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
    languages: ["Swedish"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/ala.svg",
    description: "The Åland Islands, or Åland, is an autonomous region of Finland. Comprising around 6,700 islands, this Swedish-speaking archipelago is in the Baltic Sea. The capital, Mariehamn, on the main island of Fasta Åland, is known for its beaches and streets lined with 19th-century wooden townhouses, handicraft shops and cafes. Västerhamn, the town's western port, links Åland with Estonia, Sweden and mainland Finland.",
    images: ["ala_01.jpg", "ala_02.jpg", "ala_03.jpg"],
    touristAttractionsImages: ["ala_ta_01.jpg", "ala_ta_02.png"],
    touristAttractionsDescriptions: {
      attraction1: {
        name: "Kastelholm Castle, Sund",
        description1: "Kastelholm Castle in Sund is one of the top attractions in Åland. It’s a medieval castle, built in the 14th century.  This castle was once in the middle of the Kingdom of Sweden where the Swedish ruler Gustav Vasa, among other kings, royals and nobles spent their time.",
        description2: "Open from May until the middle of September.",
        description3: "If your visit falls outside of the season, It’s worth going here just to see the castle from the outside and take some great Instagram photos or shots for your photo album. The surrounding fjord area is really beautiful.",
        description4: "If you really want to see the museum you can book a private visit outside of the season for an extra fee.",
      },
      attraction2: {
        name: "Käringsund, Eckerö",
        description1: "An idyllic archipelago village in Eckerö.  The photograph shows the Baltic Sea, lined with rustic boathouses, reminiscing of a time when fishing was a vital part of Åland life and culture.  This is also the location where scenes from Astrid Lingren’s “Seacrow Island” were recorded in the 1960s.",
        description2: "Worth a visit all year round.",
        description3: "Such a charming place to visit in the summer, you can go swimming, buy ice cream, and enjoy the beach in the warm sum.",
        description4: "Although Käringsund might be deserted in winter, don’t let that stop you. This place is so picturesque, and a must see destination for budding and experiences photographers alike!",
      }
    },
    message: {
      'ok': "Bra Gjort!",
      'wrong': "Det är inte rätt"
    }
  },
  {
    name: "Albania",
    capital: "Tirana",
    latlng: [41,
      20
    ],
    region: "Europe",
    population: 2886026,
    languages: ["Albanian"],
    currency: "Albanian lek",
    flag: "https://restcountries.eu/data/alb.svg",
    description: "Albania, on Southeastern Europe’s Balkan Peninsula, is a small country with Adriatic and Ionian coastlines and an interior crossed by the Albanian Alps. The country has many castles and archaeological sites. Capital Tirana centers on sprawling Skanderbeg Square, site of the National History Museum, with exhibits spanning antiquity to post-communism, and frescoed Et’hem Bey Mosque.",
    images: ["alb_01.jpg", "alab_02.jpg", "alb_03.jpg"],
    touristAttractionsImages: ["alb_ta_01.jpg", "alb_ta_02.jpg"],
    touristAttractionsDescriptions: {
      attraction1: {
        name: "Butrint National Park",
        description1: "Home to a number of diverse ecosystems and stunning archaeological sites, Butrint National Park is a popular tourist destination, in large part due to its proximity to the Greek island of Corfu. Many people come to see its majestic blend of history and nature.",
        description2: "Worth a visit all year round.",
        description3: "The main attraction, however, is the amazing archaeological site which covers over 2,500 years of history; this includes ancient city walls, remnants of a Roman theater, a Byzantine Basilica and two castles.",
        description4: "Wandering around the ruins with the beautiful scenery all around you is a delightful experience. This is undoubtedly one of the hidden gems of what Albania has to offer.",
      },
      attraction2: {
        name: "Shkodra, near Lake Skadar",
        description1: "Lying just a stone’s throw away from huge Lake Skadar that straddles the Montenegro-Albania border, Shkodra is a very pretty city to visit. The Buna River runs through town and the Albanian Alps can be seen off in the distance.",
        description2: "Worth a visit all year round.",
        description3: "Although the center of the city has recently undergone extensive renovations, there are still plenty of lovely old buildings and historic sites to be found, such as the Ebu Beker Mosque and Orthodox Cathedral. The Historical Museum showcases just some of the region’s rich history and heritage.",
        description4: "With so much beautiful countryside surrounding Shkodra for visitors to explore, there is something for everyone to enjoy.",
      },
    },
    message: {
      'ok': "Te lumte!",
      'wrong': "Kjo nuk është e drejtë"
    }
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    latlng: [42.5,
      1.5
    ],
    region: "Europe",
    population: 78014,
    languages: ["Catalan"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/and.svg",
    description: "Andorra is a tiny, independent principality situated between France and Spain in the Pyrenees mountains. It’s known for its ski resorts and a tax-haven status that encourages duty-free shopping. Capital Andorra la Vella has boutiques and jewelers on Meritxell Avenue and several shopping centers. The old quarter, Barri Antic, houses Romanesque Santa Coloma Church, with a circular bell tower.",
    images: ["and_01.jpg", "and_02.jpg", "and_03.jpg"],
    message: {
      'ok': "Ben fet!",
      'wrong': "Això no està bé"
    }
  },
  {
    name: "Austria",
    capital: "Vienna",
    latlng: [47.33333333,
      13.33333333
    ],
    region: "Europe",
    population: 8725931,
    languages: ["German"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/aut.svg",
    description: "Austria, officially the Republic of Austria, is a country in Central Europe comprising nine federated states. Its capital, largest city and one of nine states is Vienna",
    images: ["aut_01.jpg", "aut_02.jpg", "aut_03.jpg"],
    message: {
      'ok': "Gut gemacht!",
      'wrong': "Das ist nicht richtig"
    }
  },
  {
    name: "Belarus",
    capital: "Minsk",
    latlng: [53,
      28
    ],
    region: "Europe",
    population: 9498700,
    languages: ["Russian"],
    currency: "Old Belarusian ruble",
    flag: "https://restcountries.eu/data/blr.svg",
    description: "Belarus, officially the Republic of Belarus, formerly known by its Russian name Byelorussia or Belorussia, is a landlocked country in Eastern Europe bordered by Russia to the northeast, Ukraine to the south, Poland to the west, and Lithuania and Latvia to the northwest. Its capital and most populous city is Minsk",
    images: ["blr_01.jpg", "blr_02.jpg", "blr_03.jpg"],
    message: {
      'ok': "Отлично сработано!",
      'wrong': "это не правильно"
    }
  },
  {
    name: "Belgium",
    capital: "Brussels",
    latlng: [50.83333333,
      4
    ],
    region: "Europe",
    population: 11319511,
    languages: ["Dutch", "French","German"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/bel.svg",
    description: "Belgium, a country in Western Europe, is known for medieval towns, Renaissance architecture and as headquarters of the European Union and NATO. The country has distinctive regions including Dutch-speaking Flanders to the north, French-speaking Wallonia to the south and a German-speaking community to the east. The bilingual capital, Brussels, has ornate guildhalls at Grand-Place and elegant art-nouveau buildings.",
    images: ["bel_01.jpg", "bel_02.jpg", "bel_03.jpg"],
    message: {
      'ok': "Goed gedaan!",
      'wrong': "Dat klopt niet"
    }
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    latlng: [44,
      18
    ],
    region: "Europe",
    population: 3531159,
    languages: ["Bosnian", "Croatian","Serbian"],
    currency: "Bosnia and Herzegovina convertible mark",
    flag: "https://restcountries.eu/data/bih.svg",
    description: "Bosnia and Herzegovina is a country on the Balkan Peninsula in southeastern Europe. Its countryside is home to medieval villages, rivers and lakes, plus the craggy Dinaric Alps. National capital Sarajevo has a well preserved old quarter, Baščaršija, with landmarks like 16th-century Gazi Husrev-bey Mosque. Ottoman-era Latin Bridge is the site of the assassination of Archduke Franz Ferdinand, which ignited World War I",
    images: ["bih_01.jpg", "bih_02.jpg", "bih_03.jpg"],
    message: {
      'ok': "Dobro urađeno!",
      'wrong': "To nije tačno"
    }
  },

  {
    name: "Bulgaria",
    capital: "Sofia",
    latlng: [43,
      25
    ],
    region: "Europe",
    population: 7153784,
    languages: ["Bulgarian"],
    currency: "Bulgarian lev",
    flag: "https://restcountries.eu/data/bgr.svg",
    description: "Bulgaria is a Balkan nation with diverse terrain encompassing Black Sea coastline, a mountainous interior and rivers, including the Danube. A cultural melting pot with Greek, Slavic, Ottoman, and Persian influences, it has a rich heritage of traditional dance, music, costumes, and crafts. At the foot of domed Vitosha mountain is its capital city, Sofia, dating to the 5th century B.C.",
    images: ["bgr_01.jpg", "bgr_02.jpg", "bgr_03.jpg"],
    message: {
      'ok': "Много добре!",
      'wrong': "Това не е правилно"
    }
  },
  {
    name: "Croatia",
    capital: "Zagreb",
    latlng: [45.16666666,
      15.5
    ],
    region: "Europe",
    population: 4190669,
    languages: ["Croatian"],
    currency: "Croatian kuna",
    flag: "https://restcountries.eu/data/hrv.svg",
    description: "Croatia, officially the Republic of Croatia, is a country at the crossroads of Central and Southeast Europe, on the Adriatic Sea. It borders Slovenia to the northwest, Hungary to the northeast, Serbia to the east, Bosnia and Herzegovina, and Montenegro to the southeast, sharing a maritime border with Italy.",
    images: ["hrv_01.jpg", "hrv_02.jpg", "hrv_03.jpg"],
    message: {
      'ok': "Dobro napravljeno!",
      'wrong': "To nije u redu"
    }
  },
  {
    name: "Cyprus",
    capital: "Nicosia",
    latlng: [35,
      33
    ],
    region: "Europe",
    population: 847000,
    languages: ["Greek (modern)"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/cyp.svg",
    description: "Cyprus, officially the Republic of Cyprus, is an island country in the Eastern Mediterranean and the third largest and third most populous island in the Mediterranean, located south of Turkey, west of Syria and Lebanon, northwest of Israel and Palestine, north of Egypt, and southeast of Greece",
    images: ["cyp_01.jpg", "cyp_02.jpg", "cyp_03.jpg"],
    message: {
      'ok': "Μπράβο!",
      'wrong': "Αυτό δεν είναι σωστό"
    }
  },
  {
    name: "Czech Republic",
    capital: "Prague",
    latlng: [49.75,
      15.5
    ],
    region: "Europe",
    population: 10558524,
    languages: ["Czech"],
    currency: "Czech koruna",
    flag: "https://restcountries.eu/data/cze.svg",
    description: "The Czech Republic, also known by its short-form name, Czechia, is a country in Central Europe bordered by Germany to the west, Austria to the south, Slovakia to the east, and Poland to the northeast.",
    images: ["cze_01.jpg", "cze_02.jpg", "cze_03.jpg"],
    message: {
      'ok': "Výborně!",
      'wrong': "To není správné"
    }
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    latlng: [56,
      10
    ],
    region: "Europe",
    population: 5717014,
    languages: ["Danish"],
    currency: "Danish krone",
    flag: "https://restcountries.eu/data/dnk.svg",
    description: "Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands. It's linked to nearby Sweden via the Öresund bridge. Copenhagen, its capital, is home to royal palaces and colorful Nyhavn harbor, plus the Tivoli amusement park and the iconic “Little Mermaid” statue. Odense is writer Hans Christian Andersen’s hometown, with a medieval core of cobbled streets and half-timbered houses",
    images: ["dnk_01.jpg", "dnk_02.jpg", "dnk_03.jpg"],
    message: {
      'ok': "Godt klaret!",
      'wrong': "Det er ikke rigtigt"
    }
  },
  {
    name: "Estonia",
    capital: "Tallinn",
    latlng: [59,
      26
    ],
    region: "Europe",
    population: 1315944,
    languages: ["Estonian"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/est.svg",
    description: "Estonia, a country in Northern Europe, borders the Baltic Sea and Gulf of Finland. Including more than 1,500 islands, its diverse terrain spans rocky beaches, old-growth forest and many lakes. Formerly part of the Soviet Union, it's dotted with castles, churches and hilltop fortresses. The capital, Tallinn, is known for its preserved Old Town, museums and the 314m-high Tallinn TV Tower, which has an observation deck",
    images: ["est_01.jpg", "est_02.jpg", "est_03.jpg"],
    message: {
      'ok': "Hästi tehtud!",
      'wrong': "See ei ole õige"
    }
  },

  {
    name: "Faroe Islands",
    capital: "Tórshavn",
    latlng: [62,
      -7
    ],
    region: "Europe",
    population: 49376,
    languages: ["Danish"],
    currency: "Danish krone",
    flag: "https://restcountries.eu/data/fro.svg",
    description: "The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean, connected by road tunnels, ferries, causeways and bridges. Hikers and bird-watchers are drawn to the islands’ mountains, valleys and grassy heathland, and steep coastal cliffs that harbor thousands of seabirds.",
    images: ["fro_01.jpg", "fro_02.jpg", "fro_03.jpg"],
    message: {
      'ok': "Godt klaret!",
      'wrong': "Det er ikke rigtigt"
    }
  },

  {
    name: "Finland",
    capital: "Helsinki",
    latlng: [64,
      26
    ],
    region: "Europe",
    population: 5491817,
    languages: ["Finnish"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/fin.svg",
    description: "Finland is a Northern European nation bordering Sweden, Norway and Russia. Its capital, Helsinki, occupies a peninsula and surrounding islands in the Baltic Sea. Helsinki is home to the 18th-century sea fortress Suomenlinna, the fashionable Design District and diverse museums. The Northern Lights can be seen from the country's Arctic Lapland province, a vast wilderness with national parks and ski resorts.",
    images: ["fin_01.jpg", "fin_02.jpg", "fin_03.jpg"],
    message: {
      'ok': "Hyvin tehty!",
      'wrong': "Tuo ei ole oikein"
    }
  },

  {
    name: "France",
    capital: "Paris",
    latlng: [46,
      2
    ],
    region: "Europe",
    population: 66710000,
    languages: ["French"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/fra.svg",
    description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.",
    images: ["fra_01.jpg", "fra_02.jpg", "fra_03.jpg"],
    message: {
      'ok': "Bien joué!",
      'wrong': "Ce n'est pas juste"
    }
  },

  {
    name: "Germany",
    capital: "Berlin",
    latlng: [51,
      9
    ],
    region: "Europe",
    population: 81770900,
    languages: ["German"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/deu.svg",
    description: "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.",
    images: ["deu_01.jpg", "deu_02.jpg", "deu_03.jpg"],
    message: {
      'ok': "Gut gemacht!",
      'wrong': "Das ist nicht richtig"
    }
  },

  {
    name: "Gibraltar",
    capital: "Gibraltar",
    latlng: [36.13333333,
      -5.35
    ],
    region: "Europe",
    population: 33140,
    languages: ["English"],
    currency: "Gibraltar pound",
    flag: "https://restcountries.eu/data/gib.svg",
    description: "Gibraltar is a British Overseas Territory and headland, on Spain's south coast. It’s dominated by the Rock of Gibraltar, a 426m-high limestone ridge. First settled by the Moors in the Middle Ages and later ruled by Spain, the outpost was ceded to the British in 1713. Layers of fortifications include the remains of a 14th-century Moorish Castle and the 18th century Great Siege Tunnels, which were expanded in WWII.",
    images: ["gib_01.jpg", "gib_02.jpg", "gib_03.jpg"],
    message: {
      'ok': "Well done",
      'wrong': "That's not correct"
    }
  },

  {
    name: "Greece",
    capital: "Athens",
    latlng: [39,
      22
    ],
    region: "Europe",
    population: 10858018,
    languages: ["Greek (modern)"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/grc.svg",
    description: "Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Greece is also known for its beaches, from the black sands of Santorini to the party resorts of Mykonos",
    images: ["grc_01.jpg", "grc_02.jpg", "grc_03.jpg"],
    message: {
      'ok': "Μπράβο",
      'wrong': "Αυτό δεν είναι σωστό"
    }
  },

  {
    name: "Guernsey",
    capital: "St. Peter Port",
    latlng: [49.46666666,
      -2.58333333
    ],
    region: "Europe",
    population: 62999,
    languages: ["English"],
    currency: "British pound",
    flag: "https://restcountries.eu/data/ggy.svg",
    description: "Guernsey is one of the Channel Islands in the English Channel near the French coast, and is a self-governing British Crown dependency. It's known for beach resorts like Cobo Bay and the scenery of its coastal cliffs. Castle Cornet, a 13th-century harbor fortification in the capital of St. Peter Port, now contains history and military museums. Hauteville House is the lavish former home of French writer, Victor Hugo.",
    images: ["ggy_01.jpg", "ggy_02.jpg", "ggy_03.jpg"],
    message: {
      'ok': "Well done!",
      'wrong': "That's not correct"
    }
  },

  {
    name: "Holy See",
    capital: "Rome",
    latlng: [41.9,
      12.45
    ],
    region: "Europe",
    population: 451,
    languages: ["Italian","Latin", "French", "German"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/vat.svg",
    description: "Vatican City, a city-state surrounded by Rome, Italy, is the headquarters of the Roman Catholic Church. It's home to the Pope and a trove of iconic art and architecture. Its Vatican Museums house ancient Roman sculptures such as the famed “Laocoön and His Sons” as well as Renaissance frescoes in the Raphael Rooms and the Sistine Chapel, famous for Michelangelo’s ceiling.",
    images: ["vat_01.jpg", "vat_02.jpg", "vat_03.jpg"],
    message: {
      'ok': "Molto bene!",
      'wrong': "Questo non è corretto"
    }
  },

  {
    name: "Hungary",
    capital: "Budapest",
    latlng: [47,
      20
    ],
    region: "Europe",
    population: 9823000,
    languages: ["Hungarian"],
    currency: "Hungarian forint",
    flag: "https://restcountries.eu/data/hun.svg",
    description: "Hungary is a landlocked country in Central Europe. Its capital, Budapest, is bisected by the Danube River. Its cityscape is studded with architectural landmarks from Buda’s medieval Castle Hill and grand neoclassical buildings along Pest’s Andrássy Avenue to the 19th-century Chain Bridge. Turkish and Roman influence on Hungarian culture includes the popularity of mineral spas, including at thermal Lake Hévíz.",
    images: ["hun_01.jpg", "hun_02.jpg", "hun_03.jpg"],
    message: {
      'ok': "Szép munka!",
      'wrong': "Ez nem helyes"
    }
  },
  {
    name: "Iceland",
    capital: "Reykjavík",
    latlng: [65,
      -18
    ],
    region: "Europe",
    population: 334300,
    languages: ["Icelandic"],
    currency: "Icelandic króna",
    flag: "https://restcountries.eu/data/isl.svg",
    description: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history.",
    images: ["isl_01.jpg", "isl_02.jpg", "isl_03.jpg"],
    message: {
      'ok': "Vel gert!",
      'wrong': "Það er ekki rétt"
    }
  },
  {
    name: "Ireland",
    capital: "Dublin",
    latlng: [53,
      -8
    ],
    region: "Europe",
    population: 6378000,
    languages: ["English", "Gaeilge"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/irl.svg",
    description: "Ireland is an island in the North Atlantic. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St George's Channel. Ireland is the second-largest island of the British Isles, the third-largest in Europe, and the twentieth-largest on Earth.",
    images: ["irl_01.jpg", "irl_02.jpg", "irl_03.jpg"],
    message: {
      'ok': "Well done!",
      'wrong': "That's not right"
    }
  },
  {
    name: "Isle of Man",
    capital: "Douglas",
    latlng: [54.25,
      -4.5
    ],
    region: "Europe",
    population: 84497,
    languages: ["English", "Manx"],
    currency: "British pound",
    flag: "https://restcountries.eu/data/imn.svg",
    description: "The Isle of Man is a self-governing British Crown dependency in the Irish Sea between England and Ireland. It’s known for its rugged coastline, medieval castles and rural landscape, rising to a mountainous center. In the capital, Douglas, the Manx Museum traces the island’s Celtic and Viking heritage. The Isle of Man TT is a major annual cross-country motorcycle race around the island.",
    images: ["imn_01.jpg", "imn_02.jpg", "imn_03.jpg"],
    message: {
      'ok': "Well done!",
      'wrong': "That's not right"
    }
  },
  {
    name: "Italy",
    capital: "Rome",
    latlng: [42.83333333,
      12.83333333
    ],
    region: "Europe",
    population: 60665551,
    languages: ["Italian"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/ita.svg",
    description: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s 'David' and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital",
    images: ["ita_01.jpg", "ita_02.jpg", "ita_03.jpg"],
    message: {
      'ok': "Molto bene!",
      'wrong': "Questo non è corretto"
    }
  },
  {
    name: "Jersey",
    capital: "Saint Helier",
    latlng: [49.25,
      -2.166666663
    ],
    region: "Europe",
    population: 100800,
    languages: ["English", "French"],
    currency: "Jersey pound",
    flag: "https://restcountries.eu/data/jey.svg",
    description: "Jersey is the largest of the Channel Islands, between England and France. A self-governing dependency of the United Kingdom, with a mix of British and French cultures, it’s known for its beaches, cliffside walking trails, inland valleys and historic castles. The Jersey War Tunnels complex, in a former hospital excavated by slave labor, documents the island’s 5-year German occupation during WWII.",
    images: ["jey_01.jpg", "jey_02.jpg", "jey_03.jpg"],
    message: {
      'ok': "Well done!",
      'wrong': "That's not right"
    }
  },
  {
    name: "Latvia",
    capital: "Riga",
    latlng: [57,
      25
    ],
    region: "Europe",
    population: 1961600,
    languages: ["Latvian"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/lva.svg",
    description: "Latvia is a country on the Baltic Sea between Lithuania and Estonia. Its landscape is marked by wide beaches as well as dense, sprawling forests. Latvia’s capital is Riga, home to notable wooden and art nouveau architecture, a vast Central Market and a medieval Old Town with St. Peter's Church. Riga's museums include the Latvian Ethnographic Open-Air Museum, showcasing local crafts, food and music",
    images: ["lva_01.jpg", "lva_02.jpg", "lva_03.jpg"],
    message: {
      'ok': "Labi padarīts!",
      'wrong': "Tas nav pareizi"
    }
  },
  {
    name: "Liechtenstein",
    capital: "Vaduz",
    latlng: [47.26666666,
      9.53333333
    ],
    region: "Europe",
    population: 37623,
    languages: ["German"],
    currency: "Swiss franc",
    flag: "https://restcountries.eu/data/lie.svg",
    description: "Liechtenstein is a German-speaking, 25km-long principality between Austria and Switzerland. It’s known for its medieval castles, alpine landscapes and villages linked by a network of trails. The capital, Vaduz, a cultural and financial center, is home to Kunstmuseum Liechtenstein, with galleries of modern and contemporary art. The Postmuseum displays Liechtenstein’s postage stamps.",
    images: ["lie_01.jpg", "lie_02.jpg", "lie_03.jpg"],
    message: {
      'ok': "Gut gemacht!",
      'wrong': "Das stimmt nicht"
    }
  },

  {
    name: "Lithuania",
    capital: "Vilnius",
    latlng: [56,
      24
    ],
    region: "Europe",
    population: 2872294,
    languages: ["Lithuanian"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/ltu.svg",
    description: "Lithuania is a country and the southernmost of Europe’s Baltic states, a former Soviet bloc nation bordering Poland, Latvia and Belarus. Its capital, Vilnius, near Belarus' border, is known for its medieval Old Town. It also has Gothic, Renaissance and baroque architecture, and 18th-century cathedral built on a pagan temple site. Hilltop Gediminas' Tower, a symbol of the city and the nation, offers sweeping views.",
    images: ["ltu_01.jpg", "ltu_02.jpg", "ltu_03.jpg"],
    message: {
      'ok': "Šauniai padirbėta!",
      'wrong': "Tai neteisinga"
    }
  },
  {
    name: "Luxembourg",
    capital: "Luxembourg",
    latlng: [49.75,
      6.16666666
    ],
    region: "Europe",
    population: 576200,
    languages: ["French", "German", "Luxembourgish"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/lux.svg",
    description: "Luxembourg is a small European country, surrounded by Belgium, France and Germany. It’s mostly rural, with dense Ardennes forest and nature parks in the north, rocky gorges of the Mullerthal region in the east and the Moselle river valley in the southeast. Its capital, Luxembourg City, is famed for its fortified medieval old town perched on sheer cliffs.",
    images: ["lux_01.jpg", "lux_02.jpg", "lux_03.jpg"],
    message: {
      'ok': "Gut gemacht!",
      'wrong': "Das stimmt nicht"
    }
  },

  {
    name: "Macedonia (the former Yugoslav Republic of)",
    capital: "Skopje",
    latlng: [41.83333333,
      22
    ],
    region: "Europe",
    population: 2058539,
    languages: ["Macedonian"],
    currency: "Macedonian denar",
    flag: "https://restcountries.eu/data/mkd.svg",
    description: "Macedonia, officially the Republic of North Macedonia, is a country in the Balkan Peninsula in Southeast Europe. It is one of the successor states of Yugoslavia, from which it declared independence in September 1991 under the name Republic of Macedonia",
    images: ["mkd_01.jpg", "mkd_02.jpg", "mkd_03.jpg"],
    message: {
      'ok': "Добро сторено!",
      'wrong': "Не е така"
    }
  },
  {
    name: "Malta",
    capital: "Valletta",
    latlng: [35.83333333,
      14.58333333
    ],
    region: "Europe",
    population: 425384,
    languages: ["Maltese"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/mlt.svg",
    description: "Malta is an archipelago in the central Mediterranean between Sicily and the North African coast. It's a nation known for historic sites related to a succession of rulers including the Romans, Moors, Knights of Saint John, French and British. It has numerous fortresses, megalithic temples and the Ħal Saflieni Hypogeum, a subterranean complex of halls and burial chambers dating to circa 4000 B.C",
    images: ["mlt_01.jpg", "mlt_02.jpg", "mlt_03.jpg"],
    message: {
      'ok': "Proset!",
      'wrong': "Mhux sew"
    }
  },

  {
    name: "Moldova (Republic of)",
    capital: "Chișinău",
    latlng: [47,
      29
    ],
    region: "Europe",
    population: 3553100,
    languages: ["Romanian"],
    currency: "Moldovan leu",
    flag: "https://restcountries.eu/data/mda.svg",
    description: "Moldova, an Eastern European country and former Soviet republic, has varied terrain including forests, rocky hills and vineyards. Its wine regions include Nistreana, known for reds, and Codru, home to some of the world’s largest cellars. Capital Chișinău has Soviet-style architecture and the National Museum of History, exhibiting art and ethnographic collections that reflect cultural links with neighboring Romania.",
    images: ["mda_01.jpg", "mda_02.jpg", "mda_03.jpg"],
    message: {
      'ok': "Foarte bine!",
      'wrong': "Nu este corect"
    }
  },

  {
    name: "Monaco",
    capital: "Monaco",
    latlng: [43.73333333,
      7.4
    ],
    region: "Europe",
    population: 38400,
    languages: ["French"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/mco.svg",
    description: "Monaco, officially the Principality of Monaco, is a sovereign city-state, country, and microstate on the French Riviera in Western Europe. France borders the country on three sides while the other side borders the Mediterranean Sea. Monaco is about 15 km from the state border with Italy.",
    images: ["mco_01.jpg", "mco_02.jpg", "mco_03.jpg"],
    message: {
      'ok': "Foarte bine!",
      'wrong': "Nu este corect"
    }
  },

  {
    name: "Montenegro",
    capital: "Podgorica",
    latlng: [42.5,
      19.3
    ],
    region: "Europe",
    population: 621810,
    languages: ["Serbian", "Bosnian", "Albanian", "Croatian"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/mne.svg",
    description: "Montenegro is a Balkan country with rugged mountains, medieval villages and a narrow strip of beaches along its Adriatic coastline. The Bay of Kotor, resembling a fjord, is dotted with coastal churches and fortified towns such as Kotor and Herceg Novi. Durmitor National Park, home to bears and wolves, encompasses limestone peaks, glacial lakes and 1,300m-deep Tara River Canyon.",
    images: ["mne_01.jpg", "mne_02.jpg", "mne_03.jpg"],
    message: {
      'ok': "Bien joué!",
      'wrong': "Ce n'est pas correct"
    }
  },
  {
    name: "Netherlands",
    capital: "Amsterdam",
    latlng: [52.5,
      5.75
    ],
    region: "Europe",
    population: 17019800,
    languages: ["Dutch"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/nld.svg",
    description: "The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII. Canalside mansions and a trove of works from artists including Rembrandt and Vermeer remain from the city's 17th-century Golden Age.",
    images: ["nld_01.jpg", "nld_02.jpg", "nld_03.jpg"],
    message: {
      'ok': "Goed gedaan!",
      'wrong': "Dat is niet goed"
    }
  },
  {
    name: "Norway",
    capital: "Oslo",
    latlng: [62,
      10
    ],
    region: "Europe",
    population: 5223256,
    languages: ["Norwegian"],
    currency: "Norwegian krone",
    flag: "https://restcountries.eu/data/nor.svg",
    description: "Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums. Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing, notably at Lillehammer’s Olympic resort.",
    images: ["nor_01.jpg", "nor_02.jpg", "nor_03.jpg"],
    message: {
      'ok': "Bra gjort!",
      'wrong': "Det er ikke riktig"
    }
  },
  {
    name: "Poland",
    capital: "Warsaw",
    latlng: [52,
      20
    ],
    region: "Europe",
    population: 38437239,
    languages: ["Polish"],
    currency: "Polish złoty",
    flag: "https://restcountries.eu/data/pol.svg",
    description: "Poland, officially the Republic of Poland, is a country located in Central Europe. It is divided into 16 administrative subdivisions, covering an area of 312,696 square kilometres, and has a largely temperate seasonal climate",
    images: ["pol_01.jpg", "pol_02.jpg", "pol_03.jpg"],
    message: {
      'ok': "Dobra robota!",
      'wrong': "To nie jest poprawne"
    }
  },
  {
    name: "Portugal",
    capital: "Lisbon",
    latlng: [39.5,
      -8
    ],
    region: "Europe",
    population: 10374822,
    languages: ["Portuguese"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/prt.svg",
    description: "Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve's beaches are a major destination and much of the nation’s architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire.",
    images: ["prt_01.jpg", "prt_02.jpg", "prt_03.jpg"],
    message: {
      'ok': "Bem feito!",
      'wrong': "Isso não está certo"
    }
  },

  {
    name: "Republic of Kosovo",
    capital: "Pristina",
    latlng: [42.666667,
      21.166667
    ],
    region: "Europe",
    population: 1733842,
    languages:[ "Albanian", "Serbian"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/kos.svg",
    description: "Kosovo, officially the Republic of Kosovo, is a partially recognized state and disputed territory in Southeastern Europe",
    images: ["kos_01.jpg", "kos_02.jpg", "kos_03.jpg"],
    message: {
      'ok': "Добро урађено!",
      'wrong': "То није у реду"
    }
  },

  {
    name: "Romania",
    capital: "Bucharest",
    latlng: [46,
      25
    ],
    region: "Europe",
    population: 19861408,
    languages: ["Romanian"],
    currency: "Romanian leu",
    flag: "https://restcountries.eu/data/rou.svg",
    description: "Romania is a southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains. Its preserved medieval towns include Sighişoara, and there are many fortified churches and castles, notably clifftop Bran Castle, long associated with the Dracula legend. Bucharest, the country’s capital, is the site of the gigantic, Communist-era Palatul Parlamentului government building",
    images: ["rou_01.jpg", "rou_02.jpg", "rou_03.jpg"],
    message: {
      'ok': "Foarte bine!",
      'wrong': "Nu este corect"
    }
  },

  {
    name: "Russian Federation",
    capital: "Moscow",
    latlng: [60,
      100
    ],
    region: "Europe",
    population: 146599183,
    languages: ["Russian"],
    currency: "Russian ruble",
    flag: "https://restcountries.eu/data/rus.svg",
    description: "Russia, or the Russian Federation, is a transcontinental country in Eastern Europe and North Asia. At 17,125,200 square kilometres, it is, by a considerable margin, the largest country in the world",
    images: ["rus_01.jpg", "rus_02.jpg", "rus_03.jpg"],
    message: {
      'ok': "Отлично сработано!",
      'wrong': "Это неправильно"
    }
  },

  {
    name: "San Marino",
    capital: "City of San Marino",
    latlng: [43.76666666,
      12.41666666
    ],
    region: "Europe",
    population: 33005,
    languages: ["Italian"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/smr.svg",
    description: "San Marino is a mountainous microstate surrounded by north-central Italy. Among the world’s oldest republics, it retains much of its historic architecture. On the slopes of Monte Titano sits the capital, also called San Marino, known for its medieval walled old town and narrow cobblestone streets. The Three Towers, castlelike citadels dating to the 11th century, sit atop Titano’s neighboring peaks",
    images: ["smr_01.jpg", "smr_02.jpg", "smr_03.jpg"],
    message: {
      'ok': "Molto bene!",
      'wrong': "Questo non è corretto"
    }
  },

  {
    name: "Serbia",
    capital: "Belgrade",
    latlng: [44,
      21
    ],
    region: "Europe",
    population: 7076372,
    languages:[ "Serbian"],
    currency: "Serbian dinar",
    flag: "https://restcountries.eu/data/srb.svg",
    description: "Serbia, officially the Republic of Serbia, is a country situated at the crossroads of Central and Southeast Europe in the southern Pannonian Plain and the central Balkans",
    images: ["srb_01.jpg", "srb_02.jpg", "srb_03.jpg"],
    message: {
      'ok': "Добро урађено!",
      'wrong': "То није у ред"
    }
  },

  {
    name: "Slovakia",
    capital: "Bratislava",
    latlng: [48.66666666,
      19.5
    ],
    region: "Europe",
    population: 5426252,
    languages: ["Slovak"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/svk.svg",
    description: "Slovakia, officially the Slovak Republic, is a landlocked country in Central Europe. It is bordered by Poland to the north, Ukraine to the east, Hungary to the south, Austria to the west, and the Czech Republic to the northwest. Slovakia's territory spans about 49,000 square kilometres and is mostly mountainou",
    images: ["svk_01.jpg", "svk_02.jpg", "svk_03.jpg"],
    message: {
      'ok': "Výborne!",
      'wrong': "To nie je správne"
    }
  },

  {
    name: "Slovenia",
    capital: "Ljubljana",
    latlng: [46.11666666,
      14.81666666
    ],
    region: "Europe",
    population: 2064188,
    languages: ["Slovene"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/svn.svg",
    description: "Slovenia, a country in Central Europe, is known for its mountains, ski resorts and lakes. On Lake Bled, a glacial lake fed by hot springs, the town of Bled contains a church-topped islet and a cliffside medieval castle. In Ljubljana, Slovenia’s capital, baroque facades mix with the 20th-century architecture of native Jože Plečnik, whose iconic Tromostovje (Triple Bridge) spans the tightly curving Ljubljanica River.",
    images: ["svn_01.jpg", "svn_02.jpg", "svn_03.jpg"],
    message: {
      'ok': "Dobro opravljeno!",
      'wrong': "To ni v redu"
    }
  },

  {
    name: "Spain",
    capital: "Madrid",
    latlng: [40,
      -4
    ],
    region: "Europe",
    population: 46438422,
    languages: ["Spanish"],
    currency: "Euro",
    flag: "https://restcountries.eu/data/esp.svg",
    description: "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.",
    images: ["esp_01.jpg", "esp_02.jpg", "esp_03.jpg"],
    message: {
      'ok': "Bien hecho!",
      'wrong': "Incorrecto "
    }
  },
  {
    name: "Sweden",
    capital: "Stockholm",
    latlng: [62,
      15
    ],
    region: "Europe",
    population: 9894888,
    languages: ["Swedish"],
    currency: "Swedish krona",
    flag: "https://restcountries.eu/data/swe.svg",
    description: "Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains. Its principal cities, eastern capital Stockholm and southwestern Gothenburg and Malmö, are all coastal. Stockholm is built on 14 islands. It has more than 50 bridges, as well as the medieval old town, Gamla Stan, royal palaces and museums such as open-air Skansen",
    images: ["swe_01.jpg", "swe_02.jpg", "swe_03.jpg"],
    message: {
      'ok': "Bra gjort!",
      'wrong': "Det är inte rätt"
    }
  },

  {
    name: "Switzerland",
    capital: "Bern",
    latlng: [47,
      8
    ],
    region: "Europe",
    population: 8341600,
    languages: ["German", "French", "Italian"],
    currency: "Swiss franc",
    flag: "https://restcountries.eu/data/che.svg",
    description: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.",
    images: ["che_01.jpg", "che_02.jpg", "che_03.jpg"],
    message: {
      'ok': "Gut gemacht!",
      'wrong': "Das ist nicht richtig"
    }
  },

  {
    name: "Ukraine",
    capital: "Kiev",
    latlng: [49,
      32
    ],
    region: "Europe",
    population: 42692393,
    languages: ["Ukrainian hryvnia"],
    currency: "Swiss franc",
    flag: "https://restcountries.eu/data/ukr.svg",
    description: "Ukraine is a large country in Eastern Europe known for its Orthodox churches, Black Sea coastline and forested mountains. Its capital, Kiev, features the gold-domed St. Sophia's Cathedral, with 11th-century mosaics and frescoes. Overlooking the Dnieper River is the Kiev Pechersk Lavra monastery complex, a Christian pilgrimage site housing Scythian tomb relics and catacombs containing mummified Orthodox monks.",
    images: ["ukr_01.jpg", "ukr_02.jpg", "ukr_03.jpg"],
    message: {
      'ok': "Молодці!",
      'wrong': "Це не правильно"
    }
  },

  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    latlng: [54,
      -2
    ],
    region: "Europe",
    population: 65110000,
    languages: ["English"],
    currency: "British pound",
    flag: "https://restcountries.eu/data/gbr.svg",
    description: "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge.",
    images: ["gbr_01.jpg", "gbr_02.jpg", "gbr_03.jpg"],
    message: {
      'ok': "Well done!",
      'wrong': "That's not right"
    }
  }
]);
