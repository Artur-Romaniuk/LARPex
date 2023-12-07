import { useQuery } from "react-query";
import repositoryContext from "../repositories/repositoryContext.ts";

const useGetOrder = (id: string) => {
  const orderRepository = repositoryContext.injectOrderRepository();

  const getOrder = useQuery({
    queryKey: ["order", id],
    queryFn: () => orderRepository.getOrderById(id),
  });

  return getOrder;
};

export default useGetOrder;
