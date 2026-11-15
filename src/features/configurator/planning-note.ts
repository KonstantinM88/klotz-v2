/** A browser-local text export. No upload, persistence or server request. */
export function savePlanningNote(name: string, text: string) {
  const file = new Blob(
    [
      `KLOTZ · Planungsnotiz\n\n${text}\n\nUnverbindliche Vorbereitung für ein Beratungsgespräch.\nhttps://www.klotz.mobi\n`,
    ],
    { type: "text/plain;charset=utf-8" },
  );
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `KLOTZ-${name}.txt`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
