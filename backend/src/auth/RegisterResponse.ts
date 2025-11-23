export interface RegisterResponse {
  success: boolean;
  message: string;
  user: {
    email: string;
    name: string;
  };
}
