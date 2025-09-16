export default defineAppConfig({
  ui: {
    link: {
      base: "focus-visible:outline-primary",
      variants: {
        active: {
          true: "text-inherit",
          false: "text-inherit",
        },
        disabled: {
          true: "cursor-not-allowed opacity-75",
        },
      },
      compoundVariants: [
        {
          active: false,
          disabled: false,
          class: ["transition-colors hover:text-inherit hover:opacity-80"],
        },
      ],
    },
    button: {
      slots: {
        base: "cursor-pointer"
      }
    }
  },
});
