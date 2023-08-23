---
layout: ../../layouts/Documentation.astro
author: Mike Rewnick
title: Access Log
description: URL Logger Access Log
draft: false
tags: ['URL Logger', 'Access Log']
date: 2023-07-19
---

Access log provides a convenient way of investigating the issues

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/access-log.png" title="Access Log" >}}

## Log files location

- Windows: C:\ProgramData\ETL-Tools.com\url-logger\log
- Linux: /etc/etl-tools.com/url-logger\log

{{< alert color="warning" >}}
Over time the logs will grow in size so it is important to delete them periodically
{{< /alert >}}

{{< url-logger >}}
