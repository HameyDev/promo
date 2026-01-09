export default function Select({ label }) {
  return (
    <>
      {" "}
      {label === "Course Category*" && (
        <div>
          {" "}
          <label className="text-sm font-medium text-gray-700">
            {" "}
            {label}{" "}
          </label>{" "}
          <select className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none">
            {" "}
            <option value="">Please Select One</option>{" "}
            <option value="diploma">3 Months Diploma Programs</option>{" "}
            <option value="courses">1 Months Short Courses</option>{" "}
            <option value="master-classes">Master-Classes & Workshops</option>{" "}
            <option value="recordings">Pre-Recorded Sessions</option>{" "}
          </select>{" "}
        </div>
      )}{" "}
      {label === "Mode*" && (
        <div>
          {" "}
          <label className="text-sm font-medium text-gray-700">
            {" "}
            {label}{" "}
          </label>{" "}
          <select className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none">
            {" "}
            <option value="">Select Mode</option>{" "}
            <option value="online">Online</option>{" "}
            <option value="physical">Physical</option>{" "}
          </select>{" "}
        </div>
      )}{" "}
    </>
  );
}