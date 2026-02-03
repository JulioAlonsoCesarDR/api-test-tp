import { Request, Response } from 'express';
import Address from '../models/Address.model';

export const getAddresses = async (req: Request, res: Response) => {
    try {
        const addresses = await Address.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        res.json({data: addresses})
    } catch (error) {
        console.log(error)
    }
}

export const createAddress = async (req : Request, res : Response) => {
    try {
        const address = await Address.create(req.body)
        res.json({data: address})
    } catch (error) {
        console.log(error)
    }
}

export const deleteAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    const idToFind = Array.isArray(id) ? id[0] : id;
    const address = await Address.findByPk(idToFind);

    if(!address) {
        return res.status(404).json({
            error: 'Dirección No Encontrada'
        })
    }

    await address.destroy()
    res.json({data: 'Dirección Eliminada'})
}