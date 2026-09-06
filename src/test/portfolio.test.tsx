import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Breadcrumb from "@/components/project/Breadcrumb";
import DocumentReader from "@/components/project/DocumentReader";
import { homeEvidence } from "@/data/evidence";
import { projects } from "@/data/projects";

describe("portfolio evidence", () => {
  it("keeps the home preview in the intended narrative order", () => {
    expect(homeEvidence.map((image) => image.caption.split("—")[0].trim())).toEqual([
      "Document · Standard",
      "Dashboard · Power BI",
      "Document · Standard",
      "Dashboard · Power BI",
      "Document · Body of Knowledge",
    ]);
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
