function hiFiveRouter(routerObj){
    //document.title = "Hello World";
    //Setting the function variables
    var browserURL,pageObj,grabPageUrl,realPageTitle;

    //Grab the url from the browser
    browserPageURL = String(window.location).split("?=")[1];
    
    
    //Grab the data from the object to be used
    pageObj = routerObj();  
    
    //Determine the router object key to use

    if(browserPageURL === undefined){
       browserPageURL = "home"; 
    }
   
   realPageTitle = document.title;
   //Determine if there is a title to be included in the browser
    if(pageObj[browserPageURL].title !== null){
        document.title = realPageTitle +"-"+pageObj[browserPageURL].title;
    }
    
    
    //Fill in new object to pass to the import page function
    grabPageUrl ={};
    grabPageUrl.baseUrl = String(window.location).split("?=")[0];
    
    //determine if browser URL is empty and user should go home
    grabPageUrl.grabUrl = pageObj[browserPageURL].url;
    grabPageUrl.importID = pageObj[browserPageURL].divID;

    grabPageUrl.pageInputController = pageObj[browserPageURL].pageController;
    
    //call function to get page from folder
    importpage(grabPageUrl);
     
     
     
    //pull page information
    function importpage(importPageUrl){

        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
           document.getElementById(importPageUrl.importID).innerHTML =this.responseText;
           if(importPageUrl.pageInputController !== null && importPageUrl.pageInputController !== undefined){importPageUrl.pageInputController();}
        }
        xhr.open("GET", importPageUrl.baseUrl+importPageUrl.grabUrl);
        xhr.responseType = "text";
        xhr.send();
    }
}
