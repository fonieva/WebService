jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.declare("samples.components.button.Component");

sap.ui.jsview("services.src.view.app", {
	
	getControllerName: function(){
		return "services.src.view.app";
	},
	
	createContent: function(oController){
  		
  		this.setDisplayBlock(true);
  			
  		// create app
		this.app = new sap.m.SplitApp();
		
		var login = sap.ui.view({id: "login", type:sap.ui.core.mvc.ViewType.JS, viewName:"services.src.view.login"});  
		login.getController().nav = this.getController();
		this.app.addDetailPage(login, true);
		
		return new sap.m.Shell("Shell", {
			title : "{i18n>ShellTitle}",
			showLogout : false,
			app : this.app
		});
	
	/*
		// load the master page
	var login = sap.ui.xmlview("Login", "src.view.login");
		login.getController().nav = this.getController();
		this.app.addPage(login, true);
		
		// load the empty page
		var empty = sap.ui.xmlview("Empty", "sap.ui.demo.myFiori.view.Empty");
		this.app.addPage(empty, false);
		// wrap app with shell
	*/
		
	}
});