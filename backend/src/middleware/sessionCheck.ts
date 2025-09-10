import { Request, Response, NextFunction } from "express";
import { Session } from "express-session";

export interface User {
    id: number;
    email: string;
};

export interface AuthenticatedRequest extends Request {
    session: Session & {
        user: User
    }
}

export class SessionCheck {
    allowIfUserIsLogged(req: Request, res: Response, next: NextFunction) {
        if (!req.session.user) {
            res.status(401).json({ ok: false, error: "No inició sesión" });
        } else
        if (req.session.user) {
            next();
        }
    }

    allowIfUserIsCommerceOwner(req: Request, res: Response, next: NextFunction) { // TO DO!!!!!!!
        if (!req.session.user) {
            res.status(401).json({ ok: false, error: "No inició sesión" });
        } else
        if (req.session.user) {
            next();
        }
    }

    allowIfUserIsUnlogged(req: Request, res: Response, next: NextFunction) {
        if (req.session.user) {
            res.status(401).json({ ok: false, error: "Ya inició sesión" });
        } else
        if (!req.session.user) {
            next();
        }
    }
}

