import HomePage from "../../components/homepage";
import { getDummyData } from "../../components/video-components/actions";

export default async function Home() {
  const dummyData = await getDummyData();

  return (
    <>
      <HomePage dummyData={dummyData} />
    </>
  );
}
