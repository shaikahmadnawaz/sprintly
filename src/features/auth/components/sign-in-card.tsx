"use client";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TextField } from "@/components/ui/text-field";
import { FieldError } from "@/components/ui/field";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must contain at least 6 character(s)")
    .max(256, "Password must contain at most 256 character(s)"),
});

export const SignInCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  console.log(form.formState.errors);
  return (
    <Card className="w-full items-center h-full md:w-[486px] border-none shadow-none">
      <Card.Header className="flex items-center justify-center text-center p-7">
        <Card.Title className="text-2xl">Welcome back!</Card.Title>
      </Card.Header>
      <div className="px-7">
        <Separator />
      </div>
      <Card.Content className="p-7">
        <Form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="email"
                  placeholder="Enter email address"
                  aria-label="Email address"
                  isInvalid={!!form.formState.errors.email}
                />
                <FieldError>{form.formState.errors.email?.message}</FieldError>
              </>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="password"
                  placeholder="Enter password"
                  aria-label="Password"
                  isInvalid={!!form.formState.errors.password}
                />
                <FieldError>
                  {form.formState.errors.password?.message}
                </FieldError>
              </>
            )}
          />

          <Button
            isDisabled={form.formState.isSubmitting}
            type="submit"
            className="w-full"
          >
            Login
          </Button>
        </Form>
      </Card.Content>
      <div className="px-7">
        <Separator />
      </div>
      <Card.Content className="p-7">
        <Button intent={"secondary"} className="w-full">
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
      </Card.Content>
      <div className="px-7">
        <Separator />
      </div>
      <Card.Content className="p-7 flex items-center justify-center">
        <p>
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"}>
            <span className="text-primary">Sign Up</span>
          </Link>
        </p>
      </Card.Content>
    </Card>
  );
};
