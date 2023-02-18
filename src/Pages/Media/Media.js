import { useQuery } from "@tanstack/react-query";
import React from "react";
import MediaCard from "./MediaCard";

const Media = () => {
  const { data: socialCards, isLoading } = useQuery({
    queryKey: ["socialCards"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/socialCards");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-4xl mb-4 text-center text-primary font-semibold">
        Social Media Conten
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {socialCards?.map((socialCard) => (
          <MediaCard key={socialCard._id} socialCard={socialCard}></MediaCard>
        ))}
      </div>
    </div>
  );
};

export default Media;
