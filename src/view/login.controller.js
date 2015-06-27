sap.ui.controller("services.src.view.login", {
	 
	 Consultar: function(){
	 	var text = sap.ui.getCore().byId("textArea");
	 	var username = sap.ui.getCore().byId("inputUsername").getValue();
	 	var password = sap.ui.getCore().byId("inputPassword").getValue();
	 	
	 /*	var soapMessage = 
	 		'<?xml version="1.0" encoding="utf-8"?>'
            + '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sfobject.sfapi.successfactors.com">'
            + '<soap:Header/>'
            + '<soap:Body>'
            + '<urn:login>'
            + '<urn:credential>'
            + '<urn:companyId></urn:companyId>'
            + '<urn:username>' + username + '</urn:username>'
            + '<urn:password>' + password + '</urn:password>'
            + '<SOAP-ENV:Body>'
            + '</yq1:helloWorld4>'
            + '</SOAP-ENV:Body>'
            + '</SOAP-ENV:Envelope>' ;
        $.ajax({
        	url : 'https://apisalesdemo4.successfactors.com:443/sfapi/v1/soap12',
            type : "GET",
            dataType : "xml",
            data : soapMessage,
            contentType : "text/xml; charset=\"utf-8\"",
            xhrFields: {withCredentials: true},
            success : function(data, textStatus, jqXHR) {
            	//console.log("data"+data);
            	text.setValue(data);
            },
            error: function() {
            	text.setValue("ERROR!!!");
            }
		});
		
		function uicontrols(){
			parser=new DOMParser();
            xmlDoc=parser.parseFromString(response,"text/xml");
            var returnVal = xmlDoc.getElementsByTagName("The tag from response xml which you want")[0].childNodes[0].nodeValue;
            textArea.setValue(returnVal); //set the value to textArea
        }*/
	 	 
	 	 var headers = {
                //"Authorization" : "Basic " + btoa(applicationContext.registrationContext.user + ":" + applicationContext.registrationContext.password),
        //        "X-SMP-APPCID"  : applicationContext.applicationConnectionId
        	"Access-Control-Allow-Origin": "*",
        	"Content-Type": "application/x-www-form-urlencoded",
            "X-CSRF-Token":"Fetch"
            };
	 	
	 	//Initialize the Model
		var uri = "proxy/https://apisalesdemo4.successfactors.com:443/sfapi/v1/soap";
		var oModel = new sap.ui.model.odata.ODataModel(uri, {json: false}, username, password, headers, false, false);
		//var oModel = new sap.ui.model.odata.ODataModel(uri, {json : true}, user, password, headers, false, false, false);
	
	 	oModel.setHeaders(headers);
      //  oModel.read("/errorCode", onSuccess); 
        
	 	
	 	function onSuccess(result) {
	 				alert(result);
	 				//text.setValue(result);
                    //sap.ui.getCore()....getView().getModel("Brands").setData(result);
                    };
	 	
		//Set the Model to the Table

		//text.setModel(oModel);

       // oModel.setHeaders(headers);
        //oModel.read("/Brand", onSuccess);   


	//	var oLabel = sap.ui.getCore().byId("label");
	//	oLabel.setModel(oModel);
		// Filter the DATA
		//var FilterOperator = sap.ui.model.FilterOperator;
		//var filter = new sap.ui.model.Filter("bankCountry",FilterOperator.EQ, "AR");
		//Bind the Data to the Table
		//oTable.bindRows("/BankCollection", null, null,[ filter ]);
	//	oTable.bindRows("/BankCollection", null, null,[ ]);
		
	 }
});