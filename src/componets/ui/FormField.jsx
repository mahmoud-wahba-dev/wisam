export const inputClass =
  "w-full rounded-xl border border-secondary/15 bg-white px-4 text-sm text-secondary " +
  "placeholder:text-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

export const inputClassSingle = `h-12 ${inputClass}`;
export const selectClass = `select-field ${inputClassSingle}`;
export const textareaClass = `min-h-28 resize-y py-3 leading-relaxed ${inputClass}`;

/* Labelled form control with a leading icon, shared by the join-us forms. */
const FormField = ({ label, icon: Icon, className, children }) => (
  <label className={className}>
    <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-secondary">
      {Icon && <Icon className="size-4 text-primary" aria-hidden="true" />}
      {label}
    </span>
    {children}
  </label>
);

export default FormField;
