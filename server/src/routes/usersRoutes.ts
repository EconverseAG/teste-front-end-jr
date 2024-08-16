import { Router } from 'express';
import { registerUser, loginUser, softDeleteUser, getUserById } from '../controllers/userControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const router: Router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', authMiddleware, getUserById);
router.patch('/delete/:id', authMiddleware, softDeleteUser);

export default router;




/* import {Router, Request, Response} from 'express';
import bcrypt from 'bcryptjs'
import { UserModel } from '../models/user';
import * as Errors from '../utils/errors';
import { SuccessResponse } from '../utils/success';
import { IUser } from '../models/user';
const router = Router();


router.post('/register', async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    try {
        const user = await UserModel.findOne({ username});

        if (user) {
            return res.status(400).json({ type: Errors.AlreadyExistsError });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedEmail = await bcrypt.hash(email, 10);

        const newUser = new UserModel({ username, password: hashedPassword, email: hashedEmail });
        await newUser.save();

        res.json({ type: SuccessResponse.userCreated});
    }   catch (error) {
        res.status(500).json({ type: Errors.InternalServerError });
    }
    });

    router.post('/login', async (req: Request, res: Response) => {
        const { username, password } = req.body;
        try {
            const user: IUser | null = await UserModel.findOne({ username });

            if(!user) {
                return res.status(400).json({ type: Errors.NotFoundError });
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if(!isPasswordMatch) {
                return res.status(400).json({ type: Errors.UnauthorizedError });
            }

            const token = jwt.sign({id: user._id}, "segredo")

        } catch (error) {
            res.status(500).json({ type: Errors.InternalServerError });
        }
    });


export {router as userRouter} */