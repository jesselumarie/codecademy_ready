$(document).ready(function() {
// More jQuery code goes in here later
  $('#hello').on('click', function (){
    $(this).fadeOut(1000);
  })


  function updateInformation() {
    $.ajax({
      url: 'https://api-example.org/info.json',
      datatype: 'jsonp',
      success: function(data) {
        $('div').append(data.number);
      }
    });
 }
});
