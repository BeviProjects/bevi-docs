import { ReactElement } from 'react';
import { SVGAttributes } from 'react';

export declare type BrandbookType = {
    url: string;
    lastChecked: string;
    status: "active" | "inactive";
};

export declare const BvLogo: <T extends LogoNameType>({ color, context, fallback, height, name, onError, showErrorIcon, title, variant, width, ...props }: BvLogoProps<T>) => ReactElement | null;

declare type BvLogoProps<T extends LogoNameType> = {
    color?: ColorType<T>;
    context?: ContextType<T>;
    fallback?: ReactElement;
    height?: number;
    name: T;
    onError?: (error: ErrorInfo) => void;
    showErrorIcon?: boolean;
    title?: string;
    variant?: VariantType<T>;
    width?: number;
} & Omit<SVGAttributes<SVGSVGElement>, "color" | "width" | "height">;

export declare type ColorType<T extends LogoNameType> = GetLogoByName<T>["variants"]["color"][number];

export declare type ContextType<T extends LogoNameType> = GetLogoByName<T>["variants"]["context"][number];

declare type ErrorInfo = {
    type: "not-found" | "invalid-variant" | "fetch-failed" | "parse-failed";
    message: string;
    details?: string;
};

declare type GetLogoByName<T extends LogoNameType> = Extract<LogoRegistryType, {
    displayName: T;
}>;

export declare type LogoNameType = LogoRegistryType["displayName"];

export declare type LogoRegistryType = (typeof logos)[number];

export declare const logos: readonly [{
    readonly id: "allianz";
    readonly name: "Allianz";
    readonly displayName: "Allianz";
    readonly status: "active";
    readonly tags: ["name:allianz", "category:insurance ", "color:blue", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "amigoz";
    readonly name: "Amigoz";
    readonly displayName: "Amigoz";
    readonly status: "active";
    readonly tags: ["name:amigoz", "category:consortium", "color:black", "color:blue", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "black", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "ancora";
    readonly name: "Âncora consórcios";
    readonly displayName: "AndoraConsorcios";
    readonly status: "active";
    readonly tags: ["name:ancora", "category:bank", "category:consortium", "color:blue", "color:ciano", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "anec";
    readonly name: "Anec";
    readonly displayName: "Anec";
    readonly status: "active";
    readonly tags: ["name:anec", "color:blue", "color:gray", "color:purple", "color:white"];
    readonly variants: {
        readonly variant: ["default", "horizontal", "icon"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "azul-seguros";
    readonly name: "Azul Seguros";
    readonly displayName: "AzulSeguros";
    readonly status: "active";
    readonly tags: ["name:azul", "category:insurance", "color:blue", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banco-bari";
    readonly name: "Banco Bari";
    readonly displayName: "BancoBari";
    readonly status: "active";
    readonly tags: ["name:bari", "category:bank", "color:blue", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banco-bmg";
    readonly name: "Banco BMG";
    readonly displayName: "BancoBMG";
    readonly status: "active";
    readonly tags: ["name:bmg", "category:bank", "color:monochromatic", "color:orange", "color:purple", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "orange", "purple", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banco-brb";
    readonly name: "Banco BRB";
    readonly displayName: "BancoBRB";
    readonly status: "active";
    readonly tags: ["name:ancora", "category:bank", "category:consortium", "color:blue", "color:ciano", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banco-bv";
    readonly name: "Banco BV";
    readonly displayName: "BancoBV";
    readonly status: "active";
    readonly tags: ["name:banco-bv", "name:bv", "category:bank", "color:blue", "color:ciano", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banco-daycoval";
    readonly name: "Banco Daycoval";
    readonly displayName: "BancoDaycoval";
    readonly status: "active";
    readonly tags: ["name:daycoval", "category:bank", "color:blue", "color:gray", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default", "vertical"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banco-mercantil";
    readonly name: "Banco Mercantil";
    readonly displayName: "BancoMercantil";
    readonly status: "active";
    readonly tags: ["name:mercantil", "category:bank", "color:blue", "color:white"];
    readonly variants: {
        readonly variant: ["default", "correspondent", "correspondent-horizontal"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banco-pan";
    readonly name: "Banco Pan";
    readonly displayName: "BancoPan";
    readonly status: "active";
    readonly tags: ["name:pan", "category:bank", "color:blue", "color:gray", "color:purple"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "dark", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "banrisul";
    readonly name: "Banrisul";
    readonly displayName: "Banrisul";
    readonly status: "active";
    readonly tags: ["name:banrisul", "category:bank", "color:blue", "color:ciano", "color:purple", "color:white"];
    readonly variants: {
        readonly variant: ["default", "horizontal"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "bb-consorcios";
    readonly name: "BB Consórcios";
    readonly displayName: "BBConsorcios";
    readonly status: "active";
    readonly tags: ["name:bb", "name:banco do brasil", "category:bank", "category:consortium", "color:blue", "color:yellow"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "bevi";
    readonly name: "Bevi";
    readonly displayName: "Bevi";
    readonly status: "active";
    readonly tags: ["name:bevi", "category:bevi", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default", "icon"];
        readonly color: ["default", "dark", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "beviconsorcio";
    readonly name: "Beviconsórcio";
    readonly displayName: "Beviconsorcio";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:beviconsorcio", "category:bevi", "category:beviconsorcio", "color:blue", "color:chartreuse", "color:ciano", "color:midnight-blue", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default", "slogan"];
        readonly color: ["default", "dark", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "bevipentagono";
    readonly name: "Bevipentágono";
    readonly displayName: "Bevipentagono";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:bevipentagono", "category:bevi", "category:bevipentagono", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "beviprotege";
    readonly name: "Beviprotege";
    readonly displayName: "Beviprotege";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:beviprotege", "category:bevi", "category:beviprotege", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "beviseguros";
    readonly name: "Beviseguros";
    readonly displayName: "Beviseguros";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:beviseguros", "category:bevi", "category:beviseguros", "category:seguro", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "bevisolar";
    readonly name: "Bevisolar";
    readonly displayName: "Bevisolar";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:bevicolar", "category:bevi", "category:bevisolar", "category:energia-solar", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "blog-bevi";
    readonly name: "Blog Bevi";
    readonly displayName: "BlogBevi";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:blog-bevi", "category:bevi", "category:blog-bevi", "category:blog", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "bmg-consorcio";
    readonly name: "BMG Consórcio";
    readonly displayName: "BMGConsorcio";
    readonly status: "active";
    readonly tags: ["name:BMG", "category:bank", "category:consortium", "color:gray", "color:monochromatic", "color:orange", "color:purple", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "gray", "orange", "purple", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "bradesco";
    readonly name: "Bradesco";
    readonly displayName: "Bradesco";
    readonly status: "active";
    readonly tags: ["name:bradesco", "category:bank", "category:financial", "color:black", "color:monochromatic", "color:red", "color:white"];
    readonly variants: {
        readonly variant: ["default", "vertical"];
        readonly color: ["default", "black", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "bradesco-seguros";
    readonly name: "Bradesco Seguros";
    readonly displayName: "BradescoSeguros";
    readonly status: "active";
    readonly tags: ["name:bradesco", "category:insurance", "color:red", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "brasilcap";
    readonly name: "Brasilcap";
    readonly displayName: "Brasilcap";
    readonly status: "active";
    readonly tags: ["name:brasilcap", "color:blue", "color:yellow"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "btw";
    readonly name: "BTW";
    readonly displayName: "BTW";
    readonly status: "active";
    readonly tags: ["name:btw", "category:bank", "color:purple", "color:yellow", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "purple", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "c6-auto";
    readonly name: "C6 Auto";
    readonly displayName: "C6Auto";
    readonly status: "active";
    readonly tags: ["name:c6", "category:insurance", "color:black", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "c6-consig";
    readonly name: "C6 Consig";
    readonly displayName: "C6Consig";
    readonly status: "active";
    readonly tags: ["name:c6", "category:consortium", "color:gray", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "gray", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "consorcio-canopus";
    readonly name: "Consórcio Canopus";
    readonly displayName: "ConsorcioCanopus";
    readonly status: "active";
    readonly tags: ["name:canopus", "category:consortium", "color:blue", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "blue", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "consorcio-itau";
    readonly name: "Consorcio Itaú";
    readonly displayName: "ConsorcioItau";
    readonly status: "active";
    readonly tags: ["name:itaú", "category:consortium", "color:orange", "color:blue", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "consorcio-santander";
    readonly name: "Consórcio Santander";
    readonly displayName: "ConsorcioSantander";
    readonly status: "active";
    readonly tags: ["name:santander", "category:consortium", "color:red", "color:monochromatic"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "consorcio-tradicao";
    readonly name: "Consórcio Tradição";
    readonly displayName: "ConsorcioTradicao";
    readonly status: "active";
    readonly tags: ["name:tradição", "category:consortium", "color:green", "color:blue", "color:dark", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "black", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "credcesta";
    readonly name: "Credcesta";
    readonly displayName: "Credcesta";
    readonly status: "active";
    readonly tags: ["name:credcesta", "category:bank", "color:red", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "creditas";
    readonly name: "Creditas";
    readonly displayName: "Creditas";
    readonly status: "active";
    readonly tags: ["name:creditas", "category:bank", "color:gray", "color:green", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "green", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "crefaz";
    readonly name: "Crefaz";
    readonly displayName: "Crefaz";
    readonly status: "active";
    readonly tags: ["name:crefaz", "category:bank", "color:blue", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "facta-financeira-sa";
    readonly name: "Facta Financeira S.A.";
    readonly displayName: "FactaFinanceira";
    readonly status: "active";
    readonly tags: ["name:facta", "category:bank", "category:financial", "color:blue", "color:monochromatic", "color:orange", "color:white"];
    readonly variants: {
        readonly variant: ["default", "horizontal"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "financeira-brb";
    readonly name: "Financeira BRB - Correspondente autorizado";
    readonly displayName: "FinanceiraBRB";
    readonly status: "active";
    readonly tags: ["name:financeira-brb", "name:brb", "category:financial", "color:blue", "color:ciano", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default", "horizontal"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "itau";
    readonly name: "Itaú";
    readonly displayName: "Itau";
    readonly status: "active";
    readonly tags: ["name:itau", "category:bank", "color:monochromatic", "color:orange", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "itau-seguros";
    readonly name: "Itaú Seguros";
    readonly displayName: "ItauSeguros";
    readonly status: "active";
    readonly tags: ["name:itaú", "category:bank", "category:insurance", "color:blue", "color:orange", "color:yellow", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "blue", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "ituran";
    readonly name: "Ituran";
    readonly displayName: "Ituran";
    readonly status: "active";
    readonly tags: ["name:ituran", "category:bank", "category:insurance", "color:blue", "color:green", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "mais-bb";
    readonly name: "Mais BB";
    readonly displayName: "MaisBB";
    readonly status: "active";
    readonly tags: ["name:mais bb", "name:banco do brasil", "name:bb", "category:bank", "category:correspondente", "color:blue", "color:yellow", "color:white"];
    readonly variants: {
        readonly variant: ["default", "vertical"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "finanto";
    readonly name: "Finanto";
    readonly displayName: "Finanto";
    readonly status: "active";
    readonly tags: ["name:finanto", "category:consigned", "color:gray", "color:green", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "gray", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "hdi-seguros";
    readonly name: "HDI Seguros";
    readonly displayName: "HDISeguros";
    readonly status: "active";
    readonly tags: ["name:hdi", "category:insurance", "color:gray", "color:green", "color:red"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "icred";
    readonly name: "iCred";
    readonly displayName: "Icred";
    readonly status: "active";
    readonly tags: ["name:icred", "category:fintech", "color:black", "color:green", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "bw", "green", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "inter";
    readonly name: "Inter";
    readonly displayName: "Inter";
    readonly status: "active";
    readonly tags: ["name:inter", "color:monochromatic", "color:orange", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "mapfre-seguros";
    readonly name: "Mapfre Seguros";
    readonly displayName: "MapfreSeguros";
    readonly status: "active";
    readonly tags: ["name:mapfre", "category:insurance", "color:red", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "matrix";
    readonly name: "Matrix";
    readonly displayName: "Matrix";
    readonly status: "active";
    readonly tags: ["name:matrix", "category:energy", "color:black", "color:orange", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "ole-consignado";
    readonly name: "Olé Consignado";
    readonly displayName: "OleConsignado";
    readonly status: "active";
    readonly tags: ["name:ole-consignado", "name:ole", "category:bank", "color:blue", "color:red"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "pic-pay";
    readonly name: "PicPay";
    readonly displayName: "PicPay";
    readonly status: "active";
    readonly tags: ["name:pic pay", "category:bank", "color:green", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "pix-card";
    readonly name: "Pix Card";
    readonly displayName: "PixCard";
    readonly status: "active";
    readonly tags: ["name:pix card", "category:credit", "color:gray", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "portal-corporativo";
    readonly name: "Portal Corporativo";
    readonly displayName: "PortalCorporativo";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:portal-corporativo", "category:bevi", "category:portal-corporativo", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "porto";
    readonly name: "Porto";
    readonly displayName: "Porto";
    readonly status: "active";
    readonly tags: ["name:porto", "category:bank", "color:blue", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "presenca-bank";
    readonly name: "Presença Bank";
    readonly displayName: "PresencaBank";
    readonly status: "active";
    readonly tags: ["name:presença", "category:software", "color:gray", "color:orange", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "quero+credito";
    readonly name: "Quero + Crédito - Vem acreditar com a agente";
    readonly displayName: "QueroMaisCredito";
    readonly status: "active";
    readonly tags: ["name:quero+credito", "category:bank", "color:green", "color:monochromatic", "color:yellow", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "reverde";
    readonly name: "Reverde";
    readonly displayName: "Reverde";
    readonly status: "active";
    readonly tags: ["name:reverde", "category:energy", "color:green", "color:yellow"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "rodobens";
    readonly name: "Rodobens";
    readonly displayName: "Rodobens";
    readonly status: "active";
    readonly tags: ["name:rodobens", "category:bank", "color:green", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "sabemi";
    readonly name: "Sabemi";
    readonly displayName: "Sabemi";
    readonly status: "active";
    readonly tags: ["name:sabemi", "category:bank", "color:blue", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "safra-financeira";
    readonly name: "Safra Financeira";
    readonly displayName: "SafraFinanceira";
    readonly status: "active";
    readonly tags: ["name:safra", "category:bank", "color:blue", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "santander";
    readonly name: "Santander";
    readonly displayName: "Santander";
    readonly status: "active";
    readonly tags: ["name:santander", "category:bank", "color:red", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "seu-marketplace";
    readonly name: "Seu Marketplace";
    readonly displayName: "SeuMarketplace";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:seu-marketplace", "category:bevi", "category:seu-marketplace", "color:blue", "color:ciano", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "cronos";
    readonly name: "Cronos";
    readonly displayName: "Cronos";
    readonly status: "active";
    readonly tags: ["name:sim", "category:fintech", "color:blue", "color:green", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "digio";
    readonly name: "Digio";
    readonly displayName: "Digio";
    readonly status: "active";
    readonly tags: ["name:digio", "category:bank", "color:blue", "color:ciano", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "emprestimo-sim";
    readonly name: "Empréstimo Sim";
    readonly displayName: "EmprestimoSim";
    readonly status: "active";
    readonly tags: ["name:sim", "category:loan", "color:red", "color:yellow", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "sompo";
    readonly name: "Sompo";
    readonly displayName: "Sompo";
    readonly status: "active";
    readonly tags: ["name:sompo", "category:insurance", "color:gray", "color:red", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "suhai";
    readonly name: "Suhai";
    readonly displayName: "Suhai";
    readonly status: "active";
    readonly tags: ["name:suhai", "category:insurance", "color:green", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "tokio-marine-seguradora";
    readonly name: "Tokio Marine Seguradora";
    readonly displayName: "TokioMarineSeguradora";
    readonly status: "active";
    readonly tags: ["name:tokio-marine", "category:insurance", "color:gray", "color:green", "color:yellow", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "too-seguros";
    readonly name: "Too Seguros";
    readonly displayName: "TooSeguros";
    readonly status: "active";
    readonly tags: ["name:too-seguros", "category:insurance", "color:ciano", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "universidade-bevi";
    readonly name: "Universidade Bevi";
    readonly displayName: "UniversidadeBevi";
    readonly status: "active";
    readonly tags: ["name:bevi", "name:universidade-bevi", "category:bevi", "category:universidade-bevi", "color:blue", "color:ciano", "color:monochromatic", "color:violet", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "light", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "yelum";
    readonly name: "Yelum";
    readonly displayName: "Yelum";
    readonly status: "active";
    readonly tags: ["name:yelum", "category:insurance", "color:gray", "color:monochromatic", "color:yellow", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "gray", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}, {
    readonly id: "zurich";
    readonly name: "Zurich";
    readonly displayName: "Zurich";
    readonly status: "active";
    readonly tags: ["name:zurich", "category:insurance", "color:blue", "color:monochromatic", "color:white"];
    readonly variants: {
        readonly variant: ["default"];
        readonly color: ["default", "white"];
        readonly context: ["default"];
    };
    readonly brandbook: {
        readonly url: "";
        readonly lastChecked: "";
        readonly status: "inactive";
    };
    readonly metadata: {
        readonly createdAt: "2025-12-15";
        readonly updatedAt: "2025-12-15";
        readonly addedIn: "1.0.0";
        readonly updatedIn: "1.0.0";
        readonly status: "active";
    };
}];

export declare type LogoType = {
    id: string;
    name: string;
    displayName: string;
    status: "active" | "inactive";
    tags: string[];
    variants: LogoVariantsType;
    brandbook: BrandbookType;
    metadata: MetadataType;
};

export declare type LogoVariantsType = {
    variant: string[];
    color: string[];
    context: string[];
};

export declare type MetadataType = {
    createdAt: string;
    updatedAt: string;
    addedIn: string;
    updatedIn: string;
    status: "active" | "inactive";
};

export declare type VariantType<T extends LogoNameType> = GetLogoByName<T>["variants"]["variant"][number];

export { }
