import { vars } from "@byeonghyeon/themes";
import { clsx } from "clsx";
import * as React from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { GridProps } from "./types";

function Grid(props: GridProps, ref: React.Ref<HTMLElement>) {
  const {
    as = "div",
    children,
    color,
    background,
    autoColumns,
    autoFlow,
    autoRows,
    column,
    columnGap,
    gap,
    row,
    rowGap,
    templateAreas,
    templateColumns,
    templateRows,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))),
        props.className,
      ]),
      style: {
        display: "grid",
        gridAutoColumns: autoColumns,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridColumnGap: columnGap,
        gridGap: gap,
        gridRowGap: rowGap,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridColumn: column,
        gridRow: row,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children
  );
}

const _Grid = React.forwardRef(Grid);
export { _Grid as Grid };
