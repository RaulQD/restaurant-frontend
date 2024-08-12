
export type Authentication = {
  email:    string;
  password: string;
}

export type User = {
  email:           string;
  password:        string;
  confirmPassword: string;
  firstName:       string;
  lastName:        string;
  dni:             string;
  phone:           string;
  address:         string;
  roles:           string[];
  createdAt:       Date;
  updatedAt:       Date;
  id:              string;
}
export type ConfirmToken = {
  token:           string;
  
}

export type UserLoginForm = Pick<User, 'email' | 'password'>

export type UserRegisterform = Pick<User, 'email' | 'password' | 'firstName' | 'lastName' | 'dni' | 'phone' | 'address'>
export type ForgotPasswordForm = Pick<User, 'email'>
export type ResetPasswordForm = Pick<User, 'password' | 'confirmPassword'>