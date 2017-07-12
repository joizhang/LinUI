(function(){
  var id = '__jump__menu__';
  var count = 0;
  $("#side-menu").text('');

  $('#content').find('h2').each(function() {

    var $section = $(this);
    var lis = $section.nextUntil("h2", 'h3');

    /*---------------------
     * Create menu item
     *--------------------*/
    var li = $('<li/>');
    var a = $('<a/>', {
      text: $section.text(),
      href: '#' + id + count
    });
    a.appendTo(li);

    /*---------------------
     * Add anchor
     *--------------------*/
    $section.attr('id', id + count);
    count++;

    if (lis.length) {
      var ul = $('<ul/>');
      lis.each(function() {
      /*---------------------
       * Add anchor
       *--------------------*/
        $(this).attr('id', id + count);

        /*---------------------
         * Create menu item
         *--------------------*/
        var lili = $('<li/>');
        var a = $('<a/>', {
          text: $(this).text(),
          href: '#' + id + count
        });
        a.appendTo(lili);
        lili.appendTo(ul);
        count++;
      });
      ul.appendTo(li);
    }

    $('#side-menu').append(li);
  });
})();