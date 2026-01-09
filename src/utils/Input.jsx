

export default function Input({ label, placeholder }) {
  return (
    <div>
      {" "}
      <label className="text-sm font-medium text-gray-700">
        {" "}
        {label}{" "}
      </label>{" "}
      <input
        placeholder={placeholder}
        className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
      />{" "}
    </div>
  );
}


