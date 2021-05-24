(this.webpackJsonprecyclerview_adapter_documentation=this.webpackJsonprecyclerview_adapter_documentation||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(3),c=n.n(r),d=(n(8),n(0)),s=function(e){var t=e.sample;return Object(d.jsx)("pre",{children:Object(d.jsx)("code",{children:t})})};s.defaultsProps={sample:""};var o=s,l=function(e){var t=e.descp;return Object(d.jsx)("p",{children:t})};l.defaultProp={descp:""};var j=l;function p(e){var t=e.title;return Object(d.jsx)("div",{style:{marginBottom:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"},children:Object(d.jsx)("p",{children:t})})}p.defaultsProps={title:""};var h=p;var u=function(){return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(h,{title:"Description"}),Object(d.jsx)(j,{descp:"This is Android Recyclerview Adapter  which encapsulate the boilerplate code and push all the UI related work into the parent activity class of the Recyclerview."})," ",Object(d.jsx)(h,{title:"Adding to project"}),Object(d.jsx)(j,{descp:"Enable databinding in the app build.gradle"}),Object(d.jsx)(o,{sample:"android{\n        ...\n         buildFeatures {\n             dataBinding true\n         \n           }\n         }"}),Object(d.jsx)(j,{descp:"Add the following line to the app build.gradle dependencies"}),Object(d.jsx)(o,{sample:"implementation 'com.irfan.android:rcadapter:1.0.0'"}),Object(d.jsx)(h,{title:"Usage"}),Object(d.jsxs)("ol",{style:{paddingLeft:"10px"},children:[Object(d.jsx)("li",{children:"implement ItemLayoutManger"}),Object(d.jsx)("li",{children:"create row layouts"}),Object(d.jsx)(o,{sample:'<?xml version="1.0" encoding="utf-8"?>\n    <layout>\n        <data>\n            <variable\n                name="dataObject"\n                type="com.mm.rcyclerviewadoptorexperiment.DataItems" />\n        </data>\n    <LinearLayout\n        xmlns:android="http://schemas.android.com/apk/res/android" android:layout_width="match_parent"\n        android:layout_height="wrap_content">\n        <TextView\n            android:layout_width="wrap_content"\n            android:layout_height="match_parent"\n            android:text="@{dataObject.message}"\n            />\n    \n    </LinearLayout>\n    </layout>'}),Object(d.jsx)("li",{children:"Override the getLayoutId()"}),Object(d.jsx)(o,{sample:"\n    override fun getLayoutId(position: Int): Int {\n        return when(position){\n            0 -> R.layout.layout_header\n            else -> R.layout.layout_row\n        }\n    }\n    "}),Object(d.jsx)("li",{children:"Initialiaze adapter, set data, and bind recyclerview"}),Object(d.jsx)(o,{sample:"\n    private val adapter = RcAdapter<DataItems>(this, this)\n    adapter.setItems(createList())\n    adapter.bindRecyclerView(binding.nameList)\n    "}),Object(d.jsx)("li",{children:"override bindView() (Optional) :Only if the handling of the view is required like for background color change and adding listeners."}),Object(d.jsx)(o,{sample:'\n    override fun bindView(view: View, getAdapterPosition: () -> Int) {\n        view.setOnClickListener { Toast.makeText(this,"Click Position: ${getAdapterPosition()}",Toast.LENGTH_SHORT).show() }\n    }\n    '})]})]})};var b=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("p",{children:" Created by: Irfan Ul Haq"})})},x=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h3",{children:"Easy RecyclerView Adapter"})})};var m=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(x,{}),Object(d.jsx)(u,{}),Object(d.jsx)(b,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()},8:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.4ea60b0d.chunk.js.map