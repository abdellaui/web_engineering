function getUserInfo() {
  $.ajax({
    url: 'http://127.0.0.1:8080/users',
    type: 'GET',
    success: function (jsonData) {
      
      var tBody = $('<tbody>');
      $.each(jsonData, function (i, e) {

        var currTr = $('<tr>');
        if (i % 2 == 0) {
          currTr.addClass('even');
        }
        for (var key in e) {
          currTr.append($('<td>').text(e[key]));
        }
        tBody.append(currTr);
      });
      $('table').append(tBody);
    }
  }).done(function(){
      sortable.init();
  });

}


var sortable = {
  init: function (settings) {
    // default settings
    sortable.config = {
      $obj: $('table#sortable'),
    }
    // Ability to overwrite default settings
    $.extend(sortable.config, settings);
    // check if config.$obj is not empty after overwriting
    if (!sortable.config.$obj.length) return;
    // collect all table rows from sortable table
    var $obj = $('table#sortable');
    sortable.tableRows = $('tbody tr', $obj);
    sortable.onReady();
  },
  execute: function ($this, index) { // $this is the clicked th element
    // get all table rows
    var elements = sortable.tableRows.get();
    // is this a numeric column?
    var isNumeric = $this.hasClass("numeric");

    
    elements.sort(function(a, b){
      var aVal = $(a).children("td").eq(index).text();
      var bVal = $(b).children("td").eq(index).text();
      if(sortable.asc == true){
        return bVal<aVal;
      }else{
        return aVal<bVal;
      }
    });

    // push sorted tableRows back to table
    for (var tr in elements) {
      $('tbody', sortable.config.$obj).append(elements[tr]);
    }
  },
  onReady: function () {
    sortable.config.$obj.each(function () {
      // alternating styles for even and odd rows
      $('tbody tr:even', sortable.config.$obj)
        .addClass('even');
      // collect table header from sortable table
      var th = $('th', sortable.config.$obj);
      th.each(function (index) {
        sortable.asc = false;
        $(this).click(function () {
          // switch ascending/descending state for clicked table header
          sortable.asc ? sortable.asc = false : sortable.asc = true;
          th.removeClass('desc asc');
          sortable.asc ? $(this).addClass('asc') : $(this)
            .addClass('desc');
          sortable.execute($(this), index);
          $('tbody tr', sortable.config.$obj)
            .removeClass('even');
          $('tbody tr:even', sortable.config.$obj)
            .addClass('even');
        });
      });
    });
  }
}

$(document).ready(function () {
  getUserInfo();
});