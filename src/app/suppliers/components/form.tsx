"use client";
import { createSupplier } from "@/actions/supplier";
import { SubmitHandler, useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        {...register("name", { required: true })}
        className=" text-gray-700"
      />
      {errors.name && <span>This field is required</span>}
      <input
        {...register("price", { required: true })}
        className=" text-gray-700"
      />
      {errors.price && <span>This field is required</span>}
      <input
        type="submit"
        className=" bg-green-500 text-gray-800 cursor-pointer"
      />
    </form>
  );
};

export default SupplierForm;
