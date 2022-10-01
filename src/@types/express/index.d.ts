export {};

declare global {
    namespace Express {
        interface Request {
            userId: string;
            toEmailAdress: string,
            emailSubject: string,
            emailMessage: string
            user: any;
        }
    }
}