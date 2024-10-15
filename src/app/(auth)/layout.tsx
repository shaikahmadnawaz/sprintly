"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  return (
    <main className="min-h-screen bg-secondary">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <Image src="/logo.svg" alt="logo" width={150} height={100} />
          <div className="flex items-center gap-2">
            {pathname === "/sign-in" && (
              <Button className="bg-white" variant={"secondary"}>
                Sign In
              </Button>
            )}
            {pathname === "/sign-up" && (
              <Button className="bg-white" variant={"secondary"}>
                Sign In
              </Button>
            )}
          </div>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
