import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import messages from "../messages/es";
import "@/app/global.css";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <NextIntlClientProvider locale="es" messages={messages}>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
