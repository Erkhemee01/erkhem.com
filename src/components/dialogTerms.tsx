import { useState, useEffect } from "react";

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
import { Label } from "@/components/ui/label";

import { User, Loader2, AlertTriangle } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export function TermsAndCond({ onAgree }: any) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleIsChecked() {
    setIsChecked(!isChecked);
    console.log(isChecked);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-8 h-8 -mt-1" variant="outline" size="icon">
          <User className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Санамж</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex">
            <AlertTriangle stroke="orange" size="40" />
            <div className="flex-1 px-4">
              Зөвхөн сайтын Админ нэвтрэх боломжтой. Шаардлагатай болон
              мэдээллүүдийг уншиж танилцан нэвтрэнэ үү.
            </div>
          </div>
        </DialogDescription>
        <div className="grid gap-4 py-4">
          <div className="flex gap-4 grid-flow-row items-center">
            <Checkbox
              id="terms"
              checked={isChecked}
              onCheckedChange={toggleIsChecked}
            />
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Би мэдээллүүдтэй танилцсан мөн админ гэдгээ баталж байна.
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button disabled={!isChecked}>Үргэлжлүүлэх</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
