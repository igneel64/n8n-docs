(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1464:function(t,e,o){"use strict";o.r(e);var i=o(26),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"_8-activating-and-examining-the-workflow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_8-activating-and-examining-the-workflow"}},[t._v("#")]),t._v(" 8. Activating and Examining the Workflow")]),t._v(" "),i("p",[t._v("In this step of the workflow you will learn how to activate your workflow and change the default workflow settings.")]),t._v(" "),i("p",[t._v("Activating a workflow means that it will run automatically every time a trigger node receives input or meets a condition. By default, all newly created workflows are deactivated.")]),t._v(" "),i("p",[t._v("To activate your workflow toggle the "),i("em",[t._v("Active")]),t._v(" button on the top right corner of the Editor UI. Nathan’s workflow will now be executed automatically every Monday at 9 am.")]),t._v(" "),i("figure",[i("img",{staticStyle:{width:"100%"},attrs:{src:o(429),alt:"Activated workflow"}}),i("figcaption",{attrs:{align:"center"}},[i("i",[t._v("Activated workflow")])])]),t._v(" "),i("p",[i("strong",[t._v("Workflow Executions")])]),t._v(" "),i("p",[t._v("An execution represents a completed run of a workflow, from the first to the last node. n8n logs workflow executions allowing you to see if the workflow was completed successfully or not. The execution log is really useful for debugging your workflow and seeing at what stage it runs into issues.")]),t._v(" "),i("p",[t._v("To see the execution log click on the icon with three lines in the left panel, which will open the "),i("em",[t._v("Workflow Executions")]),t._v(" window.")]),t._v(" "),i("figure",[i("img",{staticStyle:{width:"100%"},attrs:{src:o(430),alt:"Workflow Execution List"}}),i("figcaption",{attrs:{align:"center"}},[i("i",[t._v("Workflow Execution List")])])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("💡 Workflow execution status")]),t._v(" "),i("p",[t._v("In the "),i("em",[t._v("Workflow Executions")]),t._v(" window you can filter the displayed executions by workflow and by status ("),i("em",[t._v("All")]),t._v(", "),i("em",[t._v("Error")]),t._v(", "),i("em",[t._v("Running")]),t._v(", or "),i("em",[t._v("Success")]),t._v(").")])]),t._v(" "),i("p",[t._v("You get a table with information about:")]),t._v(" "),i("ul",[i("li",[i("em",[t._v("Started At / ID:")]),t._v(" The date and time when the workflow started, followed by the ID of this workflow execution")]),t._v(" "),i("li",[i("em",[t._v("Name:")]),t._v(" The name of the workflow")]),t._v(" "),i("li",[i("em",[t._v("Status:")]),t._v(" The status of the workflow (Error, Running, or Success)")]),t._v(" "),i("li",[i("em",[t._v("Mode:")]),t._v(" How the workflow was triggered (trigger or webhook)")]),t._v(" "),i("li",[i("em",[t._v("Running Time:")]),t._v(" The duration it took the workflow to execute")])]),t._v(" "),i("p",[i("strong",[t._v("Workflow Settings")])]),t._v(" "),i("p",[t._v("If you need to customize your workflows and executions, or overwrite some of the global default settings, you can do this in "),i("em",[t._v("Workflow Settings")]),t._v(". To access them click on "),i("em",[t._v("Workflow Settings")]),t._v(" under the "),i("em",[t._v("Workflows")]),t._v(" section in the left panel.")]),t._v(" "),i("figure",[i("img",{staticStyle:{width:"100%"},attrs:{src:o(431),alt:"Workflow Setting"}}),i("figcaption",{attrs:{align:"center"}},[i("i",[t._v("Workflow Setting")])])]),t._v(" "),i("p",[t._v("In the "),i("em",[t._v("Workflow Settings")]),t._v(" window you can configure six settings:")]),t._v(" "),i("ul",[i("li",[i("em",[i("RouterLink",{attrs:{to:"/getting-started/key-concepts.html#error-workflow"}},[t._v("Error Workflow")]),t._v(":")],1),t._v(" A workflow to run in case the execution of the current workflow fails.")]),t._v(" "),i("li",[i("em",[t._v("Timezone:")]),t._v(' The timezone to use in the current workflow. If not set, the global Timezone (by default "New York") is used. This setting is particularly important for the Cron node, as you want to make sure that the workflow gets executed at the right time.')]),t._v(" "),i("li",[i("em",[t._v("Save Data Error Execution:")]),t._v(" If the Execution data of the workflow should be saved when it fails.")]),t._v(" "),i("li",[i("em",[t._v("Save Data Success Execution:")]),t._v(" If the Execution data of the workflow should be saved when it succeeds.")]),t._v(" "),i("li",[i("em",[t._v("Save Manual Executions:")]),t._v(" If executions started from the Editor UI should be saved.")]),t._v(" "),i("li",[i("em",[t._v("Save Execution Progress:")]),t._v(" If the execution data of each node should be saved. If Yes, you can resume the workflow from where it stopped in case of an error, though keep in mind that this might make the execution slower.")])]),t._v(" "),i("h2",{attrs:{id:"what-s-next"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's next?")]),t._v(" "),i("p",[i("strong",[t._v("You 👩‍🔧")]),t._v(": That was it! Now you have a 7-node workflow that will run automatically every Monday morning. You don't have to worry about remembering to wrangle the data. Instead, you can start your week with more meaningful or exciting work.")]),t._v(" "),i("p",[i("strong",[t._v("Nathan 🙋")]),t._v(": This workflow is incredibly helpful, thank you! Now, what's next for you?")]),t._v(" "),i("p",[i("strong",[t._v("You 👩‍🔧")]),t._v(": I'd like to build more workflows, share them with others, and use some workflows built by other people.")])])}),[],!1,null,null,null);e.default=n.exports},429:function(t,e,o){t.exports=o.p+"assets/img/Activated-workflow.b6afca04.png"},430:function(t,e,o){t.exports=o.p+"assets/img/Execution-list.5fb8c2b8.png"},431:function(t,e,o){t.exports=o.p+"assets/img/Workflow-setting.6bfed0f8.png"}}]);