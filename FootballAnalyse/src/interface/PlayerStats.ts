export interface statistics{
     driblles:dribbles,
     
     goals:goals,
     passes:passes,
     shots:shots,
     playerteam:team
}

export interface dribbles{
     attempts: number,
     success: number,
}

export interface goals{
    total: number | null, 
    conceded: number | null, 
    assists: number | null ,
    saves:number 
}

export interface passes{
    total: number,
     key: number,
     accuracy: number
}
export interface shots{
    total: number,
     on: number
}
export interface team{
    id: number, 
    name: string, 
    logo: string
}