import { Main } from "@/shared/Main";
import Table from "@/widgets/Table/Table";

export default async function Home() {
  const tableData = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/data/tableData.json`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  console.log(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/data/tableData.json`
  );

  return (
    <Main>
      {tableData && tableData.table && <Table data={tableData.table} />}
    </Main>
  );
}
