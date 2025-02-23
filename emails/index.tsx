import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";

export default function HelloEmail() {
  return (
    <Html lang="en" dir="ltr">
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff" }}></Button>
      <h1>HEHEHEH</h1>
    </Html>
  );
}
