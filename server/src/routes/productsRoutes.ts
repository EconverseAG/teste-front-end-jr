import { Router } from 'express';
import { getAllProducts, getProductsById, getProductsByName} from '../controllers/productControllers'

const router = Router();

router.get('/products', getAllProducts);
router.get('/:id', getProductsById);
router.get('/:name', getProductsByName);


export default router;