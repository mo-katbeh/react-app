import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import z from "zod";

const ExpenseTracker = () => {
  const schema = z.object({
    description: z.string().min(3),
    amount: z.number().min(1),
    category: z.enum(["Drink", "Fruits", "Groceries"]),
  });
  type FormData = z.infer<typeof schema>;
  const {
    // getValues,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //   const form = useForm();
  //   console.log(form);
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* dev.mb-3>label.form-label+input[type=number].form-control */}

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message} </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>

        <input
          {...register("amount")}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger"> {errors.amount.message} </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          {...register("category")}
          id="category"
          type="text"
          className="form-control"
        />
        {errors.category && (
          <p className="text-danger"> {errors.category.message} </p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
