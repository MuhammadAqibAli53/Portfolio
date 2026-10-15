// Evidence-aware case studies: do not attribute measured accuracy, deployment, or production readiness without proof.
export const CASE_STUDIES = {
  "student-rag-system": {
    problem: "Answer questions using information in uploaded study materials rather than relying entirely on a language model's general knowledge.",
    approach: ["Extract text from PDF and TXT documents.", "Split content into 1,000-character chunks with a 200-character overlap.", "Generate MiniLM embeddings and use FAISS to retrieve relevant chunks.", "Present a document-grounded question-answering workflow."],
    architecture: ["PDF / TXT documents", "Text extraction and chunking", "MiniLM embedding generation", "FAISS similarity retrieval", "Answer generation and UI"],
    notes: "A source-backed implementation prototype. No retrieval benchmark, response quality study, or production-scale evaluation has been verified.",
    contribution: "Repository implementation documents the retrieval pipeline and user-facing application.",
    decisions: ["Overlapping chunks retain context at text boundaries.", "A local vector index supports similarity-based retrieval."],
    challenges: ["Scanned PDFs may require extraction beyond text parsers.", "Retrieval relevance and grounding need measured evaluation."]
  },
  "ai-agent-development": {
    problem: "Explore how tool-using agents and multi-step research workflows can coordinate tasks such as finding and matching opportunities.",
    approach: ["Experiment with LangChain-style agents and external tools.", "Split complex questions into dedicated research or skill-matching stages.", "Compose results into user-facing output.", "Keep external provider credentials outside the application source."],
    architecture: ["User question", "Agent selection", "Tool calls / research stages", "Response composition", "User interface"],
    notes: "A collection of educational experiments, not a single validated autonomous production service. Some examples require credentials or missing modules.",
    contribution: "Demonstrates research, routing, and multi-agent orchestration patterns.",
    decisions: ["Stages separate research, skill analysis, and report composition."],
    challenges: ["Agent reliability depends on external tools and credentials.", "Some example imports require repository cleanup."]
  },
  "taskmaster": {
    problem: "Keep task management usable with local data even when network connectivity is unreliable.",
    approach: ["Provide task editing in Kanban and list views.", "Persist changes locally using IndexedDB.", "Use Web Workers and a queued-operation design for asynchronous processing.", "Demonstrate a synchronization concept without claiming completed server replay."],
    architecture: ["Task interface", "IndexedDB local store", "Queued changes", "Worker processing", "Simulated sync behavior"],
    notes: "The inspected queue processor deletes operations without server replay; genuine remote synchronization and conflict resolution are not established.",
    contribution: "Source-backed interactive task management prototype.",
    decisions: ["IndexedDB retains task state locally.", "A worker handles queued operations outside the main UI thread."],
    challenges: ["The current queue is not a verified server synchronization implementation.", "Conflict resolution and retry guarantees remain future work."]
  },
  "potato-leaf-classification": {
    problem: "Demonstrate how image classification can distinguish three common potato leaf categories.",
    approach: ["Load the stored TensorFlow/Keras model.", "Preprocess an uploaded leaf image for inference.", "Predict among Early Blight, Late Blight, and Healthy.", "Display prediction output through a Gradio interface."],
    architecture: ["Uploaded image", "Image preprocessing", "Saved Keras model", "Class prediction", "Gradio result"],
    notes: "This is an inference demonstration; clinical or agricultural field accuracy has not been independently verified.",
    contribution: "Repository contains model-loading, image preprocessing, and prediction interface code.",
    decisions: ["The saved model is loaded for inference rather than retrained on each request.", "An upload interface makes model exploration accessible."],
    challenges: ["Input-image quality can change predictions.", "A held-out field evaluation is not available."]
  },
  "tourist-guide-bot": {
    problem: "Make travel guidance accessible through multilingual questions and optional voice interactions.",
    approach: ["Build retrieval-assisted travel question answering.", "Include translation and speech-related interface components.", "Allow optional model-provider integrations.", "Expose a user-facing prototype interface."],
    architecture: ["User text / speech", "Translation or normalization", "Retrieval and provider clients", "Generated guidance", "Response UI"],
    notes: "Source inspected but not executed; information freshness, speech quality, and provider availability are not verified.",
    contribution: "Source-backed tourism assistant prototype.",
    decisions: ["Optional providers keep some capabilities configurable.", "Translation and retrieval are handled as separate concerns."],
    challenges: ["Travel information can become outdated.", "Speech and provider behavior need live integration tests."]
  },
  "parkinsons-classification-research": {
    problem: "Explore machine-learning approaches for Parkinson's disease classification using public research data.",
    approach: ["Review notebook-based experiments and model comparisons.", "Use Python-based machine learning tooling.", "Document experiment methodology and results in the linked notebook.", "Treat published notebook outcomes as experimental, not independently certified."],
    architecture: ["Research dataset", "Preprocessing", "Model experimentation", "Evaluation notebook", "Reported research findings"],
    notes: "The associated Kaggle notebook is public, but training execution and numerical results have not been independently reproduced. Not a diagnostic tool.",
    contribution: "Notebook-linked research work with methodological details requiring notebook review.",
    decisions: ["A notebook records experimental analysis and comparisons."],
    challenges: ["Reproducibility requires the dataset, training environment, and evaluation protocol.", "The research must not be presented as a clinical diagnostic service."]
  },
  "developer-portfolio": {
    problem:"Present software projects in a navigable, accessible personal website.",
    approach:["Structure the site with React components and React Router routes.","Maintain project metadata for featured and full catalog views.","Add searchable project cards and reusable case-study pages."],
    architecture:["React routes","Shared project catalog","Project filters and cards","Case study detail route","Portfolio pages"],
    decisions:["Keep the existing Create React App build during redesign to limit migration risk."],
    challenges:["Cross-page navigation and scrolling must be tested at multiple viewports.","Generated covers are concept visuals rather than product screenshots."],
    notes:"This case study describes the current portfolio source and redesign branch; production deployment of the branch is not yet confirmed.",
    contribution:"Repository-backed React interface and portfolio content."
  },
  "instant-prompt": {
    problem:"Explore a user interface for composing structured prompts from inputs and templates.",
    approach:["Use React and TypeScript UI components.","Provide fields and state for prompt customization.","Display assembled prompt output."],
    architecture:["User input","Template selection","Prompt composition","Preview and copy UI"],
    decisions:["Keep prompt generation visible to the user for manual review."],
    challenges:["Model calls shown in examples are simulated; a live AI backend has not been verified."],
    notes:"A UI prototype, not an independently verified hosted LLM application.",
    contribution:"Source-backed prompt-building frontend prototype."
  },
  "cs-department-portal": {
    problem:"Present department information and resources in a multipage website.",
    approach:["Organize department content into static pages.","Build site layout using HTML/CSS and available JavaScript.","Maintain navigable content and media assets."],
    architecture:["Page structure","Shared styling","Static assets","Browser presentation"],
    decisions:["A static multipage structure suits informational content."],
    challenges:["Accessibility, mobile layout, and factual content require page-level review."],
    notes:"Frontend source is available; a working institutional production deployment is not verified.",
    contribution:"Repository-backed department website prototype."
  },
  "ourdesk-server": {
    problem:"Support experimental remote desktop connectivity through a shared service.",
    approach:["Develop server-side .NET components.","Maintain common protocol and message interfaces.","Experiment with session connectivity and relay behavior."],
    architecture:["Remote desktop clients","Shared protocol","Server coordination","Session exchange"],
    decisions:["Separate common protocol contracts from platform-specific clients."],
    challenges:["Full end-to-end security and WAN performance need independent tests.","The related repository is private."],
    notes:"Private development prototype. The description is not a claim of a production-ready or independently audited remote-desktop solution.",
    contribution:"Private source-backed engineering work."
  },
  "neuronest-vr": {
    problem:"Explore supervised interactive VR activities for structured practice sessions.",
    approach:["Build Unity scenes for guided interactions.","Organize activity and session state.","Prototype supervised workflows for clinician-oriented use."],
    architecture:["Unity scene","Guided activity","User interaction","Session state","Review workflow"],
    decisions:["Keep the experience prototype-oriented and supervised."],
    challenges:["Clinical effectiveness has not been established.","Device compatibility and backend integration require separate verification."],
    notes:"Private FYP prototype; not a validated medical treatment or independently verified deployment.",
    contribution:"Documented Unity VR prototype work."
  }

};
