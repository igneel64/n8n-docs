(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1481:function(t,e,a){"use strict";a.r(e);var s=a(26),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"key-concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-concepts"}},[t._v("#")]),t._v(" Key Concepts")]),t._v(" "),s("p",[t._v("To get the most out of n8n's functionalities and build powerful workflows, it's important to understand some basic concepts.")]),t._v(" "),s("h2",{attrs:{id:"expression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expression"}},[t._v("#")]),t._v(" Expression")]),t._v(" "),s("p",[t._v("An expression is a string of characters and symbols in a programming language that represents a value depending upon its input.\nn8n uses "),s("RouterLink",{attrs:{to:"/nodes/expressions.html"}},[t._v("expressions")]),t._v(" extensively when a node refers to another node for input.")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(464),alt:"Node expression"}})]),t._v(" "),s("h2",{attrs:{id:"item"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item"}},[t._v("#")]),t._v(" Item")]),t._v(" "),s("p",[t._v("Data sent from one node to another is sent as an array of JSON objects. Each element in this collection is called an "),s("strong",[t._v("Item")]),t._v(". A node performs its action on each item of incoming data.")]),t._v(" "),s("h2",{attrs:{id:"function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" Function")]),t._v(" "),s("p",[t._v("A function is a block of code designed to perform a certain task. In n8n, you can write custom "),s("RouterLink",{attrs:{to:"/reference/javascript-code-snippets.html"}},[t._v("JavaScript code snippets")]),t._v(" to add, remove, and update the data you receive from a node.")],1),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Function")]),t._v(" and "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/FunctionItem/"}},[t._v("Function Item")]),t._v(" nodes are the most powerful in n8n. Both nodes work very similarly, they give you access to the incoming data and you can manipulate it. With these nodes you can implement any function you want using JavaScript code.")],1),t._v(" "),s("p",[t._v("The code of the "),s("strong",[t._v("Function node")]),t._v(" gets executed only once. The node receives the full items (JSON and binary data) as an array and expects an array of items as a return value. The items returned can be totally different from the incoming ones. So it is not only possible to remove and edit existing items, but also to add or return totally new ones.")]),t._v(" "),s("p",[t._v("The code of the "),s("strong",[t._v("Function Item node")]),t._v(" gets executed once for every item. The node receives one item (just the JSON data) at a time as input. As a return value, it expects the JSON data of one single item. That makes it possible to add, remove, and edit JSON properties of items, but it is not possible to add new or remove existing items. Accessing and changing binary data is only possible via the methods "),s("code",[t._v("getBinaryData")]),t._v(" and "),s("code",[t._v("setBinaryData")]),t._v(".")]),t._v(" "),s("p",[t._v("Both the Function node and Function Item node support promises. So instead of returning the item or items directly, it is also possible to return a promise which resolves accordingly.")]),t._v(" "),s("p",[t._v("Here is a comparative overview of the Function and Function Item nodes:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Data to access")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("FunctionItem")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("JSON data")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("items["),s("em",[t._v("index")]),t._v("].json")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("item")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Binary data")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("items["),s("em",[t._v("index")]),t._v("].binary")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("getBinaryData()")])])])]),t._v(" "),s("h2",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),s("p",[t._v('Data represents units of information that are collected by and transmitted through nodes. For "basic usage" it is not necessarily needed to understand how the data that gets passed from one node to another is structured. However, it becomes important if you want to:')]),t._v(" "),s("ul",[s("li",[t._v("Create your own node")]),t._v(" "),s("li",[t._v("Write custom expressions")]),t._v(" "),s("li",[t._v("Use the Function or Function Item node")])]),t._v(" "),s("h3",{attrs:{id:"data-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),s("p",[t._v("In n8n, all the data that is passed between nodes is an array of objects. It has the following structure:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Each item has to contain a "json" property. But it can be an empty object like {}.')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Any kind of JSON data is allowed. So arrays and the data being deeply nested is fine.")]),t._v("\n\t\tjson"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The actual data n8n operates on (required)")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This data is only an example it could be any kind of JSON data")]),t._v("\n\t\t\tjsonKeyName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'keyValue'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tanotherJsonKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tlowerLevelJsonKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Binary data of item. The most items in n8n do not contain any (optional)")]),t._v("\n\t\tbinary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// The key-name "binaryKeyName" is only an example. Any kind of key-name is possible.')]),t._v("\n\t\t\tbinaryKeyName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tdata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '....'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Base64 encoded binary data (required)")]),t._v("\n\t\t\t\tmimeType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'image/png'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n\t\t\t\tfileExtension"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'png'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n\t\t\t\tfileName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'example.png'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"data-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-flow"}},[t._v("#")]),t._v(" Data Flow")]),t._v(" "),s("p",[t._v('Nodes do not only process one "item", they process multiple ones.\nFor example, if the Trello node is set to '),s("code",[t._v("Create-Card")]),t._v(" and it has an expression set for "),s("code",[t._v("Name")]),t._v(" to be set depending on "),s("code",[t._v("name")]),t._v(" property, it will create a card for each item, always choosing the "),s("code",[t._v("name-property-value")]),t._v(" of the current one.")]),t._v(" "),s("p",[t._v("This data would, for example, create two boards. One named "),s("code",[t._v("test1")]),t._v(" the other one named "),s("code",[t._v("test2")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"error-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-workflow"}},[t._v("#")]),t._v(" Error Workflow")]),t._v(" "),s("p",[t._v("For each workflow, an optional Error Workflow can be set in the Workflow Settings. It gets executed if the original execution fails. That makes it possible to, for instance, inform the user via Email or Slack if something goes wrong. The same Error Workflow can be set on multiple workflows.")]),t._v(" "),s("p",[t._v("The only difference between a regular workflow and an Error Workflow is that it contains an Error Trigger node, so it is important to make sure that this node gets created before setting a workflow as Error Workflow.")]),t._v(" "),s("p",[t._v("The Error Trigger node will trigger in case the execution fails and receives information about it. The data looks like this:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"execution"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"231"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://n8n.example.com/execution/231"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"retryOf"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"34"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Error Message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stack"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Stacktrace"')]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastNodeExecuted"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Node With Error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manual"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workflow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Workflow"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("All information is always present except:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("execution.id")]),t._v(": Only present when the execution gets saved in the database")]),t._v(" "),s("li",[s("strong",[t._v("execution.url")]),t._v(": Only present when the execution gets saved in the database")]),t._v(" "),s("li",[s("strong",[t._v("execution.retryOf")]),t._v(": Only present when the execution is a retry of a previously failed execution")])]),t._v(" "),s("h2",{attrs:{id:"security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),s("p",[t._v("By default, n8n can be accessed by everybody. This is okay if you only have it running\nlocally but if you deploy it on a server which is accessible from the web, you have\nto make sure that n8n is protected.")]),t._v(" "),s("h3",{attrs:{id:"basic-auth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-auth"}},[t._v("#")]),t._v(" Basic Auth")]),t._v(" "),s("p",[t._v("Right now we have very basic protection in place using basic-auth. It can be activated\nby setting the following environment variables:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_ACTIVE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PASSWORD"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),s("p",[t._v("There is also limited support for JWT based authentication. If enabled, n8n will verify the token with the provided JSON Web Key Set URI. It can be configured through the following environment variables:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_JWT_AUTH_ACTIVE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_JWT_AUTH_HEADER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HEADER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_JWKS_URI")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("URI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Keep in mind that there is currently no built-in way of passing down the Token in the request, so to use JWT you have to have the token in the request manually.")])])}),[],!1,null,null,null);e.default=n.exports},464:function(t,e,a){t.exports=a.p+"assets/img/Node_expression.501a6826.gif"}}]);