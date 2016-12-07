var NavTabs = {};
NavTabs.createEvents = function(tabs){

  if (typeof(tabs) !== "object" || tabs.length < 2){
    throw "NavTabs.createEvent() -- input must be an array of Tab objects"
  }

  var tab, tabPrev, tabNext;
  for(var i = 0; i < tabs.length; i++){

    // assign vars
    tab = tabs[i];
    tabPrev = undefined;
    tabNext = undefined;
    if (i > 0)
      tabPrev = tabs[i-1];
    if (i < tabs.length)
      tabNext = tabs[i+1];

    // connect "back" button
    if (typeof(tab.backButtonId) === "string" && tabPrev !== undefined){
      this.CreateEventListener(tab, tabPrev, tab.backButtonId);
    };

    // connect "next" button
    if (typeof(tab.nextButtonId) === "string" && tabNext !== undefined){
      this.CreateEventListener(tab, tabNext, tab.nextButtonId);
    };
  }
}
NavTabs.CreateEventListener = function(tabCurrent, tabNext, buttonId){
  $('#' + buttonId).click(function(){
    $('.nav-tabs a[href="#' + tabNext.tabId + '"]').tab('show');
  });
}



// NavTab = Data Structure
var NavTab = function(tabId, backButtonId, nextButtonId){
  // tabId is required
  // backButtonId & nextButtonId are optional (one must be present)
  if (typeof(tabId) !== "string" || (typeof(backButtonId) !== "string" && typeof(nextButtonId) !== "string")){
    throw 'new NavTab() -- DataType of input is incorrect';
  }

  this.tabId = tabId;

  if (typeof(backButtonId) === "string"){
    this.backButtonId = backButtonId;
  }
    
  if (typeof(nextButtonId) === "string"){
    this.nextButtonId = nextButtonId;
  } 
}
// toString method is for debugging
NavTab.prototype.toString = function(){
  var json = {"tab": this.tabId, "backButton": this.backButtonId, "nextButton": this.nextButtonId};
  return JSON.stringify(json);
}