import Input from "../utils/Input";

const CatalogForm = ({ closeModal }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 relative">
      <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold">
        ×
      </button>

      <h3 className="text-xl font-bold text-[#2B0A88]">
        Download Catalogue
      </h3>

      <p className="flex items-center gap-2 mt-2 text-center text-gray-600">
        Fill details to get the PDF.
      </p>

      <form className="mt-6 space-y-4">
        <Input label="Name*" placeholder="Your Name" />
        <Input label="Phone / WhatsApp*" placeholder="Your Phone" />

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Message*</label>
          <textarea
            placeholder="Which course are you interested in?"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none mt-1"
            rows={4}
          />
        </div>

        <button type="submit" className="w-full mt-4 bg-gradient-to-r from-[#2B0A88] to-[#8A2D83] text-white py-3 rounded-xl font-semibold hover:opacity-90">
          Submit & Download PDF
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-center text-gray-600 mt-2">
          By submitting, you agree to be contacted by our team.
        </p>
      </form>
    </div>
  );
};

export default CatalogForm;
