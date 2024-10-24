import {
  TextField,
  TextFieldErrorMessage,
  TextFieldLabel,
  TextFieldRoot,
} from "@/components/ui/textfield";
import { createEffect, createSignal, Setter } from "solid-js";

export type TextFormProps = {
  label: string;
  placeholder?: string;
  type: string;
  errors: Array<{ match: RegExp; message: string }>;
  available?: boolean;
  valueSetter: Setter<string | null>;
};

export function ValidatedForm(props: TextFormProps) {
  const [formErrors, setFormErrors] = createSignal<string[]>([]);
  const [formRef, setFormRef] = createSignal<HTMLInputElement>();
  const borderStyle = { border: "border-2", color: "border-rose-600" };

  const isError = () => {
    return formErrors().length > 0;
  };

  function validate(value: string) {
    if (!!!props.available) return;
    let currentErrors: string[] = [];
    props.errors.forEach((e) => {
      if (!!!value.match(e.match)) {
        currentErrors.push(e.message);
      }
    });
    props.valueSetter(currentErrors.length === 0 ? value : null);
    setFormErrors(currentErrors);
  }

  createEffect(() => {
    if (props.available) validate(formRef()?.value || "");
  });

  return (
    <TextFieldRoot validationState={isError() ? "invalid" : "valid"}>
      <TextFieldLabel>{props.label}</TextFieldLabel>
      <TextField
        ref={setFormRef}
        class={`my-2 ${isError() &&
          `${borderStyle.border} ${borderStyle.color}`}`}
        placeholder={props.placeholder}
        type={props.type}
        oninput={(event: any) => validate(event.currentTarget.value)}
      />
      <TextFieldErrorMessage>{formErrors().join(" ")}</TextFieldErrorMessage>
    </TextFieldRoot>
  );
}
