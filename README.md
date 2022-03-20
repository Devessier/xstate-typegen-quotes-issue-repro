# xstate-typegen-quotes-issue-repro

The VScode extension fails to generate typegen files when **states** or **tags** contain a **single quote**.

The `@xstate/cli` fails too, and gives some information on the reason.

![ScreenShot](./screenshot.png)

Command run to produce the screenshot:

```sh
yarn xstate typegen "*machine.ts"
```

[Machine with single quotes in a state](./single-quotes-machine.ts)

[Machine with single quotes in a tag](./single-quotes-in-tag-machine.ts)
