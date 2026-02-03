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
    const { ip } = req.body;
    try {
        // Buscar si ya existe la IP
        const existing = await Address.findOne({ where: { ip } });
        if (existing) {
            return res.status(400).json({ error: "La IP ya está registrada en la BD" });
        }
        const address = await Address.create(req.body)
        res.json({data: address});
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error interno del servidor" });
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