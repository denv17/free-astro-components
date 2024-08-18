# Free Astro Components

Welcome to the **Free Astro Components** repository! This project offers a collection of free, open-source components designed to enhance your Astro.js projects.

## Overview

Explore and utilize a variety of components that can help you build your web projects faster and more efficiently. Whether you’re a beginner or a seasoned developer, these components are crafted to fit a range of needs and use cases.

## Components

### Available Components

- **Icons**
  - A set of icons for various uses.
- **Buttons**
  - Stylish and functional buttons for your web applications.
- **Controls**
  - **Checkbox**: A checkbox component.
  - **Radio**: A radio button component.
  - **Switch**: A toggle switch component for user interactions.
- **Input**
  - A versatile input component for user text entry.
- **Textarea**
  - A textarea component for larger text input.
- **Select**
  - A select dropdown component.
- **Tab**
  - A tab component for organizing content into tabs.
  - **TabItem**: A subcomponent for individual tab items.
- **Modal**
  - A modal component for displaying content in a dialog.
  - **ModalHeader**: The header section of the modal, usually containing a title.
  - **ModalBody**: The main content area of the modal.
  - **ModalFooter**: The footer section of the modal, typically containing action buttons.
- **Accordion**
  - A component for creating collapsible content sections.
  - **AccordionItem**: A subcomponent for individual accordion items.

## Getting Started

1. **Visit the Website:**

   - [Explore the Collection](https://free-astro-components.vercel.app/)

2. **Installation:**

   - To use these components in your Astro.js project, you can install the package via npm:

     ```bash
     npm install free-astro-components
     ```

   - Follow the [installation instructions](https://free-astro-components.vercel.app/guide/installation) for more details on setting up and using the components in your project.

3. **Usage:**

   ### Example Usage

   Here’s how you can use some of the components in your Astro.js project:

   **Button Component:**

   ```jsx
   // src/pages/index.astro
   ---
   import { Button } from 'free-astro-components';
   ---

   <Button label="Click me" />
   ```

   **Select Component:**

   ```jsx
   // src/pages/index.astro
   ---
   import { Select } from 'free-astro-components';
   ---

   <Select placeholder="Select an option" options={[{label: 'option 1'}, {label: 'option 2'}]} />
   ```

   **Select Component:**

   ```jsx
   // src/pages/index.astro
    ---
    import { Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components';
    ---

    <Button label="Click me" data-modal-trigger="modal-id" />

    <Modal id="modal-id">
      <ModalHeader>
        <h2>Modal Title</h2>
      </ModalHeader>
      <ModalBody>
        <p>This is the modal body content.</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" label="Close" data-modal-close>
        <Button variant="primary" label="Confirm">
      </ModalFooter>
    </Modal>
   ```

   Detailed documentation and code examples for each component are available on the website to help you integrate and customize them.

## Credits

- **Icons Design:** The icons used in this collection are designed by [Ananthanath A](https://nathdesign.in/). Thank you for providing these fantastic resources! You can explore more at [Figma Community File](https://www.figma.com/community/file/1071678557813409125).

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please reach out to [dventura017@gmail.com] or open an issue on the [GitHub repository](https://github.com/denv17/free-astro-components.git).

## Thanks

If you find this project helpful and would like to support its development, consider buying me a coffee:

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >](https://buymeacoffee.com/denv)
