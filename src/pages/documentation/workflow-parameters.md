---
layout: ../../layouts/Documentation.astro
author: Some Developer
title: Workflow Parameters
description: Some code Workflow parameters
draft: false
tags: ["Some code", "Workflow"]
order: 4
date: 2023-07-19
---

Every workflow may have parameters assigned to it. When workflow execution starts the parameters are calculated as the first step. If calculation fails execution is aborted.

**Parameters can be**

1. Static
1. EV Variables
1. Calculated

_To access workflow parameters click the percentage % button at the top_

![Working execution toolbar](../../assets/workflow-execution-toolbar.png)

Here are two parameters one static and one calculated.

![Workflow Parameters dialogue](../../assets/workflow-parameters-example-1.png)

**Parameter script**

![Workflow Parameters dialogue](../../assets/workflow-parameters-script.png)

```javascript
const dayjs = require("dayjs");
return dayjs(Date.now()).format("YYYY-MM-DD hh:mm:ss");
```

Once workflow is executed once the actual parameters values can be seen by clicking "Calculated parameters"

![Calculated parameters](../../assets/workflow-parameters-calculation-result.png)
