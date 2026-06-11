"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { useState } from "react";
import { Category } from "../../types";
import CreatePostForm from "./create-post-form";

interface CreatePostDialogProps {
  categories: Category[];
}
export default function CreatePostDialog({
  categories,
}: CreatePostDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <span className="hidden sm:block text-lg">اضافه کردن بلاگ</span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="light" className="w-full">
            نوشتن بلاگ جدید
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-180"
          dir="rtl"
          data-lang="fa"
        >
          <DialogHeader>
            <DialogTitle>اضافه کردن بلاگ جدید</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <CreatePostForm
            categories={categories}
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
