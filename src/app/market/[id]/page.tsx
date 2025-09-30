import { serverApiClient } from "@/lib/server";
import { GetProductsResponse } from "@/types/api";
import ProductClient from "@/components/client/product";

export default async function CollabPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data, status } = await serverApiClient.get(`/products?id=${id}`);
  if (status >= 400) {
    console.error("API returned error status:", status);
    // return <div> There was en error on the server</div>;
  }

  const res: GetProductsResponse = data;
  console.log("response from collabs: ", res);

  return <ProductClient products={res.products} />;
}
