import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import {
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "../../../inngest/functions"; // <-- import your functions here

// Create an API that serves your functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});
