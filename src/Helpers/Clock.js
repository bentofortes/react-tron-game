function frameCounter(cond, update) {
  var t = new Date();
  var start = t.getTime();

  while(true){
    if (!cond) break;
    if (t.getTime() - start >= 20) {
      start += 20;
      update();
    }
  }

  return
}

export default frameCounter