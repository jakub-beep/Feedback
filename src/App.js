import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import AboutIconLink from "./components/AboutIconLink";
import CreatorIconLink from "./components/CreatorIconLink";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import Creator from "./pages/Creator";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/creator" element={<Creator />} />
          </Routes>
          <div className="icons">
            <AboutIconLink />
            <CreatorIconLink />
          </div>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
