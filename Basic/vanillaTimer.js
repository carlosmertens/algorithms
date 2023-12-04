console.log('\n********** Vanilla SetTimeOut **********');

function delay(ms) {
  return new Promise((resolve) => {
    const futureTime = new Date().getTime() + ms;
    let currentTime = new Date().getTime();
    while (futureTime >= currentTime) {
      currentTime = new Date().getTime();
    }
    resolve(`${ms} ms has been completed!`);
  });
}

delay(3000).then((res) => {
  console.log(res);
});
