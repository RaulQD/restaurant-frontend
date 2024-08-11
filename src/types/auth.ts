
export type Authentication = {
  email:    string;
  password: string;
}

export type User = {
  email:     string;
  password:  string;
  firstName: string;
  lastName:  string;
  dni:       string;
  phone:     string;
  address:   string;
  roles:     string[];
  createdAt: Date;
  updatedAt: Date;
  id:        string;
}

export type UserLoginForm = Pick<User, 'email' | 'password'>

export type UserRegisterform = Pick<User, 'email' | 'password' | 'firstName' | 'lastName' | 'dni' | 'phone' | 'address'>