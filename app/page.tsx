import { Main } from "@/shared/Main";
import Table from "@/widgets/Table/Table";

export default async function Home() {
  const tableData = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/data/tableData.json`
  ).then((res) => res.json());

  return <Main>{tableData?.table && <Table data={tableData.table} />}</Main>;
}
