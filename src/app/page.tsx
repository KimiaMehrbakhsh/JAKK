import Link from "next/link";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-3/4 rounded-3xl p-6">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold md:text-3xl">
            Welcome To Jakk
          </CardTitle>
          <CardDescription>
            Enter your email below to create an Account or login in
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-6">
            <Button
              className="bg-tree-poppy-500 font-bold text-white hover:bg-tree-poppy-600"
              variant="outline"
            >
              <Icons.google className="w- mr-2 h-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-tree-poppy-500 font-bold hover:bg-tree-poppy-600"
            asChild
          >
            <Link href="/dashboard">Sign Up / Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
