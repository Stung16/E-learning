import Client from "../config/Client";

export const handleInforBanking = async (slug) => {
    try {
      const res = await Client.get(`/course/payments?slug=${slug}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  