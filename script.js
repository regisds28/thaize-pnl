jQuery(function ($) {
  $('.rvs-container').rvslider();
});

$(document).ready(function () {
  $('#retrair').hide();
  $('#expandir').show();
  $('#expandir').on('click', function () {
    $('#retrair').show();
    $('#expandir').hide();
  });
  $('#retrair').on('click', function () {
    $('#retrair').hide();
    $('#expandir').show();
  });
});
