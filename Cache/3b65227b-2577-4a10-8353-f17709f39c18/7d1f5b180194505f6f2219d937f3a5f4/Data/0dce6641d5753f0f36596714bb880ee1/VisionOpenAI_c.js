if (script.onAwake) {
	script.onAwake();
	return;
};
function checkUndefined(property, showIfData){
   for (var i = 0; i < showIfData.length; i++){
       if (showIfData[i][0] && script[showIfData[i][0]] != showIfData[i][1]){
           return;
       }
   }
   if (script[property] == undefined){
      throw new Error('Input ' + property + ' was not provided for the object ' + script.getSceneObject().name);
   }
}
// @input Component.Text textInput
checkUndefined("textInput", []);
// @input Component.Text textOutput
checkUndefined("textOutput", []);
// @input Component.Image image
checkUndefined("image", []);
// @input Interactable interactable
checkUndefined("interactable", []);
// @input TextToSpeechOpenAI ttsComponent
checkUndefined("ttsComponent", []);
var scriptPrototype = Object.getPrototypeOf(script);
if (!global.BaseScriptComponent){
   function BaseScriptComponent(){}
   global.BaseScriptComponent = BaseScriptComponent;
   global.BaseScriptComponent.prototype = scriptPrototype;
   global.BaseScriptComponent.prototype.__initialize = function(){};
   global.BaseScriptComponent.getTypeName = function(){
       throw new Error("Cannot get type name from the class, not decorated with @component");
   }
}
var Module = require("../../../../../Modules/Src/Assets/Scripts/TS/VisionOpenAI");
Object.setPrototypeOf(script, Module.VisionOpenAI.prototype);
script.__initialize();
if (script.onAwake) {
   script.onAwake();
}
