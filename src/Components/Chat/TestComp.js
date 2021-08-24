import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const TestComp = () => {
  console.log("TestComp");
  let { id } = useParams();
  return (
    <div>
      <h3>Параметр {id}</h3>
    </div>
  );
}
export default  TestComp;