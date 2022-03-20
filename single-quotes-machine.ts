import { createMachine } from "xstate";

createMachine({
  id: "Machine",
  tsTypes: {} as import("./single-quotes-machine.typegen").Typegen0,
  schema: {
    events: {} as { type: "Event" },
  },
  initial: "State 1",
  states: {
    "State 1": {
      on: {
          Event: {
              target: "Open user's profile"
          }
      },
    },
    // State with simple quote
    "Open user's profile": {},
  },
});
