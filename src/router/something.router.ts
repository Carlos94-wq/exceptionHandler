import { CustomError } from './../error/CustomError';
import { Request, Response, Router } from 'express';
import HTTP_STATUS_CODE from '../error/statusCode';
const router = Router();

router.get('/', ( req: Request, res: Response ) => {

    throw new CustomError('Error de prueba', HTTP_STATUS_CODE.badRequest);
    
})

export default router;