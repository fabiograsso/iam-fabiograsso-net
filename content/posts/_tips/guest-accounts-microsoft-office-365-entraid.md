---
title: Notes about Guest Accounts in Microsoft Office 365 / EntraID
date: 2025-03-23
tags:
  - Microsoft
  - Azure
  - GuestAccount
  - AzureGuest
  - Office365
description: abc
categories:
  - tips
ShowToc: false
#cover:
#  image: cover.png
#  alt: alt text
#  caption: text
#  relative: true
---
Guest accounts in Microsoft have a format like: `user_gmail.com#EXT#@tenant.onmicrosoft.com`

So, if you want to use email as the username, for instance, you will need to modify the mapping in Okta.

With the default settings, if you try to sign in with a guest user's email, you are likely to get this error:

> You can't sign in here with a personal account. Use your work or school account instead.

This is because Okta's default Microsoft IdP configuration uses this endpoint: `https://login.microsoftonline.com/common/oauth2/v2.0/authorize` which relies on Microsoft's autodiscovery. In practice, it will not work if the guest user doesn't also have a personal Microsoft account.

To enable guest access, the tenant-specific endpoint must be used instead: `https://login.microsoftonline.com/[MS_TENANT_ID]/oauth2/v2.0/authorize`

Therefore, instead of using the built-in Microsoft IdP, it is necessary to create a Custom OIDC IdP with the following settings.

- Issuer: `https://login.microsoftonline.com/[MS_TENANT_ID]/v2.0`
- Authorization endpoint: `https://login.microsoftonline.com/[MS_TENANT_ID]/oauth2/v2.0/authorize`

- Token endpoint: `https://login.microsoftonline.com/[MS_TENANT_ID]/oauth2/v2.0/token`

- JWKS endpoint: `https://login.microsoftonline.com/[MS_TENANT_ID]/discovery/v2.0/keys`

- Userinfo endpoint: `https://graph.microsoft.com/oidc/userinfo`

- Scopes: `email, openid, profile, https://graph.microsoft.com/User.Read`