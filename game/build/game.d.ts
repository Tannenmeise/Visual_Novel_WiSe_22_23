declare namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
    let transitions: {
        cloud: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        background: string;
    };
    let locations: {
        sky: {
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
