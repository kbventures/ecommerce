import app from "./app";

const PORT: number | string | undefined = process.env.PORT || 4001

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));