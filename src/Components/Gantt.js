import React from "react";
import {
  GanttComponent,
  TaskFieldsModel,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Inject,
  Toolbar,
  Selection,
} from "@syncfusion/ej2-react-gantt";
import "../App.css";
import "./Gantt.css";

const Gantt = () => {
  const tasks = [
    {
      id: 1,
      Name: "Planning",
      StartTime: "4/1/2021", //Array of Task
      EndTime: "4/5/2021",
      Status: "Finished",
    },
    {
      id: 2,
      Name: "Preparation",
      StartTime: "4/5/2021", //Array of Task
      EndTime: "4/6/2021",
      Status: "InProgress",
    },
    {
      id: 3,
      Name: "Procurement",
      StartTime: "4/6/2021", //Array of Task
      EndTime: "4/10/2021",
      Status: "YetToStart",
    },
  ];

  //Data Format to be sent to Gantt-Component
  const taskValues: TaskFieldsModel = {
    id: "id",
    name: "Name",
    startDate: "StartTime",
    endDate: "EndTime",
  };

  //Allowed featurs for the Gantt-Component
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    mode: "Dialog",
  };

  var ganttInstance = ""; //temporary variable used as a reference

  //function to handle Add Task event
  function addHandler() {
    ganttInstance.editModule.dialogModule.openAddDialog();
  }

  //function to handle Edit Task event
  function EditHandler() {
    ganttInstance.editModule.dialogModule.openEditDialog();
  }

  return (
    <div>
      <button className="button" onClick={addHandler.bind(this)}>
        Add Task
      </button>
      <button className="button" onClick={EditHandler.bind(this)}>
        Edit Task
      </button>
      <GanttComponent
        dataSource={tasks}
        taskFields={taskValues}
        editSettings={editOptions}
        toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}
        allowSelection={true}
        ref={(gantt) => (ganttInstance = gantt)}
      >
        <Inject services={[Edit, Toolbar, Selection]}></Inject>
        <ColumnsDirective>
          <ColumnDirective field="id" headerText="Sr. No."></ColumnDirective>
          <ColumnDirective field="Name" headerText="Name"></ColumnDirective>
          <ColumnDirective
            field="StartTime"
            format="dd-MMM-yy"
          ></ColumnDirective>
          <ColumnDirective field="EndTime" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="Status" headerText="Status"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
};

export default Gantt;
