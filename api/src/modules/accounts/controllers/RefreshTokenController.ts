import {Request, Response} from "express";
import {container} from "tsyringe";
import {RefreshTokenService} from "../services/RefreshTokenService";

class RefreshTokenController {
    async handle(req: Request, res: Response): Promise<Response> {
        const token = req.body.token || req.headers['x-access-token'] || req.query.token;
        const refreshTokenService = container.resolve(RefreshTokenService);
        const refreshToken = await refreshTokenService.execute(token);
        return res.status(200).json(refreshToken);
    }
}

export { RefreshTokenController };