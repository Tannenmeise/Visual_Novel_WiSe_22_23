declare namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
    function ghostAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
    let transitions: {
        cloud: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        floorboardCreaking: string;
        ghost: string;
        giggle: string;
        windInside: string;
        windOutside: string;
    };
    let locations: {
        sky: {
            name: string;
            background: string;
        };
        hauntedHouse: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        Sticky: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        Ghost: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
}
declare namespace Game {
    function scene0(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene1(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene2(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene3(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene4(): ƒS.SceneReturn;
}
