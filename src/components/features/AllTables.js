import { useSelector } from "react-redux";
import { selectTables } from "../../redux/tablesRedux";
import { Button, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const AllTables = () => {
  const tablesInfo = useSelector(selectTables);

  if (tablesInfo.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div>
      {tablesInfo.map(({ id, status }) => (
        <div key={id}>
          <Stack direction="horizontal" gap={5} style={{ marginTop: "25px", marginBottom: "25px" }}>
            <h1>Table {id}</h1>
            <p className="me-auto" style={{ marginTop: "25px" }}>
              <b>Status:</b> {status}
            </p>
            <Button variant="primary" as={NavLink} to={`table/${id}`} style={{ marginRight: "5px" }}>Show more</Button>
          </Stack>
          <hr />
        </div>
      ))}
    </div>
  )
};

export default AllTables;
