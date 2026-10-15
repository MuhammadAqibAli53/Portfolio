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
  }
};
