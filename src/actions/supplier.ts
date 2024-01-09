"use server";

import {
  addSupplierService,
  getSuppliersService,
  getSupplierService,
  updateSupplierService,
} from "@/api/supplier";
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

export async function getSupplier(id: number): Promise<Supplier> {
  const supplier = await getSupplierService(id);
  return supplier;
}

export async function updateSupplier(
  id: number,
  { name, price }: AddSupplierProps
) {
  const response = await updateSupplierService(id, { name, price });
  revalidatePath("/supplier");
  return response;
}
