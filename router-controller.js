/*
Controller
Router
Last updated: 03/21/2019
*/

hiFiveRouter(
    function(){
        var linkObj;
        linkObj= {
          "home":{
              "url":"views/home.html",
              "pageController":null,
              "divID":"pageContent",
              "title":null,
          },
          "blog":{
              "url":"views/blog.html",
              "pageController":controllerBlog,
              "divID":"pageContent",
              "title":"Blog"
          },
          "webmaster":{
              "url":"views/webmaster-form.html",
              "pageController":null,
              "divID":"pageContent",
              "title":"Contact the Webmaster"
          }
        };
        return linkObj;
});
