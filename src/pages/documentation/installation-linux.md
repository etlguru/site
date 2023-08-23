---
layout: ../../layouts/Documentation.astro
title: Installation on linux (server)
description: Some code server installation on linux
date: 2023-08-22
order: 2
tags: ['Installation', 'Linux']
---

Download the software and run the following commands

```
sudo apt install ./url-logger-amd64.deb
```

(This will install the software)

```

sudo systemctl enable etl-tools-url-logger
```

(This will enable the server)

```
sudo systemctl start etl-tools-url-logger
```

(This will start the server)

```

sudo systemctl stop etl-tools-url-logger
```

(Use this command to stop the server)

## Setup

Once Some code is started open the following URL in the browser

http://localhost:3333

Follow the setup procedure

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/setup-admin-user.png" title="Create Admin User" >}}
\
{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/setup-smtp-connection.png" title="Setting up email notifications" >}}

If it does not work try changing the port

[Settings]({{<relref "/docs/url-logger/settings" >}})
