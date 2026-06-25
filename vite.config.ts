import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Cloudflare Pages-এর জন্য Nitro ফোর্স-অ্যাক্টিভেট করা হলো
  nitro: {
    preset: "cloudflare-pages"
  }
});