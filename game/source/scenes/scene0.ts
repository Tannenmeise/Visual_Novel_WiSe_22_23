namespace Game {
    export async function scene0(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene starting!!");

        dataForSave.nameProtagonist = await ƒS.Speech.getInput(); // Für Protagonist-Name Input


        await ƒS.Speech.tell(characters.protagonist, "Hi, it's me!", true, "Player");

        ƒS.Speech.setTickerDelays(80, 5000);
        let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);

        await ƒS.Speech.tell(characters.Sticky, "Hallo 1");
        signalDelay3();
        await ƒS.Speech.tell(characters.Sticky, "Hallo 2");

        ƒS.Inventory.add(items.item1);

        await ƒS.Inventory.open();
    }
}