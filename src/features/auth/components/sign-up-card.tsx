"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@/components/ui/text-field";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 character(s)"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must contain at least 6 character(s)")
    .max(256, "Password must contain at most 256 character(s)"),
});

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <Card className="w-full items-center h-full md:w-[486px] border-none shadow-none">
      <Card.Header className="flex items-center justify-center text-center p-7">
        <Card.Title className="text-2xl">Sign Up</Card.Title>
        <Card.Description>
          By signing up, you agree to our{" "}
          <Link href={"/terms"}>
            <span className="text-primary">Terms of Service</span>
          </Link>
        </Card.Description>
      </Card.Header>
      <div className="px-7">
        <Separator />
      </div>
      <Card.Content className="p-7">
        <Form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <>
                {" "}
                <TextField
                  {...field}
                  type="text"
                  placeholder="Enter your name"
                  aria-label="Name"
                />
              </>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                placeholder="Enter email address"
                aria-label="Email"
              />
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                placeholder="Enter password"
                aria-label="Password"
              />
            )}
          />

          <Button type="submit" className="w-full">
            Register
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
          Already have an account?{" "}
          <Link href={"/sign-in"}>
            <span className="text-primary">Sign In</span>
          </Link>
        </p>
      </Card.Content>
    </Card>
  );
};
