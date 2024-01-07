type Supplier = {
  id: number;
  name: string;
  price: number;
};

export type AddSupplierProps = Omit<Supplier, "id">;
