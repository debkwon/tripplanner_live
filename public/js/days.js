var itineraries = [];

function saveDay () {
  // grab the day number from the currentDay 
  var day = $("#currentDay").text().slice(4);
  // grab the hotels from children of id="hotelItem"
  console.log($("#hotelItem").children('span'));
  if (itineraries)
  itineraries.push([
    [day],
    [$("#hotelItem").children('span')],
    [$("#restaurantItem").children('span')],
    [$("#activityItem").children('span')]
    ]);
  // grab the restaurants from children of id="restaurantItem"
  // grab the activities from children of id="acvitityItem" 
  // store all in an array
  // wipe those items from the html 
  console.log(itineraries);
}

