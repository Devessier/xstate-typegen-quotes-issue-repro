import { createMachine } from "xstate";

createMachine({
  id: "Machine",
  tsTypes: {} as import("./single-quotes-in-tag-machine.typegen").Typegen0,
  schema: {
    events: {} as { type: "Event" },
  },
  initial: "State 1",
  states: {
    "State 1": {
      // Tag with single quote
      tags: "Display user's profile",
      on: {
          Event: {
              target: 'State 2'
          }
      },
    },
    'State 2': {},
  },
});
