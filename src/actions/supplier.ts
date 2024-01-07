"use server";

import { addSupplier } from "@/api/supplier";
import { AddSupplierProps } from "@/types/supplier";

export async function createSupplier({ name, price }: AddSupplierProps) {
  console.log({ name, price });
  const response = await addSupplier({ name, price });
  console.log({ response });
  return response;
}
