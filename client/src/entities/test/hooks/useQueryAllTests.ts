import { useQuery } from "@apollo/client";

import { GET_TESTS } from "../model";

export const useQueryAllTests = () => {
  const { data, loading, error } = useQuery(GET_TESTS);

  return { data: data?.getTests, loading, error };
};
