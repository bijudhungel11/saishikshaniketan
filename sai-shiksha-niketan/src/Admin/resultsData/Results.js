import React from "react";

import ManageMember from "../ManageMember.js";
const Results = () => {
  return (
    <div>
      <ManageMember
        member="Results"
        viewClassesRoute="/classes"
        memberImg="resultfinal.png"
        deleteResult="./images/deletePosts.png"
        update="/updateResults"
      />
    </div>
  );
};

export default Results;
