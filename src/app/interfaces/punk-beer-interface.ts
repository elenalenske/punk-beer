export interface Beer {
    abv: number;
    attenuation_level: number;
    boil_volume: {
        value: number;
        unit: string;
    };
    brewers_tips: string;
    contributed_by: string;
    description: string;
    ebc: number;
    first_brewed: string;
    food_pairing: string[];
    ibu: number;
    id: number;
    image_url: string;
    ingredients: {
        hops: {
            add: string;
            amount: {
                value: number;
                unit: string;
            };
            attribute: string;
            name: string;
        };
        malt: {
            amount: {
                value: number;
                unit: string;
            };
            name: string;
        };
        yeast: string;
    }
    method: {
        mash_temp: {
            temp: {
              value: number;
              unit: string;
            },
            duration: number;
        }[];
        fermentation: {
            temp: {
                value: number;
                unit: string;
            };
        };
        twist: string;
      };
    name: string;
    ph: number;
    srm: number;
    tagline: string;
    target_fg: number;
    target_og: number;
    volume: {
        value: number;
        unit: string;
    };
    active?: boolean;
}