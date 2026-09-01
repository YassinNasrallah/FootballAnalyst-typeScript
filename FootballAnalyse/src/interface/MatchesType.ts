export interface Score{
       home:number | null;
       away:number | null
}

export interface Scores{
     halftime: Score;
     fulltime: Score;
     extratime: Score;
     penalty: Score;
}

export interface Winner{
      home:boolean,
      away: boolean
}