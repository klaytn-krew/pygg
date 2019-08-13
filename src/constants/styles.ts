import { css } from "styled-components";
import { THEME } from "./colors";

export type IInnerType =
  | "compact"
  | "tiny"
  | "small"
  | "middle"
  | "large"
  | "big"
  | "row-tiny"
  | "row-small"
  | "row-middle"
  | "column-tiny"
  | "column-small"
  | "column-middle";

export type IOuterType =
  | "compact"
  | "tiny"
  | "small"
  | "middle"
  | "large"
  | "big"
  | "row-tiny"
  | "row-small"
  | "row-middle"
  | "column-tiny"
  | "column-small"
  | "column-middle";

export type IFontSizeType =
  | "tiny"
  | "compact"
  | "small"
  | "big"
  | "large"
  | "huge"
  | "massive"
  | string;

export type IContentAlignType =
  | "center"
  | "justify-center"
  | "align-center"
  | "align-end"
  | "justify-end"
  | "justify-space-between"
  | "space-between-center";

export type IBorderType =
  | "border-left"
  | "square"
  | "square-bottom"
  | "square-right"
  | "square-bold"
  | "clear"
  | "clear-radius"
  | "clear-vertical"
  | "clear-left"
  | "square-bottom-clear-right";

export function innerStyling(_inner: IInnerType) {
  if (_inner === "compact") {
    return css`
      padding: 0px !important;
    `;
  } else if (_inner === "tiny") {
    return css`
      padding: 2px !important;
    `;
  } else if (_inner === "small") {
    return css`
      padding: 10px !important;
    `;
  } else if (_inner === "middle") {
    return css`
      padding: 20px !important;
    `;
  } else if (_inner === "large") {
    return css`
      padding: 60px !important;
    `;
  } else if (_inner === "big") {
    return css`
      padding: 120px !important;
    `;
  } else if (_inner === "row-tiny") {
    return css`
      padding: 2px 0 !important;
    `;
  } else if (_inner === "row-small") {
    return css`
      padding: 10px 0 !important;
    `;
  } else if (_inner === "row-middle") {
    return css`
      padding: 20px 0 !important;
    `;
  } else if (_inner === "column-tiny") {
    return css`
      padding: 0 2px !important;
    `;
  } else if (_inner === "column-small") {
    return css`
      padding: 0 10px !important;
    `;
  } else if (_inner === "column-middle") {
    return css`
      padding: 0 20px !important;
    `;
  }
}

export function outerStyling(_outer: IOuterType) {
  if (_outer === "compact") {
    return css`
      margin: 0px !important;
    `;
  } else if (_outer === "tiny") {
    return css`
      margin: 2px !important;
    `;
  } else if (_outer === "small") {
    return css`
      margin: 10px !important;
    `;
  } else if (_outer === "middle") {
    return css`
      margin: 20px !important;
    `;
  } else if (_outer === "large") {
    return css`
      margin: 60px !important;
    `;
  } else if (_outer === "big") {
    return css`
      margin: 120px !important;
    `;
  } else if (_outer === "row-tiny") {
    return css`
      margin: 2px 0 !important;
    `;
  } else if (_outer === "row-small") {
    return css`
      margin: 10px 0 !important;
    `;
  } else if (_outer === "row-middle") {
    return css`
      margin: 20px 0 !important;
    `;
  } else if (_outer === "column-tiny") {
    return css`
      margin: 0 2px !important;
    `;
  } else if (_outer === "column-small") {
    return css`
      margin: 0 10px !important;
    `;
  } else if (_outer === "column-middle") {
    return css`
      margin: 0 20px !important;
    `;
  }
}

export function fontSizeStyling(_fontSize: IFontSizeType) {
  if (_fontSize === "tiny") {
    return css`
      font-size: 8px !important;
    `;
  } else if (_fontSize === "compact") {
    return css`
      font-size: 10px !important;
    `;
  } else if (_fontSize === "small") {
    return css`
      font-size: 12px !important;
    `;
  } else if (_fontSize === "large") {
    return css`
      font-size: 14px !important;
    `;
  } else if (_fontSize === "big") {
    return css`
      font-size: 18px !important;
    `;
  } else if (_fontSize === "huge") {
    return css`
      font-size: 25px !important;
    `;
  } else if (_fontSize === "massive") {
    return css`
      font-size: 32px !important;
    `;
  }
}

export function contentAlignStyling(_contentAlign: IContentAlignType) {
  if (_contentAlign === "center") {
    return css`
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    `;
  } else if (_contentAlign === "justify-center") {
    return css`
      display: flex !important;
      justify-content: center !important;
    `;
  } else if (_contentAlign === "align-center") {
    return css`
      display: flex !important;
      align-items: center !important;
    `;
  } else if (_contentAlign === "align-end") {
    return css`
      display: flex !important;
      align-items: flex-end !important;
    `;
  } else if (_contentAlign === "justify-end") {
    return css`
      display: flex !important;
      justify-content: flex-end !important;
    `;
  } else if (_contentAlign === "justify-space-between") {
    return css`
      display: flex !important;
      justify-content: space-between !important;
    `;
  } else if (_contentAlign === "space-between-center") {
    return css`
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
    `;
  }
}

export function borderStyling(_border: IBorderType) {
  if (_border === "border-left") {
    return css`
      border-left: 1px solid ${THEME.palette.line} !important;
    `;
  } else if (_border === "square") {
    return css`
      border-radius: 0 !important;
      background-color: transparent !important;
      border: 1px solid ${THEME.palette.line} !important;
    `;
  } else if (_border === "square-bottom") {
    return css`
      border-bottom: 1px solid ${THEME.palette.line} !important;
    `;
  } else if (_border === "square-right") {
    return css`
      border-right: 1px solid ${THEME.palette.line} !important;
    `;
  } else if (_border === "square-bold") {
    return css`
      border: 1.5px solid ${THEME.palette.info} !important;
    `;
  } else if (_border === "clear") {
    return css`
      border-radius: 0 !important;
      border: 0 !important;
      box-shadow: none !important;
    `;
  } else if (_border === "clear-radius") {
    return css`
      border-radius: 0 !important;
      /* box-shadow: none !important; */
    `;
  } else if (_border === "clear-vertical") {
    return css`
      border-radius: 0 !important;
      border-left: 0 !important;
      border-right: 0 !important;
      box-shadow: none !important;
    `;
  } else if (_border === "clear-left") {
    return css`
      border-radius: 0 !important;
      border-left: 0 !important;
      box-shadow: none !important;
    `;
  } else if (_border === "square-bottom-clear-right") {
    return css`
      border-right: 0 !important;
      border-bottom: 1px solid ${THEME.palette.line} !important;
    `;
  }
}
