

function superbowlWin(array) {
  let outcome = array.find(function(superbowl){
    return superbowl.result === "W"
  })
  if (outcome == undefined){
    return undefined
  }
  else {
    return outcome.year
  }
}