import read from './reader';
import json from './parser';
import GameSaving from './gameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
    .then(json)
    .then(jsonString => JSON.parse(jsonString))
    .then(data => new GameSaving(data.id, data.created , data.UserInfo))
    .catch(error => {
      throw new Error(`Error loading game saving: ${error}`);
    })
  }
}

