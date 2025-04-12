import { redirect } from "next/navigation";

const Home = async () => {
  redirect("/stock");
};

export default Home;
