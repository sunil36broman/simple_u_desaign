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
      <div className="max-w-6xl mx-auto py-8 px-10 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <h2>{formSteps[step]}</h2>
        <label>  {isLoading && <>Loading..</>}.</label>

        {/* Step-specific form fields */}
        {step === 0 && (
          <div className="grid gap-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700">
                        User Information
                  </label>
                  <input
                        {...methods.register("userId")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-red-600 text-sm">
                    {methods.formState.errors.userId?.message ?? ""}
                  </p>
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700">
                        User ID
                  </label>
                  <input
                        {...methods.register("id")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-red-600 text-sm">
                    {methods.formState.errors.id?.message ?? ""}
                  </p>
              </div>


              <div>
                  <label className="block text-sm font-medium text-gray-700">
                        User Title
                  </label>
                  <input
                        {...methods.register("title")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-red-600 text-sm">
                    {methods.formState.errors.title?.message ?? ""}
                  </p>
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700">
                        User completed
                  </label>
                  <input
                        {...methods.register("completed")}
                        type="checkbox"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-red-600 text-sm">
                    {methods.formState.errors.completed?.message ?? ""}
                  </p>
              </div>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4">
          <div>
              <label className="block text-sm font-medium text-gray-700">
                    Nomoni Information
              </label>
              <input
                    {...methods.register("userId")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.userId?.message ?? ""}
              </p>
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700">
                  Nomoni ID
              </label>
              <input
                    {...methods.register("id")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.id?.message ?? ""}
              </p>
          </div>


          <div>
              <label className="block text-sm font-medium text-gray-700">
              Nomoni Title
              </label>
              <input
                    {...methods.register("title")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.title?.message ?? ""}
              </p>
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700">
              Nomoni completed
              </label>
              <input
                    {...methods.register("completed")}
                    type="checkbox"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.completed?.message ?? ""}
              </p>
          </div>
        </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
          <div>
              <label className="block text-sm font-medium text-gray-700">
                    other address
              </label>
              <input
                    {...methods.register("userId")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.userId?.message ?? ""}
              </p>
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700">
              other ID
              </label>
              <input
                    {...methods.register("id")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.id?.message ?? ""}
              </p>
          </div>


          <div>
              <label className="block text-sm font-medium text-gray-700">
              other Title
              </label>
              <input
                    {...methods.register("title")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.title?.message ?? ""}
              </p>
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700">
              other completed
              </label>
              <input
                    {...methods.register("completed")}
                    type="checkbox"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-red-600 text-sm">
                {methods.formState.errors.completed?.message ?? ""}
              </p>
          </div>
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
     </div> 
    </FormProvider>
  );
}
