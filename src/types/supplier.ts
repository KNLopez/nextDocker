export type Supplier = {
  ID: number;
  name: string;
  price: number;
};

export type AddSupplierProps = Omit<Supplier, "ID">;
