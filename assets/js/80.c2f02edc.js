(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1764:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"erpnext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#erpnext"}},[e._v("#")]),e._v(" ERPNext")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://erpnext.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERPNext"),n("OutboundLink")],1),e._v(" is an open-source integrated Enterprise Resource Planning software. It is a generic ERP software used by manufacturers, distributors, and services companies.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/ERPNext/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Document")]),e._v(" "),n("ul",[n("li",[e._v("Create a document")]),e._v(" "),n("li",[e._v("Delete a document")]),e._v(" "),n("li",[e._v("Retrieve a document")]),e._v(" "),n("li",[e._v("Retrieve all documents")]),e._v(" "),n("li",[e._v("Update a document")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and retrieve a document from ERPNext. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/961",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("ERPNext")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(854),alt:"A workflow with the ERPNext node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-erpnext-node-document-create"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-erpnext-node-document-create"}},[e._v("#")]),e._v(" 2. ERPNext node (document: create)")]),e._v(" "),n("p",[e._v("This node will create a new document in ERPNext.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the ERPNext node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/ERPNext/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Item' from the "),n("em",[n("strong",[e._v("DocType")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Item Name' from the "),n("em",[n("strong",[e._v("Field")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("item 1")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Item Code' from the "),n("em",[n("strong",[e._v("Field")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("item-1")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Item Group' from the "),n("em",[n("strong",[e._v("Field")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Products")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.\n"),n("strong",[e._v("Note:")]),e._v(" Make sure that the item group exists in your ERPNext account.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new item with the name "),n("code",[e._v("item 1")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(855),alt:"Using the ERPNext node to create a new item"}})]),e._v(" "),n("h3",{attrs:{id:"_3-erpnext1-node-document-addcontact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-erpnext1-node-document-addcontact"}},[e._v("#")]),e._v(" 3. ERPNext1 node (document: addContact)")]),e._v(" "),n("p",[e._v("This node will add the "),n("code",[e._v("Item Tax")]),e._v(" property to the item that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Item' from the "),n("em",[n("strong",[e._v("DocType")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Item Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > name. You can also add the following expression: "),n("code",[e._v('{{$json["name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Item Tax' from the "),n("em",[n("strong",[e._v("Field")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("5")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node adds the Item Tax property to the item that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(856),alt:"Using the ERPNext node to update an item"}})]),e._v(" "),n("h3",{attrs:{id:"_4-erpnext2-node-document-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-erpnext2-node-document-get"}},[e._v("#")]),e._v(" 4. ERPNext2 node (document: get)")]),e._v(" "),n("p",[e._v("This node will get the information about the item that we created earlier.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Get' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Item' from the "),n("em",[n("strong",[e._v("DocType")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Item Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > name. You can also add the following expression: "),n("code",[e._v('{{$json["name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the item.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(857),alt:"Using the ERPNext node to return the information an item"}})])])}),[],!1,null,null,null);t.default=r.exports},854:function(e,t,o){e.exports=o.p+"assets/img/workflow.caf86284.png"},855:function(e,t,o){e.exports=o.p+"assets/img/ERPNext_node.1f617552.png"},856:function(e,t,o){e.exports=o.p+"assets/img/ERPNext1_node.323d8391.png"},857:function(e,t,o){e.exports=o.p+"assets/img/ERPNext2_node.e14037d4.png"}}]);