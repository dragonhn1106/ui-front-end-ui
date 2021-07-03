import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";

const BoxMainHeader = styled.div`
  background-color: red;
`;
const ListMenu = styled.ul`
  display: flex;
  > li {
    list-style-type: none;
    margin-left: 30px;
  }
`;

function Header(props) {
  return (
    <BoxMainHeader>
      <div>
        <ListMenu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="add-item">Add Item</Link>
          </li>
          <li style={{ marginLeft: "auto", marginRight: 30 }}>
            <Switch
              // checked={state.checkedB}
              // onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </li>
        </ListMenu>
      </div>
    </BoxMainHeader>
  );
}

export default Header;
