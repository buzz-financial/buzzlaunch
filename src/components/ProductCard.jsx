export default function ProductCard({ name, price }) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
    </div>
  );
}
