import { Router } from 'express'
import { body, param } from 'express-validator'
import { handleInputErrors } from './middleware'
import { createAddress, deleteAddress, getAddresses } from './handlers/address'

const router = Router()

// Routing
router.get('/', getAddresses)

router.post('/',
    // Validación
    body('ip').notEmpty(),
    body('city').notEmpty(),
    body('region').notEmpty(),
    body('country_name').notEmpty(),
    body('postal').notEmpty(),
    body('country_code').notEmpty(),
    body('latitude').notEmpty(),
    body('longitude').notEmpty(),
    handleInputErrors,
    createAddress
)

router.delete('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteAddress
)

export default router