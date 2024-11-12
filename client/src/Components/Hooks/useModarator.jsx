import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useModerator = () => {
  const { user, loading } = useAuth();
  // console.log(user);
  const [axiosSecure] = useAxiosSecure();
  const { data: isModerator, isLoading: isModeratorLoading } = useQuery({
    queryKey: ["isModerator", user?.email],
    enabled: !loading,
    queryFn: async () => {
      
        const res = await axiosSecure.get(`/users/moderator/${user?.email}`);
        return res.data.moderator;
    },
  });
  return [isModerator, isModeratorLoading];
};
export default useModerator;