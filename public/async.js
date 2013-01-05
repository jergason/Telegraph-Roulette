(function(){var a={},b=this,c=b.async;typeof module!="undefined"&&module.exports?module.exports=a:b.async=a,a.noConflict=function(){return b.async=c,a};var d=function(a,b){if(a.forEach)return a.forEach(b);for(var c=0;c<a.length;c+=1)b(a[c],c,a)},e=function(a,b){if(a.map)return a.map(b);var c=[];return d(a,function(a,d,e){c.push(b(a,d,e))}),c},f=function(a,b,c){return a.reduce?a.reduce(b,c):(d(a,function(a,d,e){c=b(c,a,d,e)}),c)},g=function(a){if(Object.keys)return Object.keys(a);var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b};typeof process=="undefined"||!process.nextTick?a.nextTick=function(a){setTimeout(a,0)}:a.nextTick=process.nextTick,a.forEach=function(a,b,c){c=c||function(){};if(!a.length)return c();var e=0;d(a,function(d){b(d,function(b){b?(c(b),c=function(){}):(e+=1,e===a.length&&c(null))})})},a.forEachSeries=function(a,b,c){c=c||function(){};if(!a.length)return c();var d=0,e=function(){b(a[d],function(b){b?(c(b),c=function(){}):(d+=1,d===a.length?c(null):e())})};e()},a.forEachLimit=function(a,b,c,d){d=d||function(){};if(!a.length||b<=0)return d();var e=0,f=0,g=0;(function h(){if(e===a.length)return d();while(g<b&&f<a.length)f+=1,g+=1,c(a[f-1],function(b){b?(d(b),d=function(){}):(e+=1,g-=1,e===a.length?d():h())})})()};var h=function(b){return function(){var c=Array.prototype.slice.call(arguments);return b.apply(null,[a.forEach].concat(c))}},i=function(b){return function(){var c=Array.prototype.slice.call(arguments);return b.apply(null,[a.forEachSeries].concat(c))}},j=function(a,b,c,d){var f=[];b=e(b,function(a,b){return{index:b,value:a}}),a(b,function(a,b){c(a.value,function(c,d){f[a.index]=d,b(c)})},function(a){d(a,f)})};a.map=h(j),a.mapSeries=i(j),a.reduce=function(b,c,d,e){a.forEachSeries(b,function(a,b){d(c,a,function(a,d){c=d,b(a)})},function(a){e(a,c)})},a.inject=a.reduce,a.foldl=a.reduce,a.reduceRight=function(b,c,d,f){var g=e(b,function(a){return a}).reverse();a.reduce(g,c,d,f)},a.foldr=a.reduceRight;var k=function(a,b,c,d){var f=[];b=e(b,function(a,b){return{index:b,value:a}}),a(b,function(a,b){c(a.value,function(c){c&&f.push(a),b()})},function(a){d(e(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};a.filter=h(k),a.filterSeries=i(k),a.select=a.filter,a.selectSeries=a.filterSeries;var l=function(a,b,c,d){var f=[];b=e(b,function(a,b){return{index:b,value:a}}),a(b,function(a,b){c(a.value,function(c){c||f.push(a),b()})},function(a){d(e(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};a.reject=h(l),a.rejectSeries=i(l);var m=function(a,b,c,d){a(b,function(a,b){c(a,function(c){c?(d(a),d=function(){}):b()})},function(a){d()})};a.detect=h(m),a.detectSeries=i(m),a.some=function(b,c,d){a.forEach(b,function(a,b){c(a,function(a){a&&(d(!0),d=function(){}),b()})},function(a){d(!1)})},a.any=a.some,a.every=function(b,c,d){a.forEach(b,function(a,b){c(a,function(a){a||(d(!1),d=function(){}),b()})},function(a){d(!0)})},a.all=a.every,a.sortBy=function(b,c,d){a.map(b,function(a,b){c(a,function(c,d){c?b(c):b(null,{value:a,criteria:d})})},function(a,b){if(a)return d(a);var c=function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0};d(null,e(b.sort(c),function(a){return a.value}))})},a.auto=function(a,b){b=b||function(){};var c=g(a);if(!c.length)return b(null);var e={},h=[],i=function(a){h.unshift(a)},j=function(a){for(var b=0;b<h.length;b+=1)if(h[b]===a){h.splice(b,1);return}},k=function(){d(h.slice(0),function(a){a()})};i(function(){g(e).length===c.length&&(b(null,e),b=function(){})}),d(c,function(c){var d=a[c]instanceof Function?[a[c]]:a[c],g=function(a){if(a)b(a),b=function(){};else{var d=Array.prototype.slice.call(arguments,1);d.length<=1&&(d=d[0]),e[c]=d,k()}},h=d.slice(0,Math.abs(d.length-1))||[],l=function(){return f(h,function(a,b){return a&&e.hasOwnProperty(b)},!0)&&!e.hasOwnProperty(c)};if(l())d[d.length-1](g,e);else{var m=function(){l()&&(j(m),d[d.length-1](g,e))};i(m)}})},a.waterfall=function(b,c){c=c||function(){};if(!b.length)return c();var d=function(b){return function(e){if(e)c(e),c=function(){};else{var f=Array.prototype.slice.call(arguments,1),g=b.next();g?f.push(d(g)):f.push(c),a.nextTick(function(){b.apply(null,f)})}}};d(a.iterator(b))()},a.parallel=function(b,c){c=c||function(){};if(b.constructor===Array)a.map(b,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);c.length<=1&&(c=c[0]),b.call(null,a,c)})},c);else{var d={};a.forEach(g(b),function(a,c){b[a](function(b){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),d[a]=e,c(b)})},function(a){c(a,d)})}},a.series=function(b,c){c=c||function(){};if(b.constructor===Array)a.mapSeries(b,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);c.length<=1&&(c=c[0]),b.call(null,a,c)})},c);else{var d={};a.forEachSeries(g(b),function(a,c){b[a](function(b){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),d[a]=e,c(b)})},function(a){c(a,d)})}},a.iterator=function(a){var b=function(c){var d=function(){return a.length&&a[c].apply(null,arguments),d.next()};return d.next=function(){return c<a.length-1?b(c+1):null},d};return b(0)},a.apply=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b.concat(Array.prototype.slice.call(arguments)))}};var n=function(a,b,c,d){var e=[];a(b,function(a,b){c(a,function(a,c){e=e.concat(c||[]),b(a)})},function(a){d(a,e)})};a.concat=h(n),a.concatSeries=i(n),a.whilst=function(b,c,d){b()?c(function(e){if(e)return d(e);a.whilst(b,c,d)}):d()},a.until=function(b,c,d){b()?d():c(function(e){if(e)return d(e);a.until(b,c,d)})},a.queue=function(b,c){var e=0,f={tasks:[],concurrency:c,saturated:null,empty:null,drain:null,push:function(b,e){b.constructor!==Array&&(b=[b]),d(b,function(b){f.tasks.push({data:b,callback:typeof e=="function"?e:null}),f.saturated&&f.tasks.length==c&&f.saturated(),a.nextTick(f.process)})},process:function(){if(e<f.concurrency&&f.tasks.length){var a=f.tasks.shift();f.empty&&f.tasks.length==0&&f.empty(),e+=1,b(a.data,function(){e-=1,a.callback&&a.callback.apply(a,arguments),f.drain&&f.tasks.length+e==0&&f.drain(),f.process()})}},length:function(){return f.tasks.length},running:function(){return e}};return f};var o=function(a){return function(b){var c=Array.prototype.slice.call(arguments,1);b.apply(null,c.concat([function(b){var c=Array.prototype.slice.call(arguments,1);typeof console!="undefined"&&(b?console.error&&console.error(b):console[a]&&d(c,function(b){console[a](b)}))}]))}};a.log=o("log"),a.dir=o("dir"),a.memoize=function(a,b){var c={},d={};b=b||function(a){return a};var e=function(){var e=Array.prototype.slice.call(arguments),f=e.pop(),g=b.apply(null,e);g in c?f.apply(null,c[g]):g in d?d[g].push(f):(d[g]=[f],a.apply(null,e.concat([function(){c[g]=arguments;var a=d[g];delete d[g];for(var b=0,e=a.length;b<e;b++)a[b].apply(null,arguments)}])))};return e.unmemoized=a,e},a.unmemoize=function(a){return function(){return(a.unmemoized||a).apply(null,arguments)}}})();