namespace Game {
    export async function scene2(): ƒS.SceneReturn {
        console.log("scene2 started");

        // SPEECH
        let text = {
            Sticky: {
                T0000: "Willkommen zur 2. Szene!",
                T0001: "Ich hoffe dir hat das Visual Novel gefallen.",
                T0002: ":)"
            }
        };

        let dialogue = {
            sayYes: "Yes",
            sayOk: "Okay",
            sayNo: "No",
            sayBla: "Bla"
        };

        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choiceCSSClass");

        let pickedYes: boolean;
        let pickedNo: boolean;
        let pickedBla: boolean;
        let pickedOk: boolean;

        if (pickedYes || pickedBla || pickedNo) {
            delete dialogue.sayBla;
        }

        switch (dialogueElement) {
            case dialogue.sayYes:
                break;
            case dialogue.sayOk:
                break;
            case dialogue.sayNo:
                await ƒS.Speech.tell(characters.Sticky, "Nein");
                break;
            case dialogue.sayBla:
                break;
        }

        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0000);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0001);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0002);
    }
}
