// src/Carts/planDetail.jsx
import { useParams } from "react-router-dom";

export default function PlanDetail() {
  const { planId, id } = useParams();

  return (
    <div>
      {id ? (
        <p className="text-lg">VIP Plan for User #{id} 👑</p>
      ) : (
        <p className="text-lg">
          This is the <span className="font-bold">{planId}</span> Plan
        </p>
      )}
    </div>
  );
}
