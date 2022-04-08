import React from "react";

interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps) {
  return <button>{props.label}</button>;
}
