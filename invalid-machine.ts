import { createMachine } from "xstate";

createMachine({
  id: "Machine",
  tsTypes: {} as import("./invalid-machine.typegen").Typegen0,
  schema: {
    events: {} as { type: "Event" },
  },
  initial: "State 1",
  states: {
    "State 1": {
      on: {
          Event: {
              target: "State '2"
          }
      },
    },
    "State '2": {},
  },
});
