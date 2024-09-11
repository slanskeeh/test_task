import { Main } from "@/shared/Main";
import Table from "@/widgets/Table/Table";

export default async function Home() {
  const tableData = await fetch(
    "http://localhost:3000/data/tableData.json"
  ).then((res) => res.json());

  console.log(tableData);
  return <Main>{tableData?.table && <Table data={tableData.table} />}</Main>;
}
