import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import * as Errors from '../utils/errors';
import { SuccessResponse } from '../utils/success';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({type: Errors.AlreadyExistsError });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        res.status(201).json({type: SuccessResponse.userCreated });
    } catch (error) {
        res.status(500).json({type: Errors.InternalServerError  });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ type: Errors.NotFoundError });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({type: Errors.UnauthorizedError });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ type: Errors.InternalServerError });
    }
};

export const softDeleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId, { isActive: false }, { new: true });

        if (!user) return res.status(404).json({ type: Errors.NotFoundError });

        res.json({ message: 'Usuário desativado com sucesso' });
    } catch (error) {
        res.status(500).json({ type: Errors.InternalServerError });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('-password');

        if (!user) return res.status(404).json({type: Errors.NotFoundError });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: Errors.InternalServerError });
    }
};
