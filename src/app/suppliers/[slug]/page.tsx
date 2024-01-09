import { getSupplier } from "@/actions/supplier";
import Link from "next/link";

const Supplier = async ({ params }: { params: { slug: number } }) => {
  // get params
  const supplier = await getSupplier(params.slug);
  if (!supplier) return <div>Supplier not found</div>;

  return (
    <div>
      <Link href="/suppliers">Back</Link>
      Supplier
      <div>{supplier.name}</div>
      <div>{supplier.price}</div>
    </div>
  );
};

export default Supplier;
