import { getSupplier } from "@/actions/supplier";
import Link from "next/link";
import SupplierForm from "../components/form";

const Supplier = async ({ params }: { params: { slug: number } }) => {
  // get params
  const supplier = await getSupplier(params.slug);
  if (!supplier) return <div>Supplier not found</div>;

  return (
    <div>
      <Link
        href="/suppliers"
        className="
            flex flex-row justify-between
            border border-gray-800 rounded-md
            p-2 m-2
           "
      >
        Back
      </Link>
      <SupplierForm defaultValues={supplier} />
      Supplier
      <div>{supplier.name}</div>
      <div>{supplier.price}</div>
    </div>
  );
};

export default Supplier;
