export type PrizeWinner = {
  name: string;
  grade?: string;
};

export type CompetitionResult = {
  firstPlace: PrizeWinner;
  secondPlace: PrizeWinner;
  consolation: PrizeWinner;
};

export type InstitutionResult = {
  id: string;
  name: string;
  essay: CompetitionResult;
  poetry: CompetitionResult;
};

export const schoolResults: InstitutionResult[] = [];

export const collegeResults: InstitutionResult[] = [];
