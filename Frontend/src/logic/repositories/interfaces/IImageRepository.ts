import ImageDto from "../../../entities/ImageDto.ts";

interface IImageRepository {
  getImage(id: number, filename: string): Promise<ImageDto>;
}

export default IImageRepository;