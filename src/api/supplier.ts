import { AddSupplierProps } from "@/types/supplier";

export const addSupplier = async ({ name, price }: AddSupplierProps) => {
  const response = await fetch("http://172.17.0.3:8080/api/supplier", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  }).then((res) => res.json());
  return response;
};
