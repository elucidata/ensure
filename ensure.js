// Generated by CoffeeScript 1.6.1
(function() {
  var libs, load_script, loader,
    __slice = [].slice;

  libs = {
    jquery: {
      url: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
      test: function() {
        return window.jQuery != null;
      }
    },
    jqueryui: {
      url: '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js',
      test: function() {
        return window.jQuery.Widget != null;
      }
    },
    webfont: {
      url: '//ajax.googleapis.com/ajax/libs/webfont/1.1.2/webfont.js',
      test: function() {
        return window.WebFont != null;
      }
    },
    angular: {
      url: '//ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js',
      test: function() {
        return window.angular != null;
      }
    },
    backbone: {
      url: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min.js',
      test: function() {
        return window.Backbone != null;
      }
    },
    underscore: {
      url: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js',
      test: function() {
        return window._ != null;
      }
    },
    marionette: {
      url: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.0.0-rc4-bundled/backbone.marionette.min.js',
      test: function() {
        return window.Backbone.Marionette != null;
      }
    },
    zepto: {
      url: '//cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js',
      test: function() {
        return window.Zepto != null;
      }
    }
  };

  load_script = function(name, callback) {
    var def, protocol, script, url;
    protocol = location.protocol === 'file:' ? "http:" : '';
    def = libs[name];
    if (def == null) {
      return callback(new Error("Library not found. (" + name + ")"));
    }
    if (def.test()) {
      return callback(null);
    }
    url = def.url;
    script = document.createElement('script');
    script.type = "text/javascript";
    if (loader.defer) {
      script.defer = true;
    }
    if (loader.async) {
      script.async = true;
    }
    script.onload = function(e) {
      return callback(null);
    };
    script.onerror = function(e) {
      return callback(new Error("Could not load external resource: " + name + " from " + url));
    };
    script.src = "" + protocol + url;
    script.onreadystatechange = function() {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        return callback(null);
      }
    };
    document.getElementsByTagName('HTML')[0].appendChild(script);
    return script;
  };

  loader = function() {
    var callback, libs, load_handler, nextLib;
    libs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    callback = typeof libs.slice(-1)[0] === 'function' ? libs.pop() : function(err) {
      if (err != null) {
        throw err;
      } else {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log("Library loading complete.") : void 0 : void 0;
      }
    };
    nextLib = libs.shift();
    load_handler = function(err) {
      if (err != null) {
        return callback(err);
      }
      if (libs.length === 0) {
        return callback(null);
      } else {
        nextLib = libs.shift();
        return load_script(nextLib, load_handler);
      }
    };
    load_script(nextLib, load_handler);
    return null;
  };

  loader.async = true;

  loader.defer = false;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = loader;
  } else {
    this.loader = loader;
  }

}).call(this);
