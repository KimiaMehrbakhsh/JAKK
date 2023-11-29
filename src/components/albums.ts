export interface Album {
  name: string;
  artist: Artist;
  cover: Cover[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": object;
}

export interface Cover {
  size: string;
  "#text": string;
}

export interface Artist {
  url: string;
  name: string;
  mbid: string;
}

export const Albums: Album[] = [
  {
    artist: {
      url: "https://www.last.fm/music/Phoebe+Bridgers",
      name: "Phoebe Bridgers",
      mbid: "96855c21-b832-4366-ba12-0d2330c36a86",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/4e31f6b52ff52b99a93650badd19b2c5.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/4e31f6b52ff52b99a93650badd19b2c5.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/4e31f6b52ff52b99a93650badd19b2c5.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/4e31f6b52ff52b99a93650badd19b2c5.jpg",
      },
    ],
    mbid: "02ebd58b-2e50-4f02-9191-795d7fdc6295",
    url: "https://www.last.fm/music/Phoebe+Bridgers/Punisher",
    playcount: "1148",
    "@attr": { rank: "1" },
    name: "Punisher",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Phoebe+Bridgers",
      name: "Phoebe Bridgers",
      mbid: "96855c21-b832-4366-ba12-0d2330c36a86",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/531bdb172f66ee3500e344936f1f22bd.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/531bdb172f66ee3500e344936f1f22bd.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/531bdb172f66ee3500e344936f1f22bd.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/531bdb172f66ee3500e344936f1f22bd.jpg",
      },
    ],
    mbid: "2b4862c2-bac0-4320-b65d-1daae210425a",
    url: "https://www.last.fm/music/Phoebe+Bridgers/Stranger+in+the+Alps",
    playcount: "921",
    "@attr": { rank: "2" },
    name: "Stranger in the Alps",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Alex+G",
      name: "Alex G",
      mbid: "7df4c4de-3181-4a69-bd36-9d663970cebb",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/0b8520054cfd8af493b44a8bed0a2361.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/0b8520054cfd8af493b44a8bed0a2361.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/0b8520054cfd8af493b44a8bed0a2361.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/0b8520054cfd8af493b44a8bed0a2361.jpg",
      },
    ],
    mbid: "141c833b-c3c4-4e12-8157-bf54356c264e",
    url: "https://www.last.fm/music/Alex+G/TRICK",
    playcount: "812",
    "@attr": { rank: "3" },
    name: "TRICK",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Peach+Pit",
      name: "Peach Pit",
      mbid: "1888892a-06b7-4bbd-b0a1-3ffde01e4094",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/13d604e0980e3c3aa9a06ab413a89bdd.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/13d604e0980e3c3aa9a06ab413a89bdd.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/13d604e0980e3c3aa9a06ab413a89bdd.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/13d604e0980e3c3aa9a06ab413a89bdd.png",
      },
    ],
    mbid: "9cbd294c-2979-49e8-8c48-210c3fb983e3",
    url: "https://www.last.fm/music/Peach+Pit/Being+so+Normal",
    playcount: "631",
    "@attr": { rank: "4" },
    name: "Being so Normal",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Car+Seat+Headrest",
      name: "Car Seat Headrest",
      mbid: "0fabbc1d-8d94-4a61-bd1d-1099ad1e4559",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/4a18569943f34ae2a025c6ceabe3ed6c.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/4a18569943f34ae2a025c6ceabe3ed6c.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/4a18569943f34ae2a025c6ceabe3ed6c.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/4a18569943f34ae2a025c6ceabe3ed6c.png",
      },
    ],
    mbid: "09ac6b9a-dbb1-4cb4-bc3b-d50ca0e07c0f",
    url: "https://www.last.fm/music/Car+Seat+Headrest/Twin+Fantasy",
    playcount: "614",
    "@attr": { rank: "5" },
    name: "Twin Fantasy",
  },
  {
    artist: {
      url: "https://www.last.fm/music/American+Football",
      name: "American Football",
      mbid: "4ebb5ad3-9018-407d-8c24-c03011ab9ac6",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/e12967be3bb0700cabd15b22754ec0b2.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/e12967be3bb0700cabd15b22754ec0b2.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/e12967be3bb0700cabd15b22754ec0b2.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/e12967be3bb0700cabd15b22754ec0b2.jpg",
      },
    ],
    mbid: "090bd7dc-2ec3-46cc-afa1-edc7dc40b94b",
    url: "https://www.last.fm/music/American+Football/American+Football",
    playcount: "605",
    "@attr": { rank: "6" },
    name: "American Football",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Frankie+Cosmos",
      name: "Frankie Cosmos",
      mbid: "e49dd402-2297-4192-a359-48b233d39cd4",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/d17556e760a60be31f6d1c1f80c31237.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/d17556e760a60be31f6d1c1f80c31237.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d17556e760a60be31f6d1c1f80c31237.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/d17556e760a60be31f6d1c1f80c31237.jpg",
      },
    ],
    mbid: "966b4ecd-9fd9-4fbb-9f52-8fc345ec08eb",
    url: "https://www.last.fm/music/Frankie+Cosmos/Next+Thing",
    playcount: "598",
    "@attr": { rank: "7" },
    name: "Next Thing",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Pinegrove",
      name: "Pinegrove",
      mbid: "871fe26f-544d-4275-a5dd-af5442d15b92",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/5e88fd01eb1efac7b3735be27617469a.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/5e88fd01eb1efac7b3735be27617469a.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/5e88fd01eb1efac7b3735be27617469a.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/5e88fd01eb1efac7b3735be27617469a.png",
      },
    ],
    mbid: "5f26f199-53d4-481f-9285-c5a447486938",
    url: "https://www.last.fm/music/Pinegrove/Everything+So+Far",
    playcount: "566",
    "@attr": { rank: "8" },
    name: "Everything So Far",
  },
  {
    artist: {
      url: "https://www.last.fm/music/The+Strokes",
      name: "The Strokes",
      mbid: "f181961b-20f7-459e-89de-920ef03c7ed0",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/80f256e56b1043cdbb99da3ac4dd69a0.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/80f256e56b1043cdbb99da3ac4dd69a0.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/80f256e56b1043cdbb99da3ac4dd69a0.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/80f256e56b1043cdbb99da3ac4dd69a0.png",
      },
    ],
    mbid: "05f9032d-fda8-4ce6-99a5-fdd0fc8af8ee",
    url: "https://www.last.fm/music/The+Strokes/Is+This+It",
    playcount: "535",
    "@attr": { rank: "9" },
    name: "Is This It",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Wallows",
      name: "Wallows",
      mbid: "9fae44ec-b95c-4b0f-a0a6-f0008613eabf",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/ded366c8a5919f4e55999762079e4c7a.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/ded366c8a5919f4e55999762079e4c7a.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/ded366c8a5919f4e55999762079e4c7a.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/ded366c8a5919f4e55999762079e4c7a.jpg",
      },
    ],
    mbid: "0fb82677-d54d-45b2-ab74-0b5daf5d5f2a",
    url: "https://www.last.fm/music/Wallows/Nothing+Happens",
    playcount: "532",
    "@attr": { rank: "10" },
    name: "Nothing Happens",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Snail+Mail",
      name: "Snail Mail",
      mbid: "86cd4d38-857c-42bd-a5da-9acedcab1e01",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/e1d65597bfda65e169002bafc34bf933.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/e1d65597bfda65e169002bafc34bf933.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/e1d65597bfda65e169002bafc34bf933.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/e1d65597bfda65e169002bafc34bf933.jpg",
      },
    ],
    mbid: "1ca103e0-ddca-4d71-8c7e-1edab93c7fd1",
    url: "https://www.last.fm/music/Snail+Mail/Lush",
    playcount: "507",
    "@attr": { rank: "11" },
    name: "Lush",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Radiohead",
      name: "Radiohead",
      mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/8d91b7dd13084606b99d756175917f7d.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/8d91b7dd13084606b99d756175917f7d.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/8d91b7dd13084606b99d756175917f7d.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/8d91b7dd13084606b99d756175917f7d.png",
      },
    ],
    mbid: "1475431a-cfd3-43ad-bf09-b3826118446f",
    url: "https://www.last.fm/music/Radiohead/In+Rainbows",
    playcount: "501",
    "@attr": { rank: "12" },
    name: "In Rainbows",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Duster",
      name: "Duster",
      mbid: "",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/5313a74c73ebef3c9d2bb6d3ccf4337f.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/5313a74c73ebef3c9d2bb6d3ccf4337f.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/5313a74c73ebef3c9d2bb6d3ccf4337f.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/5313a74c73ebef3c9d2bb6d3ccf4337f.jpg",
      },
    ],
    mbid: "79acc86e-b12b-4a4a-ad7d-7c9f928438a3",
    url: "https://www.last.fm/music/Duster/Stratosphere",
    playcount: "499",
    "@attr": { rank: "13" },
    name: "Stratosphere",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Current+Joys",
      name: "Current Joys",
      mbid: "",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/3668a275467fc56cdde8d477593a6a62.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/3668a275467fc56cdde8d477593a6a62.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/3668a275467fc56cdde8d477593a6a62.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/3668a275467fc56cdde8d477593a6a62.jpg",
      },
    ],
    mbid: "53bbb2b4-6ffc-4791-8817-6cf9e2943f25",
    url: "https://www.last.fm/music/Current+Joys/Wild+Heart",
    playcount: "491",
    "@attr": { rank: "14" },
    name: "Wild Heart",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Big+Thief",
      name: "Big Thief",
      mbid: "9f81247f-7f57-42f3-a8ba-75bef554e591",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/140fbd4e75078c59a9a1552a8dfd1d85.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/140fbd4e75078c59a9a1552a8dfd1d85.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/140fbd4e75078c59a9a1552a8dfd1d85.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/140fbd4e75078c59a9a1552a8dfd1d85.jpg",
      },
    ],
    mbid: "03d4a952-14a7-4bb6-b1a6-41d5277a4ca0",
    url: "https://www.last.fm/music/Big+Thief/Masterpiece",
    playcount: "450",
    "@attr": { rank: "15" },
    name: "Masterpiece",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Mitski",
      name: "Mitski",
      mbid: "fa58cf24-0e44-421d-8519-8bf461dcfaa5",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/48b1e85daff0afa738996e8f7737f1ef.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/48b1e85daff0afa738996e8f7737f1ef.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/48b1e85daff0afa738996e8f7737f1ef.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/48b1e85daff0afa738996e8f7737f1ef.jpg",
      },
    ],
    mbid: "011217e8-07b5-4642-bb20-82e8ce8ffac0",
    url: "https://www.last.fm/music/Mitski/bury+me+at+makeout+creek",
    playcount: "450",
    "@attr": { rank: "16" },
    name: "bury me at makeout creek",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Clairo",
      name: "Clairo",
      mbid: "d786f59b-1836-4ddb-8393-ab753edbe984",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/d2389b806dd5061b6a75e360c4c46c88.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/d2389b806dd5061b6a75e360c4c46c88.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d2389b806dd5061b6a75e360c4c46c88.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/d2389b806dd5061b6a75e360c4c46c88.jpg",
      },
    ],
    mbid: "ad6e1e59-6b26-4476-a9bd-70dcb13684de",
    url: "https://www.last.fm/music/Clairo/Immunity",
    playcount: "442",
    "@attr": { rank: "17" },
    name: "Immunity",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Black+Country,+New+Road",
      name: "Black Country, New Road",
      mbid: "e9403d9c-329b-4108-a26f-564159d441d9",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/3332b3cee5de8598dbd080f8e2783f93.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/3332b3cee5de8598dbd080f8e2783f93.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/3332b3cee5de8598dbd080f8e2783f93.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/3332b3cee5de8598dbd080f8e2783f93.jpg",
      },
    ],
    mbid: "0788e1b9-d989-4a8f-9a9a-244d6338f014",
    url: "https://www.last.fm/music/Black+Country,+New+Road/Ants+From+Up+There",
    playcount: "431",
    "@attr": { rank: "18" },
    name: "Ants From Up There",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Frank+Ocean",
      name: "Frank Ocean",
      mbid: "e520459c-dff4-491d-a6e4-c97be35e0044",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/d204f358ae4063561370b9dc7c0cb8ca.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/d204f358ae4063561370b9dc7c0cb8ca.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d204f358ae4063561370b9dc7c0cb8ca.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/d204f358ae4063561370b9dc7c0cb8ca.jpg",
      },
    ],
    mbid: "08f54f68-7c89-4e22-8a0f-ac2b06e48568",
    url: "https://www.last.fm/music/Frank+Ocean/Blonde",
    playcount: "427",
    "@attr": { rank: "19" },
    name: "Blonde",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Mac+DeMarco",
      name: "Mac DeMarco",
      mbid: "f2492c31-54a8-4347-a1fc-f81f72873bbf",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/0fd4ea33ee02465cc66904460ee8e91d.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/0fd4ea33ee02465cc66904460ee8e91d.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/0fd4ea33ee02465cc66904460ee8e91d.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/0fd4ea33ee02465cc66904460ee8e91d.png",
      },
    ],
    mbid: "13920435-8a44-4e45-b35e-57b08ba9d1f5",
    url: "https://www.last.fm/music/Mac+DeMarco/2",
    playcount: "400",
    "@attr": { rank: "20" },
    name: "2",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Peach+Pit",
      name: "Peach Pit",
      mbid: "1888892a-06b7-4bbd-b0a1-3ffde01e4094",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/cbc2a881ef2136e1ba9bdd03df5d37ba.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/cbc2a881ef2136e1ba9bdd03df5d37ba.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/cbc2a881ef2136e1ba9bdd03df5d37ba.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/cbc2a881ef2136e1ba9bdd03df5d37ba.jpg",
      },
    ],
    mbid: "4fd790d4-6147-4e9d-9933-59fc15488b5f",
    url: "https://www.last.fm/music/Peach+Pit/You+and+Your+Friends",
    playcount: "397",
    "@attr": { rank: "21" },
    name: "You and Your Friends",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Mac+DeMarco",
      name: "Mac DeMarco",
      mbid: "f2492c31-54a8-4347-a1fc-f81f72873bbf",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/b6cc7efcf8c694136846f0b3af0b7984.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/b6cc7efcf8c694136846f0b3af0b7984.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/b6cc7efcf8c694136846f0b3af0b7984.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/b6cc7efcf8c694136846f0b3af0b7984.jpg",
      },
    ],
    mbid: "407e5dad-7709-41b9-8ef4-6addb3b5776e",
    url: "https://www.last.fm/music/Mac+DeMarco/This+Old+Dog",
    playcount: "394",
    "@attr": { rank: "22" },
    name: "This Old Dog",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Car+Seat+Headrest",
      name: "Car Seat Headrest",
      mbid: "0fabbc1d-8d94-4a61-bd1d-1099ad1e4559",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/d604c0010c0c839da18d8c51b708df48.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/d604c0010c0c839da18d8c51b708df48.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d604c0010c0c839da18d8c51b708df48.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/d604c0010c0c839da18d8c51b708df48.png",
      },
    ],
    mbid: "0f46ffb8-36e6-4a0e-9ac6-beda6d5eacb1",
    url: "https://www.last.fm/music/Car+Seat+Headrest/Teens+of+Denial",
    playcount: "390",
    "@attr": { rank: "23" },
    name: "Teens of Denial",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Alex+G",
      name: "Alex G",
      mbid: "7df4c4de-3181-4a69-bd36-9d663970cebb",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/03337c9410154aa74af1e6b23bafa085.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/03337c9410154aa74af1e6b23bafa085.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/03337c9410154aa74af1e6b23bafa085.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/03337c9410154aa74af1e6b23bafa085.jpg",
      },
    ],
    mbid: "6299f2e7-11d9-4cce-8aff-855a38d91408",
    url: "https://www.last.fm/music/Alex+G/RACE",
    playcount: "386",
    "@attr": { rank: "24" },
    name: "RACE",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Faye+Webster",
      name: "Faye Webster",
      mbid: "ce4a1c08-6912-423f-bf6c-97ce69f5e89f",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/35e9b2ecc01ae64ee0c569b4668d01f0.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/35e9b2ecc01ae64ee0c569b4668d01f0.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/35e9b2ecc01ae64ee0c569b4668d01f0.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/35e9b2ecc01ae64ee0c569b4668d01f0.jpg",
      },
    ],
    mbid: "50dd41c7-202b-45ed-94fc-34ce8f45edea",
    url: "https://www.last.fm/music/Faye+Webster/Atlanta+Millionaires+Club",
    playcount: "376",
    "@attr": { rank: "25" },
    name: "Atlanta Millionaires Club",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Haley+Heynderickx",
      name: "Haley Heynderickx",
      mbid: "f0805df4-1541-48b1-8482-4c789f83cfcf",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/1876f9f91df57eece4e55bb3c9365574.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/1876f9f91df57eece4e55bb3c9365574.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/1876f9f91df57eece4e55bb3c9365574.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/1876f9f91df57eece4e55bb3c9365574.jpg",
      },
    ],
    mbid: "4b1a2fd9-856e-4331-aaab-5376c096892a",
    url: "https://www.last.fm/music/Haley+Heynderickx/I+Need+to+Start+a+Garden",
    playcount: "375",
    "@attr": { rank: "26" },
    name: "I Need to Start a Garden",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Sufjan+Stevens",
      name: "Sufjan Stevens",
      mbid: "01d3c51b-9b98-418a-8d8e-37f6fab59d8c",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/7568c8fa48cc4fb6cf688fe89161f8a5.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/7568c8fa48cc4fb6cf688fe89161f8a5.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/7568c8fa48cc4fb6cf688fe89161f8a5.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/7568c8fa48cc4fb6cf688fe89161f8a5.png",
      },
    ],
    mbid: "395152c9-1ba2-4c44-80ab-5d1488818344",
    url: "https://www.last.fm/music/Sufjan+Stevens/Carrie+&+Lowell",
    playcount: "375",
    "@attr": { rank: "27" },
    name: "Carrie & Lowell",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Alex+G",
      name: "Alex G",
      mbid: "7df4c4de-3181-4a69-bd36-9d663970cebb",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/4818ff3977c24fe3cfbe50c0f6a91e41.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/4818ff3977c24fe3cfbe50c0f6a91e41.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/4818ff3977c24fe3cfbe50c0f6a91e41.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/4818ff3977c24fe3cfbe50c0f6a91e41.jpg",
      },
    ],
    mbid: "0cc715b2-e579-4da1-b402-d03bc9a08f66",
    url: "https://www.last.fm/music/Alex+G/DSU",
    playcount: "371",
    "@attr": { rank: "28" },
    name: "DSU",
  },
  {
    artist: {
      url: "https://www.last.fm/music/TV+Girl",
      name: "TV Girl",
      mbid: "38f0c7ac-46eb-49ca-b3ab-c785ccd05a60",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/4f091d5082e04691c6d7f4b2e2efbdc0.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/4f091d5082e04691c6d7f4b2e2efbdc0.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/4f091d5082e04691c6d7f4b2e2efbdc0.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/4f091d5082e04691c6d7f4b2e2efbdc0.jpg",
      },
    ],
    mbid: "e461c1b4-4eb5-46c2-8eb1-1b29e1befdf4",
    url: "https://www.last.fm/music/TV+Girl/French+Exit",
    playcount: "371",
    "@attr": { rank: "29" },
    name: "French Exit",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Neutral+Milk+Hotel",
      name: "Neutral Milk Hotel",
      mbid: "a506f761-2c22-4b2f-8a94-bd748c2c8f75",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/d95051e07a714889c8f7fbbccf61bf8b.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/d95051e07a714889c8f7fbbccf61bf8b.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d95051e07a714889c8f7fbbccf61bf8b.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/d95051e07a714889c8f7fbbccf61bf8b.jpg",
      },
    ],
    mbid: "023fcf90-dca7-4a4e-a4e2-ed0eaba78f9e",
    url: "https://www.last.fm/music/Neutral+Milk+Hotel/In+the+Aeroplane+Over+the+Sea",
    playcount: "366",
    "@attr": { rank: "30" },
    name: "In the Aeroplane Over the Sea",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Fiona+Apple",
      name: "Fiona Apple",
      mbid: "a9ee533f-8871-4f62-a6bb-91eb264abc90",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/76ce066e3dd48b6aae77e27227088aa9.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/76ce066e3dd48b6aae77e27227088aa9.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/76ce066e3dd48b6aae77e27227088aa9.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/76ce066e3dd48b6aae77e27227088aa9.jpg",
      },
    ],
    mbid: "36026c03-f5b7-4d74-8418-0a2692b910da",
    url: "https://www.last.fm/music/Fiona+Apple/Fetch+the+Bolt+Cutters",
    playcount: "359",
    "@attr": { rank: "31" },
    name: "Fetch the Bolt Cutters",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Adrianne+Lenker",
      name: "Adrianne Lenker",
      mbid: "763cb144-afdb-471e-bd86-d4f5b9b58641",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/746436fb5abd430a4e684eaeee4f1aff.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/746436fb5abd430a4e684eaeee4f1aff.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/746436fb5abd430a4e684eaeee4f1aff.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/746436fb5abd430a4e684eaeee4f1aff.jpg",
      },
    ],
    mbid: "46b96d25-e893-4bac-a2b2-379a32f591b3",
    url: "https://www.last.fm/music/Adrianne+Lenker/songs",
    playcount: "357",
    "@attr": { rank: "32" },
    name: "songs",
  },
  {
    artist: {
      url: "https://www.last.fm/music/The+Smiths",
      name: "The Smiths",
      mbid: "40f5d9e4-2de7-4f2d-ad41-e31a9a9fea27",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/2e25a301cf23c2b28b0ff1b77a852e1b.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/2e25a301cf23c2b28b0ff1b77a852e1b.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/2e25a301cf23c2b28b0ff1b77a852e1b.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/2e25a301cf23c2b28b0ff1b77a852e1b.jpg",
      },
    ],
    mbid: "00a0179e-960f-47d1-8795-5e1568126750",
    url: "https://www.last.fm/music/The+Smiths/The+Smiths",
    playcount: "349",
    "@attr": { rank: "33" },
    name: "The Smiths",
  },
  {
    artist: {
      url: "https://www.last.fm/music/The+Velvet+Underground",
      name: "The Velvet Underground",
      mbid: "94b0fb9d-a066-4823-b2ec-af1d324bcfcf",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/7ee82efcfa740f23cc25e58acdc04d26.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/7ee82efcfa740f23cc25e58acdc04d26.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/7ee82efcfa740f23cc25e58acdc04d26.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/7ee82efcfa740f23cc25e58acdc04d26.jpg",
      },
    ],
    mbid: "",
    url: "https://www.last.fm/music/The+Velvet+Underground/The+Velvet+Underground+&+Nico+45th+Anniversary",
    playcount: "338",
    "@attr": { rank: "34" },
    name: "The Velvet Underground & Nico 45th Anniversary",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Tyler,+the+Creator",
      name: "Tyler, the Creator",
      mbid: "f6beac20-5dfe-4d1f-ae02-0b0a740aafd6",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/e150fa362c89b8f1d92d883ae828b7ef.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/e150fa362c89b8f1d92d883ae828b7ef.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/e150fa362c89b8f1d92d883ae828b7ef.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/e150fa362c89b8f1d92d883ae828b7ef.jpg",
      },
    ],
    mbid: "4603cee3-ece6-435c-b0b7-7d9eb1842d36",
    url: "https://www.last.fm/music/Tyler,+the+Creator/IGOR",
    playcount: "331",
    "@attr": { rank: "35" },
    name: "IGOR",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Conan+Gray",
      name: "Conan Gray",
      mbid: "850a8b03-98a7-4fd3-afbd-5e5520b4ef5f",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/4f133a7c64471f91a30bf6ae80946c8c.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/4f133a7c64471f91a30bf6ae80946c8c.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/4f133a7c64471f91a30bf6ae80946c8c.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/4f133a7c64471f91a30bf6ae80946c8c.jpg",
      },
    ],
    mbid: "14e089b2-a2c7-4db0-88de-2f90dc036c50",
    url: "https://www.last.fm/music/Conan+Gray/Kid+Krow",
    playcount: "325",
    "@attr": { rank: "36" },
    name: "Kid Krow",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Indigo+De+Souza",
      name: "Indigo De Souza",
      mbid: "a8d894ce-0e6b-4ddd-a49b-46f6330a590f",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/0866b804ba39288a4690927cb5e7f659.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/0866b804ba39288a4690927cb5e7f659.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/0866b804ba39288a4690927cb5e7f659.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/0866b804ba39288a4690927cb5e7f659.jpg",
      },
    ],
    mbid: "f22c1706-e91b-497f-93e7-609dd4cf74e2",
    url: "https://www.last.fm/music/Indigo+De+Souza/I+Love+My+Mom",
    playcount: "316",
    "@attr": { rank: "37" },
    name: "I Love My Mom",
  },
  {
    artist: {
      url: "https://www.last.fm/music/The+Beatles",
      name: "The Beatles",
      mbid: "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/a4bbf73ba62024be279364e867b0ca20.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/a4bbf73ba62024be279364e867b0ca20.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/a4bbf73ba62024be279364e867b0ca20.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/a4bbf73ba62024be279364e867b0ca20.jpg",
      },
    ],
    mbid: "",
    url: "https://www.last.fm/music/The+Beatles/Abbey+Road+(Remastered)",
    playcount: "315",
    "@attr": { rank: "38" },
    name: "Abbey Road (Remastered)",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Lorde",
      name: "Lorde",
      mbid: "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/fdef4c7536c03d0a5a6689e4b1fa9b42.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/fdef4c7536c03d0a5a6689e4b1fa9b42.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/fdef4c7536c03d0a5a6689e4b1fa9b42.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/fdef4c7536c03d0a5a6689e4b1fa9b42.jpg",
      },
    ],
    mbid: "0024c5d8-8b54-459f-ab43-afeab54030a8",
    url: "https://www.last.fm/music/Lorde/Melodrama",
    playcount: "311",
    "@attr": { rank: "39" },
    name: "Melodrama",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Harry+Styles",
      name: "Harry Styles",
      mbid: "7eb1ce54-a355-41f9-8d68-e018b096d427",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/7940fbb1df766b4683951aed490a8b5a.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/7940fbb1df766b4683951aed490a8b5a.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/7940fbb1df766b4683951aed490a8b5a.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/7940fbb1df766b4683951aed490a8b5a.jpg",
      },
    ],
    mbid: "5c8a772d-fb0a-46ab-a5d8-6317546b727a",
    url: "https://www.last.fm/music/Harry+Styles/Fine+Line",
    playcount: "308",
    "@attr": { rank: "40" },
    name: "Fine Line",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Dayglow",
      name: "Dayglow",
      mbid: "2bee95a7-1c0e-4b3c-99a5-4857d9d776dd",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/cad2d300376ed1e482123ca2bcadb0a3.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/cad2d300376ed1e482123ca2bcadb0a3.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/cad2d300376ed1e482123ca2bcadb0a3.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/cad2d300376ed1e482123ca2bcadb0a3.jpg",
      },
    ],
    mbid: "df94e017-d9ee-4559-9784-3a5022f78fdf",
    url: "https://www.last.fm/music/Dayglow/Fuzzybrain",
    playcount: "305",
    "@attr": { rank: "41" },
    name: "Fuzzybrain",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Declan+McKenna",
      name: "Declan McKenna",
      mbid: "8b98035f-fbd2-4fb3-9c2f-263c7506680d",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/ea624dc31a254a6ab15fb3d9e2ab1a44.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/ea624dc31a254a6ab15fb3d9e2ab1a44.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/ea624dc31a254a6ab15fb3d9e2ab1a44.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/ea624dc31a254a6ab15fb3d9e2ab1a44.jpg",
      },
    ],
    mbid: "0d91cbad-0b7c-4c4d-81c2-684d1c03f29c",
    url: "https://www.last.fm/music/Declan+McKenna/What+Do+You+Think+About+the+Car%3F",
    playcount: "305",
    "@attr": { rank: "42" },
    name: "What Do You Think About the Car?",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Tame+Impala",
      name: "Tame Impala",
      mbid: "63aa26c3-d59b-4da4-84ac-716b54f1ef4d",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/dd45b0438a315aed98b5830aa2fc43c5.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/dd45b0438a315aed98b5830aa2fc43c5.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/dd45b0438a315aed98b5830aa2fc43c5.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/dd45b0438a315aed98b5830aa2fc43c5.jpg",
      },
    ],
    mbid: "031ecbde-35e1-4d3a-917f-f89f31aca1c9",
    url: "https://www.last.fm/music/Tame+Impala/Currents",
    playcount: "305",
    "@attr": { rank: "43" },
    name: "Currents",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Radiohead",
      name: "Radiohead",
      mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/2ed343318c844d19cd897ec67fad11c4.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/2ed343318c844d19cd897ec67fad11c4.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/2ed343318c844d19cd897ec67fad11c4.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/2ed343318c844d19cd897ec67fad11c4.png",
      },
    ],
    mbid: "080ad926-7a4e-4399-b7df-0cc1b6ef841c",
    url: "https://www.last.fm/music/Radiohead/Kid+A",
    playcount: "302",
    "@attr": { rank: "44" },
    name: "Kid A",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Lorde",
      name: "Lorde",
      mbid: "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/8cbc7d500ea6f6c69012e71e0da1c356.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/8cbc7d500ea6f6c69012e71e0da1c356.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/8cbc7d500ea6f6c69012e71e0da1c356.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/8cbc7d500ea6f6c69012e71e0da1c356.png",
      },
    ],
    mbid: "36468a36-a3fb-4825-99b0-d40f7f78dc03",
    url: "https://www.last.fm/music/Lorde/Pure+Heroine+(Extended)",
    playcount: "299",
    "@attr": { rank: "45" },
    name: "Pure Heroine (Extended)",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Clairo",
      name: "Clairo",
      mbid: "d786f59b-1836-4ddb-8393-ab753edbe984",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/0c2252fbe8cd112edcc0338a9c054255.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/0c2252fbe8cd112edcc0338a9c054255.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/0c2252fbe8cd112edcc0338a9c054255.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/0c2252fbe8cd112edcc0338a9c054255.jpg",
      },
    ],
    mbid: "1290408a-ee0f-437e-a835-ea7db2731c81",
    url: "https://www.last.fm/music/Clairo/Sling",
    playcount: "287",
    "@attr": { rank: "46" },
    name: "Sling",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Big+Thief",
      name: "Big Thief",
      mbid: "9f81247f-7f57-42f3-a8ba-75bef554e591",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/c5ead34a6aca64a663a3ed83fadfc742.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/c5ead34a6aca64a663a3ed83fadfc742.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/c5ead34a6aca64a663a3ed83fadfc742.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/c5ead34a6aca64a663a3ed83fadfc742.jpg",
      },
    ],
    mbid: "e62d86f9-b110-4923-9536-56444ef6d829",
    url: "https://www.last.fm/music/Big+Thief/Dragon+New+Warm+Mountain+I+Believe+in+You",
    playcount: "286",
    "@attr": { rank: "47" },
    name: "Dragon New Warm Mountain I Believe in You",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Mitski",
      name: "Mitski",
      mbid: "fa58cf24-0e44-421d-8519-8bf461dcfaa5",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/a9b9c68a6ecb979e1ac95e28bb28e06b.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/a9b9c68a6ecb979e1ac95e28bb28e06b.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/a9b9c68a6ecb979e1ac95e28bb28e06b.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/a9b9c68a6ecb979e1ac95e28bb28e06b.png",
      },
    ],
    mbid: "34896707-186f-4eda-aabe-61e28ea94de2",
    url: "https://www.last.fm/music/Mitski/Be+the+Cowboy",
    playcount: "284",
    "@attr": { rank: "48" },
    name: "Be the Cowboy",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Snail+Mail",
      name: "Snail Mail",
      mbid: "86cd4d38-857c-42bd-a5da-9acedcab1e01",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/0457ce75aabffbce6098b737fae65344.jpg",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/0457ce75aabffbce6098b737fae65344.jpg",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/0457ce75aabffbce6098b737fae65344.jpg",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/0457ce75aabffbce6098b737fae65344.jpg",
      },
    ],
    mbid: "006c20a6-8f0a-4783-883b-f905cd6dd790",
    url: "https://www.last.fm/music/Snail+Mail/Valentine",
    playcount: "283",
    "@attr": { rank: "49" },
    name: "Valentine",
  },
  {
    artist: {
      url: "https://www.last.fm/music/Harry+Styles",
      name: "Harry Styles",
      mbid: "7eb1ce54-a355-41f9-8d68-e018b096d427",
    },
    cover: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/295ed1c0727ce10652867d628139beb1.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/295ed1c0727ce10652867d628139beb1.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/295ed1c0727ce10652867d628139beb1.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/295ed1c0727ce10652867d628139beb1.png",
      },
    ],
    mbid: "1bae2be4-95e0-4a9e-9012-c12565ccb9ba",
    url: "https://www.last.fm/music/Harry+Styles/Harry+Styles",
    playcount: "277",
    "@attr": { rank: "50" },
    name: "Harry Styles",
  },
];
