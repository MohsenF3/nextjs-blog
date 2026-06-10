"use client";

import { useState } from "react";
import { Category } from "../../types";
import CreatePostForm from "./create-post-form";

interface CreatePostDialogProps {
  categories: Category[];
}

export default function CreatePostDialog({
  categories,
}: CreatePostDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">اضافه کردن بلاگ</span>

        <button
          onClick={open}
          type="button"
          className="rounded-lg border border-transparent bg-zinc-900 px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-xs hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-300"
        >
          نوشتن بلاگ جدید
        </button>
      </div>

      {isOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative rounded-lg border border-zinc-200 bg-white p-4 shadow-sm ">
              {/* header */}
              <div className="flex items-center justify-center border-b border-zinc-200 pb-4 md:pb-5">
                <h3 className="text-lg font-medium text-zinc-900">
                  اضافه کردن بلاگ جدید
                </h3>
              </div>

              {/* body */}
              <div className="py-4 md:py-6">
                <CreatePostForm
                  categories={categories}
                  onSuccess={close}
                  onCancel={close}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
