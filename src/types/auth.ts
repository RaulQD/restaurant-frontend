
export type Authentication = {
  email:    string;
  password: string;
}

export type User = {
  email:     string;
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
