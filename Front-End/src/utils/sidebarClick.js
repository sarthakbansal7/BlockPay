const handleItemClick = (item, setSelected, navigate) => {
    console.log("hi");
  if (item === "Employees") {
    navigate("/admin-employee-section");
  } else if (item === "Finance") {
    navigate("/finance-dashboard");
  } else if (item === "Dashboard") {
    navigate("/hr-dashboard");
  }
  setSelected(item);
};

export default handleItemClick;
