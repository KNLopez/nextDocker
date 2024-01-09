"use client";
import { createSupplier, updateSupplier } from "@/actions/supplier";
import { SubmitHandler, useForm } from "react-hook-form";

type SupplierFormTypes = {
  name: string;
  price: number;
};

const SupplierForm = ({
  defaultValues = { ID: undefined, name: "", price: 0 },
}: {
  defaultValues?: SupplierFormTypes & { ID?: number };
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierFormTypes>({
    defaultValues,
  });
  const onSubmit: SubmitHandler<SupplierFormTypes & { ID?: number }> = async (
    data
  ) => {
    data.price = Number(data.price);
    if (defaultValues.ID) {
      data.ID = defaultValues.ID;
      await updateSupplier(data.ID, data);
    } else {
      await createSupplier(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        {...register("name", { required: true })}
        className="
          text-gray-700
          border border-gray-800 rounded-md
          p-2 m-2
        "
      />
      {errors.name && <span>This field is required</span>}
      <input
        {...register("price", { required: true })}
        className="text-gray-700
        border border-gray-800 rounded-md
        p-2 m-2"
      />
      {errors.price && <span>This field is required</span>}
      <input
        type="submit"
        className="
          bg-blue-500 hover:bg-blue-700 text-white font-bold
          py-2 px-4 rounded
          m-2
        "
      />
    </form>
  );
};

export default SupplierForm;
