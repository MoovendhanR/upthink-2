import { useState } from "react";
import Tree from "./Tree";

function TreeNode({ node }) {
    const { children, label } = node;
  
    const [showChildren, setShowChildren] = useState(false);
  
    const [Sign, setSign] = useState('+')
   

    const handleClick = () => {
      setShowChildren(!showChildren);
      if (Sign === '+') setSign('-')
      else setSign('+')
    };
    return (
      <>
        <div onClick={handleClick} style={{ marginBottom: "10px" }}>
          <span>{`${Sign}${label}`}</span>
        </div>
        <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
          {showChildren && <Tree treeData={children} />}
        </ul>
      </>
    );
  }

  export default TreeNode;