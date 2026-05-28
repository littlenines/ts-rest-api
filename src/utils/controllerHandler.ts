import { Request, Response } from "express";
import { sendError } from "@utils/response";
import { NotFoundError } from "@utils/notFoundError";
import { STATUS } from "@constants/httpStatus";

export const controllerHandler =
    (fn: (req: Request<any>, res: Response) => void, errorMessage: string) => (req: Request<any>, res: Response) => {
        try {
            fn(req, res);
        } catch (error) {
            if (error instanceof NotFoundError) {
                sendError(res, error.message, STATUS.NOT_FOUND);
            } else {
                sendError(res, `${errorMessage}: ${(error as Error).message}`);
            }
        }
    };
