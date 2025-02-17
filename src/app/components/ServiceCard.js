// components/ServiceCard.js
export default function ServiceCard({ title, description, imageUrl }) {
    return (
      <div className="border rounded p-4 shadow hover:shadow-lg transition">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-xl font-semibold mt-4">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    );
  }
  