export type ResearchItem = {
  title: string;
  institution: string;
  supervisor?: string;
  period: string;
  status: string;
  description: string;
  domain: string;
  methods: string[];
  pipeline: string[];
  repoUrl?: string;
};

export const research: ResearchItem[] = [
  {
    title: "Epilepsy Detection via Deep Learning on EEG Signals",
    institution: "North South University",
    supervisor: "Dr. MD. Sumon Hossain",
    period: "Mar 2025 — Present",
    status: "Preparing for journal submission",
    domain: "Clinical Deep Learning",
    methods: ["CNN", "LSTM", "EEG Preprocessing", "Signal Classification"],
    pipeline: ["Raw EEG", "Preprocess", "CNN / LSTM", "Seizure Detect"],
    description:
      "Preprocessing raw EEG signals, designing CNN/LSTM architectures, and evaluating models for automated seizure detection — targeting clinical-grade accuracy benchmarks.",
    repoUrl: "",
  },
  {
    title: "Multimodal RAG with Cross-Modal Hallucination Reduction",
    institution: "North South University",
    supervisor: "Dr. Nabil Bin Hannan",
    period: "Aug 2025 — Present",
    status: "Preparing for conference submission",
    domain: "Multimodal NLP",
    methods: ["RAG", "Cross-Modal Retrieval", "Hallucination Mitigation", "QA"],
    pipeline: ["Text · Image · Table", "Retrieve", "Ground", "Answer"],
    description:
      "Designed a multimodal RAG pipeline combining text, image, and table retrieval with hallucination-mitigation techniques to improve factual consistency across modalities.",
    repoUrl:
      "https://github.com/hossaintaufiq/Multimodal-RAG-for-Factual-Question-Answering-with-Cross-Modal-Hallocination-Reductinon",
  },
  {
    title: "Multi-Task ML for Band Gap & Formation Energy Prediction",
    institution: "North South University",
    period: "Completed",
    status: "Publication",
    domain: "Materials Informatics",
    methods: ["Multi-Task Learning", "Regression", "Classification", "Feature Engineering"],
    pipeline: ["Material Features", "Shared Encoder", "Task Heads", "Properties"],
    description:
      "Joint classification + regression model for accelerated materials property prediction — outperforming single-task baselines on key benchmark metrics.",
  },
  {
    title: "Validating Stock Market Price Predicting Algorithms",
    institution: "North South University",
    period: "Completed",
    status: "Publication",
    domain: "Forecasting Systems",
    methods: ["ARIMA", "LSTM", "Random Forest", "Sentiment Analysis"],
    pipeline: ["Market + News", "Features", "Model Suite", "Forecast"],
    description:
      "End-to-end Jupyter pipeline forecasting stock movement by merging Yahoo Finance historical data (BSE index) with Indian news headline sentiment via TextBlob polarity and subjectivity scores. Workflow covers data collection, EDA, stationarity testing, date-based feature merging, and model comparison — ARIMA baseline, LSTM multi-step forecasting, and regression models including Random Forest, XGBoost, LightGBM, AdaBoost, and Decision Tree. Random Forest achieved the lowest MAE on the test split among evaluated models.",
    repoUrl: "https://github.com/hossaintaufiq/StockPricePrediction",
  },
];
