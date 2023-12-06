import IImageRepository from "../interfaces/IImageRepository.ts";
import axios from "axios";
import {API_HOST} from "../../../config/config.ts";
import ImageDto from "../../../entities/ImageDto.ts";

class ImageRepository implements IImageRepository {
  getImage(id: number, filename: string): Promise<ImageDto> {
    return axios.get(`${API_HOST}/Images?id=${id}&filename=${filename}`).then((res) => res.data);
  }
}

export default ImageRepository;