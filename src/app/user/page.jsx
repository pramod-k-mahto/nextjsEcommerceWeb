import Link from "next/link";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  return data;
};

async function Pages() {
  const data = await getData();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">User List</h1>

      {data.length > 0 ? (
        <div className="grid gap-4 max-w-md mx-auto">
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/user/userDetail/${item.id}`}
              className="block bg-white shadow-md hover:shadow-lg transition p-4 rounded text-blue-600 font-medium hover:text-blue-800"
            >
              {item.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">Loading...</div>
      )}
    </div>
  );
}

export default Pages;
