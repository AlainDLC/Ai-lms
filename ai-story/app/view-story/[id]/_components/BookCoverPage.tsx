import Image from "next/image";
import React from "react";

function BookCoverPage({ imageUrl }: any) {
  if (!imageUrl) {
    return null;
  }
  return (
    <div>
      <Image src={imageUrl} alt="image" width={500} height={500} />
    </div>
  );
}

export default BookCoverPage;
