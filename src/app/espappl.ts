export interface IEspApplResponse {
  info: {
    status: string;
    type: string;
  };
  data: {
    list: string[];
  };
}

export interface IEspApplGen {
  name: string;
  generation: number;
  created: Date;
  status?: string;
  endTime?: Date;
  expectedEndTime?: Date;
  //add parent var for iespapplparse(iespapplgen?)
}

export interface IEspAppl {
  name: string;
  generations: IEspApplGen[];
}

// 0: "APPL NZDIND01 GEN 1862"
// 1: "  CREATED AT 06.04 ON THURSDAY MAY 27TH, 2021"
// 2: " "
// 3: "APPL NZDIND01 GEN 1861 COMPLETE"
// 4: "  CREATED AT 06.04 ON WEDNESDAY MAY 26TH, 2021"
// 5: "    ENDED AT 13.11 ON THURSDAY MAY 27TH, 2021"
// 6: " "
