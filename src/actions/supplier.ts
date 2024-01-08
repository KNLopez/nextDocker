"use server";

import { addSupplierService, getSuppliersService } from "@/api/supplier";
import { AddSupplierProps, Supplier } from "@/types/supplier";
import { revalidatePath } from "next/cache";

export async function createSupplier({ name, price }: AddSupplierProps) {
  const response = await addSupplierService({ name, price });
  revalidatePath("/supplier");
  return response;
}

export async function getSuppliers(): Promise<Supplier[]> {
  return await getSuppliersService();
}
