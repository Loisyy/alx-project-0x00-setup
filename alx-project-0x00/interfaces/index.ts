// interfaces/index.ts
export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  styles?: string; // <-- ALX expects this
}

export interface PillProps {
  title: string;
}
