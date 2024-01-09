import { getSuppliers } from "@/actions/supplier";
import SupplierForm from "./components/form";
import Link from "next/link";

const SupplierPage = async () => {
  const suppliers = await getSuppliers();
  console.log(suppliers);
  return (
    <div className="container mx-auto">
      {suppliers.map((supplier) => (
        <Link href={`/suppliers/${supplier.ID}`} key={supplier.ID}>
          <div
            key={supplier.ID}
            className="
            flex flex-row justify-between
            border border-gray-800 rounded-md
            p-2 m-2
          "
          >
            <p>{supplier.name}</p>
            <p>{supplier.price}</p>
          </div>
        </Link>
      ))}
      <SupplierForm />
    </div>
  );
};

export default SupplierPage;
