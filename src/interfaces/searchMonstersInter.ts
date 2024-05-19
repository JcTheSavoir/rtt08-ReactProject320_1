interface Speed {
    walk: number;
    burrow?: number;
    climb?: number;
    fly?: number;
    hover?: boolean;
    swim?: number;
    [key: string]: number | boolean | undefined;
}
interface Skills {
    arcana?: number;
    acrobatics?: number;
    athletics?: number;
    deception?: number;
    history?: number;
    insight?: number;
    intimidation?: number;
    medicine?: number;
    nature?: number;
    perception?: number;
    performance?: number;
    persuasion?: number;
    religion?: number;
    stealth?: number;
    survival?: number;
    [key: string]: number | undefined;
}
interface Actions {
    name: string;
    desc: string;
    attack_bonus?: number;
    damage_dice?: string;
    damage_bonus?: number;
}
interface Details {
    slug: string;
    desc: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    group: string | null;
    alignment: string;
    armor_class: number;
    armor_desc: string | null;
    hit_points: number;
    hit_dice: string;
    speed: Speed;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    strength_save: number | null;
    dexterity_save: number | null;
    constitution_save: number | null;
    intelligence_save: number | null;
    wisdom_save: number | null;
    charisma_save: number | null;
    perception: number | null;
    skills: Skills;
    damage_vulnerabilities: string;
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
    senses: string;
    languages: string;
    challenge_rating: string;
    cr: number;
    actions: Actions[];
    bonus_actions: Actions[] | null;
    reactions: Actions[] | null;
    legendary_desc: string;
    legendary_actions: Actions[] | null;
    special_abilities: Actions[] | null;
    spell_list: string[];
    page_no: number;
    environments: string[];
    img_main: string | null;
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
}
interface IMonsters {
    count: number;
    next: null;
    previous: null;
    results: Details[]   
}

export type { Speed, Skills, Actions, Details, IMonsters};