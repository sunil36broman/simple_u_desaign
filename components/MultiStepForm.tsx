"use client";

import React, { useState, useEffect } from "react";
import { useForm, FormProvider, FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { step1Schema, step2Schema, step3Schema } from "./schemas";
import { z } from "zod";

// Define the schemas as a Zod schema array
const stepSchemas = [step1Schema, step2Schema, step3Schema];

// Define the form steps as strings
const formSteps = ["Step 1: Basic Info", "Step 2: Address", "Step 3: Nomoni Info"];

// Type for form data based on Zod schemas
type FormData = z.infer<typeof step1Schema> &
  z.infer<typeof step2Schema> &
  z.infer<typeof step3Schema>;

export default function MultiStepForm() {
  const [step, setStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentSchema = stepSchemas[step];
  const methods = useForm<FormData>({
    resolver: zodResolver(currentSchema),
    mode: "onTouched",
  });

  // Fetch existing data when the step changes
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${step + 1}`
      );
      methods.reset(response.data); // Pre-fill form with existing data
    } catch (error) {
      console.error("Error fetching data:", error);
      methods.reset({}); // Reset form with empty values if fetching fails
    } finally {
      setIsLoading(false);
    }
  };

  // Submit data for the current step
  const submitStepData = async (data: FormData) => {
    setIsLoading(true);
    try {
      console.log("Step data submitted:", data);
      await axios.post("https://jsonplaceholder.typicode.com/todos", data);
      setStep((prev) => prev + 1);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (step < formSteps.length - 1) {
      await submitStepData(data);
    } else {
      console.log("Final Form Submission:", data);
      // Perform final API call or action for the last step
    }
  };

  // Go back to the previous step
  const handlePrevious = () => setStep((prev) => prev - 1);

  // Fetch data on step change
  useEffect(() => {
    fetchData();
  }, [step]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2>{formSteps[step]}</h2>
        {isLoading && <label>Loading...</label>}

        {/* Step-specific form fields */}
        {step === 0 && (
          <div>
            <label>User Information</label>
            <input {...methods.register("userId")} />
            <p>{methods.formState.errors.userId?.message ?? ''}</p>

            <label>ID</label>
            <input {...methods.register("id")} />
            <p>{methods.formState.errors.id?.message ?? ''}</p>

            <label>Title</label>
            <input type="text" {...methods.register("title")} />
            <p>{methods.formState.errors.title?.message ?? ''}</p>

            <label>Completed</label>
            <input type="checkbox" {...methods.register("completed")} />
            <p>{methods.formState.errors.completed?.message ?? ''}</p>
          </div>
        )}

        {step === 1 && (
          <div>
            <label>Nomoni Information</label>
            <input {...methods.register("userId")} />
            <p>{methods.formState.errors.userId?.message ?? ''}</p>

            <label>ID</label>
            <input {...methods.register("id")} />
            <p>{methods.formState.errors.id?.message ?? ''}</p>

            <label>Title</label>
            <input type="text" {...methods.register("title")} />
            <p>{methods.formState.errors.title?.message ?? ''}</p>

            <label>Completed</label>
            <input type="checkbox" {...methods.register("completed")} />
            <p>{methods.formState.errors.completed?.message ?? ''}</p>
          </div>
        )}

        {step === 2 && (
          <div>
            <label>Address Information</label>
            <input {...methods.register("userId")} />
            <p>{methods.formState.errors.userId?.message ?? ''}</p>

            <label>ID</label>
            <input {...methods.register("id")} />
            <p>{methods.formState.errors.id?.message ?? ''}</p>

            <label>Title</label>
            <input type="text" {...methods.register("title")} />
            <p>{methods.formState.errors.title?.message ?? ''}</p>

            <label>Completed</label>
            <input type="checkbox" {...methods.register("completed")} />
            <p>{methods.formState.errors.completed?.message ?? ''}</p>
          </div>
        )}

        <div>
          {step > 0 && (
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          <button type="submit" disabled={isLoading}>
            {step === formSteps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
