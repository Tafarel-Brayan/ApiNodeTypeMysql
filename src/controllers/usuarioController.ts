import { Request, Response } from 'express';
import * as HttpStatus from "http-status";
import UsuarioService from "../services/UsuarioService";
import Helper from '../utils/Helper';


class UsuarioController{

    async get(req: Request, res:Response){

        await UsuarioService.all()
        .then(users => Helper.sendResponse(res, HttpStatus.OK, users))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));

    }

    async getById(req: Request, res:Response){
        
        const _id = req.params.id;
        await UsuarioService.findById(_id)
        .then(users => Helper.sendResponse(res, HttpStatus.OK, users))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
        
    }

    async create(req: Request, res:Response){
        res.send({msg:"TUDO TOP - POST"});
    }

}

export default new UsuarioController();