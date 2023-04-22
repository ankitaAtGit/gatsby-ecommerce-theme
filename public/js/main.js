var userloveq = [];
function userlove(method, args) {
  !!userloveMethods && userloveMethods[method]
    ? userloveMethods[method](args)
    : userloveq.push({ method: method, args: args });
}
(function (l, o, v, e) {
  if (l['a_id']) {
    return;
  }
  console.log('main');
  l['a_id'] = e;
  l['dm'] = l.location.hostname;
  l[v] = l[v] || [];
  l[o] = {};
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://cdn.userlove.io/wrapper.dev.js?v=' + Date.now();
  var t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
})(window, 'userloveMethods', 'userloveDL', '4ZHFVL8VB6');
