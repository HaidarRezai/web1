
import { Link, Outlet } from "react-router-dom";

function Prices() {
  const plans = ["basic", "premium", "vip/123"]; 

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Prices</h1>

      <ul className="flex gap-6 mb-6">
        {plans.map((plan) => (
          <li key={plan}>
            <Link to={plan} className="hover:text-yellow-500 capitalize">
              {plan}
            </Link>
          </li>
        ))}
        <li>
          <Link to="vip/123" className="hover:text-yellow-500">
            VIP #123
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Prices;
