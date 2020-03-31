export interface CoronaCSV {
  uid?: number,
  country?:string;
  state?:string;
  totalCases?:number;
  totalCasesMS?:number;
  notConfirmedByMS?:number;
  deaths?:number;
  url?:string;
}

//"https://api.coronaanalytic.com/brazil/";
export interface CoronaAPI_DESCONTINUADA {
  date?: Date;
  time?: string;
  values: {
    uid?: number,
    state: string,
    cases: number,
    deaths: number,
    suspects: number,
    refuses: number,
    broadcast: boolean,
    comments: string
  };
}
