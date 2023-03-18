import { useState } from "react";
import Radio from "components/atoms/Radio";

function AboutOption() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <label className="item">
      <div className="lbl">Lorem Ipsum</div>
      <Radio check={isSelected} setCheck={setIsSelected} />
    </label>
  );
}

export default AboutOption;
