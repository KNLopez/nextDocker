"use client";
import { createSupplier } from "@/actions/supplier";
import { addSupplier } from "@/api/supplier";
import { startTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type SupplierFormTypes = {
  name: string;
  price: number;
};

const SupplierForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierFormTypes>();
  const onSubmit: SubmitHandler<SupplierFormTypes> = async (data) => {
    data.price = Number(data.price);
    await createSupplier(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
      <input {...register("price", { required: true })} />
      {errors.price && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default SupplierForm;
