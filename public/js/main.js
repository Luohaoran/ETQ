$(function () {

  'use strict';

  var $distpicker = $('#distpicker');


  $('#reset').click(function () {
    $distpicker.distpicker('reset');
  });

  $('#reset-deep').click(function () {
    $distpicker.distpicker('reset', true);
  });

  $('#destroy').click(function () {
    $distpicker.distpicker('destroy');
  });

  $('#distpicker3').distpicker({
    province: '四川省',
    city: '成都市',
    district: '锦江区'
  });
});
