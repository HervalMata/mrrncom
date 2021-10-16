import {Request, Response} from "express";
import {container} from "tsyringe";
import {UploadProductImagesService} from "../services/UploadProductImagesService";

interface IFiles {
    filename: string;
}

class UploadProductImagesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const images = req.files as IFiles[];
        const fileNames = images.map((file) => file.filename);
        const uploadProductImagesService = container.resolve(UploadProductImagesService);
        await uploadProductImagesService.execute({
            product_id: id, images_name: fileNames,
        });
        return res.status(201).send();
    }
}

export { UploadProductImagesController };