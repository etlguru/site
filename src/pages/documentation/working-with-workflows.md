---
layout: ../../layouts/Documentation.astro
author: Some Developer
title: Working With Workflows
description: Working With Workflows
draft: false
tags: ["Some code", "Workflow"]
order: 2
date: 2023-07-19
---

## Creating Workflow

To create new workflow click plus button, fill in all necessary fields and click ok button

![Creating Workflow](../../assets/create-workflow.png)

## Workflow screen overview

![Login dialogue](../../assets/workflow.png)

The workflow consists of Actions and Design objects.

1. Actions are executable objects
2. Design objects are used for documenting workflows

## Working with actions

1. To add the action to the workflow drag and drop it from the actions list
1. Click on action/object to select it
1. Double-click to change action properties
1. Or use right click

![Working with actions](../../assets/working-with-actions.png)

Every workflow has a starting Action (green thin line on the top left)\
It might also have a default success Action (blue thin line on the top middle) and a default error Action (red thin line on the top right)\
The number on the top represents the execution order.
Thin brown lines at the bottom indicate the last action executed
Small circle at top right is brake point

### Joining the actions

1. Select the action
1. Click on the circle on the right and start dragging
1. Release mouse on the right of target action

_To remove the join repeat the process_

## Workflow Execution Toolbar

![Working execution toolbar](../../assets/workflow-execution-toolbar.png)

### Workflow Metadata Dialogue

![Workflow dialogue](../../assets/workflow-metadata.png)

### Workflow Parameters Dialogue

![Workflow parameters](../../assets/workflow-parameters.png)

**Note** Workflow parameters are calculated as the first step of workflow execution

Every parameter has a name and a value
There are three types of parameters

1. Static
1. EV variable
1. Calculated

Once workflow is executed once the actual parameters values can be seen by clicking "Calculated parameters"

### Debugging workflow execution

Workflow can be executed manually by clicking green arrow. It is also possible to execute individual actions by using context menu.

![Action context menu](../../assets/action-context-menu.png)

### Deploy workflow

Deploy workflow dialogue is used for constantly running workflows.

![Deploy workflow dialogue](../../assets/deploy-workflow.png)

It allows to control level of logging

### Execution log dialogue

Execution log helps to debug workflow execution and investigate problems

### Summary

![Execution log summary](../../assets/excution-log-summary.png)

### Details

![Execution log summary](../../assets/execution-log-details.png)

## Sidebar Toolbar

![Sidebar Toolbar](../../assets/sidebar-toolbar.png)

Most of the toolbar actions are self explanatory so we will concentrate on not so obvious ones

1. Show/hide toolbar
1. Home
1. Open workflow
1. Add workflow
1. Save workflow
1. Save as workflow
1. Delete workflow
1. Undo
1. Redo
1. Publish workflow to the library
1. Share workflow with users or groups
1. Upload workflow from JSON file
1. Download workflow as JSON file
1. Edit workflow source
1. Scheduler
1. Currently running workflows
1. Credentials
1. Connections
1. Actions
1. File browser
1. Feedback dialogue

### Open workflow

![Open workflow](../../assets/workflow-list.png)

### Publish workflow to the library

This dialogue publishes workflow to the public library so it can be used by all users of **Some code**

![Publish workflow](../../assets/publish-workflow.png)

### Share workflow

This dialogue allows the user to share workflow with other users or group

![Share dialogue](../../assets/share-workflow.png)

### Upload workflow from JSON file

![Upload workflow from JSON file](../../assets/upload-workflow-source.png)

### Edit workflow source

![Edit workflow source](../../assets/workflow-source.png)

### Scheduler

![List of scheduled packages](../../assets/schedule.png)

### Currently running workflows

![Currently running workflows](../../assets/currently-running-workflows.png)

### Credentials

![Credentials](../../assets/credentials.png)

### Connections

![Connections](../../assets/connections.png)

#### Difference between connection and credential

Connection defines list values the credential must have

For example

**Database connection**

1. host name
1. port
1. database name
1. user name
1. password

**Database credential**

1. host name = some-code
1. port = 1534
1. database name = sales
1. user name = john
1. password = fjwlfmw1

### Actions

![Action Library](../../assets/action-library.png)

### File browser

![File browser](../../assets/file-browser.png)

File browses provides a connivent way of browsing file system files

### Feedback dialogue

![Feedback dialogue](../../assets/feedback.png)

Sends feedback to "Some code" developers. We welcome your suggestions to make our software better

## Navigation

F2: Execute Workflow\
Crtrl+O: Open Workflow\
Crtrl+L: Execution Log\
Crtrl+P: Metadata\
Alt+P: Parameters\
Crtrl+S: Save package\
Crtrl+Z: Undo\
Crtrl+Y: Redo\
Crtrl+A: Select all\
Del: Delete selected\
\- Zoom In\
\+ Zoom Out\
 (Please click on the design area first)\

## Dialogue boxes

ESC Go back/Close dialogue\
Ctrl+S Save data\
