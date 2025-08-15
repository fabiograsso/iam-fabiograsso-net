---
title: Mac OS - Resize Window to a specific size
date: 2024-02-16
tags:
  - Apple
  - MacOS
description: abc
ShowToc: false
---
Use case: when you need to record a video or share an application via Zoom, and you need the right aspect ratio (i.e. 16:9)

Sample Apple Script for Arc (you can change the app name for other applications):

```applescript
set appName to "Arc"
tell application "System Events"
    set appProcess to first process whose name is appName
    tell appProcess
        set frontWindow to first window
        set newWindowSize to {1920, 1080}
        set position of frontWindow to {0, 0}
        set size of frontWindow to newWindowSize
    end tell
end tell
```

If you use a dual (or more) monitor setup, you have to play a bit with set position of frontWindow in order to place the window in the right position. The first value can be the resolution of the 1st monitor (i.e. 1513 for a 14” MacBook Pro), and the second value depends on the resolution of the 2nd monitor. Try some value until you find the right one winking face

```applescript
set appName to "Arc"
tell application "System Events"
    set appProcess to first process whose name is appName
    tell appProcess
        set frontWindow to first window
        set newWindowSize to {1920, 1080}
        set position of frontWindow to {1513, -1000}
        set size of frontWindow to newWindowSize
    end tell
end tell
```

### Notes:

1. In order to work, the Script Editor must be on the same virtual monitor as the application.

2. if you want, you can export the script in .app format and run it without opening the Script Editor

3. I’m not an Apple Script expert. Maybe there is a better way… this just runs fine for my needs slightly smiling face 