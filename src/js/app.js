import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}).catch((error) => {
  console.error(error);
});