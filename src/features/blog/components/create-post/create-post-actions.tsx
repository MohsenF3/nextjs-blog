"use client";

import { Button } from "@/shared/components/ui/button";
import { DialogClose } from "@/shared/components/ui/dialog";
import { useFormContext } from "react-hook-form";
import { CreatePostInput } from "../../schema";

export default function CreatePostActions() {
  const {
    formState: { isSubmitting },
  } = useFormContext<CreatePostInput>();

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-2">
      <DialogClose asChild className="w-full sm:w-1/2">
        <Button type="button" variant="outline">
          انصراف
        </Button>
      </DialogClose>
      <Button
        type="submit"
        className="w-full sm:w-1/2"
        variant="secondary"
        disabled={isSubmitting}
      >
        ثبت و انتشار بلاگ
      </Button>
    </div>
  );
}
