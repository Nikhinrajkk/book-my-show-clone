
import { X, Mail, Apple, Phone, Globe } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { handleGoogleLogin } from "@/api";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[428px] h-[528px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2 space-y-2">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-semibold">Get Started</DialogTitle>
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0 rounded-full" 
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>

        <div className="px-6 py-4 flex flex-col gap-4">
          {/* Google login button */}
          <Button 
            variant="outline" 
            className="bg-white text-black hover:bg-gray-50 h-12 relative"
            onClick={handleGoogleLogin}
          >
            <div className="absolute left-4">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            Continue with Google
          </Button>

          {/* Email login button */}
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-50 h-12"
          >
            <Mail className="mr-2 h-5 w-5" />
            Continue with Email
          </Button>

          {/* Apple login button */}
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-50 h-12"
          >
            <Apple className="mr-2 h-5 w-5" />
            Continue with Apple
          </Button>

          {/* OR separator */}
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4 text-sm text-gray-500">
                OR
              </div>
            </div>
          </div>

          {/* Phone number input */}
          <div className="flex items-center border-b">
            <div className="flex items-center px-3 h-12">
              <img 
                src="https://flagcdn.com/w20/in.png" 
                alt="India" 
                className="h-4 mr-1" 
              />
              <span className="text-gray-600">+91</span>
            </div>
            <Input
              type="tel"
              placeholder="Continue with mobile number"
              className="border-0 h-12 focus-visible:ring-0"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Terms and conditions */}
          <div className="text-center text-xs text-gray-500 mt-4">
            I agree to the{" "}
            <a href="#" className="text-gray-700 underline">
              Terms & Conditions
            </a>{" "}
            &{" "}
            <a href="#" className="text-gray-700 underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
