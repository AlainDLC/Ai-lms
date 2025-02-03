"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import Image from "next/image";
import { useEffect } from "react";

function CustomLoader({ isLoading }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <div>
      {isLoading && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="p-10 flex items-center justify-center">
            {(onClose) => (
              <>
                <ModalBody className="flex flex-col items-center justify-center">
                  <Image
                    src={"/loading.gif"}
                    width={300}
                    height={300}
                    alt="loading"
                    className="w-[200px] h-[200px] mx-auto"
                  />
                  <h2 className="font-bold text-2xl text-primary text-center mt-4">
                    The Magic is Happening
                  </h2>
                  <p className="font-thin text-lg text-primary-600 text-center">
                    Generating Ai Magic
                  </p>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default CustomLoader;
