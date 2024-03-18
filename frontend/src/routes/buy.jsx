import Pricing from "../ui/Pricing/index.jsx";
import { useLoaderData } from "react-router-dom";
import { fetchPricingData } from "../lib/loaders.js";

export async function loader() {
  let pricingData = await fetchPricingData();
  return pricingData;
}

export default function Buy() {
  const data = useLoaderData();
  return (
    <>
      <section>
        <Pricing {...data} />
      </section>
    </>
  );
}
