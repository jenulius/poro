export function msConversion(t) {
  let n = Math.floor(t / 1e3),
    o = Math.floor(n / 3600)
  n -= 3600 * o
  let r = Math.floor(n / 60)
  return (
    (n = ('00' + (n = '' + (n -= 60 * r))).substring(n.length)),
    o > 0
      ? o + ':' + (r = ('00' + (r = '' + r)).substring(r.length)) + ':' + n
      : r + ':' + n
  )
}
