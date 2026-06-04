import Link from "next/link";

type Coordinates = {
  lat: number;
  lng: number;
};

type Address = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
};

type Hair = {
  color: string;
  type: string;
};

type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type Company = {
  department: string;
  name: string;
  title: string;
  address: Address;
};

type Crypto = {
  coin: string;
  wallet: string;
  network: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "female" | "male";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: "admin" | "moderator" | "user";
};

async function getUser(): Promise<{ users: User[] }> {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
}

export default async function UserPage() {
  const { users } = await getUser();

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">User List</h1>
      {users.length === 0 ? (
        <p className="text-gray-500">No User</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {users.map(({ id, firstName }) => (
            <li key={id}>
              <Link
                href={`/users/${id}`}
                className="block rounded-lg border border-gray-200 bg-white p-4 text-center font-medium text-gray-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
              >
                {firstName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
