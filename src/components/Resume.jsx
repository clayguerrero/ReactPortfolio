export default function Resume() {
  const downloadTxtFile = () => {
    const texts = [
      `Clayton Guerrero
5129158321 | claytondguerrero@gmail.com | Hockley, TX 77447
SUMMARY
Organized and motivated employee eager to apply time management and organizational skills in
various environments. Seeking entry-level opportunities to expand skills while facilitating company
growth.
SKILLS
JavaScript
MERN stack proficient
Problem Resolution
Conflict Resolution
Team Building
EDUCATION AND TRAINING
Some College (No Degree)
Software Development
WEBSITES, PORTFOLIOS, PROFILES
https://github.com/clayguerrero
ADDITIONAL INFORMATION
Currently engaged in an apprenticeship with seasoned software engineer, learning and
mastering React & Redux.
EXPERIENCE
Cashier & Personal Shopper, H-E-B, November 2017-Current
Collected payments and provided accurate change.
Worked closely with front-end staff to assist customers.
Completed daily recovery tasks to keep areas clean and neat for maximum productivity.
Processed sales transactions to prevent long customer wait times.
Scanned merchandise using point-of-sale system for accurate purchase totals.`,
    ];

    const file = new Blob(texts, { type: "text/plain" });

    const element = document.createElement("a");

    element.href = URL.createObjectURL(file);
    element.download = "Clayton-Guerrero-Resume" + Date.now() + ".txt";

    document.body.appendChild(element);
    element.click();
  };
  return (
    <div>
      <h2 className="text-3xl text-white bold">Resume</h2>
      <div className="btnDiv">
        <button
          id="downloadBtn"
          onClick={downloadTxtFile}
          value="download"
          type="button"
          class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Download
        </button>
      </div>
    </div>
  );
}
