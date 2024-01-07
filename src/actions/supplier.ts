"use server";

import { addSupplier } from "@/api/supplier";
import { AddSupplierProps } from "@/types/supplier";

export async function createSupplier({ name, price }: AddSupplierProps) {
  return await addSupplier({ name, price });
}
