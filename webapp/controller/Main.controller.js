sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("eggo.github1.controller.Main", {
      onInit: function () {},
      onPress: function () {
		  var sMessage = "Teste";
		  MessageToast.show(sMessage)
	  },
    });
  }
);
