import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageMeta from "@/components/PageMeta";
import ScrollToTop from "@/components/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const ArchitecturePage = lazy(() => import("./pages/ArchitecturePage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const StandardPage = lazy(() => import("./pages/StandardPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <PageMeta
              title="Maatof Taha · Performance Systems, Standards & Knowledge"
              description="Applied performance systems for Document Control, plus independent work in performance governance, document management and professional research."
            >
              <HomePage />
            </PageMeta>
          }
        />
        <Route
          path="/architecture"
          element={
            <PageMeta
              title="DCIOM Framework · Maatof Taha"
              description="The architecture connecting document management, reporting and decision into one governed performance system."
            >
              <ArchitecturePage />
            </PageMeta>
          }
        />
        <Route
          path="/standard"
          element={
            <PageMeta
              title="Document Management Standard · Maatof Taha"
              description="An independently authored, executable standard for controlled project information: Rules, Routes and Checks synchronized through traceability."
            >
              <StandardPage />
            </PageMeta>
          }
        />
        <Route
          path="/research"
          element={
            <PageMeta
              title="Documentation Body of Knowledge · Maatof Taha"
              description="An independently authored architectural map of the documentation profession, its disciplines, patterns and practical relationships."
            >
              <ResearchPage />
            </PageMeta>
          }
        />
        <Route
          path="/experience"
          element={
            <PageMeta
              title="Experience · Maatof Taha"
              description="Document Control experience, education, capabilities, contact details and downloadable resume."
            >
              <ExperiencePage />
            </PageMeta>
          }
        />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        <Route
          path="*"
          element={
            <PageMeta
              title="Page Not Found · Maatof Taha"
              description="The requested page could not be found."
            >
              <NotFound />
            </PageMeta>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
