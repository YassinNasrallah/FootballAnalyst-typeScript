

export interface Score{
       home:number | null;
       away:number | null
}
export interface Teams{
      home: {
       id: number,
       name: string,
       logo: string,
       winner: boolean
         },
      away: {
        id: number,
        name: string,
        logo: string,
        winner: boolean
        }
}
export interface Scores{
     halftime: Score;
     fulltime: Score;
     extratime: Score;
     penalty: Score;
}

export interface Fixture {
fixtureId: number ,

}