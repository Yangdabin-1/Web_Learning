function dataFomat(str){
  const time = new Date(str)

  const y = time.getFullYear()
  const m = fixzero(time.getMonth()+1)
  const d = fixzero(time.getDate())
  const week =fixzero( time.getDay())

  const h = fixzero(time.getHours())
  const mm = fixzero(time.getMinutes())
  const s = fixzero(time.getSeconds())

  return `${y}/${m}/${d} - 周${week} ${h}:${m}:${s}`
}
function fixzero(time){
  return time<9?'0'+time:time
}
module.exports = {
  dataFomat
}