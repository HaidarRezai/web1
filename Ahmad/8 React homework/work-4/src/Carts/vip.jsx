// Carts/vip.jsx (dynamic with params)
import { useParams } from "react-router-dom";

export default function VIP() {
  const { id } = useParams();
  return (<p className="text-lg">VIP Plan for User #{id} 👑</p>)
}
