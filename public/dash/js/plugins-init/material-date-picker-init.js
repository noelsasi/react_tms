(function ($) {
  "use strict";

  // MAterial Date picker
  $("#mdate").scholarvaultMaterialDatePicker({
    weekStart: 0,
    time: false,
  });
  $("#timepicker").scholarvaultMaterialDatePicker({
    format: "HH:mm",
    time: true,
    date: false,
  });
  $("#date-format").scholarvaultMaterialDatePicker({
    format: "dddd DD MMMM YYYY - HH:mm",
  });

  $("#min-date").scholarvaultMaterialDatePicker({
    format: "DD/MM/YYYY HH:mm",
    minDate: new Date(),
  });
})(jQuery);
