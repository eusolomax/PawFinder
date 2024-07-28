import { Router } from 'express';
import { UserController } from '@/controllers/userController';

const router = Router();

router.post("/user/create", UserController.createUser)
router.delete("/user/delete", UserController.deleteUser)
router.put("/user/update", UserController.updateUser)

export { router as userRoutes };
