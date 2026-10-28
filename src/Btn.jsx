import { Loader2 } from "lucide-react";

const VARIANTS = {
  primary:
    "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand/90 hover:shadow-brand/40",
  secondary:
    "border border-border bg-surface/60 text-text hover:border-primary/60 hover:bg-surface",
};

/**
 * Reusable button. Works as the form submit button by default.
 * <Btn text="Send message" />
 * <Btn text="Sending..." loading />
 * <Btn text="Cancel" variant="secondary" type="button" />
 */
const Btn = ({
  text,
  type = "submit",
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold
        transition duration-200 hover:-translate-y-0.5 active:translate-y-0
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg
        disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0
        ${VARIANTS[variant] ?? VARIANTS.primary}
        ${fullWidth ? "w-full" : "w-full sm:w-auto"}
        ${className}`}
      {...props}
    >
      {loading && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
      {text}
    </button>
  );
};

export default Btn;
