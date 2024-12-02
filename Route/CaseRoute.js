import { AddCase } from "../controller/caseController";
import express from express

const router = express.Router();

router.post(
    '/case/add',
    authenticateToken,AddCase);

export default router;