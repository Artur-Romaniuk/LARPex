import IGameRepository from "../interfaces/repositories/IGameRepository.ts";
import GameDto from "../../entities/GameDto.ts";
import axios from "axios";
import { API_HOST } from "../../config/config.ts";

class GameRepository implements IGameRepository {
  addGame(game: GameDto): Promise<GameDto> {
    return axios.post(API_HOST + "/Game", game).then((response) => {
      return response.data;
    });
  }

  getGameById(id: number): Promise<GameDto> {
    return axios.get(API_HOST + "/Game/getGame/" + id).then((response) => {
      return response.data;
    });
  }

  getGames(): Promise<GameDto[]> {
    return axios.get(API_HOST + "/Game/getGames").then((response) => {
      return response.data;
    });
  }

  removeGame(id: number): Promise<boolean> {
    return axios.delete(API_HOST + "/Game?id=" + id).then((response) => {
      return response.data;
    });
  }

  updateGame(game: GameDto): Promise<GameDto> {
    return axios.put(API_HOST + "/Game", game).then((response) => {
      return response.data;
    });
  }
}

export default GameRepository;
