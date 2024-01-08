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
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl text-white bold">Resume</h2>
      <div className="skillContainer flex grid grid-cols-2 w-1/2">
        <div className="front">
          <h3 className="text-white text-xl">Frontend Skills</h3>
          <ul className="flex flex-col  list-disc">
            <li className="text-white text-sm list-inside">React</li>
            <li className="text-white text-sm list-inside">HTML</li>
            <li className="text-white text-sm list-inside">CSS</li>
            <li className="text-white text-sm list-inside">jQuery</li>
            <li className="text-white text-sm list-inside">JavaScrip</li>
            <li className="text-white text-sm list-inside">
              Responsive Design
            </li>
            <li className="text-white text-sm list-inside">Bootstrap</li>
            <li className="text-white text-sm list-inside">Tailwind</li>
          </ul>
        </div>
        <div className="back">
          <h3 className="text-white text-xl">Backend Skills</h3>
          <ul className="list-disc">
            <li className="text-white text-sm list-inside">Node</li>
            <li className="text-white text-sm list-inside">SQL</li>
            <li className="text-white text-sm list-inside">noSQL</li>
            <li className="text-white text-sm list-inside">
              Object Relational Mapping
            </li>
            <li className="text-white text-sm list-inside">Express.js</li>
          </ul>
        </div>
      </div>
      <div className="btnDiv">
        <button
          id="downloadBtn"
          onClick={downloadTxtFile}
          value="download"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download
        </button>
      </div>
    </div>
  );
}
