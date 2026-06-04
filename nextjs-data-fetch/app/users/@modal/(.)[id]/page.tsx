import { notFound } from "next/navigation";
import { Modal } from "@/app/components/Modal";
import { User } from "../../page";

async function getUser(id: string): Promise<User | null> {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function UserModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  if (!user) notFound();

  const { firstName, lastName } = user;

  return (
    <Modal>
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        {firstName} {lastName}
      </h2>

      <dl className="divide-y divide-gray-200">
        <div className="flex justify-between py-2">
          <dt className="font-medium text-gray-500">ID</dt>
          <dd className="text-gray-800">{user.id}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="font-medium text-gray-500">First Name</dt>
          <dd className="text-gray-800">{firstName}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="font-medium text-gray-500">Last Name</dt>
          <dd className="text-gray-800">{lastName}</dd>
        </div>
      </dl>
    </Modal>
  );
}
