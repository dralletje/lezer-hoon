import { styleTags, tags as t } from "@lezer/highlight";

export const highlight = styleTags({
  Name: t.variableName,

  Aura: t.typeName,
  "Mold!": t.special(t.typeName),

  "Gate/Name DojoName": t.function(t.variableName),
  "rune!": t.special(t.keyword),
  keyword: t.keyword,
  "Number!": t.number,
  "Cord Tape": t.string,
  "{<! >}! ": t.special(t.brace),
  "Interpolation/{! Interpolation/}!": t.special(t.brace),
  "Term $ Sig": t.atom,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  ",": t.separator,
  "Limb!": t.derefOperator,
  "`": t.special(t.string),

  "%.y %.n %.inf": t.atom,
  "True False": t.bool,
});
