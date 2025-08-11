---
title: WinAuth - MFA software for Windows and shared PC use case
date: 2024-02-14
draft: false
tags:
  - Okta
description: 

ShowToc: false
#cover:
#  image: cover.png
#  alt: alt text
#  caption: text
#  relative: true
---
I had a customer with very specific requirements for MFA:

- No app to be installed on employees' devices
- No SMS (they cannot use the employees' personal number)
- Protect with MFA access to a corporate app
- Hardware keys are to be avoided due to the cost and risk of losing them
- Shared PC - included Windows user (more employees use the same session on Windows and share the same password)

Though is not the best in terms of security, it's very hard for them to change this behaviour.

So, I was looking for a solution to propose. We cannot rely on FastPass because the Windows user is shared. We cannot use SMS, FIDO2 Keys, or other system.

There are a lot of MFA software compatible with TOTP or Google Authenticator, but most of them run without a password or with a master password, making it impossible to use them securely in a shared Windows session.

## WinAuth

WinAuth is a portable, open-source Authenticator for Windows that provides **counter or time-based [RFC 6238](https://datatracker.ietf.org/doc/html/rfc6238) authenticators** and common implementations, such as the **Google Authenticator**.

One of the feature is the possibility to protect each Authenticator with a different password. This permit to run the app on a shared PC.

You can [download it from Github](https://winauth.github.io/winauth/download.html)
GitHub source code: (https://github.com/winauth/winauth)

## Demo

<video controls preload="metadata" style="max-width:100%">
<source src="./winauth.mp4" type="video/mp4">
</video>


## Advantages of WinAuth

- Light (~5Mb)
- Don’t require installation and run without admin permissions
- Support multiple MFA and permit to protect each one with a separate code
- It’s open source. A customer can potentially customize it, remove unnecessary features, add custom branding, etc.

## Warning

All that glitters is not gold :winking-face: there are some caveats to consider:

- The app is not maintained anymore. Last release was in 2017, that means that it can have issues with newer version of Windows, unfixed security bugs, etc
- Though it is possible to have separate passwords, every user can delete every Authenticator
- You have to educate users on how to add a new Authenticator and protect it with a password
- It’s a good starting point, but to use it in an Enterprise context, the application must be customized by the customer.

## Alternatives to be evaluated

- https://github.com/Bubka/2FAuth
- https://saaspass.com/
- https://github.com/2fast-team/2fast
- https://github.com/multiOTP/multiotp
- https://github.com/VladimirAkopyan/Authenticator