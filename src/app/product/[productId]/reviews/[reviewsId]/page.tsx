"use client";
import { notFound } from "next/navigation";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ProductDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  // Throw error 50% of the time
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  // j'utilse notfound de Next.js pour simuler une erreur 404
  // et renvoyer une page 404 ou un fichier not-found.tsx dans le dossier
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
