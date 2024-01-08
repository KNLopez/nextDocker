import { getSuppliers } from "@/actions/supplier";
import SupplierForm from "./components/form";

const SupplierPage = async () => {
  const suppliers = await getSuppliers();

  return (
    <div className="container mx-auto">
      {suppliers.map((supplier) => (
        <div
          key={supplier.id}
          className="
            flex flex-row justify-between
            border border-gray-800 rounded-md
            p-2 m-2
          "
        >
          <p>{supplier.name}</p>
          <p>{supplier.price}</p>
        </div>
      ))}
      <SupplierForm />
    </div>
  );
};

export default SupplierPage;
