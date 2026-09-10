import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  Link,
  MemoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Breadcrumb from "@/components/project/Breadcrumb";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import DocumentReader from "@/components/project/DocumentReader";
import ScrollToTop from "@/components/ScrollToTop";
import {
  homeEvidence,
  standardAutomationEvidence,
  standardChecksEvidence,
} from "@/data/evidence";
import { projects } from "@/data/projects";

describe("portfolio evidence", () => {
  it("keeps the home preview in the intended narrative order", () => {
    expect(homeEvidence.map((image) => image.caption.split(".")[0].trim())).toEqual([
      "Document · Standard",
      "Dashboard · Power BI",
      "Document · Standard",
      "Dashboard · Power BI",
      "Document · Body of Knowledge",
    ]);
    expect(homeEvidence[0].alt).toContain("Page 17");
    expect(homeEvidence[3]).toBe(standardChecksEvidence);
  });

  it("keeps three distinct automation examples", () => {
    expect(standardAutomationEvidence).toHaveLength(3);
    const descriptions = standardAutomationEvidence.map((image) => image.alt);
    expect(
      descriptions.some((description) =>
        description.includes("Configuration Instrument"),
      ),
    ).toBe(true);
    expect(
      descriptions.some((description) => description.includes("Document Identity")),
    ).toBe(true);
    expect(
      descriptions.some((description) => description.includes("diagnostic table")),
    ).toBe(true);
  });
});

describe("document reader", () => {
  const pages = [
    { src: "/page-10.png", pageNumber: 10, alt: "Sample page 10" },
    { src: "/page-11.png", pageNumber: 11, alt: "Sample page 11" },
  ];

  it("opens a continuous scrolling sample and can collapse it again", async () => {
    render(<DocumentReader title="Standard · Part 1" pages={pages} />);

    const openButton = screen.getByRole("button", { name: "Read the 2-page sample" });
    expect(openButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(openButton);
    expect(
      screen.getByRole("region", { name: "Standard · Part 1, pages 10–11" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);

    fireEvent.click(screen.getByRole("button", { name: "Collapse" }));
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Read the 2-page sample" })).toHaveFocus(),
    );
  });

  it("uses singular page language for a one-page sample", () => {
    render(
      <DocumentReader
        title="DCIOM Framework Standard · Authority, Purpose & Scope"
        pages={[{ src: "/page-5.png", pageNumber: 5, alt: "Sample page 5" }]}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open document sample" }));

    expect(
      screen.getByRole("region", {
        name: "DCIOM Framework Standard · Authority, Purpose & Scope, page 5",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Page 5 · Scroll to read")).toBeInTheDocument();
  });
});

describe("project navigation", () => {
  it("links all six architecture components to their detail pages", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ArchitectureDiagram />
      </MemoryRouter>,
    );

    const destinations = [
      ["Open C1, Status and Visibility", "/project/c1-status"],
      ["Open C2, Flow and Performance", "/project/c2-performance"],
      ["Open C3, Findings and Advisory", "/project/c3-findings-advisory"],
      ["Open C4, Process and Action", "/project/c4-process-action"],
      ["Open C5, Strategy and Impact", "/project/c5-strategy-impact"],
      ["Open C6, Commitment and Tracking", "/project/c6-questionnaire-tracking"],
    ];

    destinations.forEach(([name, href]) => {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    });
  });

  it("links reporting projects back to the matching home section", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Breadcrumb project={projects.find((project) => project.group === "reporting")!} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "Reporting" })).toHaveAttribute(
      "href",
      "/#reporting",
    );
  });
});

function ScrollHistoryHarness() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <span data-testid="location">{location.pathname}</span>
      <Link to="/next">Next page</Link>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

describe("scroll restoration", () => {
  it("starts new pages at the top and restores the saved position on Back", async () => {
    let currentScrollY = 420;
    const scrollY = vi
      .spyOn(window, "scrollY", "get")
      .mockImplementation(() => currentScrollY);
    const scrollTo = vi
      .spyOn(window, "scrollTo")
      .mockImplementation((x, y) => {
        if (typeof y === "number") currentScrollY = y;
      });

    render(
      <MemoryRouter
        initialEntries={["/start"]}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ScrollHistoryHarness />
      </MemoryRouter>,
    );

    expect(scrollTo).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("link", { name: "Next page" }));
    await waitFor(() =>
      expect(screen.getByTestId("location")).toHaveTextContent("/next"),
    );
    expect(scrollTo).toHaveBeenCalledTimes(1);
    expect(scrollTo).toHaveBeenCalledWith(0, 0);

    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    await waitFor(() =>
      expect(screen.getByTestId("location")).toHaveTextContent("/start"),
    );
    await waitFor(() => expect(scrollTo).toHaveBeenLastCalledWith(0, 420));

    scrollY.mockRestore();
    scrollTo.mockRestore();
  });
});
