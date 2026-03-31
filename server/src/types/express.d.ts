declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        email: string;
        role: "USER" | "ADMIN";
      };
    }
  }
}
export {};
