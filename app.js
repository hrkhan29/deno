import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as visitService from "./feedbacks.js"

const app = new Hono();

app.get("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    const counts = await visitService.getCount(id);
    return c.text("Feedback " + id + ": " + counts);
});

//app.post("/feedbacks/:id", async (c) => {
//    const id = c.req.param("id");
//    await visitService.incrementFeedbacks(id);
//});
app.post("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    const counts await visitService.incrementFeedbacks(id);
//    console.log(counts)
    return c.text("Feedback " + id + ": " + counts);
//    return c.text("200: OK");
});

export default app;