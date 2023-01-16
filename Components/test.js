// function scriptLoader(path, callback) {
//     var script = document.createElement('script');
//     script.type = 'module';
//     script.src = path;
//     script.async = true;
//     script.onload = function() {
//         if(typeof(callback) == "function") callback();
//     }
//     try {
//         var scriptOne = document.getElementsByTagName('script')[0];
//         scriptOne.parentNode.insertBefore(script, scriptOne);
//     } catch (e) {
//         document.getElementsByTagName('head')[0].appendChild(script);
//     }
// }

// scriptLoader('/Components/fireworks.js');

// inputType.addEventListener("onclick", "window.location.href='/Components/fireworks.js");
// scriptLoader('/Components/pagoda.js');
// function include(src, cb) {
//     const arr = (src instanceof Array) ? src : [{
//       'src': src,
//       'cb': cb
//     }];
//     arr.forEach(function(item) {
//       _include(item.src, item.cb);
//     })
  
//     function _include(src, cb) {
//       var script = document.createElement("SCRIPT");
//       script.src = src;
//       script.async = true;
//       script.type = 'text/javascript';
//       script.onload = function() {
//         if (cb) cb()
//       }
//       document.getElementsByTagName("head")[0].appendChild(script);
//     }
//   }
  
//   include("/Components/fireworks.js");
