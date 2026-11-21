---
title: "Assistants: Claude, ChatGPT, Claude Code and Cursor"
description: "Connect Claude, ChatGPT, Claude Code or Cursor to your Pregnancy Pal record through its MCP server, choose what each can reach, confirm the deletes it asks for, and disconnect it."
tags: [developers]
last_update:
  date: 2026-11-21
  author: Ahsan Mahmood
---

# Assistants

**An assistant such as Claude can read and change your record when you connect it to Pregnancy Pal's MCP server.** You sign in on Pregnancy Pal, tick what it may reach, and from then on you can ask it things like "move my scan to Thursday at 10" or "what questions am I keeping for the next visit?". It gets your records exactly as you wrote them, never advice from us.

The address to give your assistant:

```text
https://glmjdzqcparrcykstllr.supabase.co/functions/v1/mcp
```

It's also under **Account**, [**Other apps**](https://pregnancypal.aoneahsan.com/profile/other-apps), **Assistants**, with a copy button.

## Connecting

### Claude

1. In Claude, open **Settings**, then **Connectors**.
2. Choose **Add custom connector**. Call it Pregnancy Pal and paste the address above.
3. Press **Connect**. Claude opens Pregnancy Pal, where you sign in and tick what it can do.
4. In a chat, switch the connector on from the tools menu when you want it.

### ChatGPT

1. In ChatGPT, open **Settings**, then **Apps and Connectors**.
2. Under **Advanced settings**, turn on **Developer mode**, then choose **Create**.
3. Call it Pregnancy Pal, paste the address above, and choose **OAuth** for signing in.
4. ChatGPT opens Pregnancy Pal. Sign in and tick what it can do.

### Claude Code

1. In a terminal, run:

   ```bash
   claude mcp add --transport http pregnancy-pal https://glmjdzqcparrcykstllr.supabase.co/functions/v1/mcp
   ```

2. Start Claude Code and type `/mcp`. Choose **pregnancy-pal**, then **Authenticate**.
3. Your browser opens Pregnancy Pal. Sign in and tick what it can do.

### Cursor

1. Open `~/.cursor/mcp.json`, or create it, and add:

   ```json
   {
     "mcpServers": {
       "pregnancy-pal": { "url": "https://glmjdzqcparrcykstllr.supabase.co/functions/v1/mcp" }
     }
   }
   ```

2. In Cursor Settings, open **MCP** and press **Connect** beside **pregnancy-pal**.
3. Your browser opens Pregnancy Pal. Sign in and tick what it can do.

## What you agree to

Connecting opens a Pregnancy Pal page that names the app and the address it sends you back to. If that isn't where you came from, press **Deny**. Below it are the same parts as for an [access key](./access-keys.md), each with **Read** and **Change**, and **Ask to delete** in place of Delete. Untick anything it doesn't need, give the connection a name you'll recognise, and press **Approve**.

A request to connect lasts 10 minutes. If it runs out, nothing was shared; start again from the app. We email you each time an assistant is connected.

The assistant sees only the tools you allowed: `list_` and `get_` for each part it reads, `create_` and `update_` for each part it changes, and `prepare_delete_` for each part it may ask to delete. What a partner shares and the community rooms are read only here too.

## Deletes wait for your yes

An assistant never deletes anything itself. When you ask it to, it prepares the delete and gives you a link to `pregnancypal.aoneahsan.com/developers/confirm/…`. The same pending deletes show under **Asked to delete, waiting for you** in Other apps.

The page shows what it is, as your record shows it right now, and what goes with it: deleting a visit takes its reminders too, while your questions for the visit stay in your list. Press **Delete it** or **Keep it**. Deleting needs a sign-in from the last 10 minutes, or the six digits when [two-step sign-in](./two-step-sign-in.md) is on.

Each request runs out 10 minutes after the assistant made it. There's no way to send the assistant a no: if you keep it, the request runs out on its own and the assistant is told it ran out. Nothing is deleted either way until you press Delete it.

## Renaming and disconnecting

Every connection is listed under **Connected**, with the app's own name, the address it sends you back to, and when it was last used.

- **Rename** gives it a name of 1 to 60 characters. Leave it empty to go back to the app's own name.
- **Remove**, then press again, disconnects it. It can't reach your record any more, from that moment.

## How many you can connect

3 assistants on Free, 10 on Plus and 25 on Family. Every request an assistant makes counts towards your plan's [requests a day](./api.md#rate-limits), with your keys.
