// Function to open a selected folder
function openFolder(folderName) {
    window.location.href = `books.html?folder=${folderName}`;
}

// Function to load books dynamically based on the folder
function loadBooks() {
    // Get folder name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const folderName = urlParams.get('folder');

    if (!folderName) return;

    // Update page title
    document.getElementById("category-title").innerText = folderName.replace("-", " ") + " 📖";

    // Books in each folder
    const books = {
        Cloud: [
            { title: "AWS Security", file: "aws-security/AWSSecurity.pdf", cover: "aws-security/AWSSecurity.jpg" },
            { title: "AWS Solutions Architect", file: "aws-solutions-architect/AWSSolutionsArchitect.pdf", cover: "aws-solutions-architect/AWSSolutionsArchitect.jpg" },
            { title: "Cloud Challenges", file: "cloud-challenges/CloudChallenges.pdf", cover: "cloud-challenges/CloudChallenges.jpg"},
            { title: "Cloud Computing", file: "cloud-computing/CloudComputing.pdf", cover: "cloud-computing/CloudComputing.jpg"},
            { title: "Google Cloud Concepts", file: "google-cloud-concepts/GoogleCloudConcepts.pdf", cover: "google-cloud-concepts/GoogleCloudConcepts.jpg"},
        ],
        Excel: [
            { title: "Excel Formulas List", file: "excel-formulas-list/ExcelFormulasList.pdf", cover: "excel-formulas-list/ExcelFormulasList.jpg" },
            { title: "Functions In Microsoft Excel", file: "functions-in-microsoft-excel/FunctionsInMicrosoftExcel.pdf", cover: "functions-in-microsoft-excel/FunctionsInMicrosoftExcel.jpg" },
            { title: "VBA For Excel", file: "vba-for-excel/VBAForExcel.pdf", cover: "vba-for-excel/VBAForExcel.jpg"},
            { title: "V-Lookup And H-Lookup", file: "vlookup-and-hlookup/VLookupAndHLookup.pdf", cover: "vlookup-and-hlookup/VLookupAndHLookup.jpg"}
        ],
        HTML_CSS: [
            { title: "HTML Cheat Sheet", file: "html-cheat-sheet/HTMLCheatSheet.pdf", cover: "html-cheat-sheet/HTMLCheatSheet.jpg" }
        ],
        Java: [
            { title: "Head First Java", file: "head-first-java/HeadFirstJava.pdf", cover: "head-first-java/HeadFirstJava.jpg" },
            { title: "Java Notes", file: "java-notes/JavaNotes.pdf", cover: "java-notes/JavaNotes.jpg" },
            { title: "Java Programming", file: "java-programming/JavaProgramming.pdf", cover: "java-programming/JavaProgramming.jpg"},
            { title: "Learn Java", file: "learn-java/LearnJava.pdf", cover: "learn-java/LearnJava.jpg"}
        ],
        Javascript: [
            { title: "Handwritten Javascript Notes", file: "handwritten-javascript-notes/HandwrittenJavascriptNotes.pdf", cover: "handwritten-javascript-notes/HandwrittenJavascriptNotes.jpg" },
            { title: "Javascript Array Method", file: "javascript-array-method/JavascriptArrayMethod.pdf", cover: "javascript-array-method/JavascriptArrayMethod.jpg" }
        ],
        Python: [
            { title: "Complete Python Handbook", file: "complete-python-handbook/CompletePythonHandbook.pdf", cover: "complete-python-handbook/CompletePythonHandbook.jpg" },
            { title: "Master Python", file: "master-python/MasterPython.pdf", cover: "master-python/MasterPython.jpg" },
            { title: "Python Basics", file: "python-basics/PythonBasics.pdf", cover: "python-basics/PythonBasics.jpg" },
            { title: "Python Guide", file: "python-guide/PythonGuide.pdf", cover: "python-guide/PythonGuide.jpg" },
        ],
        Self_Improvement: [
            { title: "How To Get Things Done", file: "how-to-get-things-done/HowToGetThingsDone.pdf", cover: "how-to-get-things-done/HowToGetThingsDone.jpg" },
            { title: "Ikigai English", file: "ikigai-english/IkigaiEnglish.pdf", cover: "ikigai-english/IkigaiEnglish.jpg" },
            { title: "Ikigai Hindi", file: "ikigai-hindi/IkigaiHindi.pdf", cover: "ikigai-hindi/IkigaiHindi.jpg" },
            { title: "The Mastery Manual - Robin Sharma", file: "the-mastery-manual-robin-sharma/TheMasteryManualByRobinSharma.pdf", cover: "the-mastery-manual-robin-sharma/TheMasteryManualByRobinSharma.jpg" },
            { title: "Win Your Inner Battles", file: "win-your-inner-battles/WinYourInnerBattles.pdf", cover: "win-your-inner-battles/WinYourInnerBattles.jpg" }
        ],
        UI_Technologies: [
            { title: "UI Technologies", file: "ui-technologies/UITechnologies.pdf", cover: "ui-technologies/UITechnologies.jpg" }
        ]
    };

    // Get the book list container
    const bookList = document.getElementById("book-list");
    
    // Display books for selected folder
    if (books[folderName]) {
        books[folderName].forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = `
                <img src="books/${folderName}/${book.cover}" alt="${book.title}">
                <p>${book.title}</p>
            `;
            bookDiv.onclick = () => window.open(`books/${folderName}/${book.file}`, '_blank');
            bookList.appendChild(bookDiv);
        });
    }
}

// Call function when books.html loads
if (window.location.pathname.includes("books.html")) {
    loadBooks();
}
