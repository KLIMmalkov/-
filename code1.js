gdjs._1085_1072_1095_1072_1083_1086Code = {};
gdjs._1085_1072_1095_1072_1083_1086Code.localVariables = [];
gdjs._1085_1072_1095_1072_1083_1086Code.idToCallbackMap = new Map();
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewTextObjects1= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewTextObjects2= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewText2Objects1= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewText2Objects2= [];


gdjs._1085_1072_1095_1072_1083_1086Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1[k] = gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "menu.mp3", true, 30, 1);
}
}

}


};

gdjs._1085_1072_1095_1072_1083_1086Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewTextObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewTextObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewText2Objects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewText2Objects2.length = 0;

gdjs._1085_1072_1095_1072_1083_1086Code.eventsList0(runtimeScene);
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewTextObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewTextObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewText2Objects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_1085_1072_1095_1072_1083_1086Code'] = gdjs._1085_1072_1095_1072_1083_1086Code;
