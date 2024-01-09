import { AddSupplierProps } from "@/types/supplier";

const BASE_URL = "http://172.17.0.4:8080/api";

export const addSupplierService = async ({ name, price }: AddSupplierProps) => {
  const response = await fetch(`${BASE_URL}/supplier`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  }).then((res) => res.json());
  return response;
};

export const getSuppliersService = async () => {
  const response = await fetch(`${BASE_URL}/supplier`).then((res) =>
    res.json()
  );
  return response;
};

export const getSupplierService = async (id: number) => {
  const response = await fetch(`${BASE_URL}/supplier/${id}`).then((res) =>
    res.json()
  );
  return response;
};

export const updateSupplierService = async (
  id: number,
  { name, price }: AddSupplierProps
) => {
  const response = await fetch(`${BASE_URL}/supplier/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  }).then((res) => res.json());
  return response;
};
