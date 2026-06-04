import Link from "next/link";
import { notFound } from "next/navigation";
import { User } from "../page";

async function getUser(id: string): Promise<User | null> {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  if (!user) notFound();

  const { firstName, lastName, age, gender, email } = user;

  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        {firstName} {lastName}
      </h1>

      <dl className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="flex justify-between p-4">
          <dt className="font-medium text-gray-500">First Name</dt>
          <dd className="text-gray-800">{firstName}</dd>
        </div>
        <div className="flex justify-between p-4">
          <dt className="font-medium text-gray-500">Last Name</dt>
          <dd className="text-gray-800">{lastName}</dd>
        </div>
        <div className="flex justify-between p-4">
          <dt className="font-medium text-gray-500">Age</dt>
          <dd className="text-gray-800">{age}</dd>
        </div>
        <div className="flex justify-between p-4">
          <dt className="font-medium text-gray-500">Gender</dt>
          <dd className="text-gray-800">{gender}</dd>
        </div>
        <div className="flex justify-between p-4">
          <dt className="font-medium text-gray-500">Email</dt>
          <dd className="text-gray-800">{email}</dd>
        </div>
      </dl>

      <Link
        href="/users"
        className="mt-6 inline-block text-blue-600 transition hover:underline"
      >
        &larr; Back to Users
      </Link>
    </main>
  );
}
