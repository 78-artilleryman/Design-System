import { clsx } from "clsx";
import * as React from "react";
import { Children, cloneElement, isValidElement } from "react";
import { accordionItemStyle } from "./style.css";
import { AccordionItemProps } from "./types";

function AccordionItem(props: AccordionItemProps, ref: React.Ref<HTMLDivElement>) {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map(child => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
}

const _AccordionItem = React.forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
