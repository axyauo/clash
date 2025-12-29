import { Router, Request, Response } from "express";
import { registerSchema } from "../validation/authValidation.js";
import { formatError, ZodError } from "zod";
import prisma from "../config/database.js";

const router = Router();

// Register route
router.post("/register", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const payload = registerSchema.parse(body);
    let user = await prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (user) {
      return res
        .status(422)
        .json({ message: "User already exists with this email" });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formatError(error);
      return res.status(422).json({ message: "Invalid Data", errors });
    }
    return res
      .status(500)
      .json({ message: "Something went wrong. please try again!" });
  }
});

export default router;
