import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const PhoneNumber = ({deliveryDetails, setDeliveryDetails}) => {
  const customLabels = {
    US: { primary: "+1", secondary: "United States" },
    CA: { primary: "+1", secondary: "Canada" },
    GB: { primary: "+44", secondary: "United Kingdom" },
    NZ: { primary: "+64", secondary: "New Zealand" },
    AU: { primary: "+61", secondary: "Australia" },
  };

  const [selected, setSelected] = useState("US");

  const onSelect = (code) => {
    setSelected(code);
    setDeliveryDetails({
      ...deliveryDetails,
      phoneCode: customLabels[code].primary,
    });
  };

  const showSelectedLabel = true;
  const showSecondarySelectedLabel = false;
  const showOptionLabel = true;
  const showSecondaryOptionLabel = true;
  const searchable = false;

  return (
    <div className="demo-wrapper">
      <ReactFlagsSelect
        selected={selected}
        onSelect={onSelect}
        placeholder=""
        showSelectedLabel={showSelectedLabel}
        showSecondarySelectedLabel={showSecondarySelectedLabel}
        showOptionLabel={showOptionLabel}
        showSecondaryOptionLabel={showSecondaryOptionLabel}
        customLabels={customLabels}
        countries={["US", "CA", "GB", "NZ", "AU"]}
        searchable={searchable}
      />
    </div>
  );
};

export default PhoneNumber;
