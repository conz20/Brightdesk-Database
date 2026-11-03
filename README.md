# Brightdesk Database

![Brightdesk Database repository banner](assets/social-preview.svg)

![Brightdesk Database product artwork](assets/brightdesk-product.svg)

Create local tables, define fields, manage records and export data.

Brightdesk is an independent desktop product. This repository is the dedicated desktop edition of **Brightdesk Database**. It opens directly into Database, with product switching disabled.

## What this product does

Create local tables, define fields, manage records and export structured data.

## Desktop installers

| Platform | Installer |
| --- | --- |
| Windows | Windows x64 installer (.exe) |
| macOS | Universal installer (.dmg), package (.pkg) and archive (.zip) |
| Linux | x64 AppImage and Debian package (.deb) |

Installers are built and verified by this repository's release workflow. Publishing a GitHub Release is a separate manual choice and is disabled by default.

The complete ten-product desktop suite remains available from [Brightdesk-suite](https://github.com/connormolloy12/Brightdesk-suite).

## Quality and security

Pull requests and pushes run the product and shared-engine test suite, verify the dependency lock and third-party licences, check release preflight and block high-severity dependency vulnerabilities. The same checks repeat daily. Dependabot checks npm packages and GitHub Actions weekly.

## Run from source

Use Node.js **24.22.2**.

    npm ci
    npm start

To build and verify an installer on its native operating system:

    npm run dist:product:mac
    npm run verify:product:mac

Use win on Windows or linux on Linux instead of mac.

## Project structure

- src/ — Brightdesk desktop renderer and product modules.
- assets/brightdesk-product.svg — original Database artwork.
- scripts/ — build and release verification tools.
- tests/ — automated product and shared-engine tests.

## Related project

[Brightdesk Office Suite](https://github.com/connormolloy12/Brightdesk-suite) brings all ten approved Brightdesk products together in one desktop installer.

## Identity and licence

Brightdesk is independent and is not affiliated with Microsoft. It uses original product names, code, interface design and artwork. See LICENSE, TERMS_AND_CONDITIONS.txt and THIRD_PARTY_NOTICES.md.

## Rust engineering foundation

This repository now has a reviewable Rust integration contract in [docs/RUST_INTEGRATION.md](docs/RUST_INTEGRATION.md). Rust is being introduced alongside the existing JavaScript/Electron architecture, not as a rewrite. The document defines the safe-core rules, workload benchmarking, JavaScript fallback, native bridge gates, Cargo checks and the adoption standard for future Brightdesk repositories.

This documentation does **not** claim that Rust is already connected to the application, included in installers or producing a performance improvement. Existing product behaviour, Node.js 24.22.2, the customer version 0.1.0, and manual owner approval for releases remain unchanged.
