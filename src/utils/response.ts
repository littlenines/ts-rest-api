import { Response } from "express";
import { STATUS } from "@constants/httpStatus";

export const sendSuccess = (res: Response, data: unknown, status: number = STATUS.OK) =>
    res.status(status).json({ success: true, data });

export const sendError = (res: Response, message: string, status: number = STATUS.SERVER_ERROR) =>
    res.status(status).json({ success: false, message });

export const sendDeleted = (res: Response) =>
    res.status(STATUS.NO_CONTENT).send();
