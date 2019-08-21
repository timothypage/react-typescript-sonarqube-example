export interface Die {
  sides: number;
  value: number | null;
}

export interface FancyDie extends Die {
  color?: string;
}