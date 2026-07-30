/**
 * Gardner Air — Nano Banana 2 prompt helper
 *
 * Composes image-generation prompts for commercial HVAC photography placeholders.
 *
 * BRAND IDENTITY RULE: uniform colors, truck colors, logos, and wordmarks are
 * supplied via reference image at generation time. NEVER describe brand visuals
 * in the text prompt — doing so produces oversaturated logos and AI artifacts.
 * If no reference is attached, render as plain unbranded grey work apparel and
 * a plain unmarked service truck.
 *
 * LOOK: documentary trade-press, not commercial. Realistic lighting, quiet
 * mundane actions, lived-in environments. Never golden-hour, never mid-stride.
 */

type Aspect = "4:5" | "21:9" | "16:9";

const STYLE: Record<Aspect, string> = {
  "4:5":  "50mm lens, open shade or soft diffused window light, documentary trade-press framing, not commercial",
  "21:9": "35mm lens, flat even overcast daylight or mixed practical-and-natural interior light, wide establishing frame, trade-press not commercial",
  "16:9": "35mm lens, flat overcast daylight or soft window light, eye-level, not angled for drama, documentary",
};

const PEOPLE =
  "real working trades professional, normal adult body type, weathered or capable hands, normal skin texture — " +
  "quiet mundane working moment, never staged, never posed, eyes on the work never the lens";

const SETTING =
  "Southern California commercial / industrial context — office building rooftop, warehouse mechanical room, " +
  "or light-industrial facility; normal wear and tear visible on equipment and surfaces";

const BRAND_DEFER =
  "uniform, vehicle markings, logos, and wordmarks supplied via reference image — do NOT invent or describe " +
  "any brand visuals; if no reference is attached render as plain unbranded grey work apparel and a plain unmarked service truck";

const AVOID =
  "avoid: golden-hour glow, magic-hour, raking light, lens flares, HDR, oversaturation, " +
  "cinematic color grading, mid-stride action, jogging, gesturing, pointing, looking-at-camera, " +
  "fake smiles, magazine polish, perfectly clean environments, designer-staged spaces, " +
  "smooth retouched skin, extra fingers, garbled text, duplicated faces, melted machinery, " +
  "residential settings, suburban homes, any residential imagery";

/**
 * Compose a Nano Banana 2 prompt for a Gardner Air photo placeholder.
 *
 * @param scene   2–4 sentences describing ONLY: what is happening in frame,
 *                where, and which equipment/tool/detail is the focal point.
 *                Must NOT include uniform colors, truck colors, logos, or brand names.
 * @param aspect  Intended output aspect ratio
 * @returns       Full prompt string ready for Nano Banana 2
 */
export function composePrompt(scene: string, aspect: Aspect = "4:5"): string {
  return [
    `Style: ${STYLE[aspect]}.`,
    `Subject: ${scene.trim()}`,
    `People: ${PEOPLE}.`,
    `Setting: ${SETTING}.`,
    `Brand: ${BRAND_DEFER}.`,
    AVOID + ".",
  ].join(" ");
}
