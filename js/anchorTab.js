var anchorTab = (function(window, $) {

  var _location = window.location,
      _url = [_location.protocol, '//', _location.host, _location.pathname].join(''),
      _hash = (String(_location.href).match(/(#.+)$/)),
      _id = _hash && _hash[0];

  // defulat settings
  var _settings = {
    tabSelector: '.nav',
  };

  function _render() {
    var tabSelector = _settings.tabSelector;

    if(_id) $(tabSelector).find('a[href="' + _id + '"]').tab('show');

    $(tabSelector).on('click', 'a', function(e) {
      e.preventDefault();
      var $this = $(this);
      $this.tab('show');
      _location.href = _url + $this.attr('href');
    });
  }

  function init(settings) {
    $.extend(_settings, settings);
    _render();
  }

  return {
    init: init
  };

})(window, jQuery);
