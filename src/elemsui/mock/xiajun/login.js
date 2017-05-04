/**
 * Created by 俊 on 2017/5/3.
 */
const Login =
  [{
    path: '/VUE-ACT-ELEMENTUI/common/loginVue/login.do',
    data: {
      "code": 200,
      "msg": "请求成功",
      "user": {
        "userId": "admin",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "username": "系统管理员",
        "serviceCode": "00000000000000",
        "sex": true,
        "tel": "",
        "mobile": "15933333333",
        "email": "machuan@act-telecom.com",
        "descrip": "",
        "state": false,
        "lastTime": 1493197074000,
        "loginAmount": 6779,
        "isHint": false,
        "question": "",
        "answer": "",
        "createuser": "admin",
        "sysmanage": "1|2|3|4|5|6|7",
        "valueChanged": false
      },
      "authorization": [
        {
          "path": "/",
          "component": "Home/Home",
          "name": "ElemUI DEMO",
          "iconCls": "el-icon-message",
          "hidden": false,
          "children": [
            {
              "path": "/ircsoperatorinfo",
              "component": "elemTable/elemTable",
              "name": "列表展示01",
              "iconCls": "fa fa-arrow-circle-right fa-lg",
              "hidden": false,
              "children": null
            },
            {
              "path": "/ircshouseinfo",
              "component": "Welcome/index",
              "name": "测试页面01",
              "iconCls": "fa fa-arrow-circle-right fa-lg",
              "hidden": false,
              "children": null
            },
            {
              "path": "/ircsuserinfo",
              "component": "Welcome/index",
              "name": "测试页面02",
              "iconCls": "fa fa-arrow-circle-right fa-lg",
              "hidden": false,
              "children": null
            },
            {
              "path": "/testTable",
              "component": "elemTable/elemTable",
              "name": "列表展示02",
              "iconCls": "fa fa-arrow-circle-right fa-lg",
              "hidden": false,
              "children": null
            }
          ]
        }
      ],
      "unitSystemVersion": null,
      "tabSysManageInfo": null,
      "secMenuPurview": {
        "link_log": [
          "query"
        ],
        "ircsinformationmonitor": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete",
          "operate"
        ],
        "ircslogquery": [
          "query"
        ],
        "dynamicresourceiplog": [
          "query",
          "import"
        ],
        "ircsinformationfilter": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete",
          "operate"
        ],
        "ircsmonitorlog": [
          "query"
        ],
        "filterlog": [
          "query"
        ],
        "ircslogreceive": [
          "query"
        ],
        "ircsvisitlogquery": [
          "query",
          "modify",
          "delete",
          "operate"
        ],
        "ircsactivelog": [
          "query"
        ],
        "ircsnofilterweb": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete",
          "operate"
        ],
        "myaccount": [
          "query",
          "modify"
        ],
        "ircscoderelease": [
          "query"
        ],
        "visitlog": [
          "query"
        ],
        "policymanage": [
          "query"
        ],
        "ircsoperatorinfo": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete"
        ],
        "ircsactiveiplog": [
          "query"
        ],
        "ircssecuritymanage": [
          "query"
        ],
        "ircsreturninfo": [
          "query"
        ],
        "illegalwebcommand": [
          "query"
        ],
        "ircspersoninfo": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete"
        ],
        "ircsactivesourcecycle": [
          "query",
          "modify",
          "operate"
        ],
        "ircshouseinfo": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete"
        ],
        "ircspublicdomain": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete"
        ],
        "ircsgateway": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete"
        ],
        "datareportstatis": [
          "query"
        ],
        "ircsfilterlog": [
          "query"
        ],
        "basicinfo": [
          "query"
        ],
        "ircsuserinfo": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete"
        ],
        "ircs_basicinfo": [
          "query"
        ],
        "ircssysinfo": [
          "query"
        ],
        "accessresource": [
          "query"
        ],
        "basicdataerror": [
          "query",
          "block"
        ],
        "active_log": [
          "query"
        ],
        "commandcheck": [
          "query"
        ],
        "ircsipseginfo": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete"
        ],
        "ircs_visitlog": [
          "query"
        ],
        "illegalactionlog": [
          "query"
        ],
        "backup": [
          "query",
          "import",
          "export",
          "delete"
        ],
        "netcard_log": [
          "query"
        ],
        "dynamicresource": [
          "query"
        ],
        "receiveCommand": [
          "query"
        ],
        "dynamicresourcequery": [
          "query",
          "import",
          "export",
          "delete"
        ],
        "illegalinfomanage": [
          "query",
          "export",
          "operate"
        ],
        "ircsillegalweb": [
          "query",
          "import",
          "export",
          "add",
          "modify",
          "delete",
          "operate"
        ],
        "monitorlog": [
          "query"
        ],
        "dynamicresourcedomainlog": [
          "query",
          "import"
        ],
        "warn_manage_ircs": [
          "query"
        ],
        "status_log": [
          "query"
        ],
        "param_config": [
          "query",
          "modify"
        ],
        "illegalmonitorlog": [
          "query"
        ],
        "ircsillegalweblog": [
          "query"
        ],
        "nofilterweb": [
          "query"
        ],
        "ircsactive": [
          "query"
        ],
        "ircssystemlog": [
          "query"
        ],
        "activedomainlog": [
          "query"
        ]
      }
    }
  }
  ]

export default Login;
