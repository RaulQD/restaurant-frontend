
export type Authentication = {
  email:    string;
  password: string;
}

export type Auth = {
  email:           string;
  password:        string;
  confirmPassword: string;
  firstName:       string;
  lastName:        string;
  dni:             string;
  phone:           string;
  address:         string;
  roles:           UserRoles[];
  createdAt:       Date;
  updatedAt:       Date;
  id:              string;
}
export type ConfirmToken = {
  token:           string;
  
}

export type AuthLoginForm = Pick<Auth, 'email' | 'password'>

export type AuthRegisterform = Pick<Auth, 'email' | 'password' | 'firstName' | 'lastName' | 'dni' | 'phone' | 'address'>
export type ForgotPasswordForm = Pick<Auth, 'email'>
export type ResetPasswordForm = Pick<Auth, 'password' | 'confirmPassword'>
export type CurrentUser = Pick<Auth, 'firstName' | 'lastName' | 'dni' |'phone' | 'address' | 'email'>

export type User = {
  email:     string;
  firstName: string;
  lastName:  string;
  roles:     UserRoles[];
  id:        string;
  dni:       string;
  phone:     string;
  address:   string;
}
export type UserRoles = {
  name: string;
  id:   string;
}