//creating interfaces for the api data
interface IAllSpells {
    index: string;
    name: string;
    level: number;
    url: string;
}
interface IPicked {
  count: number;
  results: IAllSpells[];
}

export type { IAllSpells, IPicked }