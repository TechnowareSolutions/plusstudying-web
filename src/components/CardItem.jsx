export default function CardItem({ label, item }) {
    return <div>
    <p className="text-base text-sky-700 font-semibold">{label}</p>
    <p className="text-sm">{item}</p>
  </div>
}