function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000); // 1초
  return 'Dog';
}
const getRabbit = async () => {
  await sleep(500); // 0.5초
  return 'Rabbit';
}
const getTurtke = async () => {
  await sleep(3000); // 3초
  return 'Turtle';
}
async function process(){
  const first = await Promise.race([getDog(), getRabbit(), getTurtke()]);
  console.log(first);
}
process();
