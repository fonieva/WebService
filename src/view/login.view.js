sap.ui.jsview("services.src.view.login", {
	
	getControllerName: function(){
		return "services.src.view.login";
	},
	
	createContent: function(oController){
		
		var oPanel = new sap.ui.commons.Panel({width: "350px",  showCollapseIcon: false});

		//Create a matrix layout with 2 columns
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({layoutFixed: true, width: '300px', columns: 2});
		oMatrix.setWidths('100px', '200px');				
		
		// create a simple Input field
		var oInputUsername = new sap.ui.commons.TextField('inputUsername');
		oInputUsername.setValue("Username");
		oInputUsername.setTooltip("Username");
		oInputUsername.attachChange(function(){alert('Text changed to :'+ oInput1.getValue());});

		var oLabelUsername = new sap.ui.commons.Label({text: 'Username'});
		oLabelUsername.setLabelFor(oLabelUsername);
		
		oMatrix.createRow(oLabelUsername, oInputUsername);
		
		// create a simple Input field
		var oInputPassword = new sap.ui.commons.TextField('inputPassword');
		oInputPassword.setValue("Password");
		oInputPassword.setTooltip("Password");
		oInputPassword.attachChange(function(){alert('Text changed to :'+ oInputPassword.getValue());});

		var oLabelPassword = new sap.ui.commons.Label({text: 'Password'});
		oLabelPassword.setLabelFor(oInputPassword);
		
		oMatrix.createRow(oLabelPassword, oInputPassword);		

		var oButton = new sap.m.Button("button", {
			text:"Button",
			press: oController.Consultar
		});
		
		oPanel.addContent(oMatrix);
		oPanel.addContent(oButton);
		
		var page = new sap.m.Page({
			title: "Page",
			content: []
		});
		
		var otextArea = new sap.ui.commons.TextArea({
   	    	id : "textArea",
   	    	cols : 130,
			rows : 25,
		});
		
		page.addContent(oPanel);
		page.addContent(otextArea);
		
		
		return page;		
	}
});