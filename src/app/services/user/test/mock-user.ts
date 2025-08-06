import { Address, Company, User } from '../model';

let address: Address = {
  street: '123 Main St',
  suite: 'Apt 1',
  city: 'Anytown',
  zipcode: '12345',
  geo: { lat: '123', lng: '456' },
};

let company: Company = {
  name: 'Example Inc',
  catchPhrase: 'We do what we do',
  bs: 'We do what we do',
};

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'john.doe',
    email: 'john.doe@example.com',
    address: address,
    phone: '123-456-7890',
    website: 'https://www.example.com',
    company: company,
  },
  {
    id: 2,
    name: 'Jane Doe',
    username: 'jane.doe',
    email: 'jane.doe@example.com',
    address: address,
    phone: '123-456-7890',
    website: 'https://www.example.com',
    company: company,
  },
];
