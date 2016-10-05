$(document).ready(function(){

  var map = initializeMap();
  

  $('#addHotel').on('click', function(){
    var hotel = $("#hotel-choices option:selected").text();
    var location = $("#hotel-choices option:selected").data('location').split(",");
    $('#hotelItem').append("<span class='title'>"+hotel+"</span>");
    drawMarker(map, 'hotel', location);
  });

  $('#addRestaurant').on('click', function(){
    var restaurant = $("#restaurant-choices option:selected").text();
    var location = $("#restaurant-choices option:selected").data('location').split(",");
    $('#restaurantItem').append("<span class='title'>"+restaurant+"</span>");
    drawMarker(map, 'restaurant', location);
  });

  $('#addActivity').on('click', function(){
    var activity = $("#activity-choices option:selected").text();
    var location = $("#activity-choices option:selected").data('location').split(",");
    $('#activityItem').append("<span class='title'>"+activity+"</span>");
    drawMarker(map, 'activity', location);
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

  $('#day-add').on('click', function() {
    var newDayNum = Number($('#day-add').prev().text()) + 1;
    var newId = "day" + newDayNum.toString();
    $("<button class='btn btn-circle day-btn' id='"+newId+"'>"+newDayNum+"</button>").insertBefore('#day-add');
  })

  $('.day-buttons').on('click', 'button', function(){
    var dayTitle;
    var id = $(this).attr('id');
    if (id !== "day-add") {
      dayTitle = "Day " + id.slice(3);
      $('#currentDay').text(dayTitle);
    }
    saveDay();
  })
});

