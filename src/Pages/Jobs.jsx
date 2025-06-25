import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const categories = ["Singer", "DJ", "Dance Group", "Speaker", "Stand-up Comedian"];
const languages = ["Hindi", "English", "Punjabi", "Marathi", "Tamil"];
const feeRanges = ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000 - ₹50,000", "₹50,000+"];

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  category: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  fee: Yup.string().required("Fee range is required"),
  location: Yup.string().required("Location is required"),
});

const ArtistOnboard = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    }
  });

  const onSubmit = (data) => {
    console.log("Submitted Artist Data:", data);
    alert("Profile submitted!");
    reset();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Artist Onboarding 🎤</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full border p-2 rounded-lg outline-none hover:border-purple-600"
          />
          <p className="text-sm text-red-500">{errors.name?.message}</p>
        </div>

        <div>
          <textarea
            {...register("bio")}
            placeholder="Tell us about your experience, style, performances..."
            className="w-full border p-2 rounded-lg outline-none hover:border-purple-600"
          />
          <p className="text-sm text-red-500">{errors.bio?.message}</p>
        </div>

        <div>
          <label className="block font-semibold mb-1">Category</label>
          {categories.map((cat) => (
            <label key={cat} className="inline-flex items-center mr-3 mb-1">
              <input
                type="checkbox"
                value={cat}
                {...register("category")}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
          <p className="text-sm text-red-500">{errors.category?.message}</p>
        </div>

        <div>
          <label className="block font-semibold mb-1">Languages Spoken</label>
          {languages.map((lang) => (
            <label key={lang} className="inline-flex items-center mr-3 mb-1">
              <input
                type="checkbox"
                value={lang}
                {...register("languages")}
                className="mr-2"
              />
              {lang}
            </label>
          ))}
          <p className="text-sm text-red-500">{errors.languages?.message}</p>
        </div>

        <div>
          <label className="block font-semibold mb-1">Fee Range</label>
          <select
            {...register("fee")}
            className="w-full border p-2 rounded-lg outline-none hover:border-purple-600"
          >
            <option value="">Select a range</option>
            {feeRanges.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <p className="text-sm text-red-500">{errors.fee?.message}</p>
        </div>

        <div>
          <input
            {...register("location")}
            placeholder="Location"
            className="w-full border p-2 rounded-lg outline-none hover:border-purple-600"
          />
          <p className="text-sm text-red-500">{errors.location?.message}</p>
        </div>

        <div>
          <label className="block font-semibold mb-1">Upload Profile Image (Optional)</label>
          <input type="file" className="block" disabled />
          <p className="text-sm text-gray-500">Coming soon: image upload to Firebase Storage</p>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
        >
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default ArtistOnboard;
