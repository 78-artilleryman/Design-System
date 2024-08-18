import { cookies } from "next/headers";
import { serverCreateClient } from "@/util/supabase/server";

export default function Home() {
  const cookieStore = cookies();
  const supabase = serverCreateClient(cookieStore);
  console.log(supabase);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Home 페이지</p>
    </main>
  );
}
