"use client";
import { FC, useState } from "react";
import { Farm } from "@/types";
import Grid from "@/components/ui/grid";
import Link from "next/link";

interface FarmersClientProps {
  farms: Farm[];
}

const FarmersClient: FC<FarmersClientProps> = ({ farms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("Products in FarmersClient", farms);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Grid>
        {farms.map((farm) => (
          <Link
            key={farm.id}
            href={`/farms/${farm.id}`}
            className="group text-sm"
          >
            <img
              alt={farm.images[0]}
              src={farm.images[0]}
              className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
            />
            <h3 className="mt-4 font-medium text-gray-900">{farm.name}</h3>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default FarmersClient;
