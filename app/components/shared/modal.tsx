import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

interface Props {
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose, ...props }: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 ">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white w-96">
          <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white m-4 text-left">
         
            Complete
          </Dialog.Title>

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
