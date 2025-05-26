const getSingleUser = async (id) => {
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = await response.json();
  return data;
};

async function Page({ params }) {
  const { id } = await params;
  const user = await getSingleUser(id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Details</h2>
        <div className="text-left space-y-3">
          <p><span className="font-semibold text-gray-700">ID:</span> {user.id}</p>
          <p><span className="font-semibold text-gray-700">Name:</span> {user.name}</p>
          <p><span className="font-semibold text-gray-700">Email:</span> {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
