import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { User, Loader2 } from "lucide-react";

export function Login({ onBack }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-8 h-8 -mt-1" variant="outline" size="icon">
          <User className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Нэвтрэх</DialogTitle>
          {/* <DialogDescription>
              
            </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Нэр
            </Label>
            <Input
              id="name"
              placeholder="Нэр оруулна уу..."
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Нууц үг
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Нэвтрэх</Button>
        </DialogFooter>
        {/* </div>
          </div> */}
      </DialogContent>
    </Dialog>
  );
}
