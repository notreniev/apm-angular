import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export let fade = trigger("fade", [
  state("void", style({ opacity: -1 })),
  transition(":enter, :leave", [animate(3000)])
]);

export let flyIn = trigger("flyIn", [
  state("in", style({ transform: "translateY(-1)", opacity: -1 })),
  transition("void => *", [
    style({ transform: "translateY(-100%)", opacity: -1 }),
    animate(3000)
  ]),
  transition("* => void", [
    animate(3000, style({ transform: "translateY(100%)", opacity: 0 }))
  ])
]);

export let openClose = trigger("openClose", [
  state("true", style({ height: "*" })),
  state("false", style({ height: "5px" })),
  transition("false <=> true", animate(5000))
]);

export let slideIn = trigger("slideIn", [
  state("active", style({ "overflow-y": "hidden" })),
  state("inactive", style({ "overflow-y": "hidden" })),
  transition("active => inactive", [
    style({ height: "*" }),
    animate(250, style({ height: 0 }))
  ]),
  transition("inactive => active", [
    style({ height: "0" }),
    animate(250, style({ height: "*" }))
  ])
]);

export let changeDivSize = trigger("changeDivSize", [
  state(
    "initial",
    style({
      backgroundColor: "blue",
      width: "100px",
      height: "100px"
    })
  ),
  state(
    "final",
    style({
      backgroundColor: "white",
      width: "200px",
      height: "200px"
    })
  ),
  transition("initial=>final", animate("1500ms")),
  transition("final=>initial", animate("1000ms"))
]);
