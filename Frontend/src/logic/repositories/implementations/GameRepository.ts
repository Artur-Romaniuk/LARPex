import IGameRepository from "../interfaces/IGameRepository.ts";
import axios from "axios";
import { API_HOST } from "../../../config/config.ts";
import CreateGameDto from "../../../entities/CreateGameDto.ts";
import EditGameDto from "../../../entities/EditGameDto.ts";
import GameGetDto from "../../../entities/GameGetDto.ts";

class GameRepository implements IGameRepository {
  addGame(game: CreateGameDto): Promise<GameGetDto> {
    return axios.post(API_HOST + "/Game", game).then((response) => {
      return response.data;
    });
  }

  getGameById(id: number): Promise<GameGetDto> {
    return axios.get(API_HOST + "/Game/getGame/" + id).then((response) => {
      return response.data;
    });
  }

  getGames(): Promise<GameGetDto[]> {
    return axios.get(API_HOST + "/Game/getGames").then((response) => {
      return response.data;
    });
  }

  removeGame(id: number): Promise<boolean> {
    return axios.delete(API_HOST + "/Game?id=" + id).then((response) => {
      return response.data;
    });
  }

  updateGame(game: EditGameDto): Promise<boolean> {
    return axios.put(API_HOST + "/Game", game).then((response) => {
      return response.data;
    });
  }
}

export default GameRepository;
