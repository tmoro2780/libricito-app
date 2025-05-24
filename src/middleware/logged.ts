import { Request, Response, NextFunction } from "express";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    if (!req.session.user) {
        return res.status(401).json({ ok: false, error: "No se otorgó el token" });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        req.username = payload.username;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token not valid" });
    }
}