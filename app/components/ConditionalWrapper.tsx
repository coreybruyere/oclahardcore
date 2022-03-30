import { FC, ReactNode } from "react";

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: any;
};

export const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);
