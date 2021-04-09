import React, { Component } from "react";
import "../App.css";
//import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
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

class Gantt extends Component {
  state = {
    tasks: [
      {
        id: 1,
        Name: "Planning",
        StartTime: "4/1/2021",
        EndTime: "4/5/2021",
        Status: "Finished",
      },
      {
        id: 2,
        Name: "Preparation",
        StartTime: "4/5/2021",
        EndTime: "4/6/2021",
        Status: "InProgress",
      },
      {
        id: 3,
        Name: "Procurement",
        StartTime: "4/6/2021",
        EndTime: "4/10/2021",
        Status: "YetToStart",
      },
    ],
  };
  render() {
    const { tasks } = this.state;

    const taskValues: TaskFieldsModel = {
      id: "id",
      name: "Name",
      startDate: "StartTime",
      endDate: "EndTime",
    };

    const editOptions = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      mode: "Dialog",
    };

    var ganttInstance = "j";

    function addHandler() {
      ganttInstance.editModule.dialogModule.openAddDialog();
      console.log(ganttInstance);
    }

    function EditHandler() {
      ganttInstance.editModule.dialogModule.openEditDialog();
      console.log(ganttInstance.updatedRecords);
      //   setTimeout(() => {
      //     this.setState({ tasks: ganttInstance.updatedRecords });
      //   }, 6000);
    }

    return (
      <div>
        <button onClick={addHandler.bind(this)}>Open Add Dialog</button>
        <button onClick={EditHandler.bind(this)}>Open Edit Dialog</button>
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
            <ColumnDirective
              field="EndTime"
              format="dd-MMM-yy"
            ></ColumnDirective>
            <ColumnDirective
              field="Status"
              headerText="Status"
            ></ColumnDirective>
          </ColumnsDirective>
        </GanttComponent>
      </div>
    );
  }
}

export default Gantt;
