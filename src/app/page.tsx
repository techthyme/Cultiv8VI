import Cultiv8VIClient from "@/components/client/Cultiv8VIClient";

const Cultiv8VI = async () => {
  // Add delay for loading animation
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Return the client component
  return <Cultiv8VIClient />;
};

export default Cultiv8VI;
