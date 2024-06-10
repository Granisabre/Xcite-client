import { getUserData } from "@/api/users";
import { Page } from "@/components/page/pageComponent";
import Leaderboard from '@/components/leaderboard/leaderboard';

export default async function LeaderboardPage() {
  const userData = await getUserData();

  return (
    <Page className="bg-emerald-100" title="Leaderboard">
      <Leaderboard data={userData}/>
    </Page>
  );
}
