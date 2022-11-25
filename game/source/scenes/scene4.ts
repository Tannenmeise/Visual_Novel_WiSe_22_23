namespace Game {
    export async function scene4(): ƒS.SceneReturn {
        console.log("scene4 started");

        // SPEECH
        let text = {
            Sticky: {
                T0000: "Robot Fight"
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.sky);
        await ƒS.update();
        await ƒS.Character.show(characters.Sticky, characters.Sticky.pose.happy, ƒS.positionPercent(70, 110));
        await ƒS.update();
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0000);


        let graph: ƒ.Node = ƒS.Base.getGraph();

        // LOADING OBJECT
        let node: ƒ.Node = new ƒ.Node("Quad");
        node.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(new ƒ.Vector3(0, 0, 0))));

        let mesh: ƒ.MeshObj = new ƒ.MeshObj("RobotMesh");
        await mesh.load("assets/objects/test.obj");
        //let mesh: ƒ.MeshQuad = new ƒ.MeshQuad();

        let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        let mtrSolidWhite: ƒ.Material = new ƒ.Material("SolidWhite", ƒ.ShaderLit, new ƒ.CoatColored(ƒ.Color.CSS("RED")));
        let cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);

        graph.getChild(1).addChild(node);

        node.mtxLocal.translateX(150);
        node.mtxLocal.translateY(-100);

        node.mtxLocal.scale(new ƒ.Vector3(100, 100, 100));

        await ƒS.update();

        console.log(graph.getChild(1));

    }
}
