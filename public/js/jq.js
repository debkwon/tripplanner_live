$(document).ready(function(){

  var maps = initializeMap();

  $('#addHotel').on('click', function(){
    var hotel = $("#hotel-choices option:selected").text();
    $('#hotelItem').append("<span class='title'>"+hotel+"</span>");
    maps.drawMarker('hotel', [40.705086, -74.009151]);
  });

  $('#addRestaurant').on('click', function(){
    var restaurant = $("#restaurant-choices option:selected").text();
    $('#restaurantItem').append("<span class='title'>"+restaurant+"</span>");
  });

  $('#addActivity').on('click', function(){
    var activity = $("#activity-choices option:selected").text();
    $('#activityItem').append("<span class='title'>"+activity+"</span>");
  });

  $('#removeHotel').on('click', function () {
    var hotel = $("#removeHotel").next();
    $(hotel).remove();
  });

  $('#removeRestaurant').on('click', function () {
    var restaurant = $("#removeRestaurant").next();
    $(restaurant).remove();
  });

  $('#removeActivity').on('click', function () {
    var activity = $("#removeActivity").next();
    $(activity).remove();
  });

  // $('#day-add').on('click', function() {
  //   console.log($('day-add').prev().text());
    // $('#day-add').append("<button class='title'>"+hotel+"</button>");
  // })

});

