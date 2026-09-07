import { MatcheModel } from "../models/MatcheModel";

export const fakeFixture: MatcheModel[] = [
  new MatcheModel(
    {
      halftime: {
        home: 1,
        away: 0
      },
      fulltime: {
        home: 2,
        away: 1
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    },
    {
      fixtureId: 12345,
      
    },
    {
      home: {
        id: 1,
        name: "Real Madrid",
        logo: "real-madrid-logo.png",
        winner: true
      },
      away: {
        id: 2,
        name: "Barcelona",
        logo: "barcelona-logo.png",
        winner: false
      }
    }
  ),

  new MatcheModel(
    {
      halftime: {
        home: 0,
        away: 0
      },
      fulltime: {
        home: 1,
        away: 1
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    },
    {
      fixtureId: 12346,
      
    },
    {
      home: {
        id: 3,
        name: "Liverpool",
        logo: "liverpool-logo.png",
        winner: false
      },
      away: {
        id: 4,
        name: "Manchester City",
        logo: "man-city-logo.png",
        winner: false
      }
    }
  ),

  new MatcheModel(
    {
      halftime: {
        home: 0,
        away: 0
      },
      fulltime: {
        home: 4,
        away: 3
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    },
    {
      fixtureId: 12346,
      
    },
    {
      home: {
        id: 3,
        name: "barcelone",
        logo: "liverpool-logo.png",
        winner: false
      },
      away: {
        id: 4,
        name: "inter",
        logo: "man-city-logo.png",
        winner: false
      }
    }
  )
];