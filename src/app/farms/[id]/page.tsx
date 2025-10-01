import { GetFarmsResponse } from "@/types/api";
import FarmsClient from "@/components/client/farms";
import { serverApiClient } from "@/lib/server";
import { mockFarms } from "@/data";
import { Farm } from "@/types";

export default async function FarmsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // const { data, status } = await serverApiClient.get(`/farms?id=${id}`);
  // if (status >= 400) {
  //   console.error("API returned error status:", status);
  //   // return <div> There was en error on the server</div>;
  // }
  // const res: GetFarmsResponse = data;
  // console.log("response from collabs: ", res);
  const farms: Farm[] = [];
  const farm = mockFarms.find((f) => f.id === id);
  if (farm) farms.push(farm);


  //put the ui on page
  return <FarmsClient farms={farms} />;
}
