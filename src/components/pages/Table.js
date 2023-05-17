import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findTableById } from "../../redux/tablesRedux";
import TableStatus from "../features/TableStatus";

const Table = () => {

  const { id } = useParams();
  const tableDetails = useSelector((state) => findTableById(state, id));

  return(
    <div>
      <h1>Table {id}</h1>
      <TableStatus {...tableDetails} />
    </div>
  )
};

export default Table;