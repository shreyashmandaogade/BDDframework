$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user will enter url \"file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user will verify \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user will validate \"\u003cerror\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "jbk-offline-application;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass",
        "title",
        "error"
      ],
      "line": 12,
      "id": "jbk-offline-application;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "Dashboard",
        ""
      ],
      "line": 13,
      "id": "jbk-offline-application;login-test;;2"
    },
    {
      "cells": [
        "mangesh@gmail.com",
        "asdfgh",
        "Log in",
        "Please enter password 123456"
      ],
      "line": 14,
      "id": "jbk-offline-application;login-test;;3"
    },
    {
      "cells": [
        "neelam@gmail.com",
        "123456",
        "Log in",
        "Please enter password 123456"
      ],
      "line": 15,
      "id": "jbk-offline-application;login-test;;4"
    },
    {
      "cells": [
        "rahul@gmail.com",
        "123456",
        "Log in",
        "Please enter password 123456"
      ],
      "line": 16,
      "id": "jbk-offline-application;login-test;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user will enter url \"file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user will verify \"Dashboard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user will validate \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html",
      "offset": 21
    }
  ],
  "location": "Loginstepdefs.user_will_enter_url(String)"
});
formatter.result({
  "duration": 3947164400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "Loginstepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1624002800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 18
    }
  ],
  "location": "Loginstepdefs.user_will_verify(String)"
});
formatter.result({
  "duration": 18695200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "Loginstepdefs.user_will_validate(String)"
});
formatter.result({
  "duration": 15630300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user will enter url \"file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"mangesh@gmail.com\" and \"asdfgh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user will validate \"Please enter password 123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html",
      "offset": 21
    }
  ],
  "location": "Loginstepdefs.user_will_enter_url(String)"
});
formatter.result({
  "duration": 2514843400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh@gmail.com",
      "offset": 13
    },
    {
      "val": "asdfgh",
      "offset": 37
    }
  ],
  "location": "Loginstepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 379625600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "Loginstepdefs.user_will_verify(String)"
});
formatter.result({
  "duration": 4845200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter password 123456",
      "offset": 20
    }
  ],
  "location": "Loginstepdefs.user_will_validate(String)"
});
formatter.result({
  "duration": 41979800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user will enter url \"file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"neelam@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user will validate \"Please enter password 123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html",
      "offset": 21
    }
  ],
  "location": "Loginstepdefs.user_will_enter_url(String)"
});
formatter.result({
  "duration": 2142853800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelam@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 36
    }
  ],
  "location": "Loginstepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 332784900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "Loginstepdefs.user_will_verify(String)"
});
formatter.result({
  "duration": 6471600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter password 123456",
      "offset": 20
    }
  ],
  "location": "Loginstepdefs.user_will_validate(String)"
});
formatter.result({
  "duration": 39389400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Please enter password 123456]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepdefs.Loginstepdefs.user_will_validate(Loginstepdefs.java:50)\r\n\tat ✽.And user will validate \"Please enter password 123456\"(login.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user will enter url \"file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"rahul@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user will validate \"Please enter password 123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html",
      "offset": 21
    }
  ],
  "location": "Loginstepdefs.user_will_enter_url(String)"
});
formatter.result({
  "duration": 2219910800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahul@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "Loginstepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 227603900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "Loginstepdefs.user_will_verify(String)"
});
formatter.result({
  "duration": 5335800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter password 123456",
      "offset": 20
    }
  ],
  "location": "Loginstepdefs.user_will_validate(String)"
});
formatter.result({
  "duration": 39815300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Please enter password 123456]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepdefs.Loginstepdefs.user_will_validate(Loginstepdefs.java:50)\r\n\tat ✽.And user will validate \"Please enter password 123456\"(login.feature:8)\r\n",
  "status": "failed"
});
});