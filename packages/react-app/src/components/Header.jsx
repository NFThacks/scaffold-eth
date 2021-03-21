import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="AsciiNFT"
        subTitle="NFT Ascii Art"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
